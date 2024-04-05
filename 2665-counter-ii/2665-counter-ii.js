/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var pre = init ;
    return {
        increment : function(){
            return ++pre;
        },
        decrement : function(){
            return --pre;
        },
        reset : function(){
            pre= init
            return pre;
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */