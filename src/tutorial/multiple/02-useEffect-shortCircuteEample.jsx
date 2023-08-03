// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ShortCircuitExample() {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "Jhon" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h1>Short Circuit Examples</h1>
      <h2>{text && "default value"}</h2>
      {!name || (
        <>
          <h3>Her name:{name}</h3>
        </>
      )}

      {user && <SomeComponent name={user.name} />}
      <button className="btn">{isEditing ? "edit" : "nothing"}</button>
      {user ? <p>Username: {user.name}</p> : <p>User is not there</p>}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const SomeComponent = ({ name }) => {
  return <h4>{name}</h4>;
};

export default ShortCircuitExample;
