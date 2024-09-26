import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchListUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filtredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filtredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  useEffect(() => {
    fetchListUsers();
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Users"
        value={searchParam}
        onChange={handleChange}
      />
      {
        showDropdown && <Suggestions data={filteredUsers}/>
      }
    </div>
  );
}
