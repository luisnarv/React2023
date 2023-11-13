export default function Output({ tips, pay }) {
  return <h3>{`You pay $ ${pay + tips} (${pay} + ${tips} tip ) `}</h3>;
}
