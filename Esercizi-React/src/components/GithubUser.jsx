import { useState, useEffect } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const datas = await response.json();
        setData(datas);
      } catch (error) {
        console.error("errore");
      }
    };
    fetchUserData();
  }, [username]);

  return (
    <div>
      {data && (
        <>
          <h1>{data.name}</h1>
          <p>{data.login}</p>
          <img src={data.avatar_url} />
        </>
      )}
    </div>
  );
}
