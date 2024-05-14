import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/AuthProvider";

const FoodPurchase = ({ singleFoodItem }) => {
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState({});
  const { _id, food_Name, image_Url, price, quantity, buying_DateNow } =
    singleFoodItem || {};

  const handleFoodPurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodId = _id;
    const food_Name = form.food_Name.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const buying_DateNow = Date.now(buying_DateNow);
    const email = user?.email;
    // const buyer_email = buyer_email;

    const foodData = {
      foodId,
      food_Name,
      image_Url,
      price,
      email,
      quantity,
      buyer: {
        email,
        name: user?.displayName,
        image_Url: user?.image_Url,
      },
      buying_DateNow,
    };
    console.table(foodData);
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
                defaultValue={food_Name}
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
                defaultValue={price}
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
                defaultValue={buying_DateNow}
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
