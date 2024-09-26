import { useEffect, useState } from "react";
import User from "./User";
import './style.css'

export default function GitHubFinder() {
  const [username, setUserName] = useState("Ahmed-Ayari");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubData()
  }

  async function fetchGithubData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }

    console.log(data);
  }

  useEffect(() => {
    fetchGithubData();
  }, []);

  if (loading) {
    return <span>Loading Please Wait</span>;
  }

  return (
    <div className="container">
      <div className="gf_container">
        <div className="input">
          <input
            type="text"
            name="search-by-username"
            placeholder="GitHub Profile"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/> : null
        }
      </div>
    </div>
  );
}
