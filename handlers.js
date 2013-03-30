module.exports = {
    calculateGoygoy: function(req, res, next) {
      console.log(JSON.stringify(req.body));
      if(req.body && req.body.goygoy){

        var goygoy = req.body.goygoy;
        res.send({
          success: true,
        });
        return;
      }
      else {
        res.send({
          success: false,
        });
        return;
      }
    }
};
