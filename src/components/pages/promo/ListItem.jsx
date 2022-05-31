import { Link } from "react-router-dom";
import promo_list_tag from "@/assets/images/promo/promo_list_tag.webp";

const ListItem = ({ item }) => {
  return (
    <div className="mx-3">
      <Link to={`/promo/list/${item.Id}`} className="my-4 block relative">
        <img
          src={promo_list_tag}
          className="absolute top-0 left-0 w-8"
          alt=""
        />
        <img src={item.H5Img} className="rounded-lg shadow-lg" alt="" />
      </Link>
    </div>
  );
};

export default ListItem;
