import React, { useState } from "react";
import Form from './Form'
import SearchForm from "./SearchForm";


const App = () => {
  
  const [search,setSearch] = useState("");

  const handleChange = event => setSearch(event.target.value);

  return (
    <div className="App">
      <h1>Name Search</h1>
      <SearchForm search={search} onSearchChange={handleChange} />
      <Form search={search} />
    </div>
  )
};

export default App;