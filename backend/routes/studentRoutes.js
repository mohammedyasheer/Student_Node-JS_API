const express = require('express')
const router = express.Router()
const {
  getStudents,
  setStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController')



router.route('/all').get( getStudents)
router.route('/save').post( setStudent)
router.route('/remove/:id').delete( deleteStudent)
router.route('/update/:id').put( updateStudent)
router.route('/one/:id').get( updateStudent)

module.exports = router
