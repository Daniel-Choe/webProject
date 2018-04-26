// Business Layer functionality

var datevalid = require('./valDate');
var mobvalid = require('./valMob');
var uservalid = require('./valUserId');
var boatBookingDAL = require('../dataAccessLayer/boatBookingDAL');
var bookingDetails = require('../Beans/bookingDetails');

var boatBookingBL = {};

boatBookingBL.list = function(){
    return boatBookingDAL.list().then(function(details){
        if(details.length == 0){
            throw new Error("No boatType, description in boatDetails table")
        }
        return details;
    }).catch(function(err){
        throw err;
    })
}

boatBookingBL.getLocations = function (boatType) {
    return boatBookingDAL.getLocations(boatType).then(function (locations) {
        if (locations.length == 0){
            throw new Error("No locations available for this boat Type");
        }
        return locations;
        }).catch(function (err) {
        throw err;
    })
}

boatBookingBL.getBoatDetails = function (boatType, location) {
    return boatBookingDAL.getBoatDetails(boatType, location).then(function (boats) {
        if (boats.length == 0) {
            throw new Error("No boats available of this type at this location");
        }
        return boats;
    }).catch(function (err) {
        throw err;
    })
}


boatBookingBL.bookBoat = function (bookingDetails) {
    return boatBookingBL.getDiscount(bookingDetails.boatId).then((discount) => {
        bookingDetails.discount = discount;
        boatBookingBL.calcPrice(bookingDetails)
        return boatBookingBL.checkId(bookingDetails.userId).then((isUser) => {
            if (isUser) {
                return boatBookingBL.checkId(bookingDetails.userId).then((txnId) => {
                    if (txnId == null) {
                        throw new Error("Booking was unsuccessful");
                    }
                    return txnId;
                }).catch((err) => {
                    throw err
                });
            }
            else {
                throw new Error("User doesn't exist")
            }
        }).catch((err) => {
            throw err;
        });
    }).catch((err) => {
        throw err;
    })
}

boatBookingBL.checkId = function (userId) {
    return boatBookingDAL.checkId(userId).then((isUser) => {
        return bookings;
    }).catch(function (err) {
        throw err;
    })
}

boatBookingBL.getAllBookings = function () {
    return boatBookingDAL.getAllBookings().then(function (bookings) {
        return bookings
    }).catch(function (err) {
        throw err;
    })
}

boatBookingBL.updateTxn = function (startDate, endDate, mobileNo, txnId) {
    return boatBookingDAL.updateTxn(startDate, endDate, mobileNo, txnId).then(function (confirmation) {
        return confirmation;
    }).catch(function (err) {
        throw err;
    })
}

boatBookingBL.getDetailsbyTxn = function (txnId) {
    return boatBookingDAL.getDetailsbyTxn(txnId).then(function (check) {
        if (check.length > 0) {
            return check;
        }
    }).catch(function (err) {
        throw err;
    })
}

boatBookingBL.delete = function (txnId) {
    return boatBookingDAL.delete(txnId).then(function (result) {
        if (result) {
            return result;
        }
        else {
            return false;
        }
    }).catch((err) => {
        throw err;
    })
}

boatBookingBL.getDiscount = function (boatId) {
    return boatBookingDAL.getDiscount(boatId).then((discount) => {
        return discount
    }).catch((err) => {
        throw err;
    })
}

boatBookingBL.calcPrice = function (bookingDetails) {
    let baseprice = 0;
    let startDate = new Date(bookingDetails.startDate);
    let endDate = new Date(bookingDetails.endDate);
    let days = endDate.valueOf() - startDate.valueOf();

    days = math.ceil(days / (1000 * 24 * 3600))

    boatBookingDAL.getBasePrice(bookingDetails.boatId).then((price) => {
        return price;
    }).catch((err) => {
        throw err;
    })
}

boatBookingBL.getBasePrice = function (boatId) {
    return boatBookingDAL.getBasePrice(boatId).then((price) => {
        return price;
    }).catch((err) => {
        throw err;
    })
}

boatBookingBL.getTxnCost = function (txnId) {

}

module.exports = boatBookingBL;
