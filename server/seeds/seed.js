const db = require('../config/connection');
const { Tech } = require('../models');

const xData = require('./xData.json');

db.once('open', async () => {
  await x.deleteMany({});

  const technologies = await x.insertMany(xData);

  console.log('Technologies seeded!');
  process.exit(0);
});
