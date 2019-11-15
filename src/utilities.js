const {hexaSmallTable,hexaTable} = require("./hexaTables");


const bin2hexa = (numberAsString) => {
    const binOutput = [];
    let i = 0 ; 
    while( i < numberAsString.length ) {
        let text = `${numberAsString[i]}${numberAsString[i+1]}${numberAsString[i+2]}${numberAsString[i+3]}`;
        binOutput.push(parseInt(text,2).toString(16).toUpperCase())
        i = i + 4;
    }    
    return binOutput.join("");
}


const decimalToHexa =   (decimal) => {
    let number = Math.floor(decimal / 16);
    const hexaArray = [];
    while (number !== 0) {
        let reminder = Math.floor(decimal)-(number*16);
        if(hexaSmallTable[reminder]) {
            hexaArray.unshift(hexaSmallTable[reminder]);
        } else {
            hexaArray.unshift(Math.floor(reminder));
        }
        if((Math.floor(number/16)) === 0) {
            if(hexaSmallTable[number]) {
                hexaArray.unshift(hexaSmallTable[number])
            } else {
                hexaArray.unshift(number);    
            }
            break;
        }
        number = Math.floor(number/16);
        decimal = Math.floor(decimal/16);
    }
    return hexaArray.join("");
}


const hexa2binary = (numberAsString,sperate_with_underScore) => {
    let binaryToReturn = "";       
    for(let i = 0 ; i < numberAsString.length ; i++) {
        binaryToReturn += hexaTable[numberAsString[i]];
        if(sperate_with_underScore && (i !== numberAsString.length - 1)) {
            binaryToReturn += "_";
        }
    }
    return binaryToReturn;
}


const decimal2binary = (numberAsString,sperate_with_underScore) => {
    const binaryNumber = Number(numberAsString).toString(2).split("");
    let counter = 4 ;
    if(sperate_with_underScore) {
         while(counter < binaryNumber.length) {
             binaryNumber.splice(counter,0,'_')
             counter += 5;
         }
         return binaryNumber.join("")
    }
    return binaryNumber.join("");
}


module.exports = {
    bin2hexa,
    decimalToHexa,
    hexa2binary,
    decimal2binary
}

