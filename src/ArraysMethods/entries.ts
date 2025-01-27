export default function entries(array: any[]) {
    class Iterator {
        arr: any[];
        index: number;
        value: [number, any];
        constructor(arr: any[]) {
            this.arr = arr;
            this.index = 0;
            this.value = [this.index, this.arr[this.index]];
        }
        next() {
            this.value = [this.index, this.arr[this.index]];
            this.index++;
            return this;
        }
    }
    return new Iterator(array);
}
