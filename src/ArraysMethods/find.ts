export default function find(
    array: any[],
    callback: (e: any) => boolean
): unknown | undefined {
    for (const element of array) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
}
