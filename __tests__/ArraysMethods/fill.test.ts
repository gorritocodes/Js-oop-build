import fill from "../../src/ArraysMethods/fill";

describe("The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.", () => {
    it("should fill the array from start to finish, if no additional parameters are passed to the function", () => {
        expect(fill([1, 2, 3, 4, 5], true)).toEqual([
            true,
            true,
            true,
            true,
            true,
        ]);
    });
    it("should fill the array from @start to end if @start parameter is provided", () => {
        expect(fill([1, 2, 3, 4, 5], true, 2)).toEqual([
            1,
            2,
            true,
            true,
            true,
        ]);
    });
    it("should fill the array from @start to @end if both @start and @end parameters are provided", () => {
        expect(fill([1, 2, 3, 4, 5], true, 2, 4)).toEqual([
            1,
            2,
            true,
            true,
            5,
        ]);
    });
});
