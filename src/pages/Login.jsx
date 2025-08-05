import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaRegUserCircle,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const navigate = useNavigate();
  const { isPending, setLogin } = useLogin();
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const newErrors = {
      email: !email ? "Email kiriting !" : null,
      password: !password ? "Password kiriting !" : null,
    };

    setErrorMessage(newErrors);
    if (email && password) {
      setLogin(email, password);
    }
  };

  return (
    <section className="w-full h-screen bg-gradient-to-r from-orange-600 to-yellow-500 flex items-center justify-center overflow-hidden">
      <div className="hidden lg:flex flex-1/2 w-full h-full overflow-hidden bg-black">
        <img
          src="https://picsum.photos/1200/800?random=1"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex lg:flex-1/2 items-center justify-center md:p-0 px-4 w-full overflow-hidden">
        <div className="max-w-96 w-full flex flex-col items-center rounded-2xl">
          <div className="mt-3.5 mb-2.5">
            <FaRegUserCircle size="50" className="text-white" />
          </div>
          <h3 className="text-3xl mb-5 text-white">Accaunt Login</h3>
          <form className="w-full gap-3 flex flex-col" onSubmit={handleSubmit}>
            <FormInput
              type={"email"}
              icon={"MdEmail"}
              placeholder={"Email address"}
              name={"email"}
              errorMessage={errorMessage.email}
            />
            <FormInput
              type={"password"}
              icon={"FaLock"}
              placeholder={"Password"}
              name={"password"}
              errorMessage={errorMessage.password}
            />
            <div className="flex justify-between mt-3 text-base mb-3">
              <label htmlFor="rememberMe" className="flex gap-2.5 text-white">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox"
                />{" "}
                <span>Remember Me</span>
              </label>
              <Link to="" className="text-orange-900">
                Forget password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className={`${
                isPending
                  ? "bg-orange-700 cursor-not-allowed"
                  : "bg-orange-900 cursor-pointer hover:bg-orange-800"
              } text-white w-full p-2 rounded-[10px] text-2xl mb-4 transition-colors`}
            >
              {isPending ? "Ma'lumotlar tekshirilmoqda..." : "Login"}
            </button>
            <div className="flex items-center mb-3">
              <div className="h-0.5 bg-amber-900 flex-1"></div>
              <span className="mx-3 text-white">Or login with</span>
              <div className="h-0.5 bg-amber-900 flex-1"></div>
            </div>
            <div className="flex items-center justify-center text-orange-900 gap-3 text-2xl mb-5">
              <div
                className="bg-white rounded-full p-3 flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/login")}
              >
                <FaFacebookF />
              </div>
              <div
                className="bg-white rounded-full p-3 flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/login")}
              >
                <FaTwitter />
              </div>
              <div
                className="bg-white rounded-full p-3 flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/login")}
              >
                <FaGoogle />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-white">Don't have an accaunt?</span>
              <Link to="/signUp" className="text-orange-900">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
