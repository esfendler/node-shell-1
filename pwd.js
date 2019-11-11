// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
// //  process.stdout.write('You typed: ' + cmd);
//   if (cmd === "pwd") {
//     console.log(process.env.PWD);
//   }
//   process.stdout.write('\nprompt >');
// })


function pwd (cmd) {
  console.log(process.env.PWD);
}

module.exports = {
  pwd
}
