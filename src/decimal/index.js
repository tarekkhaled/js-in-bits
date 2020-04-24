const {isBinary} = require("../binary");
const {isHexa} = require("../hexa")


const isDecimal = (number) => {
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    if(Number(number)) {
        return true;
    } else {
        return false;
    }
}

// by default will treat it as binary first if user doesn't enter type
const decimal = (number,type) => {
    let decimalToReturn = null;
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    let numberAsString = number ;
    if(typeof numberAsString !== 'string') {
        numberAsString = String(number);
    }
    if(type){
        switch (type) {
            case 'hexa' || 'hexadecimal':
                decimalToReturn = parseInt(numberAsString,16)
                break;
            case 'binary':
                decimalToReturn = parseInt(numberAsString,2)
                break;
            case 'octal':
                decimalToReturn = parseInt(numberAsString,8)
                break;     

            default:
                break;
        }
    } else {
        if(isBinary(numberAsString))
            decimalToReturn = parseInt(numberAsString,2)
        else if(isHexa(numberAsString))
            decimalToReturn = parseInt(numberAsString,16)
    }
   
        return Number(decimalToReturn)
};


module.exports = {isDecimal,decimal};




