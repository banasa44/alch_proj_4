// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ContractInterface {
    function attempt() external;
}

contract Contract {
    ContractInterface public contractInstance;

    constructor(address contractAddress) {
        contractInstance = ContractInterface(contractAddress);
    }

    function callAttempt() public {
        contractInstance.attempt();
    }
}
