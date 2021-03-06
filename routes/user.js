const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// allows sign up
router.get("/signup", userController.getSignup);
router.post("/signup", userController.postSignup);

// allows for log in
router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

// allows for log out
router.get("/logout", userController.getLogout);

module.exports = router;

// {{!-- followed tips from WDI-28-To-Do Example --}}
