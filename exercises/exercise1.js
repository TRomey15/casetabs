// This is kind of a bad solution because it only works with example string
// Ideally need a custom tokenizer and parser to build up an AST
// The date made this hard :)

const time = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/g;
const names = /".*"|[\w]+/g;
const doubleQuotes = /""/g;
const unbalancedBracket = ']}';

function toHash(str) {
    const parsedStr = str
        .replace(time, `"$&"`)
        .replace(names, `"$&"`)
        .replace(doubleQuotes, '"')
        .replace(unbalancedBracket, '}');

    return JSON.parse(parsedStr);
}