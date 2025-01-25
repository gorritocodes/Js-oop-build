export default function sum(...numbers: number[]) {
    return numbers.reduce((total: number, number: number) => total + number, 0);
}
