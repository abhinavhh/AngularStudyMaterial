# HTTP REQUEST IN ANGULAR

## SAMPLE POST REQUEST

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

## Sample GET Request

When working with Firebase (or any backend returning objects instead of arrays), the response is usually a big object where each record is stored under a unique key.
For example, Firebase might return products like this:

```typescript
{
  "p1": { "name": "Laptop", "description": "HP EliteBook", "price": 1200 },
  "p2": { "name": "Phone", "description": "iPhone 14", "price": 800 }
}
```


But in our Angular app, we usually want an array of products like:

```typescript
[
  { "id": "p1", "name": "Laptop", "description": "HP EliteBook", "price": 1200 },
  { "id": "p2", "name": "Phone", "description": "iPhone 14", "price": 800 }
]
```


So, we need to transform the object into an array.

1. Create a Product Model (Class)
```typescript
export class Products {
  id!: string;          // Firebase key
  name!: string;        // Product name
  description!: string; // Product description
  price!: number;       // Product price
}
```


The !: tells TypeScript: “I will definitely assign a value to this property later.”

2. Make a GET Request with HttpClient

```typescript
this.http.get<{ [key: string]: Products }>('backend-url')
```

HttpClient.get<T>() → allows us to tell Angular the expected shape of the data.

Here, Firebase returns an object with keys (string) and values of type Products.

That’s why we use { [key: string]: Products }.

3. Transform the Response using map()
```typescript
.pipe(
  map((res) => {
    const products: Products[] = [];  // create an empty array

    for (const key in res) {          // loop through each property
      if (res.hasOwnProperty(key)) {  // check if the key belongs to the object
        products.push({
          ...res[key],   // spread the product data (name, description, price)
          id: key        // add the Firebase key as `id`
        });
      }
    }

    return products; // return as array
  })
)
```


## Sample Delete Method in Angular

```typescript
this.http.delete('backendurl/products/'+id+'.json')
```

## Sample Put Method in Angular

```typescript
this.http.put('backednurl/products/'+id+'.json', value)
```

`Note: Here value is the new value array set using setValue() method in the NgForm.