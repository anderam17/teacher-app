const db = require("../models/index");

module.exports = {
  findAll: (req, res) => {
    db.Student.find(req.query)
      .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  //! How to include teacher line include: [Teacher]
  findOne: (req, res) => {
    db.Student.findOne({ _id: req.params.id })
      .then((student) => {
        res.json(student);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  create: (req, res) => {
      db.Student.create(req.body)
      .then((student) => {
        res.json(student);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteOne: (req, res) => {
      console.log('henlo');
      db.Student.deleteOne({ _id: req.params.id })
      .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
  },
updateOne: (req, res) => {
    db.Student.updateOne({_id: req.params.id}, req.body)
    .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
}

};

// * DONE

//   // get list of all students where detention =...
//   // returns a list as a JSON file to the front

//   app.get("/student/detention/:detention", (req, res) => {
//     Student.findAll({
//       include: [Teacher],
//       where: {
//         detention: req.params.detention
//       }
//     })
//       .then((students) => {
//         res.json(students);
//       }).catch((err) => {
//         res.json(err);
//       });
//   });

//   // get students by grade
//   app.get("/api/student/:grade", (req, res) => {
//     Student.findAll({
//       include: [Teacher],
//       where: {
//         grade: req.params.grade
//       }
//     }).then((students) => {
//       res.json(students);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- GET SINGLE STUDENT INFO -----------
//   app.get("/api/studentsearch/:id", (req, res) => {
//     Student.findOne({
//       include: [Teacher],
//       where: {
//         id: req.params.id
//       }
//     }).then(student => {
//       res.json(student);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- GET STUDENT BY FIRST NAME -----------
//   app.get("/student/first/:first/", (req, res) => {
//     Student.findAll({
//       include: [Teacher],
//       where: {
//         first_name: req.params.first
//       }
//     }).then((student) => {
//       res.json(student);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- GET STUDENT BY LAST NAME -----------
//   app.get("/student/last/:last", (req, res) => {
//     Student.findAll({
//       include: [Teacher],
//       where: {
//         last_name: req.params.last
//       }
//     }).then((student) => {
//       res.json(student);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- GET BY FIRST AND LAST NAME -----------
//   app.get("/student/:first/:last", (req, res) => {
//     Student.findAll({
//       include: [Teacher],
//       where: {
//         first_name: req.params.first,
//         last_name: req.params.last
//       }
//     }).then((student) => {
//       res.json(student);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- ADD NEW STUDENT -----------
//! HOW AM I GETTING TEACHER ID
//   app.post("/student", (req, res) => {
//     Student.insert({
//       first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             grade: req.body.grade,
//             TeacherId: req.body.TeacherId,
//             detention_status: req.body.detention
//     }).then((student) => {
//             res.json(student);
//           }).catch((err) => {
//             res.json(err);
//           });
// });

//* MySQL version
//   app.post("/api/student", (req, res) => {
//     Student.create({
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       grade: req.body.grade,
//       TeacherId: req.body.TeacherId,
//       detention: req.body.detention
//     }).then((student) => {
//       res.json(student);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- DELETE STUDENT -----------
//   app.delete("/api/student/:id", (req, res) => {
//     Student.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then((students) => {
//       res.json(students);
//     }).catch((err) => {
//       res.json(err);
//     });
//   });

//   // ------- UPDATE STUDENT -----------
//   app.put("/api/student/:id", (req, res) => {
//     Student.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     }).then((student) => {
//       return Student.findOne({
//         include: [Teacher],
//         where: {
//           id: req.params.id
//         }
//       })
//       }).then((student) => {
//         res.json(student);
//       }).catch((err) => {
//       res.json(err);
//     });
//   });
