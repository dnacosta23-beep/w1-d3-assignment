'use strict'

import { validateQuantity } from './naturalNumber.js';

const testValue1 = 42;
const testValue2 = -5;
const testValue3 = "10";
const testValue4 = 0; 
const testValue5 = 3.14;

console.log('--- Running Validation Tests ---');
validateQuantity(testValue1); 
validateQuantity(testValue2); 
validateQuantity(testValue3); 
validateQuantity(testValue4);
validateQuantity(testValue5);