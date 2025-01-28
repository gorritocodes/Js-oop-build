export default function find(
    array: any[],
    callback: (e: any) => boolean
): unknown | undefined {
    for (const element in array) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
}
