export default function concat(
    array1: any[],
    array2: any[],
    ...args: any[]
): unknown[] {
    let concat = [...array1, ...array2];
    for (const arg of args) {
        concat = [...concat, ...arg];
    }
    return concat;
}
