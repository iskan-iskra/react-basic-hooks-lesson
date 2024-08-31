import { useState } from "react";

export default function AppUser() {
  const [user, setUser] = useState({
    name: "Iskander",
    age: 27,
  });

  const changeUserHandler = () => {
    setUser((val) => ({ ...val, name: "John" }));
    setUser((val) => ({ ...val, age: 20 }));
  };

  return (
    <>
      <div>
        <span>name: {user.name}</span> | <span>age: {user.age}</span>
      </div>
      <div>
        <button onClick={changeUserHandler}>change user</button>
      </div>
    </>
  );
}
