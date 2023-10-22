import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password.length < 6) {
      setError("password", {
        type: "minLength",
        message: "Password must be at least 6 characters",
      });
      return;
    }

    // If password is valid, continue with the login process
    toast.success("Login Successful");
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-96 md:w-1/3 p-6 bg-white shadow-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="email">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your email"
                required
              />
            )}
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600" htmlFor="password">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-2 border rounded-md pr-10"
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
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
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover-bg-blue-600"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;