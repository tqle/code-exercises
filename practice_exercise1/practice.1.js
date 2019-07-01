 /** Create a wrapper object to export the functions */
let mathServiceUtil = {};

mathServiceUtil.remoteMathService = async function remoteMathService(cb){
    try {
        var one, two;

        await mathServiceUtil.callTwoService(function(err, num){
            two = num;
            // console.log(`two is now ${num}`);
        });
        await mathServiceUtil.callOneService(function(err, num){
            one = num;
            // console.log(`one is now ${num}`);
        });

        return cb(undefined, one + two);
    } catch (e) {
        return cb(new Error(`A problem has occured ${e.message}`), undefined);
    }  
}

/**
 * call one service.
 * NOTE: setTimeout doesn't run in order and is aynchronous
 * of the event loop
 * setTimeout is a browser API call and is not guaranteed
 * to return in order. Will be pushed on the event loop
 * when there is empty. 
 * Fix is to wrap a Promise around the set time and resolve
 * the callback. 
 * @param {*} cb 
 */

mathServiceUtil.callOneService = function callOneService(cb){
    return new Promise((resolve,reject) => {
        if(cb) {
            setTimeout(function() {
                resolve(cb(undefined, 1));
             }, 1000);
        } else {
            reject(`Invalid callback ${cb}`);
        }

    })
}

mathServiceUtil.callTwoService = function callTwoService(cb){
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            resolve(cb(undefined, 2));
        }, 1500);
    })
}

/**
 * This is invoked first
 */
mathServiceUtil.remoteMathService(function(err, answer){
    if (err) console.log("error ", err);
    
    if (answer !== 3) {
        console.log("Wrong answer", answer);
    } else {
        console.log("correct");
    }
});

module.exports = mathServiceUtil;
