import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="h-screen bg-background flex justify-center items-center">
        {/* card start*/}
        <div className="container mx-auto text-center">
          {/* header */}
          <p className="text-3xl tracking-widest font-bold">
            [ Welcome to RESONATE ]
          </p>
          <p className="mt-6">Time to drop your music taste</p>
          {/* form */}
          <form className="mt-8 flex flex-col items-center gap-6">
            <input
              type="text"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded"
              placeholder="Name"
            />
            <input
              type="email"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded"
              placeholder="Email"
            />
            <input
              type="password"
              className="px-4 py-3 w-[25%] bg-primary text-xl rounded"
              placeholder="Password"
            />
            <label
              htmlFor="terms-&-conditions"
              className="w-[25%] text-start text-neutral-400"
            >
              <input
                type="checkbox"
                name="terms-&-conditions"
                id=""
                className="accent-accent mr-4"
              />
              Terms & conditions
            </label>
            <button className="px-4 py-3 w-[25%] bg-accent text-xl text-background rounded">
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
