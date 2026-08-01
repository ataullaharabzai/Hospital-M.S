import Avatar from "../components/Avatar";
import hero from "../images/login-hero2.avif";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api.js";
import Button from "../components/Button.jsx";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/users?email=${encodeURIComponent(formData.email)}`,
    );

    if (!response.ok) {
      alert("Login request failed. Please try again.");
      return;
    }

    const users = await response.json();

    const user = users[0];

    if (!formData.email.trim() && !formData.password.trim()) {
      alert("Please enter email and password to login!");
      return;
    }

    if (!user || user.password !== formData.password) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/sidebar");
    }

    setFormData("");
  };

  return (
    <main className="flex justify-around p-1 bg-gray-300">
      {/* Thumbnail section */}
      <section className="left-side-thumbnail w-1/2">
        <div className="flex justify-center items-center flex-col">
          <Avatar src={hero} alt={"Hero Image"} className={``} />
          <div className="bg-blue-700 p-3 text-white text-center w-full flex justify-center items-center flex-col gap-3">
            <h1 className="text-3xl font-bold">MediCar</h1>
            <div className="w-1/2 bg-blue-800 p-3 border-l-2 text-[14px] text-left rounded-r-sm">
              <p>
                Welcome to{" "}
                <span className="text-[20px] font-bold">MediCare</span>{" "}
                <span>Hospital Management System </span>cloud based streamline
                Management System
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form section */}
      <section className="w-1/2 flex justify-center items-center">
        <div className="p-2 flex justify-center items-start flex-col gap-5">
          <h1 className="md:text-2xl font-semibold text-blue-600">Medicare</h1>
          <div>
            <h1 className="md:text-[20px] font-semibold">Login</h1>
            <p className="text-[12px] md:text-[14px] text-gray-500">
              Enter your credentials to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-amber-200 w-full flex justify-center items-start gap-2 flex-col">
            <div>
              <label>Email</label>
              <Input
                type={"email"}
                className={`border p-1 rounded-sm border-gray-500`}
                value={formData.email}
                onChange={handleChange}
                name={`email`}
              />
            </div>
            <div>
              <label className="">Password</label>
              <Input
                type={"password"}
                className={`border w-full p-1 rounded-sm border-gray-500`}
                value={formData.password}
                onChange={handleChange}
                name={`password`}
              />
            </div>
            <Button
              type={"submit"}
              text={"Login"}
              className={`bg-blue-500 p-5`}
            />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
