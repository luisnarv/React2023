import { useState } from "react";

export default function Form() {
  const [item, setItem] = useState({ description: "", quantity: 1 });
  console.log(item);

  function handleSubmit(e) {
    e.preventDefault();
    const { description, quantity } = item;

    if (!item.description) return;

    const newItem = { description, quantity, packend: false, id: Date.now() };
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>🤔 what do you need for your trip ?</h3>
      <select
        name="quantity"
        value={item.quantity}
        onChange={(e) =>
          setItem({ ...item, [e.target.name]: Number(e.target.value) })
        }
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        value={item.description}
        onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })}
      />
      <button>ADD</button>
    </form>
  );
}
