import { useState } from "react";

function MultipleData() {
  const [user, SetUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    SetUsers({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="port" className="form" onChange={handleChange}>
        <h3>Multiple Inputes</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            name="name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            name="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MultipleData;
