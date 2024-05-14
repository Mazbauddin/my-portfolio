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
    food_Origin,
    description,
    quantity,
  } = topFood || {};
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={image_Url}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-yellow-500 text-white">
        <MdFoodBank className="text-3xl" />

        <h1 className="mx-3 text-2xl font-semibold text-white">{food_Name}</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Category: {food_Category}
        </h1>

        {/* <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <MdOutlineCropOriginal className="text-3xl" />

          <h1 className="px-2 text-xl">{food_Origin}</h1>
        </div> */}
        {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <BiSolidPurchaseTag className="text-3xl" />
          <h1 className="px-2 text-sm">Purchase: {quantity}</h1>
        </div> */}

        {/* <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            aria-label="location pin icon"
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
            />
          </svg>

          <h1 className="px-2 text-sm">{made_by}</h1>
        </div> */}

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
