import React from "react";

export default function Main({ children }) {
  console.log(children, " esto es children");
  return <main className="main">{children}</main>;
}
