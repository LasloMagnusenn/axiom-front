import axiomlogo from "../../assets/images/images_swap/axiom_logo.svg";
import orange_circle from "../../assets/images/images_swap/orange_circle.png";
import left_orange_circle from "../../assets/images/images_swap/left_orange_circle.png";
import React from 'react';
import burger from "../../assets/images/images_swap/burger.svg";
import button_trade from "../../assets/images/images_swap/button_trade.svg";
import board from "../../assets/images/images_swap/board.png";
import drop_down from "../../assets/images/images_safe/drop-down.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return ( 
        <>
            <header id="header" className="header_swa">
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
                <img className="orange-circle" src={orange_circle} alt="" />
                <img className="left_orange_circle" src={left_orange_circle} alt="" />
            </header>
        </>
    );
}

export default Header;