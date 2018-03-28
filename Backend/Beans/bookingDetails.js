var bookingDetails = function (userId, startDate, endDate, mobileNo, boatId) {
    this.userId = userId;
    this.totalCost = 0;
    this.startDate = startDate;
    this.endDate = endDate;
    this.mobileNo = mobileNo;
    this.boatId = boatId;
    this.discount = 0.0;
}

bookingDetails.toObject = function (obj) {
    return new bookingDetails(obj.userId, obj.startDate, obj.endDate, obj.mobileNo, obj.boatId);
}

module.exports = bookingDetails;