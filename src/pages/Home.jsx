import { UserList } from "../components/UserList";

export const Home = () => {
  return (
    <section className="w-full flex items-center justify-between h-full overflow-hidden">
      <UserList />
      <div className="flex-4/5">
        <h1 className="text-7xl text-center font-black text-gray-700">
          Welcome to HOME
        </h1>
      </div>
    </section>
  );
};
