import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <form className="mt-8 flex flex-col items-center gap-6">
            <input
              type="email"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Email"
            />
            <input
              type="password"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded-lg"
              placeholder="Password"
            />
            <button className="w-[25%]">
              <p className="text-start text-neutral-400 active:text-accent">
                Forget Password ?
              </p>
            </button>
            <button className="px-4 py-3 w-[25%] bg-accent text-xl text-background rounded-lg">
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
