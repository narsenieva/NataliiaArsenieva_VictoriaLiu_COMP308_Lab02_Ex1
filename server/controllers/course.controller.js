const Course = require('../models/course.model')


createCourse = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a course',
        })
    }

    const course = new Course(body)

    if (!course) {
        return res.status(400).json({ success: false, error: err })
    }

    course
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: course._id,
                message: 'course created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Course not created!',
            })
        })
}

updateCourse = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Course.findOne({ _id: req.params.id }, (err, course) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'course not found!',
            })
        }
        course.courseCode = body.courseCode
        course.courseName = body.courseName
        course.section = body.section
        course.semester = body.semester
        
        course
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: course._id,
                    message: 'Course updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Course not updated!',
                })
            })
    })
}

deleteCourse = async (req, res) => {
    await Course.findOneAndDelete({ _id: req.params.id }, (err, course) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!course) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }

        return res.status(200).json({ success: true, data: course })
    }).catch(err => console.log(err))
}

getCourses = async (req, res) => {
    await Course.find({}, (err, courses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!courses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Course not found` })
        }
        return res.status(200).json({ success: true, data: courses })
    }).catch(err => console.log(err))
}


/*
module.exports = {
    createCourse,
    updateCourse,
    deleteCourse,
    getCourses,
}
*/
