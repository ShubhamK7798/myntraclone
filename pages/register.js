import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { user } from "../redux/userslice";
import IsEmailValid from "../components/Validator";
import Validator from "../components/Validator";

const Login = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);

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
  const submitlogin = async (e) => {
    try {
      e.preventDefault();
      const validation = Validator(form);
      if (validation) return alert(validation);
      axios.defaults.headers.post["Content-Type"] = "application/json";

      const res = await axios.post("/api/auth/register", form);

      dispatch(user({ ...res.data._doc }));

      Cookies.set("jwt", res.data.token);

      setForm(initialValue);
      router.push("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-screen h-[80vh] flex max-w-[1500px] mx-auto items-center justify-center bg-pink-50 py-8">
      <div className=" flex flex-col max-w-sm space-y-4 w-4/5 sm:w-3/5 px-4   md:w-2/5 h-full bg-white">
        <form
          method="POST"
          onSubmit={submitlogin}
          className="flex flex-col px-4  space-y-6 items-center"
        >
          <h1 className="font-semibold mt-8">Signup</h1>
          <div>
            <label htmlFor="name">UserName</label>
            <br />
            <input
              type="text"
              name="username"
              id="name"
              className="formInput"
              placeholder="Enter Name"
              value={form.username}
              onChange={handleForm}
              required={true}
            />
          </div>
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
              // onBlur={handleValidation}
              required={true}
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
              required={true}
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              id="cpassword"
              className="formInput"
              placeholder="Enter Password"
              value={form.confirmpassword}
              onChange={handleForm}
              required={true}
            />
          </div>
          <button
            type="submit"
            // disabled={isValid}
            className="bg-red-500 disabled:cursor-not-allowed disabled:bg-gray-200 p-2 w-1/3 text-white hover:scale-105 transition-all duration-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
