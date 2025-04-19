const { dcnpf } = require("@f0c1s/pkgs/dcnpf");

// console.log(dcnpf);

console.log(Object.isFrozen(dcnpf({ A: 10 })));
