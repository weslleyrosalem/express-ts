import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  return res.render("index", { title: "Express" });
});

router.get("/health", (req, res, next) => {
  return res.json({ status: "UP" });
});

export = router;
