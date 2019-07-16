let o = {
    a: 'b',
    c: {
        d: 'e',
        f: {
            g: 'h',
            i: ['1', '2', '3', '4', '5']
        }
    }
}

function deepClone(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (typeof obj[key] == 'object') {
            result[key] = deepClone(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}