import { Link } from "react-router-dom";
import { MdFoodBank, MdPriceCheck } from "react-icons/md";
// import { BiSolidPurchaseTag } from "react-icons/bi";
// import {} from "react-icons/md";

const TopFoodsCard = ({ topFood }) => {
  const {
    _id,
    food_Name,
    image_Url,
    food_Category,
    price,
    made_by,
    food_origin,
    description,
    quantity,
  } = topFood || {};
  return (
    <div className="w-full mb-10 max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={image_Url}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-yellow-500 text-white">
        <MdFoodBank className="text-3xl" />

        <h1 className="mx-3 text-xl font-semibold text-white">{food_Name}</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Category: {food_Category}
        </h1>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <h1 className="px-2 text-xl">Price: ${price}</h1>
        </div>
        <div className="w-full mt-10">
          <Link
            to={`/singleFoodItem/${_id}`}
            className="btn btn1 btn_wave hover:bg-transparent btn-block hover:border-yellow-500 transform  rounded-md"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoodsCard;
