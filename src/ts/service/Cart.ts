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
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  calcSumWithBonus(discount: number): number {
    const sum: number = this.calculateSum();
    return sum - (sum * discount) / 100;
  }

  removeItem(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
