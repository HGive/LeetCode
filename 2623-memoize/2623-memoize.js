/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // var cache = {};
    // return function(...args) {
    //     var key = JSON.stringify(args);
    //     if(key in cache){
    //         return cache[key]
    //     }else{
    //         cache[key] = fn(...args);
    //         return cache[key];
    //     }
    // }
    var cache = new Map();
    return function(...args){
        var key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }else{
            var result = fn(...args);
            cache.set(key,result);
            return cache.get(key);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */