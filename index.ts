import express from "express";

import restaurantsRouter from "./routes/restaurants";
import cuisinesRouter from "./routes/cuisines";
import { errorHanlder } from "./middlewares/errorHandler";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/restuarants", restaurantsRouter)
app.use("/cuisines", restaurantsRouter)

app.use(errorHanlder);
app
  .listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  })
  .on("error", (error: Error) => {
    throw new Error(error.message);
  });