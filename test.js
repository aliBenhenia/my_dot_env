const env = require("./my_dot_env");
env.parse(); // config

console.log(process.env.API_KEY)
