import React from "react";

const Login = () => {
  return (
    <div className="flex items-center">
      <div>
        <h2 className="text-center text-white font-bold text-[20px]">
          Login With Your Account
        </h2>
        <button
          className="w-full my-2 group h-12 px-6 bg-white border-2 border-white rounded-full transition duration-300 
hover:border-blue-400 focus:bg-white active:bg-white"
        >
          <div className="relative flex items-center space-x-4 justify-center">
            <img
              src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
              className="absolute left-0 w-5"
              alt="google logo"
            />
            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Continue with Google
            </span>
          </div>
        </button>
        <button
          className="w-full my-2 group h-12 px-6 bg-white border-2 border-white rounded-full transition duration-300 
hover:border-blue-400 focus:bg-white active:bg-white"
        >
          <div className="relative flex items-center space-x-4 justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
              className="absolute left-0 w-5"
              alt="google logo"
            />
            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Continue with Facebook
            </span>
          </div>
        </button>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
      <div>
        <img
          src="/signup.png"
          alt="Image"
          width={230}
          height={200}
          className="w-full h-auto rounded-t-lg"
        />
        <h2 className=" text-center text-[#7B61FF] font-bold text-[20px]">
          Join a community of podcast <br /> lovers and creators
        </h2>
      </div>
    </div>
  );
};

export default Login;
