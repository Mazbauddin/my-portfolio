import { useEffect, useState } from "react";
import useAuthHooks from "../../Hooks/UseAuthHooks";
import bannerImg1 from "../../assets/images/carousel1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const MyAddedFood = () => {
  const { user } = useAuthHooks();
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/addMyFoods/${user?.email}`
      );
      setMyFoods(data);
    };
    getData();
  }, [user]);

  return (
    <div className="">
      {/* new */}
      <div
        className="parallax hero-overlay bg-opacity-20"
        style={{
          backgroundImage: `url(${bannerImg1})`,
        }}
      >
        <div className="hero  min-h-[100vh]">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-6xl font-bold text-yellow-500">
                My Added Food
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* end */}

      <div className="overflow-x-auto p-24">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Food Category</th>
              <th>Food Origin</th>
              <th>Price</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myFoods?.map((myFoods) => (
              <tr key={myFoods._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myFoods.image_Url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{myFoods.food_Name}</td>
                <td>{myFoods.food_Category}</td>
                <td>{myFoods.food_origin}</td>
                <td>${myFoods.price}</td>
                <td>
                  <Link to={`/updated_Food/${myFoods._id}`}>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="btn_wave btn1 rounded-md"
                    >
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
