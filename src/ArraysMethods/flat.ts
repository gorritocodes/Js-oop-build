export default function flat(array: any[], number: number = Infinity): any[] {
    //Base case
    //if array is already flat return
    if (
        array.every((e) => {
            Array.isArray(e);
        })
    ) {
        return array;
    }
    if (number <= 0) {
        return array;
    }

    let flatArray: any[] = [];
    // concat arg
    for (let element of array) {
        if (Array.isArray(element)) {
            flatArray = [...flatArray, ...flat(element, number - 1)];
        } else {
            flatArray = [...flatArray, element];
        }
    }
    return flatArray;

    // each arg is array reduce and apply for each arg.
}
