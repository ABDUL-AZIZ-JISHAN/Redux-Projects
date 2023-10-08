import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaderBoard from "./pages/leaderBoard";
import Quiz from "./pages/quiz";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/admin/dashboard";
import Videos from "./pages/admin/videos";
import Quizzes from "./pages/admin/quizzes";
import AssignmentMark from "./pages/admin/assignment-mark";
import Assignment from "./pages/admin/assignment";
import Direction from "./pages/direction";
import PrivateRoutes from "./components/privateRoutes";
import IsUserExist from "./utils/isUserExist";
import PublicRoutes from "./components/publicRoutes";
import AdminPrivate from "./components/adminPrivate";
import AddVideoForm from "./pages/admin/addVideoForm";
import EditVideoForm from "./pages/admin/editVideoForm";
import EditAssignmentForm from "./pages/admin/editAssignmentForm";
import AddAssignmentForm from "./pages/admin/addAssignmentForm";
import AddQuizForm from "./pages/admin/addQuizForm";
import EditQuizForm from "./pages/admin/editQuizForm";


function App() {
  IsUserExist();
  
  return (
    <Router>
        <Routes>
          <Route path="/direction" element={<Direction/>} />
          {/* basic routes */}
          <Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>} />
          <Route path="/videos/:id" element={<PrivateRoutes><Home/></PrivateRoutes>} />
          <Route path="/quiz/:id" element={<PrivateRoutes><Quiz/></PrivateRoutes>} />
          <Route path="/leaderboard" element={<PrivateRoutes><LeaderBoard/></PrivateRoutes>} />
          <Route path="/login" element={<PublicRoutes ><Login/></PublicRoutes>} />
          <Route path="/register" element={<PublicRoutes ><Register/></PublicRoutes>} />
          <Route path="/admin" element={<AdminPrivate><Dashboard/></AdminPrivate>} />
          {/* admin videos routes */}
          <Route path="/admin/videos" element={<AdminPrivate><Videos/></AdminPrivate>} />
          <Route path="/admin/videos/add" element={<AdminPrivate><AddVideoForm/></AdminPrivate>} />
          <Route path="/admin/videos/edit/:id" element={<AdminPrivate><EditVideoForm/></AdminPrivate>} />
           {/*admin  assignment routes */}
          <Route path="/admin/assignment" element={<AdminPrivate><Assignment/></AdminPrivate>} />
          <Route path="/admin/assignment/add" element={<AdminPrivate><AddAssignmentForm/></AdminPrivate>} />
          <Route path="/admin/assignment/edit/:id" element={<AdminPrivate><EditAssignmentForm/></AdminPrivate>} />
           {/*admin  quizzes routes */}
          <Route path="/admin/quizzes" element={<AdminPrivate><Quizzes/></AdminPrivate>} />
          <Route path="/admin/quizzes/add" element={<AdminPrivate><AddQuizForm/></AdminPrivate>} />
          <Route path="/admin/quizzes/edit/:id" element={<AdminPrivate><EditQuizForm/></AdminPrivate>} />
          {/*admin assignment mark routes */}
          <Route path="/admin/assignment-mark" element={<AdminPrivate><AssignmentMark/></AdminPrivate>} />
        </Routes>
    </Router>
  );
}

export default App;
