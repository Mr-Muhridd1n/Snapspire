import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaRegUserCircle,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const { userData } = useSelector((store) => store.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser =
      userData &&
      userData.map((user) => {
        if (user.password == password && user.email == email) {
          return user;
        }
      });

    if (dataUser) {
      toast.success("Akkauntingiz tasdiqlandi");
    } else {
      toast.error("Bunday user mavjut emas !");
    }
  };

  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="max-w-96 w-full p-4 flex flex-col items-center rounded-2xl">
          <div className="mt-3.5 mb-2.5">
            <FaRegUserCircle size="50" className="text-white" />
          </div>
          <h3 className="text-3xl mb-5 text-white">Accaunt Login</h3>
          <form className="w-full" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="flex gap-2 items-center bg-white/50 mb-4 rounded-[10px]"
            >
              <FaUser className="border-r-white border-r-2 py-3 text-5xl text-white rounded-2xl" />
              <input
                type="email"
                placeholder="Email manzilingizni kiriting"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none text-black rounded-sm p-2 outline-none text-base font-semibold"
              />
            </label>
            <label
              htmlFor=""
              className="flex gap-2 items-center bg-white/50 rounded-[10px]"
            >
              <FaLock className="border-r-white border-r-2 py-3 text-5xl text-white rounded-2xl" />
              <input
                type="password"
                value={password}
                placeholder="Parolingizni kiriting"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none text-black rounded-sm p-2 outline-none text-base font-semibold"
              />
            </label>
            <div className="flex justify-between mt-3 text-base mb-3">
              <label htmlFor="rememberMe" className="flex gap-2.5 text-white">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4"
                />{" "}
                <span>Remember Me</span>
              </label>
              <Link to="" className="text-orange-900">
                Forget password?
              </Link>
            </div>
            <button
              type="submit"
              className="bg-orange-900 text-white w-full p-2 rounded-[10px] text-2xl cursor-pointer mb-4"
            >
              Login
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
