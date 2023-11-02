import "../index.css";

export default function Footer() {
  const Hour = new Date().getHours();
  const openHour = 18;
  const closedHour = 23;
  const isOpen = Hour >= openHour && Hour <= closedHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {" "}
      We are currently open {new Date().toLocaleTimeString()}
    </footer>
  );
}
