import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[100vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl max-w-[700px]">
            {text}
          </h1>
          <br />
          <Link
            to={"/allFoods"}
            className="btn btn1 btn_wave hover:bg-transparent hover:border-yellow-500 transform  rounded-md"
          >
            All Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
