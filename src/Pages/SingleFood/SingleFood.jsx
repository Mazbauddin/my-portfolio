import { Link, useLoaderData } from "react-router-dom";
import useAuthHooks from "../../Hooks/UseAuthHooks";

/* eslint-disable react/no-unknown-property */
const SingleFood = () => {
  const { user } = useAuthHooks() || {};
  const singleFoodItem = useLoaderData();

  const {
    _id,
    food_Name,
    image_Url,
    food_Category,
    price,
    email,
    food_origin,
    description,
  } = singleFoodItem || {};
  return (
    <section>
      <div>
        <img
          src={image_Url}
          alt=""
          className="w-5/6 mx-auto  dark:bg-gray-500 rounded-lg shadow-md relative z-20"
        />
      </div>
      <div className="mx-auto flex justify-center items-center">
        <div className="dark:bg-violet-600 bg-yellow-500 mb-12 -mt-20 lg:-mt-40 ">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 mb-12 mt-10 lg:mt-20">
              {food_Name}
            </h1>
            <div className="flex  justify-between gap-8">
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                Country: {food_origin}
              </p>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                Category : {food_Category}
              </p>
            </div>

            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              {description}
            </p>
            <div className="flex  justify-between gap-8">
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                Price : {price}
              </p>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                Added By : {user?.email}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mx-auto">
            <Link
              to={`/purchaseFood/${_id}`}
              className="btn btn1 btn_wave hover:bg-transparent hover:border-yellow-500 mx-auto  transform  rounded-md"
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFood;
