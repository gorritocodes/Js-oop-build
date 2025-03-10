import every from "../../src/ArraysMethods/every";

describe("The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.", () => {
    test("if any item in the array returns false, returns false", () => {
        let array = [1, 2, 3, 4, "a"];
        expect(every(array, (e) => typeof e === "number")).toBe(false);
    });
    test("if no item in the array returns false, returns true", () => {
        let array = [1, 2, 3, 4, 5];
        expect(every(array, (e) => typeof e === "number")).toBe(true);
    });
});
