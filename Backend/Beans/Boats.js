var Boats = function (boatId, boatType, discount, baseprice, bookingStart, allowedDays) {
    this.boatId = boatId;
    this.boatType = boatType;
    this.discount = discount;
    this.baseprice = baseprice;
    this.bookingStart = bookingStart;
    this.allowedDays = allowedDays;
}

Boats.toObject = function (result) {
    return new Boats(result.boatId, result.boatType, result.discount, result.fare, result.bookingStart, result.allowedDays);
}

module.exports = Boats;