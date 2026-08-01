import Avatar from "../components/Avatar";
import hero from "../images/login-hero2.avif";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api.js";
import Button from "../components/Button.jsx";
import { LogIn } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginAsGuest = () => {
    setFormData({
      ...formData,
      email: "admin@medicare.com",
      password: "123456",
    });
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
    <main className="flex justify-evenly items-center bg-gray-100">
      {/* Thumbnail section */}
      <section className="hidden lg:block left-side-thumbnail w-1/2">
        <Avatar src={hero} alt={`Hero Image`} className={`w-full h-screen`} />
      </section>

      {/* Login Form section */}
      <section className="h-screen w-full lg:w-1/2 flex justify-center items-center bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#f8fafc_45%,_#e2e8f0)]">
        <div className="p-2 flex justify-center items-start flex-col gap-5">
          <h1 className="md:text-2xl font-semibold text-blue-700">Medicare</h1>
          <div>
            <h1 className="md:text-[20px] font-semibold">Login</h1>
            <p className="text-[12px] md:text-[14px] text-gray-500">
              Enter your credentials to login to your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-start gap-3 flex-col"
          >
            <div className="w-full">
              <label className="text-[12px] md:text-[14px]">Email</label>
              <Input
                placeholder={`admin@example.com`}
                type={"email"}
                className={`border w-full p-1.5 rounded-sm border-gray-500`}
                value={formData.email}
                onChange={handleChange}
                name={`email`}
              />
            </div>
            <div className="w-full">
              <label className="text-[12px] md:text-[14px]">Password</label>
              <Input
                type={"password"}
                className={`border w-full p-1.5 rounded-sm border-gray-500`}
                value={formData.password}
                onChange={handleChange}
                name={`password`}
              />
            </div>
            <div className="w-full flex flex-col gap-3 mt-5">
              <Button
                type={"submit"}
                className={`w-full border-2 border-blue-700 bg-blue-700 text-white hover:bg-blue-600 transition-all p-1.5 rounded-sm flex items-center justify-center gap-2 cursor-pointer`}
              >
                Sign In
                <LogIn className="h-4 w-4" />
              </Button>

              <Button
                onClick={loginAsGuest}
                type={"submit"}
                className={`w-full border-2 border-blue-700 bg-blue-700 text-white hover:bg-blue-600 transition-all p-1.5 rounded-sm flex items-center justify-center gap-2 cursor-pointer`}
              >
                Sign In as Guest
                <LogIn className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
