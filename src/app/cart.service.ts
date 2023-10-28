import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  public cartItemList: any[] = [];
  public cartItemList1: any[] = [];
  public uniqueProducts: any[] = [];

  constructor() { }

  newArray: any[] = [];
  ngOnInit(): void {
  }


  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.getTotalPrice()
  }

  getCartItems() {
    if (this.newArray.length != 0) {
      this.replaceMatchingObject(this.uniqueProducts, this.newArray)
      this.cartItemList = this.uniqueProducts.flatMap(item => {
        const { count, product } = item;
        return new Array(count).fill({ ...product });
      });
      return this.uniqueProducts
    }

    let counts: any = {};
    this.cartItemList.forEach((product) => {
      const key = JSON.stringify(product);
      if (!counts[key]) {
        counts[key] = { count: 0, totalPrice: 0, product };
      }
      counts[key].count += 1;
      counts[key].totalPrice += product.price;
    });

    this.uniqueProducts = Object.values(counts);
    return this.uniqueProducts;
  }


  replaceMatchingObject(objects: any, replacement: any) {
    for (let i = 0; i < objects.length; i++) {
      const currentObject = objects[i];
      if (currentObject.count === replacement.count && currentObject.totalPrice === replacement.totalPrice) {
        objects[i] = replacement;
        break;
      }
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.uniqueProducts.map((a: any) => {
      grandTotal += a.totalPrice;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
  }

  getCartCount() {
    return this.cartItemList.length;
  }

  newUpdatedArray(data: any) {
    this.newArray = data
  }

  removeAllCart(){
    this.cartItemList = [];
    this.uniqueProducts = []
  }
}
