import { useEffect, useState } from "react";
import bannerImg1 from "../../assets/images/carousel1.jpg";

import axios from "axios";
import All_Food from "../../components/All_Food";
const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    const getFood = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/allFoods`);
      setAllFoods(data);
    };
    getFood();
  }, []);
  return (
    <div>
      <div
        className="parallax hero-overlay bg-opacity-20"
        style={{
          backgroundImage: `url(${bannerImg1})`,
        }}
      >
        <div className="hero  min-h-[100vh]">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-xl font-bold">
                Home | <span className="text-yellow-500">All Foods</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* All Foods Items */}
      <div className="my-20 container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">All Foods</h2>
        <All_Food></All_Food>
      </div>
    </div>
  );
};

export default AllFoods;
