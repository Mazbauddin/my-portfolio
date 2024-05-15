import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const GalleryItem = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    const getFood = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/gallery`);
      setAllFoods(data);
    };
    getFood();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {allFoods.map((allFood) => (
        <GalleryCard key={allFood._id} allFood={allFood} />
      ))}
    </div>
  );
};

export default GalleryItem;
