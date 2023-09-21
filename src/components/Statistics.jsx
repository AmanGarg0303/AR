import React from "react";

const Statistics = () => {
  return (
    <div className="bg-[#e9e9ea]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="grid place-items-center">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/secure-log-in-4721387-3927968.png"
                  alt=""
                  className="w-20"
                />
              </h2>
              <p className="leading-relaxed text-lg text-purple-700 font-medium">
                Secure Payments
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="grid place-items-center">
                <img
                  src="https://assets.materialup.com/uploads/36bfb5e6-178e-4793-ad02-f52ad9843e98/preview.png"
                  alt=""
                  className="w-[6.5rem]"
                />
              </h2>
              <p className="leading-relaxed text-lg text-purple-700 font-medium">
                Free Shipping
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="grid place-items-center">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-value-up-down-5467784-4568173.png"
                  alt=""
                  className="w-20"
                />
              </h2>
              <p className="leading-relaxed text-lg text-purple-700 font-medium">
                Affordable Prices
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="grid place-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/596/501/original/3d-illustration-of-gift-icon-png.png"
                  alt=""
                  className="w-20"
                />
              </h2>
              <p className="leading-relaxed text-lg text-purple-700 font-medium">
                Daily Offers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
