import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(private service:ProductService,private cartService:CartService){}

  ngOnInit(): void {
    this.getProductList()
  }

  productList:any;
  getProductList(){
    return this.service.getProductData().subscribe(
      (data)=>{this.productList = data}
    )
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
