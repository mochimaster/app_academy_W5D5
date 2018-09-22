const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback){

  reader.question(`Is ${el1} greater than ${el2}? Yes or No?`, function (answer) {
    if (answer.toLowerCase() === 'yes') {
      callback(true);
    } else if (answer.toLowerCase() === 'no'){
      callback(false);
    } else {
      console.log("Invalid response. Yes or No : ");
      askIfGreaterThan(el1, el2, callback);
    }
  });


}
// askIfGreaterThan(0, 3, sum => console.log(`True/False ?: ${sum}`));

function innerBubbleSortLoop(arr, i, madeAnySwaps = false, outerBubbleSortLoop){
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i],arr[i+1], function (isGreaterThan) {
      if (isGreaterThan === true) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  } else  { // confirm == vs ===?
    console.log(i);
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function outerBubbleSortLoop(madeAnySwaps){
  // console.log("Inside outerbubble sort");
  // console.log(madeAnySwaps);
  // reader.close();
  if (madeAnySwaps === true) {
    innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
  } else {
    sortCompletionCallback(arr);
  }
}

innerBubbleSortLoop([2,5,3,6],0,false,outerBubbleSortLoop);
