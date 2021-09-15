import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value===undefined) {
    return  this.chain.push('( )') 
    } else {
      this.chain.push(`( ${value} )`)
      return this
    }
  },

  removeLink(position) {
    if (typeof position === "number" && position > 0 && position < this.chain.  length ) {
       this.chain.splice(position - 1, 1)
      return this
     
    } else {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
   }
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },
  
  finishChain() {
    let result = this.chain.join('~~')
    this.chain=[]
     return result
  }
};
