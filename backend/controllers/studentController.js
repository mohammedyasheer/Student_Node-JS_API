const asyncHandler = require('express-async-handler')

const Student = require('../models/studentModel')


const getStudents = asyncHandler(async (req, res) => {
  const student = await Student.find()

  res.status(200).json(student)
})


const setStudent = asyncHandler(async (req, res) => {


  const student = await Student.create({
    stdId: req.body.stdId,
    stdName: req.body.stdName,
    stdFee: req.body.stdFee,
    stdCourse: req.body.stdCourse
  })

  res.status(200).json(student)
})


const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if (!student) {
    res.status(400)
    throw new Error('Student not found')
  }

  const updatedStudent= await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedStudent)
})


const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if (!student) {
    res.status(400)
    throw new Error('Student not found')
  }

  await student.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getStudents,
  setStudent,
  updateStudent,
  deleteStudent,
}
