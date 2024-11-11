import style from "./Header.module.css";

const Header = ({ title }) => {
  return (
    <header className={style.header}>
      <div className={style.title}>{title}</div>
      <div className={style.logo}>CHIP_SAT</div>
    </header>
  );
};

export default Header;
