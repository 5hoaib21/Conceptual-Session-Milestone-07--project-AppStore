import React from "react";
import bannerImg from '../../assets/Image/hero.png';

const Banner = () => {
  return (
    <div className="min-h-[60vh] text-center space-y-6 pt-13">
      <h1 className="font-bold text-5xl">
        We Build <br />
        <span className="text-purple-500"> Productive</span> Apps
      </h1>
      <p className="text-gray-600 max-w-[50%] mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-3">

      <button className="btn">paly Store</button>
      <button className="btn">App Store</button>
      </div>
      <img src={bannerImg} className="mx-auto" alt="" />
    </div>
    
  );
};

export default Banner;
