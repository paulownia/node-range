# range

A range object that implements asynchronous iterable protocol and similar to python's range function.

## usage

```javascript
// import
const {range, Range} = require('@paulownia/range');


// create range
const r1 = range(5);
// or
const r2 = new Range(5);


// for-of loop
for (const i of range(5)) {
  console.log(i);    // => 0, 1, 2, 3, 4
}


// asynchronous for-of loop
(async () => {
  for await (const i of range(6)) {
    console.log(i);
  }
})();


// convert to array
const a1 = Array.from(range(7));
// or
const a2 = [...range(7)];
// or
const a3 = range(7).toArray();


// length
range(1, 5).length;   // => 4
```

### two paramaters (start, stop)

```javascript
[...range(1, 5)];   // => [1, 2, 3, 4];
```

### three paramaters (start, stop, step)

```javascript
[...range(1, 5, 2)];  // => [1, 3];
```


## required node versions

v8.9.0 or later
