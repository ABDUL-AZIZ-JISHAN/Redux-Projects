import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Direction = () => {
  const { user } = useSelector(state => state.user);

    return (
<section className="py-6 bg-primary">
  <div className="mx-auto max-w-7xl px-5 lg:px-0 ">
    <h1 className="text-4xl color-white font-bold my-4 text-center">Here's the direction page.You can go to other pages from here.</h1>
    <h1 className="text-red-300 mt-8 font-bold text-xl">N:B- You need to start the server locally from the server folder of this repo.</h1>
    <div className="grid grid-cols-2 gap-5 mt-8">
      <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
        <h1 className="text-slate-100 font-bold text-xl">Student Portal Routes</h1>
        <div className="space-y-2 mt-4 flex flex-col">
          <Link className="link" to="/home">Course Player</Link>
          <Link className="link" to="/leaderboard">Leaderboard</Link>
          <Link className="link" to="/quiz">Quiz</Link>
{!user?.password && <Link className="link" to="/login">StudentLogin</Link>}
{!user?.password &&       <Link className="link" to="/register">StudentReistration</Link> }
        </div>
      </div>
      <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
        <h1 className="text-slate-100 font-bold text-xl">Admin Portal Routes</h1>
        <div className="space-y-2 mt-4 flex flex-col">
          <Link className="link" to="/admin/dashboard">Dashboard</Link>
          <Link className="link" to="/admin/login">AdminLogin</Link>
          <Link className="link" to="/admin/assignment">Assignment</Link>
          <Link className="link" to="/admin/assignment-mark">AssignmentMark</Link>
          <Link className="link" to="/admin/quizzes">Quizzes</Link>
          <Link className="link" to="/admin/videos">Videos</Link>
        </div>
      </div>
      <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
        <h1 className="text-slate-100 font-bold text-xl">Admin Email</h1>
        <div className="space-y-2 mt-4 flex flex-col">
          <p className="color-white">Email : admin@gmail.com</p>
          <p className="color-white">Password : admin@1234</p>
        </div>
      </div>
      <div className="bg-slate-900 p-4 border border-slate-700/80 rounded-md">
        <h1 className="text-slate-100 font-bold text-xl">Student Email Format</h1>
        <div className="space-y-2 mt-4 flex flex-col">
          <p className="color-white">Email : student@gmail.com</p>
          <p className="color-white">Password : student@1234</p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default Direction;
