let input = require("fs").readFileSync("/dev/stdin").toString();

input = Number(input);

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
