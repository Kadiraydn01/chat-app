import Conservations from "./Conservations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conservations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
