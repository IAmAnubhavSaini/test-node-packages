const { default: Sense } = require("@f0c1s/sense/node");

// import Sense from "@f0c1s/sense/node"; // if type:module in your package.json

// Define handlers
Sense.define("square", (x) => x * x);
Sense.define("multiply", ([x, y, z]) => x * y * z);
Sense.define("subtract", ([x, y]) => x - y);
Sense.define("squareRoot", (x) => Math.sqrt(x));
Sense.define("add", ([x, y]) => x + y);
Sense.define("divide", ([x, y]) => x / y);

// Use the DSL to compute quadratic roots
const D = (a, b, c) =>
    Sense.workflow(async () => {
        const b2 = await Sense.call("square", b);
        const ac4 = await Sense.call("multiply", [4, a, c]);
        const d = await Sense.call("subtract", [b2, ac4]);
        const sqrtD = await Sense.call("squareRoot", d);
        const r1 = await Sense.call("subtract", [-b, sqrtD]);
        const r2 = await Sense.call("add", [-b, sqrtD]);
        const x1 = await Sense.call("divide", [r1, 2 * a]);
        const x2 = await Sense.call("divide", [r2, 2 * a]);
        return [x1, x2];
    });

// Example with timeout (5s default)
D(1, -3, 2).then(console.log).catch(console.error); // [2, 1]
D(1, -2, 1).then(console.log).catch(console.error); // [1, 1]

// Example with error propagation
Sense.define("faulty", () => {
    throw new Error("Failed purposefully!");
});
Sense.call("faulty", []).catch(console.error); // "Error: Failed!"
