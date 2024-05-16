import { MdFoodBank, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoPricetags } from "react-icons/io5";

const AllFoodCard = ({ allFood }) => {
  const { _id, food_Name, image_Url, food_Category, price, quantity } =
    allFood || {};
  return (
    <div className="w-full mb-10 max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={image_Url}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3  bg-[#fea100] text-white">
        <MdFoodBank className="text-3xl" />

        <h1 className="mx-3 text-lg font-semibold text-white">{food_Name}</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Category: {food_Category}
        </h1>

        <div className="flex justify-between items-center mt-4 text-gray-700 dark:text-gray-200">
          <div className="flex items-center">
            <IoPricetags className="text-2xl" />
            <h1 className="px-1 text-lg">Price: ${price}</h1>
          </div>

          <div className="flex items-center">
            <MdProductionQuantityLimits className="text-2xl" />
            <h1 className="px-1 text-lg">Quantity: {quantity}</h1>
          </div>
        </div>
        <div className="mt-10">
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

export default AllFoodCard;
