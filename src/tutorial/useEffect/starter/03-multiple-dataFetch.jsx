import { useEffect, useState } from "react";

const url = "https://api.github.com/repositories/1300192/issues?page=1";

function UseEffectMultpleFetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json(); // Await the response.json() call
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>UseEffect Fetch Data users</h1>
      <ul className="users">
        {users.map((user) => {
          const {
            user: { login },
            id,
            user: { avatar_url },
            user: { html_url },
          } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffectMultpleFetchData;
