const fs = require("fs")
export default function get_commands() {
  const dir = "C:/xampp/htdocs/crown/CrownBot/src/commands";
  const commands = fs.readdirSync(dir);
  commands.forEach((file) => {
    if (file.endsWith(".js")) {
      const Command = require(path.join(dir, file)).default;
      const command = new Command();
      this.commands.push(command);
    }
  });
}