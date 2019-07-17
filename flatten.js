var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flatten() {
    var result = [];
    return function _flatten(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                _flatten(item)
            } else {
                result.push(item);
            }
        }
        return result
    }
}

console.log(flatten()(arr))
