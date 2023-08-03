import { useState } from "react";
import { data } from "../../data";

function UserDeleteChallange() {
  const [name, setName] = useState();
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    // adding new user
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    setUsers([...users, newUser]); // Correctly updating the users state
    setName("");
  };

  const removeUser = (id) => {
    const updateUser = users.filter((person) => person.id !== id);
    setUsers(updateUser);
  };
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h4>Add & Delete </h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UserDeleteChallange;
