import express from "express";

import restaurantsRouter from "./routes/restaurants.js";
import cuisinesRouter from "./routes/cuisines.js";
import { errorHanlder } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/restaurants", restaurantsRouter);
app.use("/cuisines", cuisinesRouter);

app.use(errorHanlder);
app
  .listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  })
  .on("error", (error: Error) => {
    throw new Error(error.message);
  });
