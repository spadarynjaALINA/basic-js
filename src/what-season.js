import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date ) {
 
  if (!date) {
   return 'Unable to determine the time of year!'
  } 
    
    else  if (Object.getOwnPropertyNames(date).length > 0 || !date instanceof Date ||date ==null || date==undefined || !date || !date ===NaN || typeof date !== 'object') {
    throw new Error('Invalid date!')
     } else {
       
  let date1 = new Date(date)
    
    let mons = date1.getMonth()
    
     if (mons <2) {
      return 'winter'
    }
    else if ( mons <5 ){
      return 'spring'
    }
    else if (mons <8) {
      return 'summer'
    }
     else if (mons <11) {
      return 'autumn'
       }
     else {
       return "winter"
       }
 }   
 } 

