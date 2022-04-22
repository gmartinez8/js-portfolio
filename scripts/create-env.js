const fs = require('fs');

// fs.writeFileSync("path", `argumento a crear`);
fs.writeFileSync("./.env", `API=${process.env.API}\n`);