import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { fetchData, postData } from "../../api";

const Register = () => {
  const [username, setUsername] = useState(""); // Username Input
  const [email, setEmail] = useState(""); // Email Input
  const [password, setPassword] = useState(""); // Password Input
  const [accept, setAccept] = useState(false); // Terms And Conditions Input
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("uid") !== undefined) {
      // check if the user is already loged in
      navigate("/main"); // go to main page
    }
  }, []);

  const register = async (e) => {
    e.preventDefault(); // To stop the page from refreshing

    // to check if the user filled everything
    if (username === "" || email === "" || password === "") {
      alert("please fill everything!");
      return;
    }

    // To check if user accepted the terms and conditions
    if (accept === true) {
      try {
        const result = await postData("/users", {
          username: username,
          email: email,
          password_hash: password,
        }); // create user
        alert("User successfully created!");
        const user_data = await fetchData(`/users/search?username=${username}`); // get the registered user's id
        Cookies.set("uid", user_data[0].user_id); // store user data
        navigate("/main");
      } catch (error) {
        if (error.response) {
          // Check if username already exists
          if (error.response.data.message.code === "ER_DUP_ENTRY") {
            alert("Username or email already exists!");
          }
        }
      }
    } else {
      alert("Please accept our terms and conditions");
    }
  };

  return (
    <>
      <section className="h-screen bg-background flex justify-center items-center">
        {/* card start*/}
        <div className="container mx-auto text-center">
          {/* header */}
          <p className="text-3xl tracking-widest font-bold">
            Welcome to RESONATE
          </p>
          <p className="mt-4">Time to drop your music taste</p>
          {/* form */}
          <form
            onSubmit={register}
            className="mt-10 flex flex-col items-center gap-6"
          >
            <input
              type="text"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="terms-&-conditions"
              className="w-[25%] text-start text-neutral-400"
            >
              <input
                type="checkbox"
                name="terms-&-conditions"
                className="accent-accent mr-4"
                onChange={(e) => setAccept(e.target.checked)}
              />
              Terms & conditions
            </label>
            <button
              type="submit"
              className="auth-btn px-4 py-3 w-[25%] bg-accent text-xl text-background rounded-lg"
            >
              Register
            </button>
            <div className="px-4 py-3 w-[25%] text-lg text-neutral-400">
              already a member?
              <Link to={"/login"} className="text-accent ml-4">
                login
              </Link>
            </div>
          </form>
        </div>
        {/* card end*/}
      </section>
    </>
  );
};

export default Register;
