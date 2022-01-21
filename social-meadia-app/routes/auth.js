const router = require("express").Router();

const { registerUser, userLogin } = require("../controllers/authControllers");

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);

module.exports = router;
