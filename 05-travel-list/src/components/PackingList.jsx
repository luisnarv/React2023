import { useState } from "react";
import Item from "./Item";

export default function PackingList({ clear, update, items, ondelete }) {
  const [sort, setSort] = useState("input");
  let Items;

  if (sort === "input") Items = items;
  if (sort === "description")
    Items = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed") {
    let i = items.slice();
    console.log(i, "---------------------->");
    Items = i.sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {Items.map((element, index) => {
          return (
            <Item
              onUpdate={update}
              ondele={ondelete}
              key={element.id}
              item={element}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clear}>Clear list</button>
      </div>
    </div>
  );
}
