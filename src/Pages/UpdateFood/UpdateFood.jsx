import { useNavigate, useParams } from "react-router-dom";
import useAuthHooks from "../../Hooks/UseAuthHooks";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const { id } = useParams();
  const { user } = useAuthHooks();
  const navigate = useNavigate();
  // const updateFood = useLoaderData();
  const [food, setFood] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/singleFoodItem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
        console.log(data);
      });
  }, [id]);
  const handleUpdate = () => {
    event.preventDefault();

    const form = event.target;

    const food_Name = form.food_Name.value;
    const food_Category = form.food_Category.value;
    const food_origin = form.food_origin.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const image_Url = form.image_Url.value;

    const updateFood = {
      food_Name,
      food_Category,
      food_origin,
      price,
      quantity,
      description,
      image_Url,
    };

    // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/updateFood/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFood),
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
  };
  // const {
  //   _id,
  //   food_Name,
  //   food_Category,
  //   food_origin,
  //   price,
  //   quantity,
  //   description,
  //   image_Url,
  // } = updateFood || {};
  return (
    <div id="my_modal_5" className="p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Food Items</h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="food_Name"
                placeholder="Food Name"
                defaultValue={food.food_Name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Food Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="food_Category"
                defaultValue={food.food_Category}
                placeholder="Food Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ">
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
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={food.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Food Origin</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="food_origin"
                defaultValue={food.food_origin}
                placeholder="Food Origin"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">A Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={food.description}
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="form-control mb-8">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="image_Url"
              defaultValue={food.image_Url}
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Update Food Item"
          className=" px-4 w-full py-2 mt-4 rounded bg-[#ff691a]  hover:bg-[#5991e6] duration-200 text-white cursor-pointer font-semibold"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
