export default function findLastIndex(
    array: any[],
    callback: (element: any) => boolean
): number | undefined {
    for (let i = array.length - 1; i !== 0; i--) {
        let element = array[i];
        if (!callback(element)) {
            continue;
        }
        return i;
    }
    return undefined;
}
