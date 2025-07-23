import { useState } from "react";
import { FaLock, FaRegUserCircle, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../app/features/userSlice";

export const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == password2) {
      dispatch(
        login({ name: name, email: email, password: password, photoUrl: null })
      );
    } else {
      toast.error("Parollar bir biriga mos kelmadi !");
    }
  };

  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="max-w-96 w-full p-4 flex flex-col items-center rounded-2xl">
          <div className="mt-3.5 mb-2.5">
            <FaRegUserCircle size="50" className="text-white" />
          </div>
          <h3 className="text-3xl mb-5 text-white">Accaunt Register</h3>
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="flex gap-2 items-center bg-white/50 rounded-[10px]"
            >
              <FaUser className="border-r-white border-r-2 py-3 text-5xl text-white rounded-2xl" />
              <input
                type="name"
                value={name}
                placeholder="Your name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full border-none text-black rounded-sm p-2 outline-none text-base font-semibold"
              />
            </label>
            <label
              htmlFor=""
              className="flex gap-2 items-center bg-white/50 rounded-[10px]"
            >
              <MdEmail className="border-r-white border-r-2 py-3 text-5xl text-white rounded-2xl" />
              <input
                type="email"
                value={email}
                placeholder="Email address"
                required
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
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
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
                value={password2}
                placeholder="Password confirmation"
                required
                onChange={(e) => setPassword2(e.target.value)}
                className="w-full border-none text-black rounded-sm p-2 outline-none text-base font-semibold"
              />
            </label>
            <button
              type="submit"
              className="bg-orange-900 text-white w-full p-2 rounded-[10px] text-2xl cursor-pointer mb-4"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center gap-3">
              <span className="text-white">Already a member?</span>
              <Link to="/login" className="text-orange-900">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
