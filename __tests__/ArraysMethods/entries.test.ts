import entries from "../../src/ArraysMethods/entries";
const array = [1, 2, 3, 4, 5];
const iterator = entries(array);

describe("The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.", () => {
    it("should be able to return an iterator", () => {
        expect(iterator.next().value).toEqual([0, 1]);
        expect(iterator.next().value).toEqual([1, 2]);
        expect(iterator.next().value).toEqual([2, 3]);
        expect(iterator.next().value).toEqual([3, 4]);
        expect(iterator.next().value).toEqual([4, 5]);
    });
});
