const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema(
    {
        courseCode: { type: String, required: true },
        courseName: { type: String, required: true },
        section: { type: Number, required: false },
        semester: { type: String, required: true },     
    },
    { timestamps: true },
    
)


module.exports = mongoose.model('college', Course)