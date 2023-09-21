import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Statistics from "../components/Statistics";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7]">
      <div className="p-3 sm:p-5 text-black rounded-lg ">
        <b>
          <h2 className="text-center text-lg sm:text-xl mb-6">About Us</h2>
        </b>

        <div className="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="object-fill w-full h-56 lg:h-96 rounded-lg"
                src={`https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg`}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-56 lg:h-96 rounded-lg"
                src={`https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg`}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-full h-56 lg:h-96 rounded-lg"
                src={`https://fatfrogmedia.com/wp-content/uploads/2018/08/selling-online-with-an-ecommerce-store.jpg`}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="text-white">
        <div className="container mt-20 mx-auto">
          <div className="">
            <div className="container mt-24 px-6 mx-auto">
              <section className=" text-gray-900">
                <h2 className="text-2xl font-bold mb-12 text-center">
                  Latest articles by Visuals
                </h2>

                <div className="flex flex-wrap mb-12">
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                      style={{ backgroundPosition: "50%" }}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={`https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg`}
                        className="w-full max-h-80 xl:max-h-96"
                        alt="Louvre"
                      />
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                    <h3 className="text-2xl  mb-4">
                      Visuals helps you own the market
                    </h3>
                    <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                      {/* <BiNews className="w-4 h-4 mr-2" /> */}
                      <FeedOutlinedIcon
                        fontSize="small"
                        className="w-4 h-4 mr-2"
                      />
                      Overview
                    </div>
                    <div className="text-gray-500 mb-6">
                      We are a leading tech startup, working to help businesses
                      to grow and scale up their business.
                      <h5>
                        We here not only build websites, applications but also
                        give assistance from development to deployment. We
                        provide best experience and better quality at optimal
                        cost.
                      </h5>
                      <h5>
                        {" "}
                        Clients always worries about their budget but we here
                        take care of client's budget as well as quality of
                        product. Eveman.in is committed to high quality and high
                        reliablility of the products.
                      </h5>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Statistics />

      <div className="text-white">
        <div className="container my-220 mx-auto">
          <div className="">
            <div className="container my-24 px-6 mx-auto">
              <section className="mb-32 text-gray-900">
                <h2 className="text-2xl font-bold mb-12 text-center">
                  WHY US?
                </h2>

                <div className="flex flex-wrap mb-12">
                  <div className="grow-0 shrink-0 basis-auto w-full ">
                    <div className="text-gray-500 mb-6">
                      <h5 className="text-black text-sm lg:text-lg pb-5">
                        It seems impossible but we made it happen with the
                        experienced team of developers. We want to build a
                        different type of company that’s focused not only on the
                        bottom line, but also the happiness of our customers and
                        team, and our personal growth along the journey. Here
                        are the values that collectively guide our decisions and
                        actions:
                      </h5>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
