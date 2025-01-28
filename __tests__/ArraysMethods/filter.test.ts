import filter from "../../src/ArraysMethods/filter";

describe("The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.", () => {
    it("should return an array, that only contains the elements that pass the test.", () => {
        expect(filter([1, true, "a"], (e) => typeof e === "number")).toEqual([
            1,
        ]);
    });
    it("should be a shallow copy of the original array and not the same array", () => {
        expect(filter([1, true, "a"], (e) => e == e)).not.toBe([1, true, "a"]);
    });
    it("should", () => {
        expect(filter([1, true, "a"], (e) => typeof e === "string")).toEqual([
            "a",
        ]);
    });
});
