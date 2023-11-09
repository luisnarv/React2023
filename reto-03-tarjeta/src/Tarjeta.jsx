import { useState } from "react";

//------------------------ Mi Código --------------------

export default function Tarjeta({ question }) {
  const data = question;
  const [answer, setAnswer] = useState(data);

  function handleSelect(id) {
    const arr = question;
    let index = arr.findIndex((item) => item.id === id.id);

    const active = { ...answer };
    active[index].active = !active[index].active;
    setAnswer(active);
  }
  return (
    <>
      {question.map((e, index) => (
        <span
          className={!answer[index] || answer[index].active ? "selected" : ""}
          key={e.id}
          onClick={() => handleSelect(e)}
        >
          <p>
            {!answer[index] || answer[index].active === false
              ? e.question
              : e.answer}
          </p>
        </span>
      ))}
    </>
  );
}

//------------------------Código con la idea de la clase --------------------

// export default function Tarjeta({ question }) {
//   const [answer, setAnswer] = useState(null);

//   function handleSelect(id) {
//     setAnswer(id !== answer ? id : null);
//   }
//   return (
//     <>
//       {question.map((e) => (
//         <span
//           className={answer === e.id ? "selected" : ""}
//           key={e.id}
//           onClick={() => handleSelect(e.id)}
//         >
//           <p>{e.id === answer ? e.answer : e.question}</p>
//         </span>
//       ))}
//     </>
//   );
// }
