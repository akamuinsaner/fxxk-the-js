const a = 'xmjyauz';
const b = 'mzjawxu';


function LCSwithDPBottomTop(a, b) {
  const m = a.length;
  const n = b.length;
  const arr = [];
  for (let t = 0; t < m + 1; t ++) {
    let a = [];
    for (let y = 0; y < n + 1; y ++) {
      a.push(0);
    }
    arr.push(a);
  }
  for (let i = 1; i < m + 1; i ++) {
    for (let j = 1; j < n + 1; j ++) {
      if (a.charAt(i) === b.charAt(j)) {
        arr[i][j] = (arr[i - 1][j - 1]) + 1;
      } else {
        arr[i][j] = Math.max((arr[i - 1][j]), (arr[i][j - 1]))
      }
    }
  }
  return arr[m][n];
}


function LCS(a, b) {
  const m = a.length;
  const n = b.length;

  if (m === 0 || n === 0) {
    return '';
  }

  if (a.charAt(m - 1) === b.charAt(n - 1)) {
    return LCS(a.slice(0, m - 1), b.slice(0, n - 1)) + a.charAt(m - 1);
  } else {
    if (LCSwithDPBottomTop(a.slice(0, m - 1), b.slice(0, n)) > LCSwithDPBottomTop(a.slice(0, m), b.slice(0, n - 1))) {
      return LCS(a.slice(0, m - 1), b.slice(0, n))
    } else {
      return LCS(a.slice(0, m), b.slice(0, n - 1))
    }
  }
}
console.log(LCS(a, b))