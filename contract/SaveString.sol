// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SaveString {

    string internal savedString;
    

    function saveString(string memory _string) public {
        savedString = _string;
    }


    function getString() public view returns(string memory) {
        return savedString;
    }
}