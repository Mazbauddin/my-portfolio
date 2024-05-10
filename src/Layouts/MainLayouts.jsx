import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-280px)]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
      <div>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
    </div>
  );
};

export default MainLayouts;
