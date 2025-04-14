import React, { useState } from "react";

function PaidCards({ item }) {
  const [allowDownload, setAllowDownload] = useState(false);

  const handleBuyNow = () => {
    const confirmBuy = window.confirm(`Do you want to buy ${item.name}?`);
    if (confirmBuy) {
      setAllowDownload(true);
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex flex-wrap justify-between items-center gap-2">
            <div className="badge badge-outline">
              {"\u20B9"}
              {item.price}
            </div>

            {/* Conditional Download PDF Button */}
            {allowDownload ? (
              <a
                href={`/${item.pdf}`}
                download={item.pdf}
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200 text-xs md:text-sm"
              >
                Download PDF
              </a>
            ) : (
              <button
                disabled
                className="px-2 py-1 rounded-full border-[2px] border-gray-400 text-gray-400 text-xs md:text-sm cursor-not-allowed"
              >
                Download PDF
              </button>
            )}

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-200 text-xs md:text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaidCards;
