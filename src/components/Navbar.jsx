import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);

  const navigate = useNavigate();
  return (
    <header>
      <nav className="bg-gradient-to-r from-yellow-500 to-orange-600">
        <div className="container px-4 py-2 gap-3 flex items-center ml-auto mr-auto">
          <Link className="text-2xl text-orange-900 font-bold" to="/">
            Snapspire
          </Link>
          <input
            type="search"
            placeholder="Search text ..."
            className="outline-none border-none w-full bg-white placeholder:list-none rounded-[5px] p-1 flex-1"
          />
          <span
            className="text-xl font-semibold cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/profile")}
          >
            <img
              src={user.photoURL ? user.photoURL : "../public/defaultImage.png"}
              className="w-10 h-10 rounded-full"
              alt={user.displayName}
            />{" "}
            {user.displayName}
          </span>
        </div>
      </nav>
    </header>
  );
};
