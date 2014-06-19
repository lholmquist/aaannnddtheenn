var Dude = function (callback) {
    var promise = new Promise(callback);

    this.getPromise = function () {
        return promise;
    };

    // this.setPromise = function (_promise) {
    //     promise = _promise;
    // };

    return this;
};

Dude.prototype.annddtheenn = function (resolve, reject) {
    this.getPromise().then(resolve, reject);

    return this;
};


Dude.prototype.noandthen = function (reject) {
    this.getPromise().catch(reject);

    return this;
};

// Dude.andthenandthenandthen = function (arr) {
//     var p = Promise.all(arr);
// };
