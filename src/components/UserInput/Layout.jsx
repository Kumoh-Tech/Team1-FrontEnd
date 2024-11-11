import Header from "./Header";
import Footer from "./Footer";
import style from "./Layout.module.css";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Header title={title} className={style.header} />
      <main>{children}</main>
      <Footer className={style.footer} />
    </div>
  );
};

export default Layout;
