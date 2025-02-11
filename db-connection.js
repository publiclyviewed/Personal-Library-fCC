const mongoose = require("mongoose");

const uri = process.env.DB;
if (!uri) {
  console.error("No database connection string found!");
  process.exit(1);
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected successfully"))
  .catch(err => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

module.exports = mongoose;
