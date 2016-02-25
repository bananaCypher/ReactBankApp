var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');
var React = require('react');
var ReactDOM = require('react-dom');

var BankBox = require('./components/BankBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <BankBox></BankBox>,
    document.getElementById('app')
  );
};
