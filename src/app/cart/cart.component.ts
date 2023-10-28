import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,
    private router: Router) { }

  cartData: any;
  ngOnInit(): void {
    this.getCartData1()
  }

  isEditable: boolean = false;

  inputfield: any;
  setEditable(idToMatch: number) {
    this.inputfield = idToMatch
  }

  getCartData1() {
    this.cartData = this.cartService.getCartItems()
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.getCartData1()
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  emptyCart() {
    this.cartService.removeAllCart();
    this.getCartData1()
  }

  buyProducts() {
    this.router.navigate(["/checkout"])
  }

  updateData() {
    this.inputfield = '';
    this.getCartData1()
  }

  item1: any;
  onInputChange1(item: any) {
    item.totalPrice = item.count * item.product.price;
    item.count = Number(item.count)
    this.item1 = item;
    this.cartService.newUpdatedArray(this.item1)
  }

}
