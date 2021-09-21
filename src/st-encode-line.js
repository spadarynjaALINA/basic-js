import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  str=str.split('')
  console.log(str)
  let stack = [str[0]]
  let result=[]
  for (let i = 1; i < str.length; i++){
    if(stack[stack.length - 1] === str[i]) {
      stack.push(str[i])
    }
    else {
      result.push(stack.length)
      result.push(stack[stack.length - 1])
      stack = [str[i]]
      
    }
  }  result.push(stack.length)
      result.push(stack[stack.length - 1])
  return result.join('').split('1').join('')
}
