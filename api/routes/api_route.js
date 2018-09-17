'use strict';

module.exports = function(app) {
    var rounds = require("../controllers/round_api_controller");

    app.route("/api/rounds")
        .get(rounds.list_all_rounds);

    app.route("/api/create/rounds")
        .post(rounds.create_round);

    app.route("/api/rounds/detail/:roundId")
        .get(rounds.get_detail_round);

    app.route("/api/rounds/update/:roundId")
        .post(rounds.update_round);

    app.route("/api/rounds/delete/:roundId")
        .post(rounds.delete_round);

    app.route("/api/fb/webhook")
        .post(rounds.wh_callback);

};