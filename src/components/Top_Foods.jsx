import TopFoodsCard from "./TopFoodsCard";
import { useEffect, useState } from "react";
import axios from "axios";

/* eslint-disable react/no-unknown-property */
const Top_Foods = () => {
  const [topFoods, setTopFoods] = useState([]);
  useEffect(() => {
    const getFood = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/allFood`);
      setTopFoods(data);
    };
    getFood();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {topFoods.map((topFood) => (
        <TopFoodsCard key={topFood._id} topFood={topFood} />
      ))}
    </div>
  );
};

export default Top_Foods;
