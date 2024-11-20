import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProduct = ({ handleOrderPopup }) => {
  return (
    <>
      <div>
        <div>
          {/* Header Section */}
          <div className="text-left mb-24 ml-14">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Selling Product
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">
              Product
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              reiciendis, inventore impedit quo minima delectus quibusdam,
              veniam, dignissimos at mollitia culpa tempore atque odit
              voluptatem est commodi placeat minus asperiores?
            </p>
          </div>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl  bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-wite relative shadow-xl  duration-300 group max-w-[300px]"
            >
              {/* Image Section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Detailed Section */}
              <div className="p-4 text-center">
                {/* Start Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold  dark:text-white">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2  dark:text-white">
                  {data.description}
                </p>
                <button
                  onClick={() => handleOrderPopup()}
                  className="bg-primary  hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary "
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopProduct;
