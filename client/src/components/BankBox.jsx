var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');
var AccountsBox = require('./AccountsBox.jsx');
var AccountDisplay = require('./AccountDisplay.jsx');

var BankBox = React.createClass({
  getInitialState: function(){
    return {accounts: sampleAccounts, currentAccount: sampleAccounts[0]};
  },
  changeCurrentAccount: function(account){
    this.setState({currentAccount: account});
  },
  addInterest: function(){
    var bank = new Bank();
    for(var account of this.state.accounts){
      bank.addAccount(account);
    }
    bank.addInterest();
    this.setState({accounts: bank.accounts});
  },
  deleteAccount: function(account){
    for (var i = 0; i < this.state.accounts.length; i++) {
      if (this.state.accounts[i].owner == account.owner) {
        var newAccounts = this.state.accounts
        newAccounts.splice(i, 1);
        this.setState({accounts: newAccounts});
      }
    }
  },
  render: function(){
    var bank = new Bank();
    for(var account of this.state.accounts){
      bank.addAccount(account);
    }
    return(
      <div>
        <h1>React Bank Box</h1>
        <h2>Total: £{bank.totalCash()}</h2>
        <button onClick={this.addInterest}>Add Interest</button>
        <AccountsBox type='personal' bank={bank} changeAccount={this.changeCurrentAccount}></AccountsBox>
        <AccountsBox type='business' bank={bank} changeAccount={this.changeCurrentAccount}></AccountsBox>
        <AccountDisplay account={this.state.currentAccount} deleteAccount={this.deleteAccount}></AccountDisplay>
      </div>
    )
  }
});

module.exports = BankBox;