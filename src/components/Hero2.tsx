import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
export default function Hero2() {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {/* Image and Card Section 1 */}
        <div className="relative w-full sm:w-[450px] md:w-[700px] lg:w-[900px] h-[300px] sm:h-[400px] md:h-[500px] ml-0 sm:ml-5 mt-5">
          {/* Image */}
          <Image 
  src="/c1b.png" 
  alt="Example" 
  className="w-full h-full object-cover" 
  width={500}  // Width set karein
  height={300} // Height set karein
/>

          {/* Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[370px] h-[200px] flex items-center justify-center shadow-lg">
            <p className="flex text-start text-black pb-[100] font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">NEWS</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-[#C4A484] w-[170px] h-[40px] flex items-center justify-center shadow-lg">
            <p className="flex text-center text-blue-950 font-semibold">
              Read all News
              <MdOutlineKeyboardArrowRight fontSize={25} />
            </p>
          </div>
        </div>

        {/* Image and Card Section 2 */}
        <div className="relative w-full sm:w-[450px] md:w-[700px] lg:w-[900px] h-[300px] sm:h-[400px] md:h-[500px] ml-0 sm:ml-5 mt-5 mr-0 sm:mr-5">
        <Image 
  src="/c2b.jpg" 
  alt="Example" 
  className="w-full h-full object-cover" 
  width={500}  // Fixed width set karein
  height={300} // Fixed height set karein
  layout="intrinsic" // Layout ko intrinsic ya responsive set karein
/>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[370px] h-[200px] flex items-center justify-center shadow-lg">
            <p className="flex text-start text-black pb-[100] font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">FEATURES</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-[#C4A484] w-[170px] h-[40px] flex items-center justify-center shadow-lg">
            <p className="flex text-center text-blue-950 font-semibold">
              Read all features
              <MdOutlineKeyboardArrowRight fontSize={25} />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Image and Card Section 3 */}
        <div className="relative w-full sm:w-[450px] md:w-[700px] lg:w-[900px] h-[300px] sm:h-[400px] md:h-[500px] ml-0 sm:ml-5 mt-5">
        <Image 
  src="/c3b.jpg" 
  alt="Example" 
  className="w-full h-full object-cover" 
  width={1200}  // Set a fixed width
  height={800}  // Set a fixed height
  layout="responsive"  // Responsive layout for resizing
/>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[370px] h-[200px] flex items-center justify-center shadow-lg">
            <p className="flex text-start text-black pb-[100] font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">INTERVIEW</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-[#C4A484] w-[170px] h-[40px] flex items-center justify-center shadow-lg">
            <p className="flex text-center text-blue-950 font-semibold">
              Read all interviews
              <MdOutlineKeyboardArrowRight fontSize={25} />
            </p>
          </div>
        </div>

        {/* Image and Card Section 4 */}
        <div className="relative w-full sm:w-[450px] md:w-[700px] lg:w-[900px] h-[300px] sm:h-[400px] md:h-[500px] ml-0 sm:ml-5 mt-5 mr-0 sm:mr-5">
        <Image 
  src="/c4b.jpeg" 
  alt="Example" 
  className="w-full h-full object-cover" 
  width={1200}  // Set width
  height={800}  // Set height
  layout="responsive"  // Makes image responsive
/>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[370px] h-[200px] flex items-center justify-center shadow-lg">
            <p className="flex text-start pb-[100] font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950">OPINION</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-[#C4A484] w-[170px] h-[40px] flex items-center justify-center shadow-lg">
            <p className="flex text-center text-blue-950 font-semibold">
              Read all opinion
              <MdOutlineKeyboardArrowRight fontSize={25} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
