import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import React from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export const MyContext = React.createContext();

function App() {
  const [item, setItem] = useState([]);

  function onDeleteItems(id) {
    setItem((item) => item.filter((e) => e.id !== id));
  }

  function handleItemData(data) {
    setItem((e) => [...e, data]);
    console.log(item);
  }

  function onUpdate(id) {
    console.log(item);
    setItem((item) =>
      item.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }

  return (
    <div className="App">
      <Logo />
      <MyContext.Provider value={handleItemData}>
        <Form />
      </MyContext.Provider>
      <PackingList update={onUpdate} ondelete={onDeleteItems} items={item} />
      <Stats items={item} />
    </div>
  );
}

// function Form({ onAddItems }) {
//   const [item, setItem] = useState({ description: "", quantity: 1 });

//   function handleSubmit(e) {
//     e.preventDefault();
//     const { description, quantity } = item;
//     if (!item.description) return;
//     const newItem = { description, quantity, packend: false, id: Date.now() };
//     onAddItems(newItem);
//     setItem({ description: "", quantity: "" });
//   }

//   return (
//     <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
//       <h3>🤔 What do you need for your trip ?</h3>
//       <select
//         name="quantity"
//         value={item.quantity}
//         onChange={(e) =>
//           setItem({ ...item, [e.target.name]: Number(e.target.value) })
//         }
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option key={num} value={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         name="description"
//         value={item.description}
//         onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })}
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

export default App;
