var React = require('react');

var AccountsBox = React.createClass({
  render: function(){
    var accountNodes = this.props.bank.filteredAccounts(this.props.type).map(function(account, index){
      var changeToAccount = function(){
        this.props.changeAccount(account);
      }.bind(this)
      return(
        <li key={index}><a href='#' onClick={changeToAccount}>{account.owner}</a>, balance: £{account.amount}</li>
      )
    }.bind(this))
    return(
      <div>
        <h2>{this.props.type}</h2>
        <p>Total: £{this.props.bank.totalCash(this.props.type)}</p>
        {accountNodes}
      </div>
    )
  }
});

module.exports = AccountsBox;