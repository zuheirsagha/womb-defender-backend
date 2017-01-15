var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var pg = require('pg');
var knexfile = require('./knexfile');
var knex = require('knex')(knexfile);
var path = require('path');

var app = express();
//var router = require('./index');
var port = config.port;
var env = config.environment;

knex.migrate.latest([knexfile]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'main.html'), {}, function (err) {
    if (err) {
      console.log("it didnt work");
    }
  })
});

app.post('/scores', function(req, res) {
  console.log(req);
  if (!(req.body.username && req.body.score && !isNaN(req.body.score) && /^\d+$/.test(req.body.score) && req.body.country)) {
    // console.log(req.body.userName);
    // console.log(req.body.score);
    // console.log(isNaN(req.body.score));
    // console.log(parseInt(req.body.score));
    // console.log(req.body.country);
    // console.log(req.body.score === parseInt(req.body.score));
    return res.status(400).json({error: 'Missing/invalid data'});
  }

  var score = {user: req.body.username, score: req.body.score, country: req.body.country};
  // dont return anything cuz we dont need it but we can. Res should be empty
  console.log("gets here");
  knex('scores').insert(score)
    .then((result) => {
      console.log("gets in here");
      return res.status(201).json({success: 'Successfully added score'});
    })
    .catch((error) => {
      console.error(error);
      return res.status(501).json({error: 'Internal server error'});
    })
});

app.get('/scores', function(req, res) {
  if (req.query.type === 'country') {
    if (!(req.query.country)) {
      return res.status(400).json({error: 'Missing/invalid data'});
    }
    knex.select().from('scores').where({country: req.query.country})
      .orderBy('score', 'desc').limit(config.countryLimit)
      .then((scores) => {
        return res.status(200).json({scores: scores});
      })
      .catch((error) => {
        console.error(error);
        return res.status(501).json({error: 'Internal server error'});
      })
  }
  else if (req.query.type === 'world') {
      knex.select().from('scores')
      .orderBy('score', 'desc').limit(config.worldLimit)
      .then((scores) => {
        return res.status(200).json({scores: scores});
      })
      .catch((error) => {
        console.error(error);
        return res.status(501).json({error: 'Internal server error'});
      })
  } else {
    return res.status(404).json({error: 'Sorry, dont have what you\'re looking for'});
  }
});

app.listen(port, function (blahhhh) {
  console.log('ok database up baby');
})
