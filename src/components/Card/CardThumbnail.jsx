import style from "./CardThumbnail.module.css";

const CardThumbnail = ({ src }) => {
  return (
    <div
      className={style.thumbnail}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
};

export default CardThumbnail;
