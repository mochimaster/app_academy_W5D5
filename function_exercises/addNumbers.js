const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

// console.log("Last program line");
// function completionCallback(sum) {
//       console.log(sum);
// }

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    completionCallback(sum);
  }
  if (numsLeft > 0){
    reader.question("What to add? ", function (answer) {
      sum += parseInt(answer);
      numsLeft -= 1;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  }


}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


addNumbers(0, 3, function (sum) {
  console.log(`Total Sum: ${sum}`);
});
