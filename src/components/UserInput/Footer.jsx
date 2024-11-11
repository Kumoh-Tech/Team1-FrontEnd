import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        Related
        <br />
        국립금오공과대학교 컴퓨터공학부
      </div>
      <div className={style.copyright}>@ CHIP_SAT Page 2024</div>
    </footer>
  );
};

export default Footer;
