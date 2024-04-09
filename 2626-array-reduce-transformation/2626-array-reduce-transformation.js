/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length===0){
        return init;
    }else{
        let accum = init;
        for(const e of nums){
            accum = fn(accum,e);
        }
        return accum;    
    }
    
};