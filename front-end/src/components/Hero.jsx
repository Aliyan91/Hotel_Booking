import React from "react";
import { motion } from "motion/react";
import { homePageData } from "../assets/assets.js";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center md:items-start gap-3"
      >
        <h1 className="text-heading font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Find Your Perfect Stay,
          <br /> With Us
        </h1>
        <p className="text-paragraph mt-2 max-w-md text-sm sm:text-base leading-relaxed">
          Discover the best hotels and accommodations for your next trip.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-primary text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-500 cursor-pointer flex items-center gap-2"
          >
            {" "}
            Explore Now{" "}
          </motion.button>
        </div>

        <div className="flex flex-wrap gap-16 mt-8">
          {homePageData.map((item, i) => (
            <motion.div
              key={i}
              
              animate={{ y: [0,20,0] }}
              transition={{ duration: 2 , repeat: Infinity , ease: "easeInOut" }}
              className="flex items-center flex-col"

            >
              <img src={item.icon} alt="" className="w-6 h-6" />
              <div className="flex items-center gap-1 mt-4">
                <p className="text-paragraph">{item.title}</p>
                <p className="text-paragraph">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </main>
  );
};

export default Hero;
