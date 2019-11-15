const {isHexa} = require('../hexa');
const {hexa2binary,decimal2binary} = require("../utilities");


// by default will treat numbers as decimal not hexa if user doesn't insert type
const binary = (number,type,sperate_with_underScore) => {
    let binaryToReturn = null;
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    let numberAsString = number;
    if(typeof number !== 'string') {
        numberAsString = String(number)

    }
    if(type){
        switch (type) {
            case 'decimal':
                binaryToReturn = decimal2binary(number,sperate_with_underScore);
                break;
            case 'hexa' :
                binaryToReturn = hexa2binary(numberAsString,sperate_with_underScore)
                break;       
            default:
                break;
        }
    } 
    else {

        if(Number(numberAsString)) {
            binaryToReturn = decimal2binary(numberAsString,sperate_with_underScore);
         } 
     
         else {
           binaryToReturn = hexa2binary(numberAsString,sperate_with_underScore)
         }  

    }

    return binaryToReturn;
   
}


const isBinary = (number) => {
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    let numberAsString = number;
    const numbers = '23456789ABCDEF'
    if(typeof number !== 'string') {
        numberAsString = String(number)
    }
    for (let i = 0 ; i < numbers.length ; i++) {
        if(numberAsString.includes(numbers[i])){
            return false;
        }
    }
    if(numberAsString.toLowerCase().includes('0x')) {
        return false;
    }
    return true;
    
}


module.exports = {binary,isBinary};



