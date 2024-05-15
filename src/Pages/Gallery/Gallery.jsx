import { useEffect, useState } from "react";
import bannerImg1 from "../../assets/images/carousel1.jpg";
import GalleryItem from "./GalleryItem";
import axios from "axios";
import useAuthHooks from "../../Hooks/UseAuthHooks";

const Gallery = () => {
  const { user } = useAuthHooks() || {};
  const [allGallery, setGallery] = useState([]);
  useEffect(() => {
    const getGallery = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/gallery`);
      setGallery(data);
    };
    getGallery();
  }, []);
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url(${bannerImg1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl font-bold">Home | Gallery</h1>
          </div>
        </div>
      </div>

      {/* gallery Items image */}
      <div className="my-20 container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">Gallery</h2>
        <GalleryItem></GalleryItem>
      </div>
      {/* add button */}
      <div className="my-20 flex justify-center items-center">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn_wave btn1 px-5"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="p-24">
              <h2 className="text-3xl font-extrabold text-center">
                Add Food Items
              </h2>
              <form>
                {/* User Email and User Name */}
                <div className=" mb-8">
                  <div className="form-control md:w-1/2 ">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="user_Name"
                        disabled
                        defaultValue={user?.displayName}
                        placeholder="User Name"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className=" mb-8">
                  <div className="form-control md:w-1/2 ">
                    <label className="label">
                      <span className="label-text">Feedback</span>
                    </label>
                    <label className="input-group">
                      <textarea
                        className=""
                        rows={5}
                        cols={30}
                        type="text"
                        name="description"
                        placeholder="Feedback or experience Type you here"
                        id=""
                      ></textarea>
                    </label>
                  </div>
                </div>
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="image_Url"
                      placeholder="Image URL"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <input
                  type="submit"
                  value="Add Some"
                  className=" px-4 w-full py-2 mt-4 rounded bg-[#ff691a]  hover:bg-[#5991e6] duration-200 text-white cursor-pointer font-semibold"
                />
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Gallery;
