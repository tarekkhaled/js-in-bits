# js-in-bits

js-in-bits makes converting between decimal, binary, hexadecimal very easily in javascript 

## Installation

Use npm to install js-ib-bits.

```bash
npm install js-in-bits
```

## Usage

```javascript

// Main functions
const {hexa,decimal,binary} = require('js-in-bits')


hexa(10101010,'binary',true) # returns '0xAA'
hexa(10101010,'binary',false) # returns 'AA'
hexa(92,'decimal') # returns '5C'

binary('AA','hexa') # returns '10101010'
binary('22FFAAB8','hexa',true) # returns '0010_0010_1111_1111_1010_1010_1011_1000'
binary('200','decimal') # returns '11001000'


decimal('6F','hexa') # returns '111'
decimal('11001000','binary') # return '200'

/* NOTE:: In case you don't determine the type of number(second argument)that you want to convert it in "hexa()" | "binary()" 
be care that number will be treated as "decimal"  */

/* NOTE:: In case you don't determine the type of number(second argument)that you want to convert it in "decimal()" 
be care that number will be treated as "binary"  */

hexa(10101010) # returns '9A2112'
decimal('100') # returns 4 


// Extra functions 
const {isDecimal,isBinary,isHexa} = require('js-in-bits')

isDecimal(122) # returns true
isDecimal('A1222') # returns false
isDecimal(10101010) # returns true

isBinary(101010) # returns true
isBinary("10A21011") # returns false

isHexa('AEGFEDB') # returns false
isHexa('A69') # returns true
isHexa('0xAE') # returns true
isHexa('0XGT') # returns false


```

## Arguments 
Functions 
    - hexa(number,type,contain_ox),
    - binary(number,type,separate_with_underScore),
    - decimal(number,type)

// number: that number you want to convert it (required)
// type: type of number you want to convert it (required when a number can be represented in two formats)
// contain_ox : print the return value from hexa() concatenating with 0x (optional)
// separate_with_underScore : separate the return value from binary() after every 4 digits (will be useful when binary is bigger number) (optional)
   

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
