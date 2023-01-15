// Import web3 library
const Web3 = require('web3');

// Connect to the Ethereum network
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));

// Check if the user has MetaMask installed
if (typeof web3 !== 'undefined') {
    // Use the user's MetaMask provider
    web3 = new Web3(web3.currentProvider);
} else {
    // If MetaMask is not installed, use a fallback provider
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

// Get the user's address
web3.eth.getAccounts().then(accounts => {
    const userAddress = accounts[0];
    console.log('User address: ', userAddress);
});

// Get the balance of the user's address
web3.eth.getBalance(userAddress).then(balance => {
    console.log('User balance: ', balance);
});

// Send a transaction to another address
const recipientAddress = '0x1234567890abcdef';
const amount = '1000000000000000000'; // 1 ether
web3.eth.sendTransaction({
    from: userAddress,
    to: recipientAddress,
    value: amount
}).then(receipt => {
    console.log('Transaction receipt: ', receipt);
});

