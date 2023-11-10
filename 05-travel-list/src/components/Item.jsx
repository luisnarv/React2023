export default function Item({ onUpdate, item, ondele }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdate(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
        <button onClick={() => ondele(item.id)}>❌</button>
      </span>
    </li>
  );
}
