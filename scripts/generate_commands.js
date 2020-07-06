const path = require("path");
const fs = require("fs");
const dir = path.join(__dirname, "/src/commands");
const files = fs.readdirSync(dir);
const commands = [];
files.forEach((file) => {
  if (file.endsWith(".js")) {
    const Command = require(path.join(dir, file)).default;
    const command = new Command();
    commands.push(command);
  }
});
console.log(commands);
console.log(JSON.stringify(commands));
fs.writeFileSync("../src/dynamic/commands.json", JSON.stringify(commands));
debugger;
