const express = require("express");
const passport = require("passport");
const upload = require("../utils/multer");

const router = express.Router();

const {
  fetchStudents,
  markAttendence,
  facultyLogin,
  getAllSubjects,
  updatePassword,
  forgotPassword,
  postOTP,
  uploadMarks,
  updateProfile,
} = require("../controller/facultyController");

router.post("/login", facultyLogin);

router.post("/forgotPassword", forgotPassword);

router.post("/postOTP", postOTP);

router.post(
  "/update-profile",
  passport.authenticate("jwt", { session: false }),
  upload.single("avatar"),
  updateProfile
);

router.post(
  "/fetch-students",
  passport.authenticate("jwt", { session: false }),
  fetchStudents
);

router.post(
  "/fetchAllSubjects",
  passport.authenticate("jwt", { session: false }),
  getAllSubjects
);

router.post(
  "/mark-attendence",
  passport.authenticate("jwt", { session: false }),
  markAttendence
);

router.post(
  "/uploadMarks",
  passport.authenticate("jwt", { session: false }),
  uploadMarks
);

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  updatePassword
);

module.exports = router;
