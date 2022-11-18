import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <Card>
      <li>
        <p>Username : {props.username}</p>
        <p>Age : {props.age}</p>
      </li>
    </Card>
  );
};

export default UserItem;
