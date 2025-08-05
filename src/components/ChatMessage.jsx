import React from "react";
import { useCollection } from "../hooks/useCollection";

export const ChatMessage = ({ id }) => {
  const { data: users } = useCollection("users");
  return (
    <div className="flex-4/5">
      {id ? (
        <div>
          <div></div>
          <h1 className="text-center">ChatMessage id: {id}</h1>
        </div>
      ) : (
        <h1 className="text-center">
          Yangi xabar bilan suhbatlashish uchun tanlang
        </h1>
      )}
    </div>
  );
};
