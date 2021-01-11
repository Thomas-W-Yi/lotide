# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thomasyi/lotide`

**Require it:**

`const _ = require('@thomasyi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element of the array or string
* `tail(...)`: returns the rest of the array without the first element
* `middle([...])`: returns the middle of the array(if array has even number of element, return the middle 2 elements)
* `eqArrays([...], [...])`: returns true if the two input arrays are the same, vice versa
* `eqObjects({obj}, {obj})`: returns true if the two input objects are the same, vice versa
* `reverse(...)`: reverse a string
* `map([...], callback)`: returns a new array with each element modified through the callback function
* `without([arr1], [arr2])`: returns element that is not presendted in both arrays
* `flatten([..., [...]])`: returns a new arary with has no nested arrays (only work with 1 level nestded array)
* `findKey({obj}, callback)`: returns the key of the object based on the callback function
* `findKeyByValue({obj}, value)`: returns the key that matched the input value
* `countLetters(string, letter)`: returns the number of letter inside of a string
* `countOnly([...], {itemsToCount})`: returns an object which contains the key from the counted element in the input array, and the value is the number of the element presented in the array
* `takeUntil([...], callback)`: returns an array of element upto (but not include) the element that met the the condition of the input callback
* `tail(string)`: returns an object which containes each letter as keys, and their values are an array of the index postion inside the string