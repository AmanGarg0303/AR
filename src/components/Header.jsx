import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-4 lg:px-16 overflow-x-hidden bg-[#f5f5f7]">
      <div className="my-6 overflow-x-hidden">
        <section className="flex flex-col lg:flex-row gap-5 w-full overflow-x-hidden">
          <div className="flex-1">
            <div className="lg:w-[46vw] overflow-hidden rounded-lg">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Link to="/products?cat=electronics">
                    <img
                      className="object-fill w-full h-48 xs:h-56 sm:h-72 lg:h-96 rounded-lg"
                      src="https://t3.ftcdn.net/jpg/01/74/92/20/360_F_174922044_eRcxB90unuyejybRQXU8TTBb0zlVf3fA.jpg"
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/products?cat=sports">
                    <img
                      className="object-fill w-full h-48 xs:h-56 sm:h-72 lg:h-96 rounded-lg"
                      src="https://st.depositphotos.com/1066655/2272/i/600/depositphotos_22722993-stock-photo-sports-equipment.jpg"
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/products?cat=pets">
                    <img
                      className="object-fill w-full h-48 xs:h-56 sm:h-72 lg:h-96 rounded-lg"
                      src="https://media.istockphoto.com/id/1206495041/photo/cute-small-dog-waiting-for-meal-or-dinner-the-dog-food-he-is-lying-on-the-floor-and-looking.jpg?s=612x612&w=0&k=20&c=ruZ8G6eNkk5JvQG2vhmhPOYdtMMevUYSGnUhKaKMSnk="
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="flex flex-col gap-5">
              <Link
                to="/products?cat=clothing"
                className="flex-1 h-full w-full"
              >
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-young-woman-pointing-fingers-banner-logo-advertisement-smiling-amazed-standing-summer-clothes-yellow-background_1258-122501.jpg"
                  alt=""
                  className="h-full w-full object-fill rounded-md"
                />
              </Link>
              <Link
                to="/products?cat=electronics"
                className="flex-1 h-full w-full"
              >
                <img
                  src="https://img.freepik.com/premium-photo/modern-office-desk-workspace-with-laptop-computer_101448-821.jpg"
                  alt=""
                  className="h-full w-full object-fill rounded-md"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <Link to="/products?cat=grocery" className="flex-1 h-full w-full">
                <img
                  src="https://media.istockphoto.com/id/1217108207/photo/shopping-or-delivery-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=Fhd4ySZl4lwVoHCPcpOO-UOldzTUYPVEHaNc2cYp3KI="
                  alt=""
                  className="h-full w-full object-fill rounded-md"
                />
              </Link>
              <Link
                to="/products?cat=education"
                className="flex-1 h-full w-full"
              >
                <img
                  src="https://img.freepik.com/premium-photo/back-school-education-background-school-accessories-3d-render_696265-164.jpg"
                  alt=""
                  className="h-full w-full object-fill rounded-md"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
