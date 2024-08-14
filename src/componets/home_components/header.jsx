import axiomlogo from "../../assets/images/images_home/axiom_logo.svg";
import React from 'react';
import drop_down from "../../assets/images/images_home/drop-down.svg";
import vector from "../../assets/images/images_home/vector.svg";
import ellipse_header from "../../assets/images/images_home/ellipse_header.svg";
import burger from "../../assets/images/images_home/burger.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return ( 
        <>
            <header id="header" className="header">
                <img className="vector" src={vector} alt="" />
                <img className="ellipse_header" src={ellipse_header} alt="" />
                <div className="wrapper_">
                    <div className="header-nav-bar">
                        <div className="header-nav">
                            <img className="axiomlogo" src={axiomlogo} alt="" />
                            <img className="burger" src={burger} alt="" />
                            <nav>
                                <Link to="/">Главная</Link>
                                <Link to="/strategies/btcdao">BTC DAO</Link>
                                <Link to="/strategies/altporfoliodao">Altporfolio DAO</Link>
                                <Link to="/strategies/ultrdao">Ultra DAO</Link>
                                <Link to="/strategies/airdropdao">AirDrop DAO</Link>
                                <Link to="/strategies/safedao">Safe DAO</Link>
                                <div className="drop-down ">
                                    <a href="">Наши проекты</a>
                                    <img src={drop_down} alt="" />
                                </div>
                                <button className="button"><Link to="/dashboard">Кошелек</Link></button>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
