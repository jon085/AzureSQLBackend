
var api = {
	get: function (req, res, next) {
		var date = { currentTime: Date.now() };
		res.status(200).type('application/json').send(date);
	}
};

module.exports = api;
