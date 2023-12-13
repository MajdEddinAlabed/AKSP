import { Icons } from "@/src/components/icons/icons";

export default function LogIn() {
  return (
    <div className="h-[88.7vh] md:flex overflow-hidden h-526">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Join Us</h1>
          <p className="text-white mt-1">
            AKSP you can ask whatever you want. sheeeeeeeesh
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

      {/* Sign Up form */}
      <div className="flex md:w-1/2 justify-center py-10 items-center">
        <form className="">
          <h1 className="text-white font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          {/* email */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {Icons.emailIcon}
            <input
              className="pl-2 outline-none border-none bg-black"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          {/* Password */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            {Icons.passwordIcon}
            <input
              className="pl-2 outline-none border-none bg-black"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          {/* Sign up button */}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Sign Up
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}
