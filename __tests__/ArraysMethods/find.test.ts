import find from "../../src/ArraysMethods/find";

/*
The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use some().
If you need to find all elements that satisfy the provided testing function, use filter().
*/

describe("The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.", () => {
    it("should return undefined if the the element is not the array", () => {
        expect(
            find([1, 2, 3, 4, 5], (e) => typeof e === "boolean")
        ).toBeUndefined();
    });
    it("should return the first ocurrence of the item that satisfy the function", () => {
        expect(
            find(
                [false, false, 1, 2, 3, false],
                (e) => typeof e === "number" && e > 2
            )
        ).toBe(3);
    });
});
