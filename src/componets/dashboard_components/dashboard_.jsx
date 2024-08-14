import { useEffect, useState, useMemo } from "react";
import { useAccount } from "wagmi";
import { parseUnits, formatUnits } from "viem";
import circle_swap from "../../assets/images/images_swap/circle_swap.webp";
import bitcoinLogo from "../../assets/images/images_swap/bitcoin-logo.svg";
import greenbitcoinlogo from "../../assets/images/images_swap/logo2.svg";
import dashboardicon from "../../assets/images/images_swap/dashboard_icon.svg";
import ellipse_one from "../../assets/images/images_swap/ellipse_one.svg";
import ellipse_two from "../../assets/images/images_swap/ellipse_two.svg";
import ellipse_three from "../../assets/images/images_swap/ellipse_three.svg";
import ellipse_fore from "../../assets/images/images_swap/ellipse_fore.svg";
import token_icon from "../../assets/images/images_swap/token_icon.svg";
import down_chevron from "../../assets/images/images_swap/down_chevron.svg";
import vector from "../../assets/images/images_swap/vector.svg";
import parameters_vector from "../../assets/images/images_swap/parameters_vector.svg";
import parameters_one from "../../assets/images/images_swap/parameters_one.webp";
import parameters_two from "../../assets/images/images_swap/parameters_two.webp";
import parameters_three from "../../assets/images/images_swap/parameters_three.webp";
import parameters_fore from "../../assets/images/images_swap/parameters_fore.webp";
import upward_shift from "../../assets/images/images_swap/upward_shift.svg";
import left_green_circle from "../../assets/images/images_swap/left_green_circle.png";
import right_oreng_circle from "../../assets/images/images_swap/right_oreng_circle.png";
import vector_smart_object from "../../assets/images/images_swap/vector_smart_object.svg";
import React from "react";
import ellipse_one_mobile from "../../assets/images/images_swap/ellipse_one_mobille.png";
import ellipse_two_mobile from "../../assets/images/images_swap/ellipse_two_mobile.png";
import up from "../../assets/images/images_safe/up.svg";
import { CustomConnectButton } from "../swap_components/CustomConnect";
import {
  useSaleInfo,
  useBalanceOf,
  useDecimals,
  useAllowance,
  useRegularFeeRate,
  useTotalSupply
} from "../../hooks/useContactRead";
import {
  contracts,
  AAVEWBTCOwner,
  CURRENT_DAO_INDEX,
} from "../../utils/blockchain";
import { useApproveWrite, useBuyWrite } from "../../hooks/useContractWrite";
import { toOptionalFixed } from "../../utils/converter";
import btc from "../../assets/images/images_dashboard/btc.webp";
import altportfolio from "../../assets/images/images_dashboard/altportfolio.webp";
import air from "../../assets/images/images_dashboard/air.webp";
import safe from "../../assets/images/images_dashboard/safe.webp";
import ultra from "../../assets/images/images_dashboard/ultra.webp";


const Dashboard = () => {
  

  const isTxLoading = false; // Пример значения, заменить по необходимости
  const handleChangeReceive = (strategyName) => {
    console.log('Selected strategy:', strategyName);
  };
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const strategies = [
    { name: 'BTC', logo: btc },
    { name: 'ALTPORTFOLIO', logo: altportfolio },
    { name: 'ULTRA', logo: ultra },
    { name: 'AIR DROP', logo: air },
    { name: 'SAFE', logo: safe }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStrategySelect = (strategyName) => {
    setSelectedStrategy(strategyName);
    setIsDropdownOpen(false);
    handleChangeReceive(strategyName);
  };


  return (
    <>
      <section id="dashboard" className="dashboard">
        <div className="wrapper">
        <img className="up" src={up} alt="" />
          <div className="dashboard-conteiner">
            <div className="dashboard-conteiner-title">
              <h1 style={{fontWeight:"800"}} >Мой дашборд</h1>
              <div className="dashboard-conteiner-title-line"></div>
            </div>
            <div className="dashboard-conteiner-content">
              <div className="conteiner-content-briefcase">
                <h2>Инвестиционный портфель</h2>
                <img src={circle_swap} alt="" />
              </div>
              <div className="conteiner-content-deal">
                <h2>Быстрая сделка</h2>
                <div className="content-deal">
                <div className="content-deal-input">
                  <div className="deal-input">
                    <div className="deal-input-content">
                      <input
                        value={selectedStrategy}
                        type="text"
                        readOnly={isTxLoading}
                      />
                      {/* <p>7 533,10 USD</p> */}
                    </div>
                    <div className="deal-select" onClick={toggleDropdown}>
                      <div className="deal-select-token">
                        <img
                          src={greenbitcoinlogo}
                          alt=""
                          height={63}
                          width={63}
                        />
                        <p>axBTC</p>
                      </div>
                      <img
                        className="down-chevron"
                        src={down_chevron}
                        alt=""
                      />
                      {isDropdownOpen && (
                        <div className="dropdown">
                          {strategies.map((strategy, index) => (
                            <div
                              key={index}
                              className="strategy"
                              onClick={() => handleStrategySelect(strategy.name)}
                            >
                              <img src={strategy.logo} alt={strategy.name} height={40} width={40} />
                              <p>{strategy.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="conteiner-content-button">
                    <button className="content-button button_swap">
                      TOTAL PROFIT: {selectedStrategy}
                    </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parameters-conteiner">
            <div className="parameters-conteiner-content">
              <div className="content_item">
                <img src={parameters_one} alt="" />
                <h3>INS: 45,09%</h3>
              </div>
              <div className="content_item">
                <img src={parameters_two} alt="" />
                <h3>EXC: 29.01%</h3>
              </div>
              <div className="content_item">
                <img src={parameters_three} alt="" />
                <h3>MTV: 29.01%</h3>
              </div>
              <div className="content_item">
                <img src={parameters_fore} alt="" />
                <h3>CLS: 29.01%</h3>
              </div>
              <a href="">
                <img className="upward_shift" src={upward_shift} alt="" />
              </a>
            </div>
            <div className="parameters-conteiner-content-mobie">
                <div className="content_item">
                  <img src={parameters_one} alt="" />
                  <h3>INS: 45,09%</h3>
                </div>
                <div className="content_item">
                  <img src={parameters_two} alt="" />
                  <h3>EXC: 29.01%</h3>
                </div>
            </div>
            <div className="parameters-conteiner-content-mobie">
                <div className="content_item">
                  <img src={parameters_three} alt="" />
                  <h3>MTV: 29.01%</h3>
                </div>
                <div className="content_item">
                  <img src={parameters_fore} alt="" />
                  <h3>CLS: 29.01%</h3>
                </div>
            </div>
          </div>
          <img className="left_green_circle" src={left_green_circle} alt="" />
          <img className="right_oreng_circle" src={right_oreng_circle} alt="" />
          <img
            className="vector_smart_object"
            src={vector_smart_object}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
