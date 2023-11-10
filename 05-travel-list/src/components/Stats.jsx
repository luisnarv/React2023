export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list 🧳 </em>;
      </footer>
    );
  }

  const number = items.length;
  const packed = items.filter((e) => e.packed).length;
  const porcent = Math.round((packed / number) * 100);

  return (
    <footer className="stats">
      <em>
        {porcent === 100
          ? "You got everything! Ready to go ✈ "
          : `You have ${number} items on your List, and you already packed ${packed} (${porcent}%) `}
      </em>
      ;
    </footer>
  );
}
