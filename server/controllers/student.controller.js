const Student = require('../models/student.model')


createStudent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a student',
        })
    }

    const student = new Student(body)

    if (!student) {
        return res.status(400).json({ success: false, error: err })
    }

    student
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: student._id,
                message: 'student created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Student not created!',
            })
        })
}

updateStudent = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Student.findOne({ _id: req.params.id }, (err, student) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'student not found!',
            })
        }
        student.studentNumber = body.studentNumber
        student.password = body.password
        student.firstName = body.firstName
        student.lastName = body.lastName
        student.address = body.address
        student.city = body.city
        student.phoneNumber = body.phoneNumber
        student.email = body.email
        student.program = body.program
        student
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: student._id,
                    message: 'Student updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Student not updated!',
                })
            })
    })
}

getStudents = async (req, res) => {
    await Student.find({}, (err, students) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!students.length) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }
        return res.status(200).json({ success: true, data: students })
    }).catch(err => console.log(err))
}


/*
module.exports = {
    createStudent,
    updateStudent,
    getStudents,
}
*/
