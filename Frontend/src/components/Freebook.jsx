import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "../../public/list.json";

function FreeBook() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
        "Looking for a useful book? Check out the Course Section in the top navigation bar, where a wide variety of books is available to suit your needs."
        </p>
      </div>
      <div>
      <Slider {...settings}>
  {list
    .filter((item) => item.price === 0)
    .map((item) => (
      <Cards item={item} key={item.id} />
    ))}
</Slider>

      </div>
    </div>
  );
}

export default FreeBook;  
