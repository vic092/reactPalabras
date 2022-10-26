import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NameElement from "./NameElement";
import Loader from './Loader'

export default function NameList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fakerapi.it/api/v1/users?_quantity=10000"
      );
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const eventListen = (e) => {
    setSearch(e.target.value);
  };

  const newUsers = users.filter((user) =>
    `${user.firstname.toLowerCase()}${user.lastname.toLowerCase()}`.includes(
      search.toLowerCase()
    )
  );

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="text-white p-2">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search a word"
            className="bg-dark text-white text-center p-2"
            onKeyUp={eventListen}
          />
          <div className="mt-4">
            <NameElement users={newUsers}></NameElement>
          </div>
        </div>
      )}
    </div>
  );
}
