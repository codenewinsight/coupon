// Proxy contract for testing throws
// contract ThrowProxy {
//   address public target;
//   bytes data;

//   constructor() public { }

//   //prime the data using the fallback function.
//   function() public {
//     data = msg.data;
//   }

//   function execute() public returns (bool) {
//     return target.call(data);
//   }

//   function setTarget(address _target) public view {
//     target = _target;
//   }
// }
