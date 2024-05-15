import { useEffect, useState } from "react";
import bannerImg1 from "../../assets/images/carousel1.jpg";
import GalleryItem from "./GalleryItem";
import axios from "axios";

const Gallery = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    const getFood = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/gallery`);
      setAllFoods(data);
    };
    getFood();
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
    </div>
  );
};

export default Gallery;
