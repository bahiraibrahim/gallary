import BrandFeatured from "../../compunant/Brand/BrandFeatured.jsx";
import DiscountSection from "../../compunant/Home/DiscountSection.jsx";
import Slider from "../../compunant/Home/Slider.jsx";
import HomeCategory from "./HomeCatogryRings.jsx";
import HomeCategoryChins from "./HomeCatogryChins.jsx";
import HomeCategoryEarrings from "./HomeCatogryEarrings.jsx";
import HomeCategorySlips from "./HomeCatogrySlips.jsx";


const Home = () => {

  return (
    <div className="font" style={{ minHeight: "670px" }}>

      <Slider />
      <HomeCategory />
      <HomeCategoryChins />
      <DiscountSection />
      <HomeCategoryEarrings />
      <HomeCategorySlips />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default Home;
