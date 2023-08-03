import { useState } from "react";
import { data } from "../../../data.jsx";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const allClear = () => {
    setPeople([]);
  };
  return (
    <>
      <h1> UseState Array</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => clearItem(id)} className="btn">
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        type="button"
        style={{ marginTop: "2rem" }}
        onClick={allClear}
      >
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
