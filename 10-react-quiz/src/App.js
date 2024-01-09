//import DateCounter from "./components/DateCounter";

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
import { useQuiz } from "./Context/QuizContext";
import { useEffect } from "react";

function App() {
  const { status, fetchData } = useQuiz();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
          </>
        )}{" "}
        *
        <Footer>
          {status === "finish" && <FinishScreen />}

          <NextButton />
          {status === "active" && <Timer />}
        </Footer>
      </Main>
    </div>
  );
}

export default App;
