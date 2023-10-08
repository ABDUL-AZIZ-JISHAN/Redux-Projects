import React, { useEffect, useState } from "react";
import { useGetUserMutation } from "../../redux/features/users/usersApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/users/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Error from '../../components/error'
import addToLocalStorage from "../../utils/addToLocalStorage";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [getUser, {data: userData, isSuccess, isError, error, isLoading} ] = useGetUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addUser(userData));
      addToLocalStorage(userData);
      navigate("/admin"); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, userData]);

  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Admin Account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="login-input rounded-t-md"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                className="login-input rounded-b-md"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link
                to="/register"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Create New Account
              </Link>
            </div>
          </div>
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {isError && <Error title={error.data}/>}
      </div>
    </section>
  );
};

export default AdminLogin;
