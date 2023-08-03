import { useState } from "react";

function ControledForms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   const handleChange = (e) => {
  //     setName(e.target.value);
  //     setEmail(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h4>Contorled Form</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            // onChange={handleChange}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
}

export default ControledForms;
