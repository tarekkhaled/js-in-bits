const {isHexa} = require('../hexa');
const {decimal,isDecimal} = require('../decimal');

const octal = (num,type) => {
    if(!num) {
        throw new Error('you didn\'t pass argument to the function !')
    }
   if(type) {
       switch (type) {
            case 'hexadecimal': {
                const toDec = decimal(num,'hexa');
                return Number((toDec).toString(8));
            }
            case 'hexa': {
                const toDec = decimal(num,'hexa');
                return Number((toDec).toString(8));
            }
            case 'binary': {
                const toDec = decimal(num,'binary');
                return Number((toDec).toString(8));
            }
            case 'decimal': {
                return Number((Number(num)).toString(8));
            }          
           default:
               break;
       }
   } else {
       if(isDecimal(num))
            return Number((Number(num)).toString(8));
        else if (isHexa(num)) {
            const toDec = decimal(num,'hexa');
            return Number((toDec).toString(8))
        }
        else {
            const toDec = decimal(num,'binary')
            return Number((toDec).toString(8));
        }
            
   }
}



module.exports = octal;