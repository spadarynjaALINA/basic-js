import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direction=true) {
    this.direct = direction
    return this.direct
 }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    } else {
      let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

      message = message.toUpperCase()
      key = key.toUpperCase()
      let code = []
      let j = 0
      for (let i = 0; i < message.length; i++) {
      let item = abc[(abc.indexOf(message[i]) + abc.indexOf(key[j])) % 26]
      if (abc.includes(message[i])){
          code.push(item)
          j++
          if (j == key.length){ 
          j = 0
        }
        } else {
          code.push(message[i])
        }
      }
     if (!this.direct) {
        return code.reverse().join('')
      } else {
        return code.join('')
      }
    }
  }
  decrypt(message, key) {
     if (!message || !key) {
      throw new Error('Incorrect arguments!')
    } else {
      let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

      message = message.toUpperCase()
      key = key.toUpperCase()
      let code = []
       let j = 0
       for (let i = 0; i < message.length; i++) {
       let item = abc[(abc.indexOf(message[i]) - abc.indexOf(key[j])+26)% 26]
         if (abc.includes(message[i])) {
           code.push(item)
           j++
           if (j == key.length) {
             j = 0
           }
         } else {
           code.push(message[i])
         }
      }
     if (!this.direct) {
        return code.reverse().join('')
      } else {
        return code.join('')
      }
    }
  }
}