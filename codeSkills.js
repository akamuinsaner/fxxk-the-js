/* 函数柯里化 */
function curryFunction(fn) {
    if (fn.length <= 1) return fn;
    var genetator = function(...args) {
        if (fn.length == args.length) {
            return fn(...args);
        } else {
            return function(...arg2) {
                return genetator(...args, ...arg2);
            }
        }
    }
    return genetator;
}

/* 判断对象数据类型 */
function checkObjectType(type) {
    return function (obj) {
        return `[object ${type}]` == Object.prototype.toString.call(obj);
    }
}

// 发布 订阅
