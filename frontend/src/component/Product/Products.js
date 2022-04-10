import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {  getProduct} from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
//import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const categories = [
    "i5",
    "i7",
    "i9",
];


const Products = ({ match }) => {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [ category,setCategory] = useState("");

    const {products,loading, productsCount, resultPerPage} = useSelector(
        (state) => state.products);

    const keyword = match.params.keyword;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

useEffect(() => {
    dispatch(getProduct(keyword,currentPage, category));
}, [dispatch,keyword,currentPage, category])

    return (
    <Fragment> {loading ? (<Loader/> ) : (
    <Fragment>
    <h2 className="productsHeading">Products</h2>

    <div className="products">
        {products &&
        products.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
    </div>

            <div className="filterBox">
                <Typography>Categories</Typography>
                <ul className="categoryBox">
                    {categories.map((category) => (
                        <li
                        className="category-link"
                        key={category}
                        onClick={() => setCategory(category)}
                        >
                    {category}
                        </li>
                    ))}
                </ul>
            </div>

        {resultPerPage < productsCount && (
            <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
         </div>
         )}
    </Fragment>
    )}
    </Fragment>
    );
 
};

export default Products