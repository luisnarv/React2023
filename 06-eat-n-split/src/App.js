import { useState } from "react";
import Addfriend from "./Components/Addfriend";
import FriendList from "./Components/FriendList";
import SplitBill from "./Components/SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddF, setShowAddF] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectF, setSelectF] = useState(null);

  function handleShowfriend() {
    setShowAddF((show) => !show);
  }

  function onAddfriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddF((show) => !show);
  }

  function onSelect(F) {
    setSelectF((selectF) => (selectF === F ? null : F));
    setShowAddF(false);
  }

  function onBill(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((f) =>
        f.id === selectF.id ? { ...f, balance: f.balance + value } : f
      )
    );
    setSelectF(null);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <FriendList
          Buton={Button}
          FriendL={friends}
          selected={selectF}
          select={onSelect}
        />

        {showAddF && <Addfriend onAddF={onAddfriend} Buton={Button} />}

        <Button onClick={handleShowfriend}>
          {!showAddF ? "Add friend" : "Close"}
        </Button>
      </div>

      {selectF && <SplitBill onBill={onBill} select={selectF} Buton={Button} />}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button" type="">
      {children}
    </button>
  );
}
export default App;
