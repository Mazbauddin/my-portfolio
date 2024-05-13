import { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import toast from "react-hot-toast";
import useAuthHooks from "../Hooks/UseAuthHooks";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, isSetOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const { user, logout } = useAuthHooks() || {};
  const handleLogout = () => {
    logout()
      .then((result) => toast.success("Successfully Logout"))
      .catch((err) => toast.error(err));
    setUserOpen(false);
  };

  const navbarItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fea100]"
              : "hover:text-[#0da5e9]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fea100]"
              : "hover:text-[#0da5e9]"
          }
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fea100]"
              : "hover:text-[#0da5e9]"
          }
        >
          Gallery
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/myFoodItems"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fea100]"
              : "hover:text-[#0da5e9]"
          }
        >
          <span>My Food Items</span>
        </NavLink>
      </li> */}
    </>
  );

  //   theme controller
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("light");
    }
  };
  // theme color
  // cyberpunk
  //luxury
  return (
    <div className="max-w-[1920px] mx-auto ">
      <header className="shadow-lg h-20 flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
        {/* Logo start */}
        <Link to="/" className="flex flex-shrink-0 items-center ">
          <img src={logo} alt="" />
        </Link>

        {/* middle */}
        <nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-orange-500">
            {navbarItems}
          </ul>
        </nav>
        {/* End */}

        <div className="relative flex items-center  justify-end w-full md:w-auto pl-5 ">
          {/* theme controller */}
          <div className="flex justify-between items-center mr-10">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-white border-sky-400 [--tglbg:theme(colors.yellow.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
            />
          </div>
          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="btn_wave btn1 rounded-md"
            >
              Login
            </button>
          )}

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/my-added-food"} className="justify-between">
                    My Added Food Items
                  </Link>
                </li>
                <li>
                  <Link to={"/add-food"}>Add a Food Item</Link>
                </li>
                <li>
                  <Link to={"my-order-food"}>My Ordered Food Items</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={() => handleLogout()}
                    className="btn_wave btn1 rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Drawer */}
        <button
          onClick={() => isSetOpen(!isOpen)}
          className="text-4xl text-[#fea100] relative flex items-center  justify-end w-full md:w-auto md:hidden ml-3"
        >
          {isOpen ? (
            <IoCloseSharp className="text-2xl text-[#fea100]" />
          ) : (
            <FaHamburger className="text-2xl text-[#fea100]" />
          )}
        </button>
      </header>

      {/* Side Menu */}
      <div
        className={` ${
          isOpen ? "top-20" : "top-[-490px]"
        } absolute md:hidden  bg-base-100 shadow-lg  w-56 overflow-y-auto top-0 left-0 transition-all duration-1000 ease-in dark:bg-[#120505] dark:text-white z-50`}
      >
        <div className="pb-4 pl-4">
          <ul className="mt-6 flex flex-col gap-4 ml-5">{navbarItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
