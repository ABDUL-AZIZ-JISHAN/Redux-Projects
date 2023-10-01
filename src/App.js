import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import Navbar from "./component/navbar";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<Post />} /> 
            </Routes>
        </Router>
    );
}

export default App;
