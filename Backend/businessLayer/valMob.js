var mobvalid = {};

mobvalid.validateMobNumber = function (mobileNo) {

    if (!(mobileNo.length >= 10)) {
        throw new Error("Mobile number must be at least 10 digits")
    }
}

module.exports = mobvalid;