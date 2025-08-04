import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";

export const useSignUp = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signUp = async (name, email, password) => {
    setIsPending(true);
    try {
      const photoURL = `https://api.dicebear.com/9.x/initials/svg?seed=${name}`;

      const req = await createUserWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Autification filed !");
      }
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      console.log(auth);

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        online: true,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      });

      dispatch(login(req.user));
      toast.success(`Welcome ${name}`);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error(
          "Bu email allaqachon ro‘yxatdan o‘tgan. Login qilib ko‘ring."
        );
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsPending(false);
    }
  };

  return { signUp, isPending };
};
