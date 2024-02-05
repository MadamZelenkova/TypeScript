import Buyable from "./Buyable";

export default class Muvie implements Buyable {
    constructor (
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string,
    readonly time: any,
    readonly price: number
    ) {}
}