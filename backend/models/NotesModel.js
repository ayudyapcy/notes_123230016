import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Notes = db.define("notes", {
  judul: Sequelize.STRING,
  isi: Sequelize.TEXT,
  tanggal: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

db.sync().then(() => console.log("Database synced"));

export default Notes;