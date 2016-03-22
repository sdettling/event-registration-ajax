var express = require('express');
var eventController = require('./../controllers/event');

var router = express.Router();

router.route('/events')
  .post(eventController.postEvent);

router.route('/events/fail')
  .post(eventController.postEventFail);

module.exports = router;