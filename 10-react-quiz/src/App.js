//import DateCounter from "./components/DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const initialState = {
  questions: [],

  //"loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  time: 0,
};

const secPQuestion = 30;
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        time: state.questions.length * secPQuestion,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      //console.log(state.questions, "nuevo question");
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points - question.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finish",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return {
        ...initialState,
        highScore: state.highScore,
        status: "ready",
        questions: state.questions,
      };
    case "tick":
      return {
        ...state,
        time: state.time - 1,
        status: state.time !== 0 ? state.status : "finish",
      };

    default:
      throw new Error("Action unkonwn");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highScore, time },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    async function getData() {
      try {
        const getData = await fetch(`http://localhost:8001/questions`);
        const data = await getData.json();
        dispatch({ type: "dataReceived", payload: data });
        console.log(data);
      } catch (error) {
        dispatch({ type: "dataFailed" });
        console.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              points={points}
              index={index}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions.at(index)}
              dispatch={dispatch}
              answer={answer}
            />
          </>
        )}
        <Footer>
          {status === "finish" && (
            <FinishScreen
              points={points}
              maxPoints={maxPoints}
              highScore={highScore}
              dispatch={dispatch}
            />
          )}

          <NextButton
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
            status={status}
          />
          {status === "active" && <Timer dispatch={dispatch} time={time} />}
        </Footer>
      </Main>
    </div>
  );
}

export default App;
