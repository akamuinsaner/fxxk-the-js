/**
 * assume thers is a string a, and its length is m, 
 * if a[0] is same as the a[m-1], we use recursion to compare a[1] and a[m-2],
 * if not equal, we compare a[1] with a[m-1] and a[0] with a[m-2]
 */
const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function LPS(a, i, j) {
  if (i > j) return 0;
  if (i === j) return 1;

  if (a.charAt(i) === a.charAt(j)) {
    return LPS(a, i + 1, j - 1) + 2;
  }

  return Math.max(LPS(a, i, j - 1), LPS(a, i + 1, j));
}

function LPSwithDp(a, i, j, map = new Map()) {

  if (i > j) return 0;
  if (i === j) return 1;

  if (a.charAt(i) === a.charAt(j)) {
    if (!map.has(`${i + 1}-${j - 1}`)) {
      map.set(`${i + 1}-${j - 1}`, LPSwithDp(a, i + 1, j - 1, map))
    }
    return map.get(`${i + 1}-${j - 1}`) + 2;
  } else {
    if (!map.has(`${i}-${j - 1}`)) {
      map.set(`${i}-${j - 1}`, LPSwithDp(a, i, j - 1, map))
    }
    if (!map.has(`${i + 1}-${j}`)) {
      map.set(`${i + 1}-${j}`, LPSwithDp(a, i + 1, j, map))
    }
    return Math.max(map.get(`${i}-${j - 1}`), map.get(`${i + 1}-${j}`));
  }

}

console.log(LPS(a, 0, a.length - 1));
console.log(LPSwithDp(a, 0, a.length - 1));