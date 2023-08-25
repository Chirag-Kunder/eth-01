var todolist = artifacts.require("./todolist.sol");

module.exports = function(deployer) {
  deployer.deploy(todolist);
};