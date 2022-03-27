import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";


const product = {
     name: "Laptop Dell ",
     images: [{ url: "https://www.laptopvip.vn/images/detailed/22/awm17-r3-cnb-05000ff090-gy-tobii-www.laptopvip.vn-1620792655.png"}],
     price: "$1000",
     _id: "phuoc",
 };

const Home = () => {
    return(
        <Fragment>
            <MetaData title="Laptop Website"/>


            <div className="banner">
                <p>Welcome</p>
                <h1>Find Product Below</h1>

                <a href="#container">
                     <button type="button">
                       Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Feartured Products</h2>

            <div className="container" id="container">
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>

                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                <Product product={product}/>
                
                
            </div>
        </Fragment>
    );
};

export default Home;