# iterable-range

A range object that implements iterable protocol and similar to python's range function.

## usage

```
// import
const {range, Range} = require('iterable-range');

// create range object
const r1 = new Range(5); // => 0, 1, 2, 3, 4
// or
const r2 = range(5);

// specify an initial number
const r3 = range(2, 5);  // => 2, 3, 4

// specfy step
const r4 = range(2, 9, 3); // => 2, 5, 8


// for-of loop
for (const i of range(5)) {
  console.log(i);    // => 0, 1, 2, 3, 4
}

// convert to array
const a1 = Array.from(range(1, 6, 2));
// or
const a2 = [...range(1, 6, 2)]
// or
const a3 = range(1, 6, 2).toArray();

// length property
range(1, 5).length;
```

## asynchronous iterators

```
(async () => {
  for await (const i of range(5)) {
    console.log(`a: ${i}`);
  }
})();
(async () => {
  for await (const i of range(5)) {
    console.log(`b: ${i}`);
  }
})();
```

```
a: 0
b: 0
a: 1
b: 1
a: 2
b: 2
a: 3
b: 3
a: 4
```

## require

Node: v8.9.0 or later
