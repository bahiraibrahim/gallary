import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Home/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Home/Auth/RegisterPage.jsx";
import AllBrand from "./compunant/Brand/AllBrandPage.jsx";
import ShopProducts_1 from "./pages/Products/ShopProducts1.jsx";
import ShopProducts_2 from "./pages/Products/ShopProducts2.jsx";
import ShopProducts_3 from "./pages/Products/ShopProducts3.jsx";
import ShopProducts_4 from "./pages/Products/ShopProducts4.jsx";
import SearchBar from "./compunant/Search/Search.jsx";
import Store from "./pages/cart/Store.jsx";
import ShoppingCartProvider from "./compunant/context/ShoppingCartContext.jsx";
import Navbarlogin from "./compunant/Utility/NavbarLogin.jsx";
import ShopFilterAll from "./json/Filter/Ring/All/ShopFilterRing.jsx";
import ShopFilterDUp from "./json/Filter/Ring/Down-Up/ShopFilterDUp.jsx";
import ShopFilterUpD from "./json/Filter/Ring/Up-Down/ShopFilterUpD.jsx";
import ShopFilterAx from "./json/Filter/Ring/AX/ShopFilterAx.jsx";
import ShopFilterAllChains from "./json/Filter/Slip/All/ShopFilterAllChains.jsx";
import ShopFilterChainsAx from "./json/Filter/Slip/AX/ShopFilterChainsAx.jsx";
import ShopDUpChains from "./json/Filter/Slip/Down-Up/ShopDUpChains.jsx";
import ShopUpDChains from "./json/Filter/Slip/Up-Down/ShopUpDChains.jsx";
import ShopFilterAllEarring from "./json/Filter/Earring/All/ShopFilterAllEarring.jsx";
import ShopFilterEarringAx from "./json/Filter/Earring/AX/ShopFilterEarringAx.jsx";
import ShopDUpEarring from "./json/Filter/Earring/Down-Up/ShopDUpEarring.jsx";
import ShopUpDEarring from "./json/Filter/Earring/Up-Down/ShopUpDEarring.jsx";
import ShopFilterAllSlip from "./json/Filter/Chains/All/ShopFilterAllEarring.jsx";
import ShopFilterSlipAx from "./json/Filter/Chains/AX/ShopFilterSlipAx.jsx";
import ShopDUpSlip from "./json/Filter/Chains/Down-Up/ShopDUpSlip.jsx";
import ShopUpDSlip from "./json/Filter/Chains/Up-Down/ShopUpDEarring.jsx";
import { createContext, useState } from "react";
import Footer from "./compunant/Utility/Footer";



export const ThemContext= createContext(null);
function App() {

const [theme,setTheme] =useState("light")

const toggleTheme=()=>{
  setTheme((curr)=>(curr==="light"?"dark":"light"));
};
  return (
    <ThemContext.Provider value={{theme,toggleTheme}}>
    <div className="font" id={theme}>
    <div className="switch">
    <label>{theme==="light"?"Light Mode":"Dark Mode"}</label>
    </div>
      <ShoppingCartProvider>
        <Navbarlogin />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<Store />} />
            <Route path="/all-category" element={<ShopProducts_1 />} />
            <Route path="/all-category-2" element={<ShopProducts_2 />} />
            <Route path="/all-category-4" element={<ShopProducts_4 />} />
            <Route path="/all-category-3" element={<ShopProducts_3 />} />
            <Route path="/allbrand" element={<AllBrand />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/ring-ax" element={<ShopFilterAx/>} />
            <Route path="/all" element={<ShopFilterAll/>} />
            <Route path="/down-up" element={<ShopFilterDUp/>} />
            <Route path="/up-down" element={<ShopFilterUpD/>} />
            <Route path="/Chains-all" element={<ShopFilterAllChains/>} />
            <Route path="/Chains-ax" element={<ShopFilterChainsAx/>} />
            <Route path="/d-to-up" element={<ShopDUpChains/>} />
            <Route path="/up-to-down" element={<ShopUpDChains/>} />
            <Route path="/Earring-all" element={<ShopFilterAllEarring/>} />
            <Route path="/Earring-ax" element={<ShopFilterEarringAx/>} />
            <Route path="/do-to-up" element={<ShopDUpEarring/>} />
            <Route path="/up-to-do" element={<ShopUpDEarring/>} />
            <Route path="/Slip-all" element={<ShopFilterAllSlip/>} />
            <Route path="/Slip-ax" element={<ShopFilterSlipAx/>} />
            <Route path="/dow-to-up" element={<ShopDUpSlip/>} />
            <Route path="/up-to-dow" element={<ShopUpDSlip/>} />

          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
      <Footer />
    </div>
    </ThemContext.Provider>
  );
}

export default App;
