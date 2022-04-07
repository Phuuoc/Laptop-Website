import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "../Product/Product"
import MetaData from "../layout/MetaData";
import { getProduct} from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";



const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    
    return(
        <Fragment>
      
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
                    <div className='container' id='container'>
                        {products && products.map((product) => <Product product ={product}/> )}

                    </div>
                </Fragment>
        </Fragment>
    );
};

export default Home;    