'use strict'

import isNaturalNumber from 'is-natural-number';

export function validateQuantity(value) {
  const isValid = isNaturalNumber(value, { includeZero: true });
  
  if (isValid) {
    console.log(`${value} is a valid natural number.`);
  } else {
    console.log(`${value} is NOT a natural number.`);
  }
  
  return isValid;
}