const Course = require("../models/Course");
const { mongooseToObject } = require("../../utils/mongoose");
class CourseController {
  // [GET] /courses/:slug
  async show(req, res) {
    try {
      const course = await Course.findOne({ slug: req.params.slug });
      res.render("courses/show", { course: mongooseToObject(course) });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    // res.json(req.body);
    try {        
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData);
        course.save();
        res.redirect('/')
    } catch (error) {
        res.status(400).json(error);
    }
  }
}

module.exports = new CourseController();
