import style from "./CardContent.module.css";

const CardContent = ({ title, username, date }) => {
  return (
    <div className={style.cardContent}>
      <h3 className={style.cardTitle}>{title}</h3>
      <div className={style.cardInfo}>
        <span>{username}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default CardContent;
