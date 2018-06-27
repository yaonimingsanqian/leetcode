
function maxArea(arr) {
    var l = 0, r = arr.length - 1;
    var max = 0, h = 0;
    while (l < r) {
        h = Math.min(arr[l], arr[r]);
        max = Math.max(max, (r - l) * h);
        while (arr[l] <= h && l < r) ++l;
        while (arr[r] <= h && l < r) --r;
    }
    return max;
}

var arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));