// import React, { useState } from "react";

// function PaidCards({ item }) {
//   const [allowDownload, setAllowDownload] = useState(false);

//   const handleBuyNow = () => {
//     const confirmBuy = window.confirm(`Do you want to buy ${item.name}?`);
//     if (confirmBuy) {
//       setAllowDownload(true);
//     }
//   };

//   return (
//     <div className="mt-4 my-3 p-3">
//       <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200">
//         <figure>
//           <img src={item.image} alt={item.name} />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions flex flex-wrap justify-between items-center gap-2">
//             <div className="badge badge-outline">
//               {"\u20B9"}
//               {item.price}
//             </div>

//             {/* Conditional Download PDF Button */}
//             {allowDownload ? (
//               <a
//                 href={`/${item.pdf}`}
//                 download={item.pdf}
//                 className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200 text-xs md:text-sm"
//               >
//                 Download PDF
//               </a>
//             ) : (
//               <button
//                 disabled
//                 className="px-2 py-1 rounded-full border-[2px] border-gray-400 text-gray-400 text-xs md:text-sm cursor-not-allowed"
//               >
//                 Download PDF
//               </button>
//             )}

//             {/* Buy Now Button */}
//             <button
//               onClick={handleBuyNow}
//               className="cursor-pointer px-2 py-1 rounded-full border-[2px] border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-200 text-xs md:text-sm"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaidCards;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PaidCard = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // Function to load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Function to initiate payment
  const initiatePayment = async () => {
    setLoading(true);

    // Load Razorpay SDK
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      toast.error('Failed to load Razorpay SDK. Please try again.');
      setLoading(false);
      return;
    }

    try {
      // Call backend to create Razorpay order
      const response = await axios.post(
        'http://localhost:4001/api/payment/create-order',
        {
          amount: item.price, // Send price in rupees (backend converts to paise)
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.data.success) {
        throw new Error('Order creation failed');
      }

      const { order } = response.data;

      // Razorpay options
      const options = {
        key: 'rzp_test_qupp3LeUgQbCTi', // Add your Razorpay Key ID in .env
        amount: order.amount,
        currency: order.currency,
        name: 'Bookstore App',
        description: `Purchase of ${item.title}`,
        image: '/logo.png', // Optional: Add your logo URL
        order_id: order.id,
        handler: async (response) => {
          try {
            // Payment successful, update state
            setIsPaid(true);
            toast.success('Payment is done, you can download the book now!');
          } catch (error) {
            toast.error('Error processing payment.');
            console.error(error);
          }
        },
        prefill: {
          name: 'Customer Name', // You can fetch from user profile
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
        // Enable UPI payment method
        method: {
          upi: true,
        },
      };

      // Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response) => {
        toast.error(`Payment failed: ${response.error.description}`);
        console.error(response.error);
      });
      rzp.open();
    } catch (error) {
      toast.error('Error initiating payment.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 min-h-[450px]">
        <figure>
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description || item.title}</p>
          <div className="card-actions flex flex-wrap justify-between items-center gap-2">
            <div className="badge badge-outline">₹{item.price}</div>
            <div className="flex gap-2">
              {!isPaid ? (
                <button
                  onClick={initiatePayment}
                  disabled={loading}
                  className={`cursor-pointer px-2 py-1 rounded-full border-[2px] ${
                    loading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-blue-500 hover:text-white'
                  } duration-200 text-xs md:text-sm`}
                >
                  {loading ? 'Processing...' : 'Buy Now'}
                </button>
              ) : null}
              <a
                href={isPaid ? item.pdf : '#'}
                download={isPaid ? `${item.title}.pdf` : false}
                className={`cursor-pointer px-2 py-1 rounded-full border-[2px] text-xs md:text-sm ${
                  isPaid
                    ? 'hover:bg-blue-500 hover:text-white'
                    : 'opacity-50 cursor-not-allowed'
                } duration-200`}
                onClick={(e) => {
                  if (!isPaid) {
                    e.preventDefault();
                    toast.error('Please complete the payment to download.');
                  }
                }}
              >
                {isPaid ? 'Download PDF' : 'Complete Payment'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidCard;