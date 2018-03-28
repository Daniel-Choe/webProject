var express = require('express');
var routing = express.Router();
var bookingBL = require('../businessLayer/bookingBL');
var bookingDetails = require('../Beans/bookingDetails');


routing.post('/list', function (req, res, next) {
    bookingBL.list().then(function (details) {
        res.json(details);
    }).catch(function (err) {
        next(err);
    })
})

routing.post('/search', function (req, res, next) {
    // console.log("Router here!!!" + req.body.boatType)
    bookingBL.getLocations(req.body.boatType).then(function (locations) {
        res.json(locations);
    }).catch(function (err) {
        next(err);
    })
})

routing.post('/boats', function (req, res, next) {
    bookingBL.getBoatDetails(req.body.boatType, req.body.location).then(function (boats) {
        res.json(boats);
    }).catch(function (err) {
        next(err);
    })
})

routing.post('/bookThis', function (req, res, next) {
    console.log("book this")
    bookingBL.bookBoat(bookingDetails.toObject(req.body)).then((txnId) => {
        console.log("Transaction ID: ", txnId)
        // let msg = {"txnId": txnId};
        // res.send(msg)
        res.json(txnId);
    }).catch(function (err) {
        next(err);
    })
})

routing.post('/checkId', function (req, res, next) {
    bookingBL.checkId(req.body.userId).then((isUser) => {
        res.json(isUser);
    }).catch((err) => next(err));
})

routing.post('/allBookings', function (req, res, next) {
    bookingBL.getAllBookings().then(function (bookings) {
        res.json(bookings);
    }).catch(function (err) {
        next(err);
    })
})

routing.post('/updateTxn', function (req, res, next) {
    bookingBL.updateTxn(req.body.startDate, req.body.endDate, req.body.mobileNo, req.body.txnId).then(function (result) {
        console.log("inside routing.post ", result)
        res.json({ "message": "Transaction Id update successfully " });
    }).catch(function (err) {
        next(err);
    })
    // res.end()
    // res.status(202).end();  //Used to end response and confirm update. Otherwise error is thrown in DAL or BL
})

routing.post('/getDetailsbyTxn', function (req, res, next) {
    bookingBL.getDetailsbyTxn(req.body.txnId).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        next(err)
    })
})

routing.post('/delete', function (req, res, next) {
    bookingBL.delete(req.body.txnId).then(function (result) {
        if (result) {
            res.json(`transaction #${req.body.txnId} deleted successfully`)
        }
        else {
            res.json(`transaction #${req.body.txnId} was not deleted`);
        }
    }).catch((err) => { next(err) })
})

routing.post('/getDiscount', function (req, res, next) {
    bookingBL.getDiscount(req.body.boatId).then((discount) => {
        res.json(discount);
    }).catch((err) => { next(err) })
})

routing.post('/getTxnCost', function (req, res, next) {
    bookingBL.getTxnCost(req.body.txnId).then((cost) => {
        res.json(cost);
    }).catch((err) => { next(err) })
})

module.exports = routing;
