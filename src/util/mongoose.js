module.exports = {
  multiplemongoosetoObject: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  mongoosetObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
