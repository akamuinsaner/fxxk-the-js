const arr = [25, 36, 13, 58, 42, 69, 6, 48, 22, 55];

/* 冒泡排序 */
function bubbleSotting(arr) {
    for (var i = 0; i < arr.length - 1; i ++) {
        for (var j = 0; j < arr.length - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubbleSotting(arr))