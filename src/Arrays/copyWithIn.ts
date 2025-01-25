export default function copyWithIn(
    array: any[],
    target: number,
    start: number,
    end?: number | undefined
) {
    const newArray = [...array];
    const element = array[target];

    if (end) {
        for (let i = start; i <= end; i++) {
            newArray[i] = element;
        }
    } else {
        newArray[start] = element;
    }
    return newArray;
}
