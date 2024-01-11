import { createContext, useCallback, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  numQuestions: 0,
  //"loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  maxPoints: 0,
  time: 0,
};

const secPQuestion = 30;

function reducer(state, action) {
  switch (action.type) {
    case "num/question":
      return { ...state, numQuestions: action.payload };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "num/maxPoints":
      return { ...state, maxPoints: action.payload };

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
        numQuestions: state.numQuestions,
        maxPoints: state.maxPoints,
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

function Quizcontext({ children }) {
  const [
    {
      questions,
      numQuestions,
      status,
      index,
      answer,
      points,
      maxPoints,
      highScore,
      time,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function changeState(data) {
    dispatch({ type: data });
  }

  const fetchData = useCallback(function fetchData() {
    async function fetchQuiz() {
      try {
        const res = await fetch(`http://localhost:8001/questions`);
        const data = await res.json();
        const maxPoints = data.reduce((prev, cur) => prev + cur.points, 0);
        dispatch({ type: "dataReceived", payload: data });
        dispatch({ type: "num/question", payload: Number(data.length) });
        dispatch({ type: "num/maxPoints", payload: maxPoints });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuiz();
  }, []);

  function newAnswer(index) {
    dispatch({ type: "newAnswer", payload: index });
  }

  function nextQuestion() {
    dispatch({ type: "nextQuestion" });
  }

  function finish() {
    dispatch({ type: "finish" });
  }

  function clockTime() {
    dispatch({ type: "tick" });
  }
  function resetTime() {
    dispatch({ type: "reset" });
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        time,
        numQuestions,
        maxPoints,
        fetchData,
        changeState,
        newAnswer,
        nextQuestion,
        finish,
        clockTime,
        resetTime,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const Quizcontext = useContext(QuizContext);
  if (!QuizContext) throw new Error("there are error with QuizContext");
  return Quizcontext;
}

//   const numQuestions = questions.length;
//   const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

export { Quizcontext, useQuiz };
