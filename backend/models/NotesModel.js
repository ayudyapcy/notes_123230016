import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Notes = db.define(
  "notes",
  {
    judul: Sequelize.STRING,
    isi: Sequelize.TEXT,
    tanggal_dibuat: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);

export default Notes;