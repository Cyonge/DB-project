module.exports = function(sequelize, DataTypes) {
    var spFiveHundred = sequelize.define("spFiveHundred", {
      price_date: DataTypes.DATE,
      open_price: DataTypes.DECIMAL,
      day_high: DataTypes.DECIMAL
    },{
      timestamps: false
  });
    return spFiveHundred;
  };
  