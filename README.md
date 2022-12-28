# Call smart contract functions using web3.js

This simple project shows you how to interact with a smart contract using the JavaScript library `web3.js`.

Find the code showcasing how to call a view/pure function from a smart contract in the `index.js` file. 

The `contract` directory holds the smart contract used for this project. 

* In this case, it is a simple smart contract that allows a user to store and retrive a string.

## Requirements

* [Node.js](https://nodejs.org/en/download/)
* Access to an Avalanche Fuji testned node

## Quickstart

### Deploy an Avalanche Fuji node

1. [Sign up with Chainstack](https://console.chainstack.com/user/account/create).  
1. [Deploy a node](https://docs.chainstack.com/platform/join-a-public-network).  
1. [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials). 

### Clone the repo.

```sh
git clone https://github.com/soos3d/Call-smart-contract-functions-using-web3.js.git
```

### Install dependencies.

```sh
npm i
```

### Setup .env file

1. Rename the `.env.sample` file to `.env`.
1. Add the Chainstack Avalanche Fuji endpoint.

### Run the script

```sh
node index.js
```

This script works out of the box because the smart contract is already deployed. 

## Use on any smart contract

To use this script for another smart contract, edit the following:

* The `abi` variable.

```js
const abi = [ADD_THE_NEW_ABI]
```

* The smart contract address.

```js
const address = "NEW_ADDRESS"
```

* Replace with the new function's name.

```js
contract.methods.aFunction().call
```