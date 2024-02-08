import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
// import { SidebarContext } from "../../contexts/SidebarContext";

export default function MenuItem({ item, handleClose }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  // const { setIsOpen } = useContext(SidebarContext);
  const location = useLocation();
  // const { pathname } = location;
  console.log("location", location);

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location]);

  return (
    <li className="menu_li pl-4 flex flex-col gap-4">
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to={item.to} onClick={handleClose}>
          {item.label}
        </NavLink>
        {item && item.children && item.children.length ? (
          <span
            className="menu_span"
            onClick={(e) => {
              handleToggleChildren(item.label);
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      <NavLink to={item.to} onClick={handleClose}>
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </NavLink>
    </li>
  );
  
}