import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  return (
    <ul>
      {items.map((user) => (
        <UserItem key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
