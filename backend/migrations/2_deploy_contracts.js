//var AuctionRepository = artifacts.require("./AuctionRepository.sol");
//var DeedRepository = artifacts.require("./DeedRepository.sol");
// DeedRepository => 0xbb55adc67f64d1e6f08ba7523ecd2eca2ee434a3
var ERC721BasicToken = artifacts.require("./ERC721BasicToken.sol");
var ThrowProxy = artifacts.require("./ThrowProxy.sol");

module.exports = function(deployer) {
  // deployer.deploy(AuctionRepository)
  //   .then(() => AuctionRepository.deployed())
  //   .then(_instance => console.log(_instance.address));
  
  // deployer.deploy(DeedRepository, "Ultra Auction NFT", "UANFT")
  // .then(() => DeedRepository.deployed())
  // .then(_instance => console.log(_instance.address));


  deployer.deploy(ERC721BasicToken)
  .then(() => ERC721BasicToken.deployed())
  .then(_instance => console.log(_instance.address));

  deployer.deploy(ThrowProxy)
  .then(() => ThrowProxy.deployed())
  .then(_instance => console.log(_instance.address));
};
