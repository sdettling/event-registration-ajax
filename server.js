var express = require('express');
var path = require('path');

var apiRouter = require('./routes/apiRouter');

var app = express();
module.exports = app;

app.use('/api', apiRouter);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

/*



*/