import Tarjeta from "./Tarjeta";

function App() {
  return (
    <div className="flashcards">
      <Tarjeta question={questions} />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
    active: true,
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
    active: false,
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
    active: false,
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
    active: false,
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
    active: false,
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled element",
    active: false,
  },
  {
    id: 5489,
    question: "What is the virtual DOM in React?",
    answer:
      "A lightweight copy of the real DOM used for performance optimization.",
    active: false,
  },
  {
    id: 6743,
    question: "What is the purpose of React Router?",
    answer: "To enable client-side routing in single-page applications.",
    active: false,
  },
  {
    id: 3671,
    question: "What is Redux in the context of React?",
    answer: "A state management library for managing application state.",
    active: false,
  },
  {
    id: 9876,
    question: "What is the purpose of the useEffect hook in React?",
    answer: "To perform side effects in functional components.",
    active: false,
  },
];

export default App;
