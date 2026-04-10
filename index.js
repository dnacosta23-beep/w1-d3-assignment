'use strict'

import { validateQuantity } from './naturalNumber.js';

const testValue1 = 42;
const testValue2 = -5;
const testValue3 = "10";
const testValue4 = 0; 
const testValue5 = 3.14;

console.log(validateQuantity(testValue1)); 
console.log(validateQuantity(testValue2)); 
console.log(validateQuantity(testValue3)); 
console.log(validateQuantity(testValue4)); 
console.log(validateQuantity(testValue5)); 
