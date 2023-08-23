const express = require("express");
const numbersRoutes = require("./routes/numbersRoutes");
const app = express();

app.use("/numbers", numbersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
