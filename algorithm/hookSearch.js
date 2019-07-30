/**
 * 给定一个整数X和证书序列A0,A1,A2....AN-1,后者已经预先排序，求使得Ai=X的下标i,如果X不再序列中，返回-1
 * 使用对分查找法，充分利用序列已排序的条件
 */
function hookSearch(arr, x) {
    let high = arr.length - 1;
    let low = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) {
            low = mid + 1;
        }
        if (arr[mid] > x) {
            high = mid - 1;
        }
        if (arr[mid] == x) {
            return mid
        }
    }
    return -1;
}

const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(hookSearch(testCase, 8));