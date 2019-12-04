// there are two strings a and b, the length of a is m,
// the length of b is n, if they are both ends with same charactor,
// the LCS is LCS(a[1, m - 1], LCS(b[1, n - 1]))
// if they are ends with different charactors, the LCS is the longer of
// LCS(a[1, m - 1], b[1, n]) and LCS(a[1, m], b[1, n - 1])

//common

const a = 'ABCBDABDHDUEHFEFOHIFHIWVHHRWPIJFREPJORVHERVVJVEVJEIPVETOIVNEOIOIVBOERIVBOERHBBROIBRJOBRJBOITBJO';
const b = 'BDCABARVNRNVOEVNETVPEVKBPTKPJEEJJBEPOBKBKBKT{KBPTKPTEBPOEBJTTEPEBTKOPEPJBTPEJBEBJPTBJPTEKBOPETBKB';

function LCS(a, b) {
  const m = a.length;
  const n = b.length;
  if (m == 0 || n == 0) {
    return 0;
  }
  if (a.charAt(m - 1) === b.charAt(n - 1)) {
    return LCS(a.slice(0, m - 1), b.slice(0, n - 1)) + 1;
  } else {
    return Math.max(LCS(a.slice(0, m), b.slice(0, n - 1)), LCS(a.slice(0, m - 1), b.slice(0, n)));
  }
}

function LCSwithDPTopBottom(a, b, memo = new Map()) {
  const m = a.length;
  const n = b.length;
  if (m == 0 || n == 0) {
    return 0;
  }

  if (a.charAt(m - 1) === b.charAt(n - 1)) {
    if (!memo.has(`${m}-${n}`)) {
      memo.set(`${m}-${n}`, LCSwithDPTopBottom(a.slice(0, m - 1), b.slice(0, n - 1), memo) + 1)
    }
    return memo.get(`${m}-${n}`);
  } else {
    if (!memo.has(`${m}-${n - 1}`)) {
      memo.set(`${m}-${n - 1}`, LCSwithDPTopBottom(a.slice(0, m), b.slice(0, n - 1), memo))
    }
    if (!memo.has(`${m - 1}-${n}`)) {
      memo.set(`${m - 1}-${n}`, LCSwithDPTopBottom(a.slice(0, m - 1), b.slice(0, n), memo))
    }

    return Math.max(memo.get(`${m}-${n - 1}`), memo.get(`${m - 1}-${n}`));
  }
}

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

//console.log(LCS(a, b))
console.log(LCSwithDPTopBottom(a, b))
console.log(LCSwithDPBottomTop(a, b))