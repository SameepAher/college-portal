const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  adminLogin,
  addFaculty,
  addStudent,
  addSubject,
  getAllFaculty,
  getAllStudents,
  getAllSubjects,
  addAdmin,
  getAllStudent,
  getAllSubject,
} = require("../controller/adminController");

router.post("/login", adminLogin);

router.post("/add-admin", addAdmin);

router.post(
  "/get-all-faculty",
  passport.authenticate("jwt", { session: false }),
  getAllFaculty
);

router.post(
  "/get-all-student",
  passport.authenticate("jwt", { session: false }),
  getAllStudent
);

router.post(
  "/get-all-subject",
  passport.authenticate("jwt", { session: false }),
  getAllSubject
);

router.post(
  "/add-faculty",
  passport.authenticate("jwt", { session: false }),
  addFaculty
);

router.get(
  "/get-faculties",
  passport.authenticate("jwt", { session: false }),
  getAllFaculty
);

router.post(
  "/add-student",
  passport.authenticate("jwt", { session: false }),
  addStudent
);

router.get(
  "/get-students",
  passport.authenticate("jwt", { session: false }),
  getAllStudents
);

router.post(
  "/add-subject",
  passport.authenticate("jwt", { session: false }),
  addSubject
);

router.get(
  "/get-subjects",
  passport.authenticate("jwt", { session: false }),
  getAllSubjects
);

module.exports = router;
