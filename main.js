function chickenMonkey() {
//first, making a variable for the 1-100 number range by using a for loop that adds all of the nums up to 100
    const numbers = []
        for (var i = 1; i <= 100; i++) {
        numbers.push(i);
//now I need to find the multiples of 5 and assign them to print chicken
    if(i % 5 === 0 && i % 7 ===0) {
        console.log("chickenmonkey");    
//now I need to find the multiples of 7 and assign them to print monkey//
        } else if(i % 7 === 0) {
        console.log("monkey");
//now I need to find the multiples of 5 AND 7 and assign them to print chickenmonkey
        } else if(i % 5 === 0) {
            console.log("chicken");
// for all the others, I just want to print the actual number
        } else {
        console.log(i)
        }
    }
}
chickenMonkey();