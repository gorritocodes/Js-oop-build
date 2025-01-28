import concat from "../../src/ArraysMethods/concat";

describe("concat function, should return a new array, with the content of the first array followed by the content of the second array", () => {
    test("should return a new array, with the content of the first array followed by the content of the second array", () => {
        expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("should be able to concatenate multiple arrays", () => {
        expect(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ]);
    });
    test("should be able to handle for or more arrays", () => {
        expect(concat([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12])).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        ]);
    });
    test("should only remove one level of nesting in the arrays concatenated", () => {
        expect(concat([1, [2], 3], [4, 5, 6], [7, [8], 9])).toEqual([
            1,
            [2],
            3,
            4,
            5,
            6,
            7,
            [8],
            9,
        ]);
    });
});
