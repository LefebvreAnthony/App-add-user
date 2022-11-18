import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [
  { id: 1, username: "Antho", age: "28" },
  { id: 2, username: "Cha", age: "30" },
];

function App() {
  const [realList, setRealList] = useState(DUMMY_USERS);

  const testHandler = (newUser) => {
    setRealList((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={testHandler} />
      <UsersList users={realList} />
    </div>
  );
}

export default App;
