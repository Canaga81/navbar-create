import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="w-full h-[100px] flex items-center pl-12 pb-6 pr-12">
      <div className="container mx-auto flex justify-between h-[full]">
        <div>
          <h1>Navbar</h1>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />

        </div>
      </div>
    </header>
  );
};

export default Header;