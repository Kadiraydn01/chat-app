import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Homepage = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550xp] rounded-lg overflow-hidden
   bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Homepage;
