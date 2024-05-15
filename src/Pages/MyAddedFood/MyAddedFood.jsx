import { useEffect, useState } from "react";
import useAuthHooks from "../../Hooks/UseAuthHooks";
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
    <div className="p-24">
      <div className="overflow-x-auto">
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
