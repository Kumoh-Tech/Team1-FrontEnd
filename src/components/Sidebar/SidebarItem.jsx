const SidebarItem = ({ item }) => {
  return (
    <div>
      <div>{item.menuName}</div>
      <div>
        {item.childs.map((child, id) => {
          return <SidebarItem item={child} key={id} />;
        })}
      </div>
    </div>
  );
};

export default SidebarItem;
