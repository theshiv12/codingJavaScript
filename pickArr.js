let arr = [1, 2, 3 , 6,7]
function x(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1] && arr[i] > arr[i - 1]) {
            return i
        }
    }
    return 0
}

console.log(x(arr))

