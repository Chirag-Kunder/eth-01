pragma solidity ^0.5.16;

contract ProfileLocation {
    uint public LocationCount = 0;
struct Location{
    uint id;
    string area;
    bool clear;
  }

  mapping(uint => Location) public locations;

  constructor() public {
    createLocation("Check Out https://github.com/Chirag-Kunder");
  }

function createLocation(string memory _area) public {
 LocationCount ++;
 locations[LocationCount] = Location(LocationCount, _area, false);   
}


}