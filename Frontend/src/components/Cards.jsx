// import React from "react";
// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
//           <figure>
//             <img src={item.image} alt={item.name} />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">
//                 {"\u20B9"}
//                 {item.price}
//               </div>
//               {/* Download PDF Button */}
//               <a
//                 href={`/${item.pdf}`}
//                 download={item.pdf} 
//                 className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200"
//               >
//                 Download PDF
//               </a>
//               {/* Buy Now Button */}
//               <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200">
//           <figure>
//             <img src={item.image} alt={item.name} />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions flex flex-wrap justify-between items-center gap-2">
//               <div className="badge badge-outline">
//                 {"\u20B9"}
//                 {item.price}
//               </div>
//               {/* Download PDF Button */}
//               <a
//                 href={`/${item.pdf}`}
//                 download={item.pdf}
//                 className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200 text-xs md:text-sm"
//               >
//                 Download PDF
//               </a>
//               {/* Buy Now Button */}
//               <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-xs md:text-sm">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
import React from "react";

function Cards({ item }) {
  return (
    <>
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
              {/* Download PDF Button */}
              <a
                href={`/${item.pdf}`}
                download={item.pdf}
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200 text-xs md:text-sm"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
