/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const rArr = [];
    let idx = 0;
    for(let e of arr){
        if(fn(e,idx++)) rArr.push(e);
    }
    return rArr;
};