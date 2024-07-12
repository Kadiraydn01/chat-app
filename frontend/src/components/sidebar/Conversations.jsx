import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";
const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conversation, i) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={i === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
