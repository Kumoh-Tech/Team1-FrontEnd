import Header from "./Header";
import Footer from "./Footer";
import style from "./CardLayout.module.css";

const CardLayout = ({ title, children }) => {
  return (
    <div>
      <Header title={title} className={style.header} />
      <main className={style.main}>
        <div className={style.maincontainer}>
          <div className={style.content}>{children}</div>
          <div className={style.content}>{children}</div>
          <div className={style.content}>{children}</div>
        </div>
        <div className={style.maincontainer}>
          <div className={style.content}>{children}</div>
          <div className={style.content}>{children}</div>
          <div className={style.content}>{children}</div>
        </div>
        <div className={style.maincontainer}>
          <div className={style.content}>{children}</div>
          <div className={style.content}>{children}</div>
          <div className={style.content}>{children}</div>
        </div>
      </main>
      <Footer className={style.footer} />
    </div>
  );
};

export default CardLayout;
