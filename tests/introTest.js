import * as taskOne from '../js/intro.js';

describe("new String functions", () => {

    it.skip("shall interpolate string", () => {
        let helloString = taskOne.hello("Manuel");
        assert.equals(helloString, "Hello Manuel!");
    });
});

describe("destructuring", () => {

    it.skip("uses destructuring on object", () => {
        let result = taskOne.destructObject({first: "Ola", last: "Nordmann"});
        assert.equals(result, "Nordmann");
    });

    it.skip("uses destructuring on array", () => {
        let result = taskOne.destructArray(["Ola", "Kari"]);
        assert.equals(result, {
            0: "Ola",
            1: "Kari"
        });
    });
});

describe("parameters", () => {
    
    it.skip("uses default params", () => {
        let result = taskOne.defaultParams();
        assert.equals(result, 42);
    });

    it.skip("uses rest params params", () => {
        let result = taskOne.returnsRestParams(1,2,3,4,5);
        assert.equals(result, [2, 3, 4, 5]);
    });

    // This task is to change the test.
    it.skip("uses spread operator", () => {
        let inputArray = [1,2,3,4,5];
        // Call returnsRestParams with the array, not changing the array.
        let result = taskOne.returnsRestParams();
        assert.equals(result, [2, 3, 4, 5]);
    });
});

describe("arrow function", () => {

    it.skip("squares each number", () => {
        let result = taskOne.squares([1,2,3,4,5,6,7]);
        assert.equals(result, [1,4,9,16,25,36,49]);
    });
});