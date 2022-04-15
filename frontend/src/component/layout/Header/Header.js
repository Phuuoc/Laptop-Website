import React from "react";
import {ReactNavbar} from "overlay-navbar";
import logo from "../../../images/logo.png"

const options = {

    burgerColor:"#36373A",
    burgerColorHover:"#3456EB",
    navColor1:"#4ba1d3",
    logo,
    logoWidth: "20vmax",

    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "",
    link2Text: "Home",
    link3Text: "",
    link4Text: "Products",
    link1Url: "",
    link2Url: "/",
    link3Url: "",
    link4Url: "/products",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#0000cc",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };

const Header = () => {
    return (
    <ReactNavbar
        {...options}
     />
    );
};

export default Header;