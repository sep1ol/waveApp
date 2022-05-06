// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    event NewWave( address indexed _from, uint256 timestamp, string message );

    struct Wave {
        address waver;
        string message;
        uint256 timestamps;
    }

    Wave[] waves;
 
    constructor() {
        console.log("[samsep1ol]: Contract constructor ran");
    }

    function wave( string memory _message ) public {
        totalWaves += 1;
        
        emit NewWave(msg.sender, block.timestamp, _message);
        
        waves.push( Wave(msg.sender, _message, block.timestamp) );

        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("Waves: [%d]", totalWaves);
        return totalWaves;
    }
    
    function getAllWaves() public view returns (Wave[] memory){
        return waves;
    }
}