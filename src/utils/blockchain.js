import { erc20Abi } from "viem";

import XDAOabi from "./abi/XDAO.json";

// export const contracts = {
//   XDAO: {
//     address: "0x0cf784bba0FFA0a7006f3Ee7e4357E643a07F6e7",
//     abi: XDAOabi,
//   },
//   XDAOToken: {
//     address: "0x71eebA415A523F5C952Cc2f06361D5443545Ad28",
//   },
//   WBTCToken: {
//     address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
//   },
//   AAVEWBTCToken: {
//     address: "0x078f358208685046a11C85e8ad32895DED33A249",
//   },
//   LPToken: {
//     address: "0x7f1Dd51843D8C4106213d0a4C3a7e96306C5d86F",
//   },
//   AxiomToken: {
//     address: "0x09a613f9d29e2c14238b219bd0b78c61ad7d40c9",
//   },
//   erc20Abi,
// };


export const contracts = {
  XDAO: {
    address: "0x0cf784bba0FFA0a7006f3Ee7e4357E643a07F6e7",
    abi: XDAOabi,
  },
  XDAOToken: { // только для проверки условия
    address: "0x71eebA415A523F5C952Cc2f06361D5443545Ad28",
  },
  WBTCToken: { // токен который продаем
    address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  },
  AAVEWBTCToken: { // только для отображения внизу на фронте
    address: "0x078f358208685046a11C85e8ad32895DED33A249",
  },
  // AAVEWBTCToken: { // только для отображения внизу на фронте
  //   address: "0x078f358208685046a11C85e8ad32895DED33A249",
  // },


  LPToken: { // токен за который покупаем
    address: "0xd1903ee89EF554dDC92cD2C3143F752BC85FDB3c",
  },
  AxiomToken: { //для навигации и получения sale info
    address: "0xf878d10a8b95bdee2747bd1faf7a3f3e2b7f19be",
  },
  erc20Abi,
};


export const AAVEWBTCOwner = "0xf878d10a8b95bdee2747bd1faf7a3f3e2b7f19be";

export const CURRENT_DAO_INDEX = 0;
