var React = require('react');

var AccountDisplay = React.createClass({
  render: function(){
    var deleteThisAccount = function(){
      this.props.deleteAccount(this.props.account);
    }.bind(this)
    return(
      <div>
        <h2>Account Display</h2>
        <p>Owner: {this.props.account.owner}</p>
        <p>Balance: {this.props.account.amount}</p>
        <p>Account Type: {this.props.account.type}</p>
        <p>{this.props.account.details}</p>
        <button onClick={deleteThisAccount}>Delete Account</button>
      </div>
    )
  }
});

module.exports = AccountDisplay;