import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { MainLayout } from "./layout/MainLayout";

import { Home, Login, Profile, SignUp, SingleImage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { login, authReady } from "./app/features/userSlice";
import { Chat } from "./pages/Chat";

function App() {
  const { user, isAuthReady } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/profile", element: <Profile /> },
        { path: "/singleImage", element: <SingleImage /> },
        { path: "/chat/:id", element: <Chat /> },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/signup", element: user ? <Navigate to="/" /> : <SignUp /> },
  ]);

  onAuthStateChanged(auth, (user) => {
    dispatch(login(user));
    dispatch(authReady());
  });
  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
