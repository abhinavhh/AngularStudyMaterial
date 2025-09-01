import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Subject, throwError } from "rxjs";
import { Products } from "../models/products.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    error = new Subject<string>();

    constructor(private http: HttpClient) {

    }

    createProduct(products: {pname: string, desc: string, price: number}) {
        console.log(products);
        const headers = new HttpHeaders({'myHeader': 'solidFlow'});
        this.http.post<{name: string}>('https://angular-training-533a4-default-rtdb.firebaseio.com/products.json123', products,{ headers: headers }).subscribe((response) => {
            console.log(response);
            alert('Successfully added product');
        }, (err) => {
            this.error.next(err.message);
        });
    }

    fetchProduct() {
        return this.http.get<{[key: string]: Products}>('https://angular-training-533a4-default-rtdb.firebaseio.com/products.json').pipe(map((res: any) => {
        const products = [];
        for(const key in res) {
            if(res.hasOwnProperty(key)) {
                products.push({...res[key], id: key});
            }
        }
            return products;
        }), catchError((err) => {
            // write logic for logging error
            return throwError(err);
        }))
    }

    deleteProduct(productId: string) {
        this.http.delete('https://angular-training-533a4-default-rtdb.firebaseio.com/products/'+productId+'.json').subscribe((res) => {
            console.log(res);
            alert('Product Deleted');
        });
    }

    deleteAllProduct() {
        this.http.delete('https://angular-training-533a4-default-rtdb.firebaseio.com/products.json').subscribe((res) => {
            console.log(res);
            alert('Deleted all products');
        });
    }

    updateProduct(id: string | undefined, value: Products) {
        this.http.put('https://angular-training-533a4-default-rtdb.firebaseio.com/products/'+id+'.json', value ).subscribe();
        alert('Product Details Updated');
    }
}