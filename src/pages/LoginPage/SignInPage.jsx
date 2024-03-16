import logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = " confirm password is required.";
    }
    if (!formData.email) {
      validationErrors.email = "email is required.";
    }

    if (!formData.password || formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
    }
  };

  return (
    <div className=" items-center justify-center bg-backGround flex w-full h-screen">
      <div className=" flex sm:w-[70%] sm:h-[98%] rounded-lg   w-full h-[95%]  flex-row items-center justify-center    ">
        <div className="w-[70%] sm:h-full h-[98%] hidden lg:flex   rounded-l-lg  bg-green-800  flex-col items-center justify-center">
          <div className=" w-[90%] h-[80%] flex items-center  justify-center ">
            <img src={logo} alt="" />
          </div>

          <div className="w-full h-[20%] justify-center  items-center flex">
            <div className=" w-full h-[50%] text-white flex flex-row gap-3 items-center justify-center ">
              <p>Doesn't Have an Account</p>{" "}
              <Link
                to="/register"
                className="text-backGround font-semibold hover:text-green-500  ease-linear text-lg "
              >
                register
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:w-full w-[95%] sm-m-0  sm:p-0 h-full flex items-center sm:justify-center justify-center sm:rounded-r-lg rounded-lg bg-green-600  ">
          <div className="sm:w-[95%] sm:h-[90%] w-full h-full items-center  justify-center flex flex-col">
            <div className="w-full h-[20%] flex items-center justify-center  text-center">
              <h1 className="sm:text-3xl text-md font-semibold ">Customer Login</h1>
            </div>{" "}
            {/* title*/}
            <div className="w-full flex-col   h-[50%]  flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="flex w-full h-full gap-10 item-center justify-center flex-col "
              >
                <div className="flex  gap-2 w-full p-2 sm:h-[16%] h-[20%]  items-center justify-center  ">
                  <div className="flex flex-col w-[74%]   sm:w-[65%]">
                    <label htmlFor="Email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex  gap-2 w-full p-2 sm:h-[16%] h-[20%]  items-center justify-center  ">
                  <div className="flex flex-col w-[74%]   sm:w-[65%]">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.password ? "border-red-500" : ""
                      }`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                {/* ... similar input fields for gender, age, address, email, password, confirmPassword, and occupation */}
                <div className="flex items-center  justify-center w-full">
                  <button
                    type="submit"
                    className="  sm:px-5  sm:py-2 px-4 py-2.5 sm:m-2 m-0 bg-backGround text-white rounded-md hover:bg-backGround  font-semibold"
                  >
                    SUBMIT
                  </button>
                </div>
                <div className="w-full h-[20%] sm:hidden justify-center  items-center flex">
                  <div className=" w-full h-[50%] text-white flex flex-row gap-3 items-center justify-center ">
                    <p>Doesn't Have an Account</p>{" "}
                    <Link
                      to="/register"
                      className="text-backGround font-semibold hover:text-green-500  ease-linear text-lg "
                    >
                      register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;