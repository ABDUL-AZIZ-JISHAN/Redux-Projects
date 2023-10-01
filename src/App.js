import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import EditJob from "./pages/editJob";
import PostJob from "./pages/postJob";
import SideBar from "./components/sideBar";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:editId" element={<EditJob />} />
          <Route path="/post" element={<PostJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
