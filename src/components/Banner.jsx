import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";

const Banner = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#e9e9ea]">
      <div className="py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex items-center justify-center gap-5">
            <span>
              <LocalShippingOutlinedIcon fontSize="large" />
            </span>
            <div className="flex flex-col font-medium">
              <span>Free</span>
              <span>Shipping</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <span>
              <CardGiftcardOutlinedIcon fontSize="large" />
            </span>
            <div className="flex flex-col font-medium">
              <span>Daily</span>
              <span>Offers</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <span>
              <PriceCheckOutlinedIcon fontSize="large" />
            </span>
            <div className="flex flex-col font-medium">
              <span>Affordable</span>
              <span>Prices</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <span>
              <AssuredWorkloadOutlinedIcon fontSize="large" />
            </span>
            <div className="flex flex-col font-medium">
              <span>Secure</span>
              <span>Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
