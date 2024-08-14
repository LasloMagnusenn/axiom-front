import ellipse_howWeWork from "../../assets/images/images_safe/ellipse_howWeWork.svg";
import ellipse_howWeWorkTwo from "../../assets/images/images_safe/ellipse_howWeWorkTwo.svg";
import youtube from "../../assets/images/images_safe/youtube.svg";
import x from "../../assets/images/images_safe/x.svg";
import telegram from "../../assets/images/images_safe/telegram.svg";
import instagram from "../../assets/images/images_safe/instagram.svg";
import facebook from "../../assets/images/images_safe/facebook.svg";
import up from "../../assets/images/images_safe/up.svg";
import safe_dao from "../../assets/images/images_safe/safe_dao.webp";
import safe_dao_mobile from "../../assets/images/images_safe/safe_dao_mobile.webp";
import drop_down from "../../assets/images/images_safe/drop-down.svg";
import wallet from "../../assets/images/images_safe/wallet.svg";
import wallet_icon from "../../assets/images/images_safe/wallet_icon.svg";
import close from "../../assets/images/images_safe/close.svg";
import React from 'react';
import { Link } from "react-router-dom";


const HowWeWork = () => {

    return ( 
        <>
            <section className="howWeWorksafe">
                <img className="ellipse_howWeWork_safe" src={ellipse_howWeWork} alt="" />
                <img className="ellipse_howWeWorkTwo_safe" src={ellipse_howWeWorkTwo} alt="" />
                <img className="up_safe" src={up} alt="" />
                <div className="social-conteiner">
                    <div className="social">
                        <img className="facebook" src={facebook} alt="" />
                        <img className="youtube" src={youtube} alt="" />
                        <img className="instagram" src={instagram} alt="" />
                        <img className="x" src={x} alt="" />
                        <img className="telegram" src={telegram} alt="" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="howWeWork-conteiner_safe">
                        <Link to="/"><img className="close" src={close} alt="" /></Link>
                        <h2>Консервативная стратегия</h2>
                        <div className="howWeWork-conteiner-line_safe"></div>
                    </div>
                    <div className="safeDao-conteiner_safe desktop">
                        <img src={safe_dao} alt="" />
                        <div className="howWeWorkRectangle-conteiner_safe">
                            <div className="howWeWorkRectangle-conteiner-content_safe">
                                <div className="safe-conteiner-content_safe">
                                    <h2>SAFE DAO</h2>
                                    <p>
                                        Консервативная стратегия: основным принципом <br /> 
                                        консервативной стратегии является распределение инвестиций <br /> 
                                        между различными криптовалютами в зависимости от их <br />
                                        потенциала и рисков. На 50% от данного портфеля приходится <br />
                                        два криптоактива входящие в ТОП-2 по своей капитализации <br />
                                        (BTC и ETH)...
                                    </p>
                                    <div className="safe-conteiner-drop-down_safe">
                                        <img src={drop_down} alt="" />
                                        <p>Ещё</p>
                                    </div>
                                    <div className="safe-conteiner-wallet_safe">
                                        <button className="safe-conteiner-wallet-copy_safe"><img src={wallet_icon} alt="" /><p>0xfcA0d2D426...</p></button>
                                        <button className="safe-conteiner-wallet-img_safe"><img src={wallet} alt="" /></button>
                                    </div>
                                </div>
                                <div className="safe-conteiner-line_safe"></div>
                                <div className="safe-conteiner-button_safe">
                                        <h3>ТЕКУЩАЯ ЦЕНА</h3>
                                        <div className="safe-conteiner-button-many_safe">
                                            <h4>$</h4>
                                            <h2>500</h2>
                                        </div>
                                    <form action="/strategies/safedao/swap">
                                        <button  className="invest-button"><Link to="/strategies/safedao/swap">Инвестировать</Link></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="safeDao-conteiner_safe mobile">
                        <img src={safe_dao_mobile} alt="" />
                        <div className="howWeWorkRectangle-conteiner_safe">
                            <div className="howWeWorkRectangle-conteiner-content_safe">
                                <div className="safe-conteiner-content_safe">
                                    <h2>SAFE DAO</h2>
                                    <p>
                                        Консервативная стратегия: основным принципом <br /> 
                                        консервативной стратегии является распределение инвестиций <br /> 
                                        между различными криптовалютами в зависимости от их <br />
                                        потенциала и рисков. На 50% от данного портфеля приходится <br />
                                        два криптоактива входящие в ТОП-2 по своей капитализации <br />
                                        (BTC и ETH)...
                                    </p>
                                    <div className="safe-conteiner-drop-down_safe">
                                        <img src={drop_down} alt="" />
                                        <p>Ещё</p>
                                    </div>
                                    <div className="safe-conteiner-wallet_safe">
                                        <button className="safe-conteiner-wallet-copy_safe"><img src={wallet_icon} alt="" /><p>0xfcA0d2D426...</p></button>
                                        <button className="safe-conteiner-wallet-img_safe"><img src={wallet} alt="" /></button>
                                    </div>
                                </div>
                                <div className="safe-conteiner-line_safe "></div>
                                <div className="safe-conteiner-button_safe">
                                        <h3>ТЕКУЩАЯ ЦЕНА</h3>
                                        <div className="safe-conteiner-button-many_safe">
                                            <h4>$</h4>
                                            <h2>500</h2>
                                        </div>
                                        <button  className="invest-button"><Link to="/strategies/safedao/swap">Инвестировать</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowWeWork;
