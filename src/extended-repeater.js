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
  if (!options.hasOwnProperty('additionSeparator') ) {
    options.additionSeparator="|"
  } 
  if (!options.hasOwnProperty('separator')) {
    options.separator="+"
  }
let as = options.additionSeparator
  let s = options.separator
 
  if (!options.hasOwnProperty('addition')) {
    options.addition = ""
     options.separator=""
  }
  
  let a= options.addition
  let addit = a+(as + a).repeat(options.additionRepeatTimes-1)
  let result = str+addit+(s+str+addit).repeat(options.repeatTimes-1)
  
  return result
}
