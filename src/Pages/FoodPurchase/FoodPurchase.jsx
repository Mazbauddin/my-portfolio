import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuthHooks from "../../Hooks/UseAuthHooks";
import { useNavigate, useParams } from "react-router-dom";

const FoodPurchase = ({ singleFoodItem }) => {
  const { id } = useParams();
  const { user } = useAuthHooks();
  const [food, setFood] = useState({});
  const navigate = useNavigate();
  // const { _id, food_name, food_image, price, quantity } = singleFoodItem || {};
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/singleFoodItem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
        console.log(data);
      });
  }, [id]);

  const handleFoodPurchase = () => {
    event.preventDefault();

    const form = event.target;
    const food_Name = form.food_Name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const foodData = {
      food_Name,

      price,
      quantity,

      buyer: {
        name: user?.displayName,
        image_Url: user?.image_Url,
      },
    };
    // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/purchaseFood/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    // const foodData = {
    //   foodId,
    //   food_Name,
    //   image_Url,
    //   price,
    //   email,
    //   quantity,

    // };
    console.table(food.foodId);
  };
  return (
    <div className="p-24">
      <h2 className="text-3xl font-extrabold text-center">Food Purchase</h2>
      <form onSubmit={handleFoodPurchase}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="food_Name"
                defaultValue={food.food_Name}
                placeholder="Food Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={food.price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={food.quantity}
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Buyer Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="buyer_Name"
                placeholder="Buyer Name"
                disabled
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="buyer_Email"
                placeholder="Buyer Email"
                disabled
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Buying Date</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="buying_DateNow"
                placeholder="Buying Date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Purchase"
          className=" px-4 w-full py-2 mt-4 rounded bg-[#ff691a]  hover:bg-[#5991e6] duration-200 text-white cursor-pointer font-semibold"
        />
      </form>
    </div>
  );
};

export default FoodPurchase;
