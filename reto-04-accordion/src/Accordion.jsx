import ItemAccor from "./ItemAccor";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((e, i) => (
        <ItemAccor key={i + 1} num={i} title={e.title} text={e.text} />
      ))}
    </div>
  );
}
