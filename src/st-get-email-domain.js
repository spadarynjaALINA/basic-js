import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let domen = email.split('')
  for (let i = domen.length-1; i>=0; i--){
    if (domen[i] === '@') {
       email = email.slice(i+1)
       return email
    }
  }
}
