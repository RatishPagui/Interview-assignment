import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }
  
  cartData: any;
  ngOnInit(): void {
    this.getCartData1()
  }

  getCartData1() {
    this.cartData = this.cartService.getCartItems()
  }

  getDate(){
    return new Date();
  }

  getOrderId(){
    const random10DigitNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return random10DigitNumber;
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

}
