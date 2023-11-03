import "../index.css";

export default function Footer() {
  const Hour = new Date().getHours();
  const openHour = 18;
  const closedHour = 23;
  const isOpen = Hour >= openHour && Hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <p>
          Estamos encantados de atenderle de {openHour}:00 - {closedHour}
          :00.{" "}
        </p>
      )}
      {/* We are currently open {new Date().toLocaleTimeString()} */}
    </footer>
  );
}

function Order({ closedHour }) {
  return (
    <div className="order">
      <p>
        Estamos abiertos hasta las {closedHour} :00. ven a visitarnos o haz tu
        pedido en línea
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
