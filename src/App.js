import React, { useState } from "react";
import User from "./page/User/User";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserDetail from "./page/UserDetail/UserDetail";
import Home from "./components/Home";
import styles from "./style/styles.module.css";

const App = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);

  return (
    <Router>
      <div className={styles.active}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
        </ul>
      </div>

      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/users" component={User} />
        <Route path="/user/:id" component={UserDetail} />
      </div>
    </Router>
  );
};

export default App;
