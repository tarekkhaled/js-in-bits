const {hexa2binary,decimal2binary} = require("../utilities");


// by default will treat numbers as decimal not hexa if user doesn't insert type
const binary = (number,type,separate_with_underScore) => {
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
                binaryToReturn = decimal2binary(number,separate_with_underScore);
                break;
            case 'hexa' :
                binaryToReturn = hexa2binary(numberAsString,separate_with_underScore)
                break;       
            default:
                break;
        }
    } 
    else {
        if(Number(numberAsString)) {
            binaryToReturn = decimal2binary(numberAsString,separate_with_underScore);
         } 
        else {
           binaryToReturn = hexa2binary(numberAsString,separate_with_underScore)
        }  
    }
    return binaryToReturn;
}


const isBinary = (number) => {
    const regex = /^[01]+$/g;
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    let numberAsString = number;
    if(typeof number !== 'string') {
        numberAsString = String(number)
    }
    if(regex.test(numberAsString)){
            return true;
    }
    return false;   
}


module.exports = {binary,isBinary};



