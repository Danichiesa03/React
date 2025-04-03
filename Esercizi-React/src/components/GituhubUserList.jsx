import { useState } from "react";
import { Link } from "react-router-dom";

export default function GithubUserList() {
  const [usernames, setUsernames] = useState([]);

  function handleAddUsername(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    setUsernames((usernames) => [...usernames, username]);
  }

  return (
    <div>
      <form onSubmit={handleAddUsername}>
        <input type="text" name="username" />
        <button>Aggiungi</button>
      </form>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={`/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
