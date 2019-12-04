const {isBinary} = require("../binary");
const {decimalToHexa,bin2hexa} = require("../utilities");

// by default it will treat the number as decimal 

const hexa = (number,type,show_it_with_0X) => {
    let hexaToReturn = null;
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
                hexaToReturn = decimalToHexa(number);
                break;
            case 'binary':
                hexaToReturn = bin2hexa(numberAsString);
                break;       
            default:
                break;
        }
    } 
    else {
        if(Number(numberAsString)) {
            hexaToReturn = decimalToHexa(number)
        } else if (isBinary(numberAsString)){
            hexaToReturn = bin2hexa(numberAsString);
        }
    }
    if(show_it_with_0X) {
        hexaToReturn = '0x'.concat(hexaToReturn);
    }
    return hexaToReturn;
}

const isHexa = (number) => {
    const regex = /\b(0[x,X])?[a-fA-F0-9]+\b/;
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    let numberAsString = number;
    if(typeof number !== 'string') {
        numberAsString = String(number)
    }
    if(regex.test(numberAsString))
        return true
    return false;
}


module.exports = {isHexa,hexa};

