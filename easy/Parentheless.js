const validParentheses = (s) => {
    const dicChar = { "{": "}", "[": "]", "(": ")", "<": ">" }
    let arrChar = [];
    for (let i = 0; i < s.length; i++) {
        const element = s.charAt(i);
        if (dicChar[element])
            arrChar.unshift(dicChar[element]);
        else if (element === arrChar[0]) {
            arrChar.shift(0);
            console.log(`Shift ${element}`)
        }
        else
            return false;
    }
    return arrChar.length == 0;
}

const str = "{{[](<>)}}";
console.log(validParentheses(str));