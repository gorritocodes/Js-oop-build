import findIndex from "../../src/ArraysMethods/findIndex";

describe("The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.", () => {
    it("should return the first element of the array that returns true with the callback func", () => {
        expect(findIndex([1, 2, 3, 4, 5], (e) => e === 3)).toBe(2);
    });
    it("should return -1 if no element satisfy the testing function", () => {
        expect(findIndex([1, 2, 3, 4, 5], (e) => typeof e === "boolean")).toBe(
            -1
        );
    });
});
