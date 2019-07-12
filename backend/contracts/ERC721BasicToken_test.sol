pragma solidity ^0.5.0;
import "remix_tests.sol";
import "./ERC721/ERC721BasicToken.sol";

contract ERC721BasicTokenTest {
  ERC721BasicToken token;

  function beforeAll() public { 
      token = new ERC721BasicToken();
  }

  function checKBalanceShouldRevert() public payable returns (bool) {
      address a = address(0);
      (bool success, bytes memory data) = address(token).call.gas(40000).value(0)(abi.encode("balanceOf, [a]"));
       return Assert.equal(
      success,
      false,
      "safe multiplication did not revert"
    );
    //return Assert.equal(true, true, "initial value is not correct");
    // return Assert.equal(address(token).call.gas(40000).value(1 ether)(abi.encodeWithSignature("balanceOf(address)", address(0))),
    //    false,
    //    "Check balance of null address did not rever"
    // );
    //return Assert.equal(token.balanceOf(address(0)), 0, "initial value is not correct");
  }

}
