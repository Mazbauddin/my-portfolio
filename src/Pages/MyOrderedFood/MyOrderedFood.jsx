import useAuthHooks from "../../Hooks/UseAuthHooks";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MyOrderedFood = () => {
  const { user } = useAuthHooks();
  const [myFoods, setMyFoods] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/addMyFoods/${user?.email}`
      );
      setMyFoods(data);
    };
    getData();
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setControl(!control);
              Swal.fire({
                title: "Deleted!",
                text: "Your Food has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
                  <button
                    onClick={() => handleDelete(myFoods._id)}
                    className="btn_wave btn1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderedFood;
