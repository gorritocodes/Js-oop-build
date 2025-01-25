/**
 * The `at()` method of `Array` instance takes an integer value and returns the item at that index, allowing positive and negative integers.
 * Negative integers count back from the last item of the array.
 * @param array {any[]} The array to get the item from.
 * @param index {number} The index of the item to get.
 * @returns {unknown} The item at the specified index or undefined if the index is out of range.
 */

export default function at(array: any[], index: number): unknown[] | undefined {
    index = index < 0 ? array.length + index : index;
    return array[index];
}
