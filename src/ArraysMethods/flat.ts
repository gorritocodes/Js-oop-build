export default function flat(array: any[], number: number = Infinity) {
    const newArray = [...array];
    let value = number;
    //do a recursive function
    //base case
    if (
        newArray.every((e) => {
            !e.isArray();
        })
    ) {
        return newArray;
    }
    
    let finalArray = value > 0 ? [] : 
    
    for (let element of newArray) {
        if (!element.isArray()) {
            element = flat(element, number - 1);
            finalArray.push(...element);
        }
        finalArray.push(element);
    }

    return newArray;
}
