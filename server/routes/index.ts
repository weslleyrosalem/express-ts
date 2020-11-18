import express from "express";
import os from "os";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  const host = os.hostname() || "Unknown";
  return res.render("index", { title: "Express TS", host });
});

router.get("/health", (req, res, next) => {
  return res.json({ status: "UP" });
});

export = router;
