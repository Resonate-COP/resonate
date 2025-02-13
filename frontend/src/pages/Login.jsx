import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../api";
import Cookies from "js-cookie";

const Login = () => {
  const [loading, setLoading] = useState(false); // Loading control
  const [username, setUsername] = useState(""); // Username Input
  const [password, setPassword] = useState(""); // Password Input
  const navigate = useNavigate(); // navigator

  useEffect(() => {
    if (Cookies.get("uid") !== undefined) {
      // check if the user is already loged in
      navigate("/main"); // go to main page
    }
  }, []);

  const login = async (e) => {
    e.preventDefault(); // To stop the page from refreshing after the submit

    // to check if the user filled everything
    if (username === "" || password === "") {
      alert("please fill everything!");
      return;
    }

    setLoading(true);
    try {
      const [result] = await fetchData(`/users/search?username=${username}`); // fetch user data by username

      // check if user exists
      if (result === undefined) {
        alert("Username does not exists!");
        return;
      }

      // Check password
      if (password === result.password_hash) {
        Cookies.set("uid", result.user_id); // store user id
        navigate("/main"); // go to main page
      } else {
        alert("Username or Password is incorrect!");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="h-screen bg-background flex justify-center items-center">
        {/* card start*/}
        <div className="container mx-auto text-center">
          {/* header */}
          <p className="text-3xl tracking-widest font-bold">
            LOGIN YOUR ACCOUNT
          </p>
          <p className="mt-6 font-bold">RESONATE</p>
          {/* form */}
          <form
            onSubmit={login}
            className="mt-8 flex flex-col items-center gap-6"
          >
            <input
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-[25%]">
              <p className="text-start text-neutral-400 active:text-accent">
                Forget Password ?
              </p>
            </button>
            <button
              type="submit"
              className="auth-btn px-4 py-3 w-[25%] bg-accent text-xl text-background rounded-lg"
            >
              Login
            </button>
            <div className="px-4 py-3 w-[25%] text-lg text-neutral-400">
              not a member?
              <Link to={"/register"} className="text-accent ml-4">
                create an account
              </Link>
            </div>
          </form>
        </div>
        {/* card end*/}
      </section>
    </>
  );
};

export default Login;
