import { IoPricetags } from "react-icons/io5";
import { MdFoodBank, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuthHooks from "../../Hooks/UseAuthHooks";

const GalleryCard = ({ allFood }) => {
  const { user } = useAuthHooks();
  const { _id, image_Url, food_Category } = allFood || {};
  return (
    <div className="w-full mb-10 max-w-sm overflow-hidden  bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className=""></div>
      <section className="team-member-area">
        <div className="">
          <h2 className="heading"></h2>
          <p className="title"></p>
        </div>
        <div className="">
          <div className="gallery_Img">
            <img
              className="object-cover img_ovr  object-center w-full h-56"
              src={image_Url}
              alt="avatar"
            />
            <div className="gallery_overlay">
              <div className="flex justify-center items-center mt-[50%]">
                <h2 className="text-white translate-y-[50%]">{user?.email}</h2>
              </div>
              <div className="flex justify-center items-center mt-5">
                <h2 className="text-white translate-y-[50%]">
                  {food_Category}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryCard;

{
  /* <div className="flex items-center px-6 py-3  bg-yellow-500 text-white">
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
      </div> */
}
