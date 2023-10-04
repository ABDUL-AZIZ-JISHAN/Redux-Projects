import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";

import { useState } from "react";
import AddForm from "./components/addForm";
import EditForm from "./components/editForm";
function App() {

  const [search , setSearch] = useState("");
  return (
    <Router>
      <Navbar setSearch={setSearch} search={search} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/add" element={<AddForm  />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
    </Router>
  );
}

export default App;
