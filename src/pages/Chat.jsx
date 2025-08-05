import React from "react";
import { useParams } from "react-router-dom";
import { UserList } from "../components/UserList";
import { ChatMessage } from "../components/ChatMessage";

export const Chat = () => {
  const { id } = useParams();
  return (
    <section className="flex w-full items-center justify-between h-full overflow-hidden">
      <UserList />
      <ChatMessage id={id} />
    </section>
  );
};
