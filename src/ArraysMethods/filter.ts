export default function filter(
    array: any[],
    callback: (e: any) => boolean
): any[] {
    const newArray = [];
    for (const item of array) {
        // Is interesting to notice that this works as it is, but I'd rewrite it as an If statement because I don't know if Typescript will deprecate this behavior
        // callback(item) ? newArray.push(item) : undefined;
        if (callback(item)) {
            newArray.push(item);
        } else continue;
    }
    return newArray;
}
