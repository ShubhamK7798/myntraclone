import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { user } from "../redux/userslice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValue = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialValue);

  const handleForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitlogin = async (e) => {
    try {
      e.preventDefault();
      axios.defaults.headers.post["Content-Type"] = "application/json";

      const res = await axios.post("/api/auth/login", form);
      alert('login success')
      dispatch(user({ ...res.data._doc }));

      Cookies.set("jwt", res.data.token);
      setForm(initialValue);
      router.push("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="w-screen h-[80vh] mx-auto max-w-[1500px] flex items-center justify-center bg-pink-50 py-8">
      {/* Login Card */}
      <div className=" flex flex-col max-w-sm space-y-4 w-4/5 sm:w-3/5   md:w-2/5 h-full bg-white mx-auto">
        <div className="relative  h-1/3 ">
          <Image src="/login.webp" layout="fill" className="object-contain object-top" />
        </div>
        <form
          method="POST"
          onSubmit={submitlogin}
          className="flex flex-col px-4 space-y-8 items-center"
        >
          <h1 className="font-semibold ">Login </h1>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="formInput"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleForm}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="formInput"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleForm}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 p-2 w-2/3 text-white hover:scale-105 transition-all duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
