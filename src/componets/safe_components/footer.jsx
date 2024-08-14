import axiomlogo from "../../assets/images/images_safe/axiom_logo.svg";
import React from 'react';


const Footer = () => {

    return ( 
        <>
            <footer id="footer" className="footer">
                    <div className="footer-container">
                        <div className="footer-container-icon">
                            <img src={axiomlogo} alt="" />
                        </div>
                        <div className="footer-container-contant">
                            <h2>Copyright © 2023 AXIOM WM Family office</h2>
                            <p>Все права защищены.</p>
                        </div>
                    </div>
            </footer>
        </>
    );
}

export default Footer;