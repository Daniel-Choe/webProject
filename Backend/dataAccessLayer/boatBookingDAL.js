var database = require('../dataAccessLayer/Database');
var bookingDetails = require('../Beans/bookingDetails');

var bookingDAL = {};

// Gets each boat type and its description from the boatDetails table
bookingDAL.list = function () {
    return database.then(function (conn) {
        promise = conn.query("SELECT DISTINCT boatType, description FROM boatDetails");
        return promise;
    }).then(function (result) {
        if (result.length > 0) {
            return result
        }
        else {
            return null
        }
    }).catch((err) => { throw err })

}

//Gets locations of the selected boat types from boatDetails table
bookingDAL.getLocations = function (boatType) {
    return database.then(function (conn) {
        promise = conn.query("SELECT DISTINCT location FROM boatDetails WHERE boatType=? ORDER BY location", [boatType]);
        return promise;
    }).then(function (result) {
        if (result.length > 0) {
            return result;
        }
        return null;
    }).catch((err) => { throw err })
}

//Get boat details of the selected boat type at certain location
bookingDAL.getBoatDetails = function (boatType, location) {
    return database.then(function (conn) {
        promise = conn.query("select * from boatDetails where boatType=? and location=?", [boatType, location]);
        return promise;
    }).then(function (boats) {
        if (boats.length > 0) {
            return boats;
        }
        return null;
    }).catch((err) => { throw err })
}


//Books boat with user entered data returns a txnId 
bookingDAL.bookBoat = function (bookingDetails) {
    return database.then(function (conn) {
        promise = conn.query("INSERT INTO boatBookingDetails(userId, totalCost, endDate, startDate, mobileNo, boatId) VALUES(?,?,?,?,?,?)",
            [bookingDetails.userId, bookingDetails.totalCost, bookingDetails.endDate, bookingDetails.startDate, bookingDetails.mobileNo, bookingDetails.boatId]);
        return promise;
    }).then(function (txnId) {
        if (txnId.affectedRows == 1) {
            return txnId.insertId;
        }
        else {
            throw new Error('Insert didn\'t work');
        }
    }).catch((err) => { throw err })
}

//Get all transactions (boats booked)
bookingDAL.getAllBookings = function () {
    return database.then(function (conn) {
        promise = conn.query("select * from boatBookingDetails");
        return promise;
    }).then(function (bookings) {
        return bookings
    }).catch((err) => { throw err })
}


//UPDATE boatbookingdetails SET startDate=?, endDate=?, mobileNo=? WHERE txnId=?
bookingDAL.updateTxn = function (startDate, endDate, mobileNo, txnId) {
    return database.then(function (conn) {
        promise = conn.query("UPDATE boatBookingDetails SET startDate=?, endDate=?, mobileNo=? WHERE txnId=?",
            [startDate, endDate, mobileNo, txnId]);
        return promise;
    }).then(function (result) {
        if (result.affectedRows == 0) {
            throw new Error("There was a problem updating the transaction.")
        }
        return result;
    }).catch((err) => { throw err })
}

//GET details by TxnId
bookingDAL.getDetailsbyTxn = function (txnId) {
    return database.then(function (conn) {
        promise = conn.query("SELECT * FROM boatBookingDetails WHERE txnId = ?", [txnId]);
        return promise;
    }).then(function (result) {
        if (result.length > 0) {
            return result;
        }
        return null;
    }).catch((err) => { throw err })
}

bookingDAL.delete = function (txnId) {
    return database.then(function (conn) {
        promise = conn.query("DELETE FROM boatBookingDetails WHERE txnId=?", [txnId]);
        return promise;
    }).then(function (result) {
        if (result.affectedRows == 1) {
            return true;
        }
        return false;
    }).catch((err) => { throw err })
}

bookingDAL.getDiscount = function (boatId) {
    return database.then(function (conn) {
        promise = conn.query("SELECT discount FROM boatDetails WHERE boatId=?", [boatId]);
        return promise;
    }).then((discount) => {
        if (discount.length == 1) {
            return discount[0].discount
        }
        throw new Error("Discount not found for boatId")
    }).catch((err) => { throw err })
}

bookingDAL.checkId = function (userId) {
    return database.then(function (conn) {
        promise = conn.query("SELECT userId FROM gingerKingUsers WHERE userId=?", [userId]);
        return promise;
    }).then((result) => {
        if (result.length > 0)
            return true;
        return false;
    }).catch((err) => { throw err })
}

bookingDAL.getBasePrice = function (boatId) {
    return database.then(function (conn) {
        promise = conn.query("SELECT baseprice FROM boatDetails WHERE boatId=?", [boatId]);
        return promise;
    }).then((price) => {
        if (price.length == 1) {
            return price[0].baseprice
        }
        throw new Error("Price not found for boatId")
    }).catch((err) => { throw err })

}


bookingDAL.getTxnCost = function (txnId) {
    return database.then(function (conn) {
        promise = conn.query("SELECT totalCost FROM boatBookingDetails WHERE txnId=?", [txnId]);
        return promise;
    }).then((txnId) => {
        if (price.length == 1) {
            return price[0].txnId
        }
        throw new Error("TxnId not found")
    }).catch((err) => { throw err })
}


module.exports = bookingDAL;
