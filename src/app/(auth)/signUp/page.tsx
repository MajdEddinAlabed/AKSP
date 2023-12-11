// SignUp.tsx
import {
  displayNameIcon,
  emailIcon,
  passwordIcon,
} from "@/src/components/icons/icons";
import { useSignUp } from "./useSignUp";

export default function SignUp() {
  const { formData, handleChange, handleSubmit } = useSignUp();

  return (
    <div className="h-[88.7vh] md:flex overflow-hidden h-526">
      {/* ... (your existing code) ... */}
      <div className="flex md:w-1/2 justify-center py-10 items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-white font-bold text-2xl mb-7">
            Welcome to AKSP
          </h1>
          {/* display name */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {displayNameIcon}
            <input
              className="pl-2 outline-none border-none bg-black"
              type="text"
              name="userName"
              id="userName"
              placeholder="Display name"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          {/* email */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {emailIcon}
            <input
              className="pl-2 outline-none border-none bg-black"
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            {passwordIcon}
            <input
              className="pl-2 outline-none border-none bg-black"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
            Already signed Up?
          </span>
        </form>
      </div>
    </div>
  );
}
