import Friend from "./Friend";
export default function FriendList({ selected, select, Buton, FriendL }) {
  return (
    <ul>
      {FriendL.map((F) => (
        <Friend
          selected={selected}
          select={select}
          Buton={Buton}
          key={F.id}
          friend={F}
        />
      ))}
    </ul>
  );
}
