import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MicOffIcon from "@mui/icons-material/MicOff";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="hidden lg:inline w-[100%] sticky top-0 z-50 text-white">
        <div className="w-full bg-[#5a2d6f] py-4 px-16">
          <div className="flex justify-between items-center">
            {/* logo area */}
            <div className="flex-[2]">
              <div>
                <Link to="/">
                  <h1 className="text-2xl font-bold">Visuals</h1>
                </Link>
              </div>
            </div>

            {/* search bar area  */}
            <div className="flex-[4]">
              <div className="max-w-md">
                <div className="relative flex items-center w-full h-10 rounded-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-400 cursor-pointer">
                    <SearchIcon fontSize="medium" />
                  </div>

                  <input
                    className="peer h-full w-full outline-none text-base text-gray-700 pr-2"
                    type="text"
                    value={input}
                    placeholder="Search any category, item"
                    onChange={(e) => setInput(e.target.value)}
                  />

                  <div className="grid place-items-center h-full w-12 text-gray-400 cursor-pointer">
                    <ClearIcon fontSize="medium" onClick={() => setInput("")} />
                  </div>
                </div>
              </div>
            </div>

            {/* right area  */}
            <div className="flex-[5]">
              <div className="flex gap-10 justify-end items-center">
                <div className="flex items-center gap-1">
                  <span>
                    <AutorenewOutlinedIcon fontSize="medium" />
                  </span>
                  <div className="flex flex-col items-center text-sm">
                    <span>Compare</span>
                    <span>Products</span>
                  </div>
                </div>

                <Link to="/favourites">
                  <div className="flex items-center gap-1">
                    <span>
                      <FavoriteBorderIcon fontSize="medium" />
                    </span>
                    <div className="flex flex-col items-center text-sm">
                      <span>Favourite</span>
                      <span>Products</span>
                    </div>
                  </div>
                </Link>

                {/* <div className="flex items-center gap-1">
                  <span>
                    <WbSunnyOutlinedIcon fontSize="medium" />
                  </span>
                  <div className="flex flex-col items-center text-sm">
                    <span>Dark</span>
                    <span>Mode</span>
                  </div>
                </div> */}

                {/* <Link to={`/register`}> */}
                <div className="flex items-center gap-1">
                  <span>
                    <PermIdentityIcon fontSize="medium" />
                  </span>
                  <div className="flex flex-col items-center text-sm">
                    <Link to="/login">
                      <span>Login</span>
                    </Link>
                    <Link to="/register">
                      <span>Signup</span>
                    </Link>
                  </div>
                </div>
                {/* </Link> */}

                <Link to={`/cart`}>
                  <div className="flex items-center gap-1">
                    <span>
                      <ShoppingCartOutlinedIcon fontSize="medium" />
                    </span>
                    <div className="flex flex-col items-center text-sm">
                      <span>2</span>
                      <span>Cart</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#865f99] py-2 px-16">
          <div className="flex">
            <div className="flex-[2] flex items-center gap-1">
              <span>
                <GridViewOutlinedIcon fontSize="medium" />
              </span>
              <h4>Shop Categories</h4>
            </div>

            <div className="flex-[4] flex gap-10 items-center">
              <Link to={`/`}>
                <div>HOME</div>
              </Link>

              <Link to={`/about`}>
                <div>ABOUT</div>
              </Link>

              <div>BLOGS</div>
              <div>CONTACT</div>
              <Link to="/myorders">
                <div>ORDERS</div>
              </Link>
            </div>

            <div className="flex-[5] flex gap-10 items-center justify-end">
              <Link to="/profile">
                <div>PROFILE</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/* NAVBAR for phones  */}

      <div className="lg:hidden sticky top-0 bg-[#5a2d6f] w-full flex justify-around items-end px-2 py-2 z-50">
        <div className="w-full">
          <div className="relative flex items-center w-full h-10 rounded-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-400">
              <SearchIcon fontSize="medium" />
            </div>

            <input
              className="peer h-full w-full outline-none text-base text-gray-700 pr-2"
              type="text"
              placeholder="Search any category, item"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 bg-[#865f99] w-full flex justify-around items-end px-2 pt-1 pb-2 z-50">
        <Link to="/">
          <div>
            <OtherHousesOutlinedIcon
              fontSize="large"
              style={{ color: "white" }}
            />
          </div>
        </Link>
        <Link to="/categories">
          <div>
            <CategoryOutlinedIcon fontSize="large" style={{ color: "white" }} />
          </div>
        </Link>

        <Link to="/cart">
          <div>
            <ShoppingCartOutlinedIcon
              fontSize="large"
              style={{ color: "white" }}
            />
          </div>
        </Link>
        <Link to="/settings">
          <div>
            <SettingsOutlinedIcon fontSize="large" style={{ color: "white" }} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
