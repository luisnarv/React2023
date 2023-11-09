export default function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
        <button>❌</button>
      </span>
    </li>
  );
}
