import React from "react";
import {ReactNavbar} from "overlay-navbar";

const options={
    burgerColor:"#36373A",
    burgerColorHover:"#3456EB",
    navColor1:"#4ba1d3",
   //navColor2 : "#3456EB",
   link1Text :"Home",
   link2Text :"Product",
   link3Text :"Contact",
   link4Text :"About",
   link1Size:"1.2vmax",
   link1Url :"/",
   link2Url :"/product",
   link3Url :"/contact",
   link4Url :"/about",
   nav1justifyContent:"flex-end",
   nav2justifyContent:"flex-end",
   nav3justifyContent:"flex-start",
   nav4justifyContent:"center",
   link2Margin:"4vmax",
   link3Margin:"0",
   link4Margin:"4vmax",
   link1ColorHover:"#0000cc",
   link1Color:"rgba(31, 28, 30, 0.8)",
}

const Header = () => {
    return (
    <ReactNavbar
        {...options}
     />
    );
};

export default Header;