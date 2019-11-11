const pwd = require("./pwd.js")
const ls = require("./ls.js")



process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd.pwd(cmd);
  } else if (cmd === "ls"){
    ls.lsFunc();
  }

//  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');
})
