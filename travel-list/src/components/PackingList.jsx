import Item from "./Item";

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((element, index) => {
          return <Item key={index} item={element} />;
        })}
      </ul>
    </div>
  );
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Clothes", quantity: 12, packed: true },
];
