import flat from "../../src/ArraysMethods/flat";

describe("The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.", () => {
    it("should be able to not have a second arg and flat to infinity", () => {
        expect(flat([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should be able to run a limited amount of times", () => {
        expect(flat([1, [2, [3, [4, 5]]]], 2)).toEqual([1, 2, 3, [4, 5]]);
    });
    it("should be able to be called with infinity", () => {
        expect(flat([1, [2, [3, [4, 5]]]], Infinity)).toEqual([1, 2, 3, 4, 5]);
    });
    it("should return a flat array if array is already flat", () => {
        expect(flat([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    it("should return the same array if number is 0", () => {
        expect(flat([1, [2, [3, [4, [5]]]]], 0)).toEqual([
            1,
            [2, [3, [4, [5]]]],
        ]);
    });
    it("should return the same array if number is less than 0", () => {
        expect(flat([1, [2, [3, [4, [5]]]]], -1)).toEqual([
            1,
            [2, [3, [4, [5]]]],
        ]);
    });
});
