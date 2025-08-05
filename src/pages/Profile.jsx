import {
  FaUser,
  FaEdit,
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const { setLogout, isPending } = useLogout();

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot;
  };

  return (
    <section>
      <div className="container mx-auto py-8 px-4 flex gap-3">
        <div className="flex-2/2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
            <div className="h-48 bg-gradient-to-r from-orange-400 to-yellow-500 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-4 right-4">
                <button className="bg-gray-500 bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all cursor-pointer">
                  <FaCamera size={16} />
                </button>
              </div>
            </div>

            <div className="relative px-6 pb-6">
              <div className="flex justify-center -mt-16 mb-4">
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white"
                  />
                  <button className="absolute bottom-2 right-2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-lg transition-all">
                    <FaCamera size={12} />
                  </button>
                </div>
              </div>

              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {user.displayName}
                </h1>

                <div className="flex justify-center gap-3">
                  <>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
                      <FaEdit size={14} />
                      Edited
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
                      <FaCog size={14} />
                      Setting
                    </button>
                    <button
                      className="flex items-center gap-3 p-3 text-left hover:bg-red-50 text-red-600 rounded-lg transition-all bg-gray-200"
                      onClick={() => {
                        setLogout();
                      }}
                    >
                      <FaSignOutAlt className="text-red-500" />
                      <span>LogOut</span>
                    </button>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaUser className="text-orange-500" />
                Personal Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FaEnvelope className="text-orange-500" />
                  <div className="flex-1">
                    <label className="text-sm text-gray-600">Email</label>

                    <p className="font-medium text-gray-800">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FaPhone className="text-orange-500" />
                  <div className="flex-1">
                    <label className="text-sm text-gray-600">Phone</label>

                    <p className="font-medium text-gray-800">
                      {user.phoneNumber ?? "Mavjut emas"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FaCalendarAlt className="text-orange-500" />
                  <div className="flex-1">
                    <label className="text-sm text-gray-600">Date added</label>
                    <p className="font-medium text-gray-800">
                      {user.metadata.creationTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-2xl flex-2/5">
          <ul>
            {getUsers() &&
              getUsers().forEach((user) => {
                return (
                  <li>
                    <h1>{user.displayName}</h1>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};
