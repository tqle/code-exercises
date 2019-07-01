/**
 * Remote math service - refactored to use async await
 * @param {*} cb 
 */
const remoteMathService = async(cb) => {
    try {
        // NOTE: one, two can be called outside of block scope
        // Change to let for block scope. 
        let one, two;

        await callTwoService((err, num) => {
            two = num;
            // console.log(`two is now ${num}`);
        });
        await callOneService((err, num) => {
            one = num;
            // console.log(`one is now ${num}`);
        });

        return cb(undefined, one + two);
    } catch (error) {
        return cb(error, undefined);
    }  
};

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

const callOneService = async (cb) => {
    return new Promise((resolve,reject) => {
        if(typeof cb === 'undefined' || typeof cb !== "function") {
            reject(new Error('Call back must be a function.'));
        } else {
            setTimeout(function() {
                resolve(cb(undefined, 1));
             }, 1000);
        }
    });
}

const callTwoService = async(cb) => {
    return new Promise((resolve,reject) => {
        if(typeof cb === 'undefined' || typeof cb !== "function") {
            reject(new Error('Call back must be a function.'));
        } else {
            setTimeout(function() {
                resolve(cb(undefined, 2));
            }, 1500);
        }
    });
}

/**
 * This is invoked first
 */
remoteMathService((err, answer) => {
    if (err) console.log("error ", err);
    
    if (answer !== 3) {
        console.log("Wrong answer", answer);
    } else {
        console.log("correct");
    }
});

module.exports = {
    callOneService,
    callTwoService,
    remoteMathService
};
