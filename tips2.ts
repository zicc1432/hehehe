const moment = require("moment");

const startCurrentTime = moment().startOf("month").toDate();

console.log(startCurrentTime);
