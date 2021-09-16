import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr ) {
  let stack = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== -1) {
      stack.push(arr[i])
    }
    stack =stack.sort((a,b)=>(a-b))
  }
  let newArr = []
  let j=0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push(arr[i])
    } else {
      newArr.push(stack[j])
      j++
    }
  } return newArr
}
