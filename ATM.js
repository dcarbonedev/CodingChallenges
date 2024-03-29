// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

function solve(n) {
  if(n % 10 !== 0) return -1;
  let billCount = 0;
  let denoms = [500, 200, 100, 50, 20, 10];
  let denomCount = 0;
  while(n > 0) {
    let bills = Math.trunc(n / denoms[denomCount]);
    billCount += bills;
    n -= bills * denoms[denomCount++];
  }
  return billCount;
}

// more elegant solution
function solve(n) {
  if(n % 10 !== 0) return -1;
  let bills = 0;
  let denoms = [500, 200, 100, 50, 20, 10];
  for(let i = 0; i < denoms.length; i++) {
    bills += Math.trunc(n / denoms[i]);
    n = n % denoms[i];
  }
  return bills;
}