import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaUnlockAlt } from "react-icons/fa";

import SocialLogin from "../../components/SocialLogin";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import useAuthHooks from "../../Hooks/UseAuthHooks";

const Register = () => {
  const { createUser, updateUserProfile, setLoading } = useAuthHooks() || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    // Password Validation
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "password must be have at least 6 characters,a capital & spacial letter,one number"
      );
      return;
    }
    // Email Validation
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    //create user and update profile
    createUser(email, password).then(() => {
      updateUserProfile(fullName, image)
        .then(() => {
          navigate(from);
          toast.success("User Created Successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    });
  };

  // visible
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="hero min-h-screen my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div
              className="box_login"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <strong>
                <div className="flex justify-center items-center ">
                  <FaUnlockAlt className="text-[50px] " />
                </div>
                <h3 className="text-4xl">Register</h3>
              </strong>
              {/* from start */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="input input-bordered"
                      {...register("fullName", { required: true })}
                    />
                    {errors.fullName && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image Url</span>
                    </label>
                    <input
                      type="text"
                      placeholder="image url"
                      className="input input-bordered"
                      {...register("image")}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        type={visible ? "text" : "password"}
                        className="grow"
                        placeholder="password"
                        {...register("password", { required: true })}
                      />

                      <div
                        className="text-xl cursor-pointer "
                        onClick={() => setVisible(!visible)}
                      >
                        {visible ? (
                          <FaEye className="text-[#fea100]"></FaEye>
                        ) : (
                          <FaEyeSlash className="text-[#fea100]"></FaEyeSlash>
                        )}
                      </div>
                    </label>
                    {errors.password && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6 p-0">
                    <button className="btn flex btn-primary items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-[#fea100] border-transparent border-2 hover:bg-transparent hover:border-[#fea100] hover:text-[#fea100] text-white">
                      Register
                    </button>
                  </div>
                  <label className="label text-[#fea100]">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover my-anchor-element text-[#fea100] text-base"
                    >
                      Please Login
                      <Tooltip anchorSelect=".my-anchor-element" place="top">
                        If you already have an account, you can login here
                      </Tooltip>
                    </Link>
                  </label>
                  <SocialLogin />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
    </>
  );
};

export default Register;
