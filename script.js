for (let i = 0; i <= 100; i++) { //Loop from 1 to 100
    if (i % 3 === 0 && i % 5 === 0) { //Check if "i" is a multiple of both 3 and 5
        console.log("FizzBuzz");
    } else if(i % 3 === 0){ //Check if "i" is a multiple of 3
        console.log("Fizz");
    } else if(i % 5 === 0){ //Check if "i" is a multiple of 5
        console.log("Buzz");
    } else { //Prints the number if none of the above conditons are met
        console.log(i);
    }

}