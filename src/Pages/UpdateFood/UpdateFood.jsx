import { useLoaderData, useNavigate } from "react-router-dom";
import useAuthHooks from "../../Hooks/UseAuthHooks";

const UpdateFood = () => {
  const { user } = useAuthHooks();
  const navigate = useNavigate();
  const updateFood = useLoaderData();
  const {
    _id,
    food_name,
    food_Category,
    food_Origin,
    price,
    quantity,
    description,
    image_Url,
  } = updateFood || {};
  return (
    <div className="p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Food Items</h2>
      <form>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="food_name"
                placeholder="Food Name"
                defaultValue={food_name}
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
                name="food_Origin"
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

export default UpdateFood;
