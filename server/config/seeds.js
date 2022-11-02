const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    name: "Calypso",
    username: "TanukiThunder",
    email: "test@test.com",
    password: "password",
  });

  console.log("users seeded");

  process.exit();
});
