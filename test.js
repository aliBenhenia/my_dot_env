const env = require("./my_dot_env");
env.parse();

console.log(process.env.API_KEY)
