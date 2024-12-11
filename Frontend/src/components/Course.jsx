import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import list from "../../public/list.json"
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Welcome, <span className="text-pink-500">We're Thrilled to Have You Here!</span>
          </h1>
          <p className="mt-12">
          Explore an amazing collection of courses that cater to every passion and profession. 
            From beginner-friendly guides to advanced resources, we’ve got everything you need to 
            unlock your potential and achieve your dreams.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
