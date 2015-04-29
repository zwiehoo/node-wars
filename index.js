var express = require('express');

var app = express();
var episodes = require('./episodes.js');
var actions = require('./actions.js');

app.get('/', function (req, res) {
	// TODO przygotować jakiś fajny dashboard, na którym będzie widać wyniki
	res.send('Welcome to the Dark Side');
});

app.get('/phase/1/', function(req, res) {
	res.send(episodes.phase1());
});

app.get('/phase/2/:string', function(req, res) {
	res.send(episodes.phase2(req.params.string));
});

app.get('/phase/3/:string', function(req, res) {
	res.send(episodes.phase3(req.params.string).toString());
});

app.get('/phase/4/:number', function(req, res) {
	res.send(episodes.phase4(parseInt(req.params.number)));
});

app.get('/phase/5/:x/:y', function(req, res) {
	res.send(episodes.phase5(parseFloat(req.params.x), parseFloat(req.params.y)).toString());
});

app.get('/phase/6/:a/:b', function(req, res) {
	res.send(episodes.phase6(parseInt(req.params.a), parseInt(req.params.b)));
});

app.get('/action/1/:turn/:points/:otherPoints', function (req, res) {
	try {
		var otherPoints = JSON.parse(req.params.otherPoints);
		res.send(actions.phase1(parseInt(req.params.turn), parseInt(req.params.points), otherPoints));
	} catch (e) {
		res.send("Niepoprawny parametr otherPoints");
	}
});

app.get('/action/2/:turn/:points/:otherPoints', function (req, res) {
	try {
		var otherPoints = JSON.parse(req.params.otherPoints);
		res.send(actions.phase2(parseInt(req.params.turn), parseInt(req.params.points), otherPoints));
	} catch (e) {
		res.send("Niepoprawny parametr otherPoints");
	}
});

app.get('/action/3/:turn/:points/:otherPoints', function (req, res) {
	try {
		var otherPoints = JSON.parse(req.params.otherPoints);
		res.send(actions.phase3(parseInt(req.params.turn), parseInt(req.params.points), otherPoints));
	} catch (e) {
		res.send("Niepoprawny parametr otherPoints");
	}
});

app.get('/action/4/:turn/:points/:otherPoints', function (req, res) {
	try {
		var otherPoints = JSON.parse(req.params.otherPoints);
		res.send(actions.phase4(parseInt(req.params.turn), parseInt(req.params.points), otherPoints));
	} catch (e) {
		res.send("Niepoprawny parametr otherPoints");
	}
});

app.get('/action/5/:turn/:points/:otherPoints', function (req, res) {
	try {
		var otherPoints = JSON.parse(req.params.otherPoints);
		res.send(actions.phase6(parseInt(req.params.turn), parseInt(req.params.points), otherPoints));
	} catch (e) {
		res.send("Niepoprawny parametr otherPoints");
	}
});

app.get('/action/6/:turn/:points/:otherPoints', function (req, res) {
	try {
		var otherPoints = JSON.parse(req.params.otherPoints);
		res.send(actions.phase6(parseInt(req.params.turn), parseInt(req.params.points), otherPoints));
	} catch (e) {
		res.send("Niepoprawny parametr otherPoints");
	}
});

var server = app.listen(8080, function() {
	console.log('XWing console ready');
	console.log('Ready to fight...');
});
