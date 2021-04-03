const fs = require('fs');
const daysLength = fs.readdirSync('./src/components/Days').length + 1;
const routes = [];

for (let i = 1; i < daysLength; i++) {
  routes.push(`/${i}`);
}

module.exports = [...routes];
