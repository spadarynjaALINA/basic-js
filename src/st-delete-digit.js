import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
let res =''
 let a= n.toString().split("").map((item)=>Number(item))
 let b = a.indexOf(Math.min(...a))
  for (let i = 0; i < a.length; i++){

    if (i !=b) {
     
      res+=a[i]
    }
  }return +res
}
