import Item from "./Item";

export default function PackingList({ update, items, ondelete }) {
  function Ondelete(id) {
    ondelete(id);
  }
  return (
    <div className="list">
      <ul>
        {items.map((element, index) => {
          return (
            <Item
              onUpdate={update}
              ondele={Ondelete}
              key={index}
              item={element}
            />
          );
        })}
      </ul>
    </div>
  );
}
