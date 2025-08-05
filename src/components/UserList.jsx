import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
  const { data: users } = useCollection("users");
  const [userList, setUserlist] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col h-screen relative transition-all ease-in-out duration-300 delay-150 border-r-2 ${
        userList ? "flex-1/5" : ""
      }`}
    >
      <div
        className="absolute -right-8 top-1/2 bg-white rounded-tr-full rounded-br-full text-black animate-pulse cursor-pointer"
        onClick={() => {
          setUserlist(!userList);
        }}
      >
        {userList ? (
          <IoIosArrowDropleftCircle size={30} />
        ) : (
          <IoIosArrowDroprightCircle size={30} />
        )}
      </div>
      <ul
        className={`${
          !userList && "hidden"
        } overflow-y-auto flex flex-col gap-3`}
      >
        <h2 className="text-3xl text-center font-bold mb-2 bg-gray-700 py-2">
          Users list
        </h2>
        {users &&
          users.map((user) => {
            return (
              <li
                key={user.id}
                className="hover:bg-white/30 flex items-center gap-4 cursor-pointer"
                onClick={() => {
                  navigate(`/chat/${user.id}`);
                }}
              >
                <div className="flex relative overflow-hidden">
                  <img src={user.photoURL} className="w-18 rounded-full" />
                  <div
                    className={`w-3 h-3 ${
                      user.online ? "bg-green-400" : "bg-red-500"
                    } bottom-1 absolute right-2 inline-block rounded-full shadow-md`}
                  ></div>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold">{user.displayName}</h3>
                  <p className="text-gray-400">
                    {user.online ? "Online" : "Offline"}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
