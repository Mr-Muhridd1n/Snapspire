import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../app/features/userSlice";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const setLogin = async (email, password) => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Autification filed !");
      }

      dispatch(login(req.user));
      toast.success(`Welcome ${name}`);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage =
            "Bu email bilan foydalanuvchi topilmadi. Avval ro'yxatdan o'ting.";
          break;
        case "auth/wrong-password":
          errorMessage = "Noto'g'ri parol kiritildi. Qaytadan urinib ko'ring.";
          break;
        case "auth/invalid-email":
          errorMessage = "Noto'g'ri email manzil kiritildi.";
          break;
        case "auth/user-disabled":
          errorMessage = "Bu foydalanuvchi hisobi bloklangan.";
          break;
        case "auth/too-many-requests":
          errorMessage =
            "Juda ko'p urinish amalga oshirildi. Keyinroq qaytadan urinib ko'ring.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Tarmoq xatosi. Internet aloqangizni tekshiring.";
          break;
        case "auth/invalid-credential":
          errorMessage =
            "Email yoki parol noto'g'ri. Tekshirib qaytadan kiriting.";
          break;
        default:
          errorMessage = error.message || "Tizimga kirishda xatolik yuz berdi.";
      }
    } finally {
      setIsPending(false);
    }
  };

  return { setLogin, isPending };
};
