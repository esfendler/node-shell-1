const pwd = require("./pwd.js")

console.log(pwd);

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd.pwd(cmd);
  }

//  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');
})
