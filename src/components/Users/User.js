import Card from "../UI/Card";

const UserItem = ({ username, age }) => {
  return (
    <Card>
      <li>
        <p>
          {username} ({age} years old)
        </p>
      </li>
    </Card>
  );
};

export default UserItem;
