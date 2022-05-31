import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  console.log(item);
  return (
    <div className="mx-3">
      <Link to={`/promo/list/${item.Id}`} className="my-4 block">
        <img src={item.H5Img} className="rounded-lg shadow-lg" alt="" />
      </Link>
    </div>
  );
};

export default ListItem;
