import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversations from "../zustand/useConversation";
import notification from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversations();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      message.shouldShake = true;
      const audio = new Audio(notification);
      audio.play();
      setMessages([...messages, message]);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
