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

  app.post('/api/data', function(req, res){
    var stock = req.body.stock;
    console.log(req.body);
    // will need to do exactly what we did for stock for time and quality as well
    // pull quantity from user input instead of var amount
    // have time selector on main page, front end code when user selects different options and then pass the selection back
    // this is basically the same as stock selection 
    // time and quanitty are not defined here
    
    // console.log(stock, time, quantity);
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 1);
    db.spFiveHundred.findAll({
      where: {
        price_date :{
          [db.Sequelize.Op.gte]: oneYearFromNow
        }
      }
    }).then(data => {
      var amount = req.body.userInput;

      totalShares = 0
      for(var i = 0; i < data.length; i++){
        
        if(i % 14 == 0){
          console.log(data[i])
          totalShares +=  amount/data[i].open_price
        }
      }

      var money = totalShares * data[0].open_price
      
      console.log(money);
      // res.json(data)
      res.json(money);
    
    });
  })

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
