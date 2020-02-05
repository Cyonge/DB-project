var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    console.log("HERE")
    db.spFiveHundred.findAll().then(function(yonge) {
      console.log(res.json(yonge));
        
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get('/api/data', function(req, res){
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 1);
    db.spFiveHundred.findAll({
      where: {
        price_date :{
          [db.Sequelize.Op.gte]: oneYearFromNow
        }
      }
    }).then(data => {
      var amount = 200;
      totalShares = 0
      for(var i = 0; i < data.length; i++){
        totalShares +=  amount/+data[i].open_price
      }

      var money = totalShares * +data[0].open_price
      
      console.log(money);
      res.json(data)
    
    });
  })

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
