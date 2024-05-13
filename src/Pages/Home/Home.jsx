import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Top_Foods from "../../components/Top_Foods";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel></Carousel>
      </div>
      {/* Top Foods Items */}
      <div className="my-20 container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">Top Foods</h2>
        <Top_Foods></Top_Foods>
        <div className="flex justify-between items-center">
          <Link
            to={"/allFoods"}
            className="btn btn1 btn_wave hover:bg-transparent hover:border-yellow-500  transform  rounded-md"
          >
            See All Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
