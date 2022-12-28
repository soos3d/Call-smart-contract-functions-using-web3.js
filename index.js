const Web3 = require("web3");
require('dotenv').config();

// Initialize connection to the node. 
const node_url = process.env.AVALANCHE_CHAINSTACK;
const web3 = new Web3(new Web3.providers.HttpProvider(node_url))

// Smart contract ABI
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_string",
				"type": "string"
			}
		],
		"name": "saveString",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Address from the deployed smart contract
const address = "0xcE89A5b4F7D6Baa5169662a388570bA4c8b2492A"

// Create smart contract instance
const contract = new web3.eth.Contract(abi, address)

// call a view/pure function
contract.methods.getString().call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("The saved word is: ", res)
  })

