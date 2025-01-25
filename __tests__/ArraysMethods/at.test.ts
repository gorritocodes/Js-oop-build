import { expect, test } from "@jest/globals";
import at from "../../src/ArraysMethods/at";
const array = [1, 2, 3, 4, 5];

describe("at function, should return the element at the given index", () => {
    test("should return element at positive index when index is within bounds", () => {
        expect(at(array, 2)).toBe(3);
    });
    test("should return element at negative index when index is within bounds", () => {
        expect(at(array, -1)).toBe(5);
    });
    test("should return undefined when index is out of bounds", () => {
        expect(at(array, 5)).toBeUndefined();
    });
    test("should return undefined when negative index is out of bounds", () => {
        expect(at(array, -6)).toBeUndefined();
    });
});
