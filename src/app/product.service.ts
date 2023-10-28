import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http1: HttpClient) { }

  getUrl = "http://localhost:8000/products";
  getProductData() {
    return this.http1.get(this.getUrl)
  }

  postUrl = "http://localhost:8000/products"
  postProductData(i: any) {
    return this.http1.post(this.postUrl, i)
  }

  deleteUrl: String = "http://localhost:8000/products"
  deleteProductData(id: any) {
    return this.http1.delete(`${this.deleteUrl}/${id}`)
  }

 putUrl: String = "http://localhost:8000/products"
  updateProductData(id: any, data: any) {
    return this.http1.put(`${this.putUrl}/${id}`, data)
  }

}
