var arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
var arr2 = ['A', 'B', 'C', 'D'];

function mergeArrays(arr1, arr2) {
    var result = [];
    var j = 0;
    for (var i = 0; i < arr1.length; i ++) {
        if (arr1[i].charAt(0) == arr2[j]) {
            result.push(arr1[i]);
        } else {
            result.push(arr2[j]);
            result.push(arr1[i]);
            j ++;
        }
        if (i == arr1.length - 1) {
            result.push(arr2[j]);
        }
    }
    return result;
}

console.log(mergeArrays(arr1, arr2))