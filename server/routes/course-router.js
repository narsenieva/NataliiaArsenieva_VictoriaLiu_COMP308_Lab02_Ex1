const express = require('express')

const CourseCtrl = require('../controllers/course.controller')

const router = express.Router()

router.post('/course', CourseCtrl.createCourse)
router.put('/course/:id', CourseCtrl.updateCourse)
router.delete('/course/:id', CourseCtrl.deleteCourse)
router.get('/course/:id', CourseCtrl.getCourseById)
router.get('/course', CourseCtrl.getCourses)

module.exports = router
