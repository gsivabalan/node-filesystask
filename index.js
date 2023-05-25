
const express = require("express");
require('dotenv').config()
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/api/create-text-file", (req, res) => {
  // const folder = "files";
  // const file = `${folder}/current-date-time.txt`;

  // if (!folder) {
  //   throw new Error("Please specify a folder");
  // }

  // if (!fs.existsSync(folder)) {
  //   throw new Error("Folder does not exist");
  // }

  const istDateTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  fs.writeFileSync(file, istDateTime);

  res.json({
    success: true,
    file_name: file
  });
});

app.get("/api/text-files", (req, res) => {
  const folder = req.query.folder || ".";

  const files = fs.readdirSync(folder);

  const textFiles = files.filter(file => file.endsWith(".txt"));

  res.json(textFiles);
});

app.listen(process.env.PORT || 9000, () => console.log("Server started on localhost:9000"));

