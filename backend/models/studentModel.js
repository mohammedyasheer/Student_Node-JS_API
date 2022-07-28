const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
  {
    stdId: {
      type: mongoose.Schema.Types.ObjectId,
      
    },
    stdName: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    stdFee: {
      type: Number,
      required: [true, 'Please add only Numbers']
    },
    stdCourse: {
      type: String,
      required: [true, 'Please add a text value']
    }
  }
)

module.exports = mongoose.model('Student', studentSchema)
