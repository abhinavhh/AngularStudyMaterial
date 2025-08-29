# Custom Pipes

1. Create a pipe file for defining the pipe
2. Inside the pipe use @Pipe() decorator and specify an argument inside it.

```typescript
@Pipe({
    name: 'percentage'
})
```

3. Implement the PipeTransform directive for the PercentagePipeClass
4. Using transform method accept arguments and send back the result

```typescript
transform(value: number, totalMarks: number) {
    return value / totalMarks * 100;
}
```

5. Use it in your view template

```html
<td>{{ table.data | percentage: totalMarks }}</td>
```

_Import and use the PercentClass in the app.module_

`Note: percentage is the name defined inside @pipe and totalMark is passed with it to the transform method`

_Make use of the methods after return to make the data format again_

```typescript
transform(value: number, totalMarks: number, decimal: number) {
    return ((value / totalMarks) * 100).toFixed(decimal);
}
```

## Pure Pipe

A pure pipe in angular is a type of data transformation tool that re-executes its logic only when its input data undergoes a "pure change".

`This means the transform method is called in the following scenarios.

- Primitive value change
- Object reference change

`A pure change is not when the input is a reference type and only its property value changes and not the  reference.`

#🔹 When to use impure pipe

If you want the pipe to re-run even when properties of an object/array change, you must mark the pipe as:

```typescript
@Pipe({
  name: 'myPipe',
  pure: false
})
```

`⚠️ But this is expensive because Angular will call it on every change detection cycle.`

**Async Pipe**

To handle asynchronous data.

Create a new property in app called total students which is of the type Promise with timeOut and resolve, reject; Return total number of students in the filtered array ( length ).

```typescript
resolve(this.filteredStudents.length);
```

```html
<h1>Total Students: {{ totalStudents | async }}</h1>
```
