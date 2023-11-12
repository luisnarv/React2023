import { useState } from "react";

export default function ItemAccor({ num, title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`item ${open ? "open" : ""} `}
        onClick={(e) => setOpen((open) => !open)}
      >
        <span className="number">{num < 9 ? `0${num + 1} ` : num + 1}</span>
        <p className="title">{title}</p>
        <span className="icon">{open ? "🔼" : "🔽"}</span>
        {open ? <div className="content-box">{text}</div> : ""}
      </div>
    </>
  );
}
