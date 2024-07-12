import { useAuthContext } from "../../context/Autcontext";
import { extractTime } from "../../utils/extractTime";
import useConversations from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversations();
  const isSender = authUser?._id === message.senderId;
  const chat = isSender ? "chat-end" : "chat-start";
  const time = extractTime(message.createdAt);
  const profilePic = isSender
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleClass = isSender
    ? "chat-bubble text-white bg-blue-500"
    : "chat-bubble text-white bg-gray-500";
  return (
    <div className={`chat ${chat}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2  ${bubbleClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {time}
      </div>
    </div>
  );
};

export default Message;
