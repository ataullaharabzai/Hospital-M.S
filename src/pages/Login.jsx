import Avatar from "../components/Avatar";
import hero from "../images/login-hero2.avif";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api.js";
import Button from "../components/Button.jsx";
import { LogIn, Loader2, AwardIcon, Flag } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginAsGuest = async () => {
    await handleLogin("admin@medicare.com", "123456");
  };

  const handleLogin = async (email, password) => {
    setLoading(true);

    try {
      const response = await fetch(`./data/users.json`);

      if (!response.ok) {
        alert("Request failed, try again");
        return;
      }

      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password,
      );

      if (!user) {
        alert("Invalid email or password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/sidebar");
      }

      if (user.role === "doctor") {
        navigate("/doctors");
      }

    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please enter email and password to login");
      return;
    }

    await handleLogin(formData.email, formData.password);
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
            <h1 className="md:text-[20px] font-semibold dark:text-slate-800">Login</h1>
            <p className="text-[12px] md:text-[14px] text-gray-500">
              Enter your credentials to login to your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-start gap-3 flex-col"
          >
            <div className="w-full">
              <label className="text-[12px] md:text-[14px] dark:text-slate-800">Email</label>
              <Input
                placeholder={`admin@example.com`}
                type={"email"}
                className={`border w-full p-1.5 rounded-sm`}
                value={formData.email}
                onChange={handleChange}
                name={`email`}
              />
            </div>
            <div className="w-full">
              <label className="text-[12px] md:text-[14px] dark:text-slate-800">Password</label>
              <Input
                type={"password"}
                placeholder={`******`}
                className={`border w-full p-1.5 rounded-sm`}
                value={formData.password}
                onChange={handleChange}
                name={`password`}
              />
            </div>
            <div className="w-full flex flex-col gap-3 mt-5">
              <Button
                type={"submit"}
                disabled={loading}
                className={`w-full border-2 border-blue-700 bg-blue-700 text-white hover:bg-blue-600 transition-all p-1.5 rounded-sm flex items-center justify-center gap-2 cursor-pointer`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>

              <Button
                onClick={loginAsGuest}
                type={"button"}
                disabled={loading}
                className={`w-full border-2 border-blue-700 bg-blue-700 text-white hover:bg-blue-600 transition-all p-1.5 rounded-sm flex items-center justify-center gap-2 cursor-pointer`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  "Sign in as Guest"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
