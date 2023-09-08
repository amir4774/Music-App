import React from "react";

const Songs = () => {
  return (
    <div className="mt-5">
      <form className="text-center">
        <div className="relative">
          <button type="submit" className="absolute ml-4 mt-3.5 hover:scale-90">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <input
            type="text"
            className="bg-inputBackground text-white rounded-2xl w-3/4 p-3 pl-12 sm:text-xl sm:pl-14"
            placeholder="seacrh song"
          />
        </div>
      </form>
    </div>
  );
};

export default Songs;
