const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let outStr = "";
    let msgLength = expr.length / 10;
    for (let i = 0; i < msgLength; i++) {
        outStr += mesToCodeSymb(expr, i);
    }

    function mesToCodeSymb(expr, n) {

        let currStr = "";
        for (let i = (n * 10); i < (n * 10) + 10; i++) {
            currStr += expr[i];
        }
        if (currStr == "**********") {
            return (" ");
        }
        let decodeSymb = "";
        let currLet = "";
        for (i = 0; i < 10;) {
            currLet = "";
            currLet += currStr[i];
            currLet += currStr[i + 1];
            i += 2;
            if (currLet === "10") {
                decodeSymb += ".";
            }
            if (currLet === "11") {
                decodeSymb += "-";
            }
        }
        return (MORSE_TABLE[decodeSymb]);
    }
    return outStr;
}

module.exports = {
    decode
}