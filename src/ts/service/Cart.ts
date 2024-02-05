import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  calculateSum(): number {
    let amount: number = 0;
    const items = this.items;
    items.forEach((item) => {
      amount += item.price;
    });
    return amount;
  }

  calcSumWithBonus(discount: number): number {
    const sum: number = this.calculateSum();
    return sum - sum * discount / 100;
  }

  removeItem(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
