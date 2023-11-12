import { useState } from "react";

import ItemAccor from "./ItemAccor";

export default function Accordion({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((e, i) => (
        <ItemAccor
          key={i + 1}
          num={i}
          title={e.title}
          // text={e.text}
          open={open}
          onOpen={setOpen}
        >
          {e.text}
        </ItemAccor>
      ))}
    </div>
  );
}
