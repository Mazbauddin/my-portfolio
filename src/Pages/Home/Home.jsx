import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Top_Foods from "../../components/Top_Foods";
import Testimonial from "../../components/Testimonial";
import Team from "../../components/Team";
import Features from "../../components/Features";

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
        <div className="flex justify-center items-center mt-20">
          <Link
            to={"/allFoods"}
            className="btn btn1 btn_wave hover:bg-transparent hover:border-yellow-500  transform  rounded-md"
          >
            See All Foods
          </Link>
        </div>
      </div>
      {/* parallex */}
      <div>
        <div
          className="container flex flex-col items-center mx-auto mb-2 md:p-10 md:px-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <h1 className="p-4 text-3xl sm:text-6xl font-semibold leading-none text-center">
            Testimonial
          </h1>
          <p className="text:2xl sm:text-4xl">What Customer Say</p>
        </div>
        <div className="parallax mt-20">
          <Testimonial></Testimonial>
        </div>

        <div className="parallax p-2">
          {/* <div className="max-w-6xl px-6 py-10 mx-auto">
            <p className="text-xl font-medium text-blue-500 ">Our Team</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our Team
            </h1>
          </div> */}
          <div>
            <Team></Team>
          </div>
        </div>
        <div className="parallax p-3">
          <Features></Features>
        </div>
      </div>
    </div>
  );
};

export default Home;
