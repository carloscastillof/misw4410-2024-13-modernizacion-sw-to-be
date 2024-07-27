import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import "../database/data-source"; // Initialize the data source

const app = express();
app.use(bodyParser.json());

app.use("/api", userRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
