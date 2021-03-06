const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Teacher = require("./teacher")

const StudentSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  detention_status: {
    type: Boolean,
    required: true,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "Teacher"
  },
  grades: {
    type: [{}],
    required: true,
  }
});


const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
