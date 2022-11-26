import React from "react";

const MyWorks = ({ image, children, netlify, about }) => {
  return (
    <div className="hover:bg-blue-400 lg:w-1/3 w-full">
      <img className="w-60  " src={image} />
      <div>
        <h2 className="text-xl text-gray-900 font-bold m-2">{children}</h2>

        <button className="text-md rounded-2xl bg-gray-900 text-white px-4">
          2022
        </button>
        <a
          href={netlify}
          className="text-sm px-2 py-1 rounded-lg  bg-gray-800 text-white hover:bg-green-700 "
          target="_blank"
        >
          View Project
        </a>

        <p className="text-xl text-gray-800 mt-2">{about}</p>
      </div>
    </div>
  );
};
export default MyWorks;
