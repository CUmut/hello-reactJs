import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Form(props) {
    
   const[users,setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setPosts(response.data))
            .catch((error) => console.log({ error }));

    },[]);

    return users
    .filter((user) =>
    user.name.toLowerCase().includes(props.search.toLowerCase())
    )
    .map((user) => {
      return (
        <div key={user.id} className="user">
          <div>
            <h1>{user.name}</h1>
            <h4> Username : {user.username}</h4>
            <h4> Email : {user.email}</h4>
            <h4> Adress : {`${user.address.street}, ${user.address.city}`}</h4>

          </div>
        </div>
      );
    });
}



export default Form;