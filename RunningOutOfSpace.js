// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array) {
  let result = [];
  for(let i = 1; i < array.length+1; i++) {
    result.push(array.slice(0, i).join(''));
  }
  return result;
}

// one-liner
const spacey = a => a.map((_,i) => a.slice(0, i+1).join(''));