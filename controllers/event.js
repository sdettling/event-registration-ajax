
exports.postEvent = function(req, res) {
  setTimeout( function(){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ success: true, seatsRemaining: 7, errorType: "", message: "Booked!" });
  }, 5000);
};

exports.postEventFail = function(req, res) {
  setTimeout( function(){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ success: false, seatsRemaining: 7, errorType: "", message: "You already booked this class!" });
  }, 2000);
};
