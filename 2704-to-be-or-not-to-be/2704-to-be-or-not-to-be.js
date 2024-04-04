/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : (n) => ( n===val?true : (()=>{throw new Error("Not Equal")})())
        ,
        notToBe : (n) =>( n===val? (()=>{ throw new Error("Equal")})(): true )
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */