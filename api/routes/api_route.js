'use strict';

module.exports = function(app) {
	var rounds = require("../controllers/round_api_controller");
	app.route("/api/rounds")
	.get(rounds.list_all_rounds)
	.post(rounds.create_round);

	app.route("/api/:roundId")
	.get(rounds.get_detail_round)
	.put(rounds.update_round)
	.delete(rounds.delete_round);

};