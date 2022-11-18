import Card from "../UI/Card";
import UserItem from "./User";
import classes from "./UsersList.module.css";
const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
