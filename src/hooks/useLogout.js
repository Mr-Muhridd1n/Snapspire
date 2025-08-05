import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { logOut } from "../app/features/userSlice";
import { doc, updateDoc } from "firebase/firestore";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const setLogout = async () => {
    setIsPending(true);
    try {
      const userData = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userData, { online: false });
      await signOut(auth);

      dispatch(logOut());
      toast.success(`See you`);
    } catch (error) {
    } finally {
      setIsPending(false);
    }
  };

  return { setLogout, isPending };
};
