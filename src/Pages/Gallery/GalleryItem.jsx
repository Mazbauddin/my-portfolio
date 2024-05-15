import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const GalleryItem = () => {
  const [allGallery, setGallery] = useState([]);
  useEffect(() => {
    const getGallery = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/gallery`);
      setGallery(data);
    };
    getGallery();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {allGallery.map((gallery) => (
        <GalleryCard key={gallery._id} gallery={gallery} />
      ))}
    </div>
  );
};

export default GalleryItem;
