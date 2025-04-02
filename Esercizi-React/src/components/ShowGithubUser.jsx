import { useState } from "react";
import GithubUser from "./GithubUser";

export default function ShowGithubUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser((prevUser) => [...prevUser, username]);
    setUsername("");
  };
  function handleReset() {
    setUser([]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Nome Utente"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="submit">Cerca</button>
      <button onClick={handleReset}>Reset</button>
      {user.map((users, index) => (
        <GithubUser key={index} username={users} />
      ))}
    </form>
  );
}
