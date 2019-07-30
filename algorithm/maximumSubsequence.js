/**
 * 最大子序列问题
 */

const testCase = [3, -4, 5, -1, 6, -5, 3]

/**
 * 算法1 三层循环 O(N3)
 */
function maximumSubsequence_1(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i ++) {
        for (let j = i; j < arr.length; j ++) {
            let thisSum = 0;
            for (let k = i; k <= j; k ++) {
                thisSum += arr[k];
            }
            if (thisSum > maxSum) {
                maxSum = thisSum;
            }
        }
    }
    return maxSum;
}

/**
 * 算法2 二层循环 O(N2)
 */
function maximumSubsequence_2(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i ++) {
        let thisSum = 0;
        for (let j = i; j < arr.length; j ++) {
            thisSum += arr[j];
            if (thisSum > maxSum) {
                maxSum = thisSum
            }
        }
    }
    return maxSum;
}

/**
 * 算法3 采用分治策略，将数组分为左右两个子数组，计算左边最大和以及右边最大和
 * 然后计算包含左边最后一个元素的最大和以及包含右边第一个元素的最大和
 * 递归 O(NlogN)
 */
function maximumSubsequence_3(arr, left, right) {

}

/**
 * 算法4 O(N)
 */
function maximumSubsequence_4(arr) {
    let maxSum = 0;
    let thisSum = 0;
    for (let i = 0; i < arr.length; i ++) {
        thisSum += arr[i];
        if (thisSum > maxSum) {
            maxSum = thisSum
        } else if (thisSum < 0) {
            thisSum = 0
        }
    }
    return maxSum;
}

console.log(maximumSubsequence_1(testCase))