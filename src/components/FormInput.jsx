import { useState } from "react";
import {
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
  FaRegUserCircle,
  FaUser,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const FormInput = ({ type, icon, placeholder, name, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label
        htmlFor="name"
        className={`flex gap-2 items-center bg-white/50 rounded-[10px]  ${
          errorMessage && "border-2 border-red-500"
        }`}
      >
        {icon == "FaUser" ? (
          <FaUser
            className={`border-r-2 py-3 text-5xl rounded-2xl ${
              errorMessage
                ? "text-red-500 border-r-red-500"
                : "text-white border-b-white"
            }`}
          />
        ) : icon == "FaLock" ? (
          <FaLock
            className={`border-r-2 py-3 text-5xl rounded-2xl ${
              errorMessage
                ? "text-red-500 border-r-red-500"
                : "text-white border-b-white"
            }`}
          />
        ) : icon == "FaRegUserCircle" ? (
          <FaRegUserCircle
            className={`border-r-2 py-3 text-5xl rounded-2xl ${
              errorMessage
                ? "text-red-500 border-r-red-500"
                : "text-white border-b-white"
            }`}
          />
        ) : (
          <MdEmail
            className={`border-r-2 py-3 text-5xl rounded-2xl ${
              errorMessage
                ? "text-red-500 border-r-red-500"
                : "text-white border-b-white"
            }`}
          />
        )}
        <input
          type={type == "password" && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={`w-full border-none text-black rounded-sm p-2 outline-none text-base font-semibold ${
            errorMessage && "text-red-500 placeholder:text-red-500"
          }`}
        />
        {type == "password" &&
          (showPassword ? (
            <FaRegEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="mr-3 text-black text-2xl animate-pulse cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={() => setShowPassword(!showPassword)}
              className="mr-3 text-black text-2xl animate-pulse cursor-pointer"
            />
          ))}
      </label>
      {errorMessage && (
        <p className="text-red-600 text-center">{errorMessage}</p>
      )}
    </>
  );
};
