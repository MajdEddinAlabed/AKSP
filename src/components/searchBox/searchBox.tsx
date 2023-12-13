import "@/src/components/header/header.css";
import { Icons } from "@/src/components/icons/icons";

export const SearchBox = () => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full md:w-96 h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray">
            {Icons.searchIcon}
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>
    </>
  );
};
