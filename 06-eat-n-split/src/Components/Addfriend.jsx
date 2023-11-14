import { useState } from "react";

export default function Addfriend({ onAddF, Buton }) {
  const imgURL = "https://i.pravatar.cc/48";
  const [name, setName] = useState("");
  const [image, setimage] = useState(imgURL);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddF(newFriend);
    setName("");
    setimage(imgURL);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-add-friend">
      <label>🧑👩 Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>🖼 Image URL</label>
      <input
        value={image}
        onChange={(e) => setimage(e.target.value)}
        type="text"
      />

      <Buton> Add</Buton>
    </form>
  );
}
