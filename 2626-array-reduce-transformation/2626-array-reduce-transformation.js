/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var accum = init;
    for(var i in nums){
        accum = fn(accum,nums[i]);
    }
    return accum;
};