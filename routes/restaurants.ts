import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantShema, type Restaurant } from "../schemas/restaurant.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

router.post("/", validate(RestaurantShema), async (req, res) => {
  const data = req.body as Restaurant
  res.send("Hello World!");
});

export default router;