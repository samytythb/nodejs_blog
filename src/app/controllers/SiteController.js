const course = require("../models/Course");
const { multiplemongoosetoObject } = require("../../util/mongoose");
class SiteController {
  home(req, res, next) {
    course
      .find({})
      .then((course) => {
        res.render("home", {
          course: multiplemongoosetoObject(course),
        });
      })
      .catch(next);
    // res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
