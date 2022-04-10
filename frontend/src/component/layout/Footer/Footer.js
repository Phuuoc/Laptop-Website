import React from "react";  
import "./Footer.css"

const Footer = () => {
    return(
        <footer id="footer">
            <div className="leftfooter">
                <h4>About Website</h4>
                <p></p>
            </div>

            <div className="midFooter">
                <h1>Laptop Website</h1>
                <p>fdfd</p>

                <p>Copyrights 2022 &copy; Laptop </p>
            </div>

            <div className="rightFooter">
                <h4>Folllow us </h4>
                <a href="https://www.facebook.com/">Facebook</a>
            </div>
        </footer>
    );  
};

export default Footer;