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
   // return functions.reduceRight((prevFn, nextFn) => x => nextFn(prevFn(x)));
    functions = functions.reverse();
    return functions.reduce(function(prevFn,nextFn){
        return function(x){
            return nextFn(prevFn(x));
        }
    })
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */