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
  str = str.toString()
  if (!options.additionSeparator && options.addition) {
    options.additionSeparator="|"
  } else {
    options.additionSeparator=""
  }
  let as = String(options.additionSeparator)

  if (!options.separator) {
    options.separator="+"
  }

  let s = String(options.separator)
 
  if (!options.addition) {
    options.addition=""
  }
  
  let a = String(options.addition)
  let addit = ''
  for(let j = 1; j <=options.additionRepeatTimes; j++){
    addit+= as + a
  } 
  //a=a+addit
  let r = ''
  
  for (let i = 1; i <= options.repeatTimes -1; i++){
    r += str +addit+ s 
  }
let result = r+ str +addit
  return result
}
