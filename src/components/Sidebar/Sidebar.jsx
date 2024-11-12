import style from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ items }) => {
  return (
    <div>
      {items.map((subItem, index) => {
        return <SidebarItem item={subItem} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
