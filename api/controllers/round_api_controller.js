'use strict';
var firebase = require("firebase-admin");
var serviceAccount = require("serviceAccountKey.json");
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://vietlotte-31390.firebaseio.com"
});

// Import Admin SDK
var database = firebase.database();

var data_all_ref = database.ref("Data/Round").orderByValue();
var data_all = [];

//Round API
exports.list_all_rounds = function(req, res) {
    data_all_ref.on("value", function(snaps) {
        if (snaps.val()) {
            res.status(200).json({
                code: 1000,
                message: "SC_OK",
                totals: snaps.val().length,
                data: snaps.val()
            });
        } else {
            res.status(500).json({
                code: -1,
                message: "NO_DATA"
            });
        }
    });
};
exports.create_round = function(req, res) {

};
exports.get_detail_round = function(req, res) {
    var data_all = [];
    var _id = req.params.roundId;
    var check = false;
    var data_detail_ref = database.ref("Data/Round/" + _id).on("value", function(snaps) {
        if (snaps.val()) {
            res.status(200).json({
                code: 1000,
                message: "SC_OK",
                data: snaps.val()
            });
            check = true;
        } else {
            res.status(500).json({
                code: -1,
                message: "NO_DATA"
            });
        }
    });
    return check;
};
exports.update_round = function(req, res) {
    var _id = req.params.roundId;
    var _body = req.body;
    var check = false;
    var data_detail_ref = database.ref("Data/Round/" + _id);
    data_detail_ref.on("value", function(snapshot) {
        console.log(snapshot.val());
        if (snapshot.val()) {
            var data_update_ref = database.ref("Data/Round/" + _id);
            data_update_ref.set(_body),
                function(error) {
                    if (error) {
                        res.status(200).json({
                            code: 1001,
                            message: "Update failed"
                        });
                        check = false;
                    } else {
                        res.status(200).json({
                            code: 1000,
                            message: "Update success",
                            data: {
                                _id: _id,
                                detail: _body
                            }
                        });
                        check = true;
                    }
                };
        } else {
            res.status(505).json({
                code: -1,
                message: "NO_DATA"
            });
        }
    });
};
exports.delete_round = function(req, res) {};

exports.wh_callback = function(req, res) {
    var _body = req.body;
    if (_body) {
        res.status(200).json({
            code: 1000,
            message: "SC_OK",
            data: {
                detail: _body
            }
        });
    }
};