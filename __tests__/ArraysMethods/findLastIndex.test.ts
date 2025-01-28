import findLastIndex from "../../src/ArraysMethods/findLastIndex";

describe("The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.", () => {
    it("should return the last element in the array that returns true to the callback", () => {
        expect(
            findLastIndex([1, 2, 3, 4, 5, true], (e) => typeof e === "number")
        ).toEqual(4);
    });
    it("should return undefined if no element fulfills the callback ", () => {
        expect(
            findLastIndex([1, 2, 3, 4, 5], (e) => typeof e === "boolean")
        ).toBeUndefined();
    });
});
