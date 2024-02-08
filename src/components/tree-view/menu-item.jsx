import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li className="menu_li pl-4 flex flex-col gap-4">
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to={item.to}>{item.label}</NavLink>
        {item && item.children && item.children.length ? (
          <span
            className="menu_span"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
