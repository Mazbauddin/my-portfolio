import { IoPricetags } from "react-icons/io5";
import { MdFoodBank, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuthHooks from "../../Hooks/UseAuthHooks";

const GalleryCard = ({ gallery }) => {
  const { user } = useAuthHooks();
  const { _id, image_Url, food_Category } = gallery || {};
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
