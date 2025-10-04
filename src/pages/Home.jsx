import React from "react";
import HeroSection from "../components/HeroSection";
import ShopNow from "../components/ShopNow";
import PantShopNow from "../components/PantShopNow";
import ShartShopNow from "../components/ShartShopNow";
import TshartShopNow from "../components/TshartShopNow";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ShartShopNow />
      <TshartShopNow />
      <PantShopNow />
      <ShopNow />
    </div>
  );
};

export default Home;
