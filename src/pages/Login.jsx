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

    console.log(formData);

    const response = await fetch(
      `http://localhost:3000/users?email=${formData.email}&password=${formData.password}`,
    );

    if (!response.ok) {
      alert("Login request failed. Please try again.");
      return;
    }

    const users = await response.json();

    console.log("Users:", users);
    console.log("First user:", users[0]);

    const user = users[0];

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin" || user.name === 'System Admin') {
      navigate("/sidebar");
    }
  };

  return (
    <main className="flex justify-around">
      {/* Thumbnail section */}
      <section className="left-side-thumbnail w-1/2">
        <div className="flex justify-center items-center flex-col">
          <Avatar src={hero} alt={"Hero Image"} className={``} />
          <div className="bg-blue-700 p-3 text-white text-center w-full flex justify-center items-center flex-col gap-3">
            <h1 className="text-3xl font-bold">MediCar</h1>
            <div className="w-1/2 bg-blue-800 p-3 border-l-2 text-[14px] text-left rounded-sm">
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
      <section>
        <div className="">
          <h1>Medicare</h1>
          <div>
            <h1>Login</h1>
            <p>Enter your credentials to login to your account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <Input
              type={"email"}
              className={`border`}
              value={formData.email}
              onChange={handleChange}
              name={`email`}
            />
            <label>Password</label>
            <Input
              type={"password"}
              className={`border`}
              value={formData.password}
              onChange={handleChange}
              name={`password`}
            />
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
