import React from "react";
import SpeakerGroupOutlinedIcon from "@mui/icons-material/SpeakerGroupOutlined";
import ToysOutlinedIcon from "@mui/icons-material/ToysOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const Banner2 = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7]">
      <div className="py-6">
        <h4 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
          Most Listed Categories
        </h4>
        <div className="overflow-x-hidden flex flex-col gap-5 px-5 bg-[#f5f5f7]  text-black">
          <div className="flex flex-col gap-8 mt-20 md:flex-row">
            <div className="flex flex-col gap-5">
              <div className="flex justify-around items-center relative">
                <PeopleAltOutlinedIcon
                  fontSize="large"
                  style={{ color: "purple" }}
                />
                <h2 className="text-xl text-center">Clothes</h2>
              </div>
              <p className="text-[#000000] text-sm flex-[7] md:px-8 lg:p-10 max-w-md mx-auto p-5">
                Clothing - Shop Online from trendy apparels for women, men &
                kids at best prices. Select your favourite clothing from the
                fashionable collection on FewClicks.
              </p>
              <div className="max-w-3xl p-5 md:hidden">
                <div className="max-w-lg h-[0.15rem] my-5 mx-auto bg-blue-500"></div>
              </div>
            </div>
            <div className="hidden md:inline-block pb-5">
              <div className="h-full my-5 border bg-gray-400"></div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-around items-center relative">
                <SpeakerGroupOutlinedIcon
                  fontSize="large"
                  style={{ color: "purple" }}
                />
                <h2 className="text-xl text-center">Electronics</h2>
              </div>
              <p className="text-[#000000] text-sm flex-[7] md:px-8 lg:p-10 max-w-md mx-auto p-5">
                Check out the best tech gifts of 2023, including smart home
                devices, useful kitchen gadgets, affordable outdoor drones, and
                so much more.
              </p>
              <div className="max-w-3xl p-5 md:hidden">
                <div className="max-w-lg h-[0.15rem] my-5 mx-auto bg-blue-500"></div>
              </div>
            </div>
            <div className="hidden md:inline-block pb-5">
              <div className="h-full my-5 border bg-gray-400"></div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-around items-center relative">
                <ToysOutlinedIcon
                  fontSize="large"
                  style={{ color: "purple" }}
                />
                <h2 className="text-xl text-center">Toys</h2>
              </div>
              <p className="text-[#000000] text-sm flex-[7] md:px-8 lg:p-10 max-w-md mx-auto p-5">
                Buy baby & kids toys in India at FirstCry.com. Online toys &
                gaming store for educational, fun, musical, electronic toys,
                games & more for 0-12 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
