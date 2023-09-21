import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7]">
      <div className="py-6">
        <footer className="text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
          <div className="flex items-center justify-center border-y-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="flex justify-center">
              <a
                href="#!"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a
                href="https://github.com/AmanGarg0303"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <GitHubIcon fontSize="medium" />
              </a>
              <a
                href="https://www.instagram.com/amangarg0303/"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <InstagramIcon fontSize="medium" />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-garg-289bba240"
                className="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
            </div>
          </div>
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="">
                <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <InsertEmoticonIcon fontSize="medium" />
                  Visuals.store
                </h6>
                <p>
                  Buy any product at good prices, with an best quality. Get
                  satisfied, within few clicks, you can buy an item.
                </p>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Products
                </h6>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Electronics
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Clothing
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Toys
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Grocery
                  </a>
                </p>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                <p className="mb-4">
                  <Link
                    to={`/register`}
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Account
                  </Link>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    About Us
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Orders
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Help
                  </a>
                </p>
              </div>
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                  <HouseOutlinedIcon fontSize="medium" />
                  New Delhi, India
                </p>
                <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                  <EmailOutlinedIcon fontSize="medium" />
                  aman@garg.com
                </p>
                <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                  <PhoneOutlinedIcon fontSize="medium" /> +91 234 567 88
                </p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 p-6 text-center mb-8 lg:mb-0">
            <span>© 2023 Copyright: </span>
            <a
              className="font-semibold text-neutral-600 dark:text-neutral-400"
              href="/#"
            >
              Visuals.store
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
