const { Router } = require("express");

router = Router();

router.get("/register", (req, res) => {
  return res.json({ loggedIn: true });
});

module.exports = router;
