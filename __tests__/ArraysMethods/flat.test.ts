import flat from "../../src/ArraysMethods/flat";

describe("The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.", () => {
    it("", () => {
        expect(flat([0, 1, [2, [3, [4, 5]]]])).toBe([1, 2, 3, 4, 5]);
    });
    it("", () => {
        expect(flat([0, 1, [2, [3, [4, 5]]]], 2)).toBe([1, 2, 3, [4, 5]]);
    });
    it("", () => {
        expect(flat([0, 1, [2, [3, [4, 5]]]], Infinity)).toBe([
            1,
            2,
            3,
            [4, 5],
        ]);
    });
});
