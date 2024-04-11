/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length===0){
        return function(x){
            return x;
        }
    }
    // functions.reverse();
        return functions.reduce((accum,curr)=>{
            return function(x) {
            return accum(curr(x));
        }
    })
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */