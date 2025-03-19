import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  const data = req.body
  res.send("Hello World!");
});

export default router;