var uservalid = {};

uservalid.validateUserId = function (userId) {
    if (new String(userId).length != 4) {
        throw new Error("User is not registered")
    }
}

module.exports = uservalid;