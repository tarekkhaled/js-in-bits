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
    let noError_flag = false;
    if(!number) {
        throw new Error('you didn\'t pass argument to the function !')
    }
    let numberAsString = number;
    if(typeof number !== 'string') {
        numberAsString = String(number)
    }
    if(numberAsString[0] === '0' && numberAsString[1].toLowerCase() === 'x') {
        numberAsString = numberAsString.substring(2);
    }
   
    if(Number(numberAsString)) {
        return true;
    }
    for (let i = 0 ; i < numberAsString.length ; i++) {
        if(numberAsString[i].includes('A') || numberAsString[i].includes('B') || 
          numberAsString[i].includes('C')  || numberAsString[i].includes('D') || 
          numberAsString[i].includes('E')  || numberAsString[i].includes("F") || Number(numberAsString[i])){
            noError_flag = true 
        } else {
            noError_flag = false;
            break;
        }
    }
    if(noError_flag) {
        return true;
    }
    return false;
}


module.exports = {isHexa,hexa};

