import { useState } from "react";

function Logout() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "User is logged in" });
    return;
  };

  const logout = () => {
    setUser(null);
    return;
  };

  return (
    <>
      <h4>Login || Logout</h4>
      {user ? (
        <div>
          <h4>User: {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default Logout;
