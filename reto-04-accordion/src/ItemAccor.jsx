// import { useState } from "react";

export default function ItemAccor({ num, title, children, open, onOpen }) {
  // const [open, setOpen] = useState(false);
  const isOpen = open === num;
  return (
    <>
      <div
        className={`item ${isOpen ? "open" : ""} `}
        onClick={() => onOpen(!isOpen ? num : null)}
      >
        <span className="number">{num < 9 ? `0${num + 1} ` : num + 1}</span>
        <p className="title">{title}</p>
        <span className="icon">{isOpen ? "🔼" : "🔽"}</span>
        {isOpen ? <div className="content-box">{children}</div> : ""}
      </div>
    </>
  );
}
