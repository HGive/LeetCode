/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // return await Promise.all([promise1,promise2]).then(
    // ([value1,value2])=> value1+value2
    //  )
    return await Promise.all([promise1,promise2]).then(
    (values)=> values[0]+values[1]
     )
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */