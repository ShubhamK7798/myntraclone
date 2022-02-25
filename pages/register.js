import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { user } from "../redux/userslice";

const Login = () => {
  const router = useRouter();

  const dispatch = useDispatch()

  const initialValue = {
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
  };
  const [form, setForm] = useState(initialValue);

  const handleForm = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitlogin = async () => {
    axios.defaults.headers.post["Content-Type"] = "application/json";

    const res = await axios.post("http://localhost:3000/api/auth/register", form);


    dispatch(user({...res.data._doc}))
    
    Cookies.set("jwt", res.data.token);

    setForm(initialValue);
    router.push("/");
  };
  return (
    <div className="w-screen h-[80vh] flex items-center justify-center bg-pink-50 py-8">
      <div className=" flex flex-col space-y-4 w-3/5 lg:w-3/12 h-full bg-white ">
        <div className="flex flex-col px-4 space-y-6 items-center">
          <h1 className="font-semibold mt-8">Signup</h1>
          <div>
            <label htmlFor="name">UserName</label>
            <br />
            <input
              type="text"
              name="username"
              id="name"
              className="border-2 p-2 mt-2"
              placeholder="Enter Name"
              value={form.username}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 p-2 mt-2"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleForm}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 p-2 mt-2"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleForm}
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              id="cpassword"
              className="border-2 p-2 mt-2"
              placeholder="Enter Password"
              value={form.confirmpassword}
              onChange={handleForm}
            />
          </div>
          <button
            onClick={submitlogin}
            className="bg-red-500 p-2 w-1/3 text-white hover:scale-105 transition-all duration-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
