import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "playimg game",
  });

  const personChange = () => {
    setPerson({ name: "Rana", age: 22, hobby: "code" });
  };
  return (
    <>
      <h1>UseState Object updation</h1>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Hobby:{person.hobby}</h3>
      <button className="btn" onClick={personChange}>
        {" "}
        Show Another
      </button>
    </>
  );
};

export default UseStateObject;
