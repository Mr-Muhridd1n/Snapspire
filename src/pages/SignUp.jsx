import { useState } from "react";
import { FaLock, FaRegUserCircle, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../app/features/userSlice";
import { FormInput } from "../components/FormInput";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState({
    name: null,
    email: null,
    password: null,
    password2: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const password2 = formData.get("password2");

    const newErrors = {
      name: !name ? "Ismingizni kiriting !" : null,
      email: !email ? "Email kiriting !" : null,
      password: !password ? "Password kiriting !" : null,
      password2: !password2 ? "Passwordni tasdiqlang !" : null,
    };

    if (password && password2 && password !== password2) {
      newErrors.password2 = "Parollar mos emas!";
    }

    if (password && Array(password).length < 8) {
      newErrors.password = "Murakkabroq parollardan foydalaning ! min: 8";
    }

    setErrorMessage(newErrors);

    if (name && email && password && password2 && password2 == password) {
      dispatch(
        login({
          name: name,
          email: email,
          password: password,
          photoUrl: null,
        })
      );
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
          <h3 className="text-3xl mb-5 text-white">Accaunt Register</h3>
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <FormInput
              type={"text"}
              icon={"FaUser"}
              placeholder={"Your Name"}
              name={"name"}
              errorMessage={errorMessage.name}
            />
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
            <FormInput
              type={"password"}
              icon={"FaLock"}
              placeholder={"Password confirmation"}
              name={"password2"}
              errorMessage={errorMessage.password2}
            />
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
