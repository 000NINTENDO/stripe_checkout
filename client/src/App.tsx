import React from "react";
import "./App.css";
import images from "./utils/imgages";

function App() {
  return (
    <div className="App">
      <h2 className="text-4xl">App</h2>

      <div className="md:container mx-auto">
        <div className="card-container overflow-hidden flex w-max border border-black-100 border-opacity-100 rounded-xl ml-10 text-left shadow-lg">
          <div className="product-image">
            <img
              src={images[1].src}
              alt={images[1].name}
              className="product-image"
              width={200}
            />
          </div>
          <div className="product-details p-6 pt-4 w-96 ">
            <div className="details-header flex justify-between">
              <h1 className="product-name text-lg font-semibold subpixel-antialiased">
                Classic Utility Jacket
              </h1>
              <h1 className="price text-lg font-semibold text-gray-500 subpixel-antialiased">
                $110.00
              </h1>
            </div>
            <h4 className="text-left text-md mt-2 font-medium text-gray-500">
              In stock
            </h4>
            <div className="product-size-container flex justify-between mt-4">
              <div className="szes flex text-gray-500">
                <div className="product-size h-10 w-10 text-gray-700 rounded-md bg-gray-100 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  XS
                </div>
                <div className="product-size h-10 w-10 rounded-md flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  S
                </div>
                <div className="product-size h-10 w-10 rounded-md flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  M
                </div>
                <div className="product-size h-10 w-10 rounded-md flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  L
                </div>
                <div className="product-size h-10 w-10 rounded-md flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  XL
                </div>
              </div>
              <div className="size-guide text-gray-500 h-10 flex justify-center items-center cursor-pointer underline">
                Size Guide
              </div>
            </div>
            <div className="buttons-container text-left flex mt-6">
              <div className="flex">
                <button className="buy-now w-32 h-10 rounded-md font-medium bg-gray-800 text-white flex justify-center items-center mr-4">
                  Buy now
                </button>
                <button className="add-to-bag w-32 h-10 border font-medium border-gray-300 rounded-md flex justify-center items-center mr-4">
                  Add to bag
                </button>
              </div>
              <button className="like ml-auto border w-10 h-10 border-gray-300 rounded-md text-gray-500 flex items-center justify-center">
                <svg width="20" height="20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <div className="foot-note-container">
              <h4 className="text-gray-500 mt-4 text-md">
                Free shipping on all continental US orders
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
