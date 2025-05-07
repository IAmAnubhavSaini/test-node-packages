const { default: Sense } = require("@f0c1s/sense/node");

// import Sense from "@f0c1s/sense/node"; // if type:module in your package.json

// on event
Sense.on("square", (x) => x * x);
Sense.on("multiply", ([x, y, z]) => x * y * z);
Sense.on("subtract", ([x, y]) => x - y);
Sense.on("squareRoot", (x) => Math.sqrt(x));
Sense.on("add", ([x, y]) => x + y);
Sense.on("divide", ([x, y]) => x / y);

// Use the DSL to compute quadratic roots
const D = (a, b, c) =>
    Sense.flow(async () => {
        const b2 = await Sense.need("square", b);
        const ac4 = await Sense.need("multiply", [4, a, c]);
        const d = await Sense.need("subtract", [b2, ac4]);
        const sqrtD = await Sense.need("squareRoot", d);
        const r1 = await Sense.need("subtract", [-b, sqrtD]);
        const r2 = await Sense.need("add", [-b, sqrtD]);
        const x1 = await Sense.need("divide", [r1, 2 * a]);
        const x2 = await Sense.need("divide", [r2, 2 * a]);
        return [x1, x2];
    });

// Example with timeout (5s default)
D(1, -3, 2).then(console.log).catch(console.error); // [2, 1]
D(1, -2, 1).then(console.log).catch(console.error); // [1, 1]

// Example with error propagation
Sense.on("faulty", () => {
    throw new Error("Failed purposefully!");
});
Sense.need("faulty", []).catch(console.error); // "Error: Failed!"
