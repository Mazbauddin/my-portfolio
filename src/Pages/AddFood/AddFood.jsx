import { useNavigate } from "react-router-dom";
import useAuthHooks from "../../Hooks/UseAuthHooks";
import axios from "axios";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuthHooks() || {};
  const navigate = useNavigate();

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const foodId = _id;
    const food_Name = form.food_Name.value;
    const food_Category = form.food_Category.value;
    const food_origin = form.food_origin.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const description = form.description.value;
    const email = user?.email;
    const image_Url = form.image_Url.value;

    const addFoodData = {
      food_Name,
      food_Category,
      food_origin,
      price,
      quantity,
      description,
      image_Url,
      buyer: {
        email,
        name: user?.displayName,
        image_Url: user?.image_Url,
      },
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/addFoodItem`,
        addFoodData
      );
      console.log(data);
      toast.success("Food Added By Successfully");
      navigate("/my-added-food");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Food Items</h2>
      <form onSubmit={handleAddFood}>
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
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* User Email and User Name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="user_Email"
                disabled
                defaultValue={user?.email}
                placeholder="User Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="user_Name"
                disabled
                defaultValue={user?.displayName}
                placeholder="User Name"
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
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Add Food Item"
          className=" px-4 w-full py-2 mt-4 rounded bg-[#ff691a]  hover:bg-[#5991e6] duration-200 text-white cursor-pointer font-semibold"
        />
      </form>
    </div>
  );
};

export default AddFood;
