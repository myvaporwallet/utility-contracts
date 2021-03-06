"use strict";

var _index = _interopRequireDefault(require("./index"));

var _web = _interopRequireDefault(require("web3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const web3 = new _web.default("https://api.myetherwallet.com/eth");
const tb = new _index.default(web3.currentProvider);
tb.getBalance("0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D").then(balances => {
  console.log(balances);
});