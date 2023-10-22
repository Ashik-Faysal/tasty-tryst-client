import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthProvider";

const RegistrationForm = () => {
  const { createUser } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data) {
      createUser(data.email, data.password);
      toast.success("Registration Successful");
      reset();
      navigate("/");
    }
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return (
      regex.test(value) ||
      "Password must contain at least 8 characters, one uppercase, one lowercase, and one number."
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-96 p-6 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="name">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                className={`w-full p-2 border rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your name"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">Name is required.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\S+@\S+\.\S+$/ }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="email"
                className={`w-full p-2 border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Enter a valid email address.</p>
          )}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600" htmlFor="password">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true, validate: validatePassword }}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type={field.value ? "text" : "password"}
                  id="password"
                  className={`w-full p-2 border rounded-md pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Your password"
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3"
                  onClick={() => field.onChange(!field.value)}
                >
                  {field.value ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
        <small>
          Already Have an Account? <Link to="/login">Login Here</Link>
        </small>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
