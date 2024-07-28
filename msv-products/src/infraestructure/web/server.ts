import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import "../database/data-source"; // Initialize the data source
import productRoutes from "./routes/productRoutes";
import sizeRoutes from "./routes/sizeRoutes";

const app = express();
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/products/", productRoutes)
app.use("/products/stock", sizeRoutes)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
