// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space 
// between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let result = '';
    for(let i = 0; i < string.length; i++) {
      if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) result += ' ';
      result += string[i];
    }
    return result;
}
  