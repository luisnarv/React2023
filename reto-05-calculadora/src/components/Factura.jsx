export default function Factura({ pay, Pay }) {
  return (
    <div style={{ display: "flex" }}>
      <label>how much was the bill?</label>
      <input
        value={pay}
        onChange={(e) => Pay(Number(e.target.value))}
        type="number"
      />
    </div>
  );
}
