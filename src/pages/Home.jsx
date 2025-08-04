import { useCollection } from "../hooks/useCollection";

export const Home = () => {
  const { data: users } = useCollection("users");
  return (
    <section className="w-full flex items-center justify-center h-full">
      <div className="flex-2/3">
        <h1 className="text-7xl font-black text-gray-700">Welcome to HOME</h1>
      </div>
      <div className="flex-1/3 flex-col">
        {users &&
          users.map((user) => {
            return user.online ? (
              <div className="avatar avatar-online">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            ) : (
              <div className="avatar avatar-offline">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
