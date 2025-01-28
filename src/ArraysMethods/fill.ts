export default function fill(
    array: any[],
    value: any,
    start: number = 0,
    end?: number | undefined
) {
    const newArray = [...array];
    const final = end ? end : array.length;
    for (let i = start; i < final; i++) {
        newArray[i] = value;
    }
    return newArray;
}
