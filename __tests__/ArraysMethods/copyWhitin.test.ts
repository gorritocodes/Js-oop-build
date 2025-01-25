import { expect, test } from "@jest/globals";
import copyWhitIn from "../../src/Arrays/copyWithIn";

describe(`copyWithin function, should return a new array, with the content of the first array modified copying an element in a specific index to the place specified in the third argument. 
    Also is theres a fourth argument, it allows to copy from the position specified in the third argument to the position specified in the fourth argument.`, () => {
    test("should return a new array, not modifying the original array", () => {
        const array = [1, 2, 3];
        expect(copyWhitIn(array, 1, 0)).not.toBe(array);
    });
    test("should return a new array, not modifying the original array", () => {
        expect(copyWhitIn([1, 2, 3], 1, 0)).toEqual([2, 2, 3]);
    });
    test("should return a new array, put the copy of the element in the index specified in the third argument up through the index specified in the fourth argument", () => {
        expect(copyWhitIn([1, 2, 3, 4, 5], 1, 0, 2)).toEqual([2, 2, 2, 4, 5]);
    });
});
