/**
 * 第 110 题：编程题，请写一个函数，完成以下功能
 *输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
 */

function question110(str) {
    const a = str.split(', ');
    let res = '';
    let count = 0;
    for (let i = 0; i < a.length; i ++) {
        if (i == 0) {
            res = res + a[i];
            count += 1;
            continue;
        };
        if (a[i] - a[i - 1] == 1) {
            count += 1;
            if (i == a.length - 1 && count > 1) {
                res = res + '~' + a[i] 
            }
        }
        if (a[i] - a[i - 1] != 1) {
            if (count > 1) {
                res = res + '~' + a[i - 1] + ', ' + a[i];
            } else {
                res = res + ', ' + a[i]
            }
            count = 1;
        }
    }
    return res;
}
console.log(question110('1, 2, 3, 5, 7, 8, 10'))