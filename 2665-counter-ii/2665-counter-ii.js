/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var defaultVal = init;
    return {
        increment : () => ++defaultVal,
        reset : () =>  defaultVal = init ,
        decrement : () => {
          return --defaultVal ;   
        }  
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */