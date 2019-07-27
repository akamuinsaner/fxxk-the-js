/**
 * 第 114 题：编程题，找出字符串中连续出现最多的字符和个数（蘑菇街）
 * 'abcaakjbb' => {'a':2,'b':2}
 * 'abbkejsbcccwqaa' => {'c':3}
 */

function question104(str) {
    let obj = {};
    let last = '';
    for (let i = 0; i < str.length; i ++) {
        const s = str.charAt(i);
        if (!obj.hasOwnProperty(s)) {
            obj[s] = 1;
        } else {
            if (s === last) {
                obj[s] += 1;
            } else {
                obj[s] = 1;
            }
        }
        last = s;
    }
    let max = -Infinity;
    let result = {}
    for (let key in obj) {
        if (obj[key] >= max) {
            max = obj[key];
            result[key] = obj[key];
        }
    }
    return result
}

console.log(question104('abcaakjbb'))