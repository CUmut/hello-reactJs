import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm";

function User(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log({ error }))
      .finally(() => setLoading(false));
  }, []);

  return users.map((user) => {
    return (
      <div key={user.id} className={styles.container}>
        {loading && <div>Loading..</div>}
        <div className={styles.inner_container}>
          <h2>{user.name}</h2>
          <h4> Email : {user.email}</h4>
        </div>
        <div className={styles.detail}>
          <Link to={`/user/${user.id}`} className={styles.detail}>
            {" "}
            <h5> Detail</h5>
          </Link>
        </div>
      </div>
    );
  });
}

export default User;
