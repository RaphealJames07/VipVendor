require("./database/database");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 4040;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});
