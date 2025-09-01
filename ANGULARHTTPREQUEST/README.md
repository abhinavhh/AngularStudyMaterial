# HTTP REQUEST IN ANGULAR

## SAMPLE REQUEST

- Create a from element with some inputs.
- Add a form reference `#productFrom` and assign the ngForm.
- Create a ngSubmit event on the form element wich calls a function which accepts the form input values as parameters.

```html
<form #productForm="ngForm" (ngSubmit)="onProductSubmit(productForm.value)"></form>
```

- Inside the ts file create a `HttpClient` instance and using that send a post request to the server.

```typescript
onProductSubmit(products: {pname: string, desc: string, price: number}) {
    this.http.post("backend-url", products).subscribe((response) => {
        console.log(response);
    })
}
```
