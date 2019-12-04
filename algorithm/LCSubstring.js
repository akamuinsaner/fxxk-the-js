const a = 'ababc';
const b = 'babca';

function LCSubstring(a, b) {
  const m = a.length;
  const n = b.length;
  let max = 0;
  let endIndex = 0;
  const arr = [];
  for (let i = 0; i <= m; i ++) {
    let ar = [];
    for (let j = 0; j <= n; j ++) {
      ar.push(0);
    }
    arr.push(ar);
  }

  for (let i = 1; i <= m; i ++) {
    for (let j = 1; j <= n; j ++) {
      if (a.charAt(i - 1) === b.charAt(j - 1)) {
        arr[i][j] = arr[i - 1][j - 1] + 1;

        if (arr[i][j] > max) {
          max = arr[i][j];
          endIndex = i;
        }
      }
    }
  }

  return {
    len: max,
    substr: a.slice(endIndex - max, endIndex),
  }
}

console.log(LCSubstring(a, b))