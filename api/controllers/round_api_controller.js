'use strict';
var firebase = require("firebase-admin");
var serviceAccount = require("serviceAccountKey.json");
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://vietlotte-31390.firebaseio.com"
});

// Import Admin SDK
var database = firebase.database();

var data_all_ref = database.ref("/Data/Round");

//Round API
exports.list_all_rounds = function(req, res) {
 	data_all_ref.on("value", function(snaps) {
	// data_all = snaps.val();
	res.json(snaps.val());
});
};
exports.create_round = function(req, res) {
  
};
exports.get_detail_round = function(req, res) {
  
};
exports.update_round = function(req, res) {
  
};
exports.delete_round = function(req, res) {
  
};