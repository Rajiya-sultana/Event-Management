import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-md ${
        type === "success"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-xl font-bold leading-none hover:text-red-900"
      >
        ×
      </button>
    </div>
  );
};

const LoginSignUp = () => {
  const [action, setAction] = useState("login");
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setAlert({ message: "Login successful", type: "success" });
      // Proceed to next page or set logged-in state
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      setAlert({ message: "Login failed", type: "error" });
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setAlert({ message: "Passwords do not match", type: "error" });
      return;
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setAlert({ message: "User already exists", type: "error" });
      return;
    }

    setUsers((prev) => [...prev, { name, email, password }]);
    setAlert({ message: "Sign up successful", type: "success" });
    setAction("login");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="flex items-center h-[80vh] sm:pt-12">
      {alert.message && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: "", type: "" })}
        />
      )}
      {action === "login" && (
        <form
          onSubmit={handleLoginSubmit}
          className="sm:w-[350px] h-[370px] rounded-2xl bg-white shadow-xl m-auto p-8"
        >
          <h1 className="my-2 font-bold text-xl">LOGIN</h1>
          <div className="flex flex-col mt-2">
            <div className="mt-1">
              <label className="block mb-1 text-lg font-medium" htmlFor="email">
                E-mail
              </label>
              <input
                className="block w-full p-1 rounded-lg border-2 border-customColor"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-1 relative">
              <label
                className="block mb-1 text-lg font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full p-1 pr-10 rounded-lg border-2 border-customColor"
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute top-10 bottom-2 right-2 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-customRed hover:bg-customColor text-white font-bold py-2 px-10 rounded-lg my-6 mx-16"
          >
            Login
          </button>
          <p className="mt-5 text-gray-500 font-bold">
            Don't have an account?{" "}
            <span
              onClick={() => setAction("signup")}
              className="text-customRed font-bold cursor-pointer"
            >
              Sign Up here
            </span>
          </p>
        </form>
      )}
      {action === "signup" && (
        <form
          onSubmit={handleSignUpSubmit}
          className="sm:w-[350px] h-[550px] rounded-2xl bg-white shadow-xl m-auto p-8"
        >
          <h1 className="my-2 font-bold text-xl">Sign Up</h1>
          <div className="flex flex-col mt-2">
            <div className="mt-4">
              <label className="block mb-1 text-lg font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full p-1 rounded-lg border-2 border-customColor"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-1">
              <label className="block mb-1 text-lg font-medium" htmlFor="email">
                E-mail
              </label>
              <input
                className="block w-full p-1 rounded-lg border-2 border-customColor"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-1 relative">
              <label
                className="block mb-1 text-lg font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full p-1 pr-10 rounded-lg border-2 border-customColor"
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute top-10 bottom-2 right-2 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mt-1 relative">
              <label
                className="block mb-1 text-lg font-medium"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="block w-full p-1 pr-10 rounded-lg border-2 border-customColor"
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="absolute top-10 bottom-2 right-2 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-customRed hover:bg-customColor text-white font-bold py-2 px-10 rounded-lg my-6 mx-16"
          >
            Continue
          </button>
          <p className="mt-5 text-gray-500 font-bold">
            Already have an account?{" "}
            <span
              className="text-customRed font-bold cursor-pointer"
              onClick={() => setAction("login")}
            >
              Login here
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginSignUp;
