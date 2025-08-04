import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export const Home = () => {
  const { data: users } = useCollection("users");
  const [userList, setUserlist] = useState(false);

  return (
    <section className="w-full flex items-center justify-between h-full overflow-hidden">
      <div className="flex-2/3">
        <h1 className="text-7xl text-center font-black text-gray-700">
          Welcome to HOME
        </h1>
      </div>
      <div
        className={`flex flex-col h-full relative transition-all ease-in-out duration-300 delay-150 ${
          userList ? "flex-1/3" : "w-0"
        }`}
      >
        <div
          className="absolute -left-7 top-1/2 bg-white rounded-tl-full rounded-bl-full text-black animate-pulse cursor-pointer"
          onClick={() => {
            setUserlist(!userList);
          }}
        >
          {userList ? (
            <IoIosArrowDroprightCircle size={30} />
          ) : (
            <IoIosArrowDropleftCircle size={30} />
          )}
        </div>
        <ul className="border-2 h-full">
          <h2 className="text-3xl text-center font-bold mb-2">Users list</h2>
          {users &&
            users.map((user) => {
              return (
                <li
                  key={user.id}
                  className="hover:bg-white/30 flex items-center gap-3"
                >
                  {user.online ? (
                    <div className="avatar avatar-online">
                      <div className="w-18 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  ) : (
                    <div className="avatar avatar-offline">
                      <div className="w-18 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  )}
                  <div className="text-3xl">{user.displayName}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
