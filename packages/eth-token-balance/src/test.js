import TokenBalance from "./index";
import Web3 from "web3";
const web3 = new Web3("https://api.myetherwallet.com/eth");
const tb = new TokenBalance(web3.currentProvider);
tb.getBalance("0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D").then(balances => {
  console.log(balances);
});
