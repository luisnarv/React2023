import { useState } from "react";

export default function SplitBill({ onBill, select, Buton }) {
  const [bill, setBill] = useState("");
  const [userP, setuserP] = useState("");
  const derivFriendP = bill ? bill - userP : "";
  const [whoPay, setWhoPay] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userP) return;

    onBill(whoPay === "user" ? derivFriendP : -userP);
  }
  return (
    <form
      action=""
      className="form-split-bill"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2>Split a bill with {select.name}</h2>
      <label>🧾 Bill value</label>
      <input
        value={bill}
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💵 Your expense</label>
      <input
        value={userP}
        onChange={(e) =>
          setuserP(
            Number(e.target.value) > bill ? userP : Number(e.target.value)
          )
        }
        type="text"
      />

      <label>💵 {select.name}'s expense</label>
      <input value={derivFriendP} type="text" disabled />

      <label>💳 Who is paying the bill</label>
      <select
        name=""
        id=""
        value={whoPay}
        onChange={(e) => setWhoPay(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend"> {select.name} </option>
      </select>
      <Buton>Split bill</Buton>
    </form>
  );
}
