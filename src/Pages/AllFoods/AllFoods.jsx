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
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url(${bannerImg1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl font-bold">Home | All Foods</h1>
          </div>
        </div>
      </div>
      {/* All Foods Items */}
      <div className="my-20 container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">All Foods</h2>
        <All_Food></All_Food>
      </div>
      {/* end */}
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allFoods.map((allFood) => (
          <AllFoodCard key={allFood._id} topFood={allFood} />
        ))}
      </div> */}
    </div>
  );
};

export default AllFoods;
