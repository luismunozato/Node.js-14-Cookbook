const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
  const title = "Express";
  const user = req.session.user;
  res.render("index", { user });
});


module.exports = router;
