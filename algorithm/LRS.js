const a = 'ATACTCGGA';

function LRS(a, m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (a.charAt(m - 1) === a.charAt(n - 1) && m !== n) {
    return LRS(a, m - 1, n - 1) + 1;
  }
  return Math.max(LRS(a, m - 1, n), LRS(a, m, n - 1));
}

console.log(LRS(a, a.length, a.length))