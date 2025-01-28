export default function every(
    array: any[],
    callback: (item: any) => boolean
): boolean {
    for (const item of array) {
        if (!callback(item)) {
            return false;
        }
    }
    return true;
}
