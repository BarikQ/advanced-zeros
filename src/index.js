module.exports = function getZerosCount(number, base) {
  factorize(number, base);
  compare(number, base);

  const answer = final[0];

  return answer;
}

let power = [];
let final = [];
let result = [];
let denominator = 0;
let slag = 0;
let min = 0;
let k = 0;
let j = 0;

function factorize(number, base) {
  while (k <= base) {
    result[k] = 0;
    power[k] = 0;
    k++;
  }

  for (let i = 2; i * i <= base; i++) {

    while (base % i === 0) {
      power[i]++;
      base /= i;
    }
  }

  if (base != 1) {
    power[base]++;
  }

  return 0;
}

function compare(number, base) {
  k = 1;

  for (let i = 0; i < power.length; i++) {
    k = 1;
    if (power[i] !== 0) {
      while (true) {
        denominator = Math.pow(i, k);
        slag = Math.floor(number / denominator);
        if (slag < 1) break;
        else result[i] += slag;
        k++;
      }
    }
    result[i] = Math.floor(result[i] / power[i]);
    if (!isNaN(result[i])) {
      final[j] = result[i];
      j++;
    }
  }

  final.sort(compare_Numeric);

  return final[0];
}

function compare_Numeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
