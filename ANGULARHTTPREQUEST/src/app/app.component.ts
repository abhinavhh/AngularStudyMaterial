import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Products } from './models/products.model';
import { ProductService } from './services/products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ANGULARHTTPREQUEST';
  allProducts : Products[] = [];
  isFetching: boolean = false;
  @ViewChild('productsForm') myForm!: NgForm;
  editMode: boolean = false;
  currentProductId?: string = '';
  errorMessage: string = '';
  errorSub!: Subscription;

  constructor(private http: HttpClient, private productService: ProductService) {

  }

  ngOnInit() {
    this.fetchProducts();
    this.errorSub = this.productService.error.subscribe((message) => {
      this.errorMessage = message;
    })
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(products: {pname: string, desc: string, price: number}) {
    if(!this.editMode){
      this.productService.createProduct(products);
    }
    else {
      this.productService.updateProduct(this.currentProductId, products);
    }
    
  }

  private fetchProducts() {
    this.isFetching = true;
    this.productService.fetchProduct().subscribe((res) => {
      this.allProducts = res;
      this.isFetching = false;
    }, (err) => {
      this.errorMessage = err.message;
    })
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId);
  }

  deleteAllProducts() {
    this.productService.deleteAllProduct();
  }

  onEditClick(productId: string) {
    // get the product based on the id
    let currentProduct = this.allProducts.find((p) => { return p.id === productId });
    console.log(this.myForm);
    
    this.myForm.setValue({
      pname: currentProduct?.pname,
      desc: currentProduct?.desc,
      price: currentProduct?.price,
    })
    this.currentProductId = currentProduct?.id;
    this.editMode = true;
    
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
