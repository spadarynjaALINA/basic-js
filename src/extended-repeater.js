import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.additionSeparator) {
    options.additionSeparator="|"
  }
  let as = options.additionSeparator.toString()

  if (!options.separator) {
    options.separator="+"
  }

  let s = options.separator.toString()
 
  if (!options.addition) {
    options.addition=""
  }
  
  let a = options.addition.toString()
  let addit = ''
  for(let j = 0; j < options.additionRepeatTimes; j++){
    addit+= as + a
  } 
  a=a+addit
  let r = ''
  
  for (let i = 0; i < options.repeatTimes-1 ; i++){
    r += s + str +a
  }
let result = str  +r
  return result
}
