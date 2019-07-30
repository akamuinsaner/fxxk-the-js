const a = 1 + '1';
const b = 2 * '2';
const c = [1, 2] + [2, 1];
const d = "a" + + 'b'

/* '+'操作符操作数值和字符串将数值转为字符串 */
console.log(a)
/* 非‘+’操作符无拼接字符串效果，所以无法将数值转为字符串，会按照正常四则运算进行操作 */
console.log(b)
/* 先调用valueof,不是数值时会调用tostring方法  */
console.log(c)
/* 先执行+b,为NAN，然后再和a进行拼接 */
console.log(d)