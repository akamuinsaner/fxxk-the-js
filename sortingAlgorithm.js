const arr = [25, 36, 13, 58, 42, 69, 6, 48, 22, 55];

/* 冒泡排序 */
function bubbleSorting(arr) {
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

/* 插入排序 */
/* 后面的无须元素依次和前面的有序元素比较，开始时第一个元素默认有序 */
function insertSorting(arr) {
    var temp;
    for (var i = 1; i < arr.length; i ++) {
        temp = arr[i];
        while (arr[i - 1] > temp && i >= 0) {
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            i--
        }
    }
    return arr;
}

/* 选择排序 */
/* 遍历数组，找到后面最小的元素，和前面的元素替换位置 */
function selectSorting(arr) {
    for (var i = 0; i < arr.length; i ++) {
        var index;
        var temp;
        var min = Infinity;
        for (var j = i; j < arr.length; j ++) {
            if (arr[j] < min) {
                min = arr[j]
                index = j;
            }
        }
        temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp
    }
    return arr
}

