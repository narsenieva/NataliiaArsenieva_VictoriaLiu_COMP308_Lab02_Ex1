const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
        studentNumber: { type: Number, required: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        program: { type: String, required: true },
        course: {
            type: Schema.ObjectId,
            ref: 'Course'
        }
    },
    { timestamps: true },
)

module.exports = mongoose.model('college', Student) 