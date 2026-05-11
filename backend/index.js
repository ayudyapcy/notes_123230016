import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NotesRoute);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});