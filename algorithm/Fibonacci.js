function fib (n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

const s = new Date().getTime();
console.log(fib(40));
const e = new Date().getTime();
console.log(e - s)

function dpFib(n, map = {}) {
  if (map.hasOwnProperty(n)) {
    return map[n];
  } else {
    if (n <= 1) {
      return 1;
    }
    map[n] = dpFib(n - 1, map) + dpFib(n - 2, map)
    return map[n];
  }
}
const dps = new Date().getTime();
console.log(dpFib(40))
const dpe = new Date().getTime();
console.log(dpe - dps)