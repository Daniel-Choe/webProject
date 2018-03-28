var datevalid = {};


datevalid.validateStartDate = function (startDate) {
    var currdate = new Date();
    if (startDate <= currdate) {
        throw new Error("Start date must be after today")
    }

}

datevalid.validateEndDate = function (startDate, endDate) {
    if (endDate < startDate) {
        throw new Error("End date must be before Start date")
    }

}

datevalid.validateBookingDate = function (bookingStart, startDate) {
    if (bookingStart > startDate) {
        throw new Error("startDate must be after bookingStart date")
    }
}

module.exports = datevalid;
