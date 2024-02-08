import MenuList from "./menu-list";

export default function TreeView({ menus = [],handleClose }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} handleClose={handleClose} />
    </div>
  );
}
