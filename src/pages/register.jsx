import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { useCreateUserMutation } from "../redux/features/users/usersApi";
import Error from "../components/error";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/users/userSlice";
import addToLocalStorage from "./../utils/addToLocalStorage";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [
    createUser,
    { data: uploadData, isLoading, isError, error: uploadError },
  ] = useCreateUserMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const newUser = { id: uniqid(), name, email, password, role: "student" };

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password === confirmPassword) {
      createUser(newUser);
    } else {
      setError("Password does not match!");
    }
  };

  useEffect(() => {
    if (isError) {
      setError(uploadError.data);
    }
    if (uploadData?.accessToken) {
      dispatch(addUser(uploadData));
      addToLocalStorage(uploadData);
      navigate("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, uploadData]);

  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Create Your New Account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="login-input rounded-t-md"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="login-input "
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                required
                className="login-input rounded-b-md"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-sm">
            <Link
              to="/login"
              className="font-medium text-violet-600 hover:text-violet-500"
            >
              Have an account ? Login Now.
            </Link>
          </div>
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Create Account
            </button>
          </div>
        </form>
        {error && <Error title={error} />}
      </div>
    </section>
  );
};

export default Register;
