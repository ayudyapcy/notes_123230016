import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";
import db from "./config/database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NotesRoute);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
  
app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});