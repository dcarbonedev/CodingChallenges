// Write Number in Expanded Form

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let result = [];
    let multiplier = 1;
    while(num > 0) {
      result.unshift((num % 10) * multiplier);
      num = Math.floor(num / 10);
      multiplier *= 10;
    }
    return result.filter(e => e).join(' + ');
}