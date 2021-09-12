import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  
  if (Array.isArray(arr)) {
    let stack = []
    let instruction =['--double-next','--discard-prev','--discard-next','--double-prev']
  if (!arr.length) {
    return []
    }
    if (arr[0] === instruction[1] || arr[0] === instruction[3]){
      return  arr.slice(1)
    }
if ( arr[arr.length - 1] === instruction[0] || arr[arr.length - 1] === instruction[2]) {
       return  arr.slice(0,-1)
      }
    
    for (let i = 0; i < arr.length; i++) {
        
      if (arr[i] === '--double-next') {
          stack.push(arr[i + 1])
      }
      else if (arr[i] === '--discard-prev') {
          stack.pop()     
      }
      else if (arr[i] === '--discard-next') {
         if (arr[i + 2] === '--discard-prev') {
          stack.push(arr[i + 1])
        }
        i++
     } else if (arr[i] === '--double-prev') {
       if (arr[i - 2] !== '--discard-next') {
          stack.push(arr[i - 1])
        }
      } else {
        stack.push(arr[i])
      }
      
    } return stack
  } else {throw new Error("'arr' parameter must be an instance of the Array!")
  }
}
