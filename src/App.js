import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AddPage from "./pages/AddPage";
import Edit from './pages/Edit'
import { useState } from "react";
function App() {

  const [search , setSearch] = useState("");
  return (
    <Router>
      <Navbar setSearch={setSearch} search={search} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    </Router>
  );
}

export default App;
