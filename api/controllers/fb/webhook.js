'use strict';

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