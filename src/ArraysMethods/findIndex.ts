export default function findIndex(
    array: any[],
    callback: (element: any) => boolean
): number {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (!callback(element)) {
            continue;
        } else return i;
    }
    return -1;
}
