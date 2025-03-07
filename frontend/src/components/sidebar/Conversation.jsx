import { useSocketContext } from "../../context/SocketContext";
import useConversations from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversations();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers?.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <>
        <div
          className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
            isSelected ? "bg-sky-500" : "hover:bg-sky-500"
          }`}
          onClick={() => setSelectedConversation(conversation)}
        >
          <div className={`avatar ${isOnline ? "online" : ""} `}>
            <div className="w-12 rounded-full">
              <img
                src={
                  conversation.profilePic
                    ? conversation.profilePic
                    : "https://ui-avatars.com/api/?name=" +
                      conversation.fullName.split(" ").join("+")
                }
                alt="user avatar"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">{conversation.fullName}</p>
              <span className="text-xl">{emoji}</span>
            </div>
          </div>
        </div>

        {!lastIndex && <div className="divider my-0 py-0 h-1" />}
      </>
    </>
  );
};

export default Conversation;
