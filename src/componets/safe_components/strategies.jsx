import usdt from "../../assets/images/images_safe/usdt.svg";
import circle from "../../assets/images/images_safe/circle.webp";
import React from 'react';


const Strategies = () => {

    return ( 
        <>
            <section className="strategies_safe">
                <div className="wrapper">
                    <div className="strategies-section_safe">
                            <div className="strategies-conteiner_safe">
                                <div className="strategies-title_safe">
                                <h2>Состав портфеля</h2>
                                <div className="howWeWork-conteiner-line_safe"></div>
                            </div>
                            <div className="strategies-conteiner-items_safe">
                                <div className="strategies-conteiner-item_safe">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                                <div className="strategies-conteiner-item_safe">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                            </div>
                            <div className="strategies-conteiner-items_safe">
                                <div className="strategies-conteiner-item_safe">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                                <div className="strategies-conteiner-item_safe">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                            </div>
                        </div>
                        <img className="circle_safe" src={circle} alt="" />
                    </div>
                    

                </div>
                
            </section>
        </>
    );
}

export default Strategies;