import CardContent from "./CardContent";
import CardThumbnail from "./CardThumbnail";
import style from "./CardItem.module.css";

const CardItem = ({ cardItemLink, thumnailSrc, title, username, date }) => {
  return (
    <>
      <div className={style.cardItem}>
        <a href={cardItemLink}>
          <div>
            <CardThumbnail src={thumnailSrc}></CardThumbnail>
          </div>
          <div>
            <CardContent
              title={title}
              username={username}
              date={date}
            ></CardContent>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardItem;
