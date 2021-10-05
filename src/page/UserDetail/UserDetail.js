import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

function UserDetail() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log({ error }))
      .finally(() => setLoading(false));
  }, [id]);

  return Object.keys(user)
    .slice(0, 1)
    .map((key) => {
      return (
        <div className={styles.container}>
          <h1>User Details</h1>
          <div key={key} className={styles.inner_container}>
            {loading && <div>Loading..</div>}
            <h3>Address : {`${user.address.street}, ${user.address.city}`}</h3>
            <h3>Website : {user.website}</h3>
            <h3>Phone : {user.phone}</h3>
            <h3>Company : {user.company.name}</h3>

            <Link to={`/user/${parseInt(id) + 1}`} className={styles.nextUser}>
              Next User
            </Link>
          </div>
        </div>
      );
    });
}

export default UserDetail;
