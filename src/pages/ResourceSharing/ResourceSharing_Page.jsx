import Layout from "../../components/Layout/CardLayout";
import CardItem from "../../components/Card/CardItem";
import CardLayout from "../../components/Layout/CardLayout";

const ResourceSharing = () => {
  return (
    <CardLayout title={"자료공유"}>
      <CardItem
        cardItemLink={""}
        thumnailSrc={""}
        title={"족보1"}
        username={"홍길동"}
        date={"2024-11-12"}
      ></CardItem>
      {/* <CardItem
        cardItemLink={""}
        thumnailSrc={""}
        title={"족보2"}
        username={"김길동"}
        date={"2024-11-12"}
      ></CardItem>
      <CardItem
        cardItemLink={""}
        thumnailSrc={""}
        title={"족보3"}
        username={"정길동"}
        date={"2024-11-12"}
      ></CardItem> */}
    </CardLayout>
  );
};

export default ResourceSharing;
