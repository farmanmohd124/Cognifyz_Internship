function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        // Print leading spaces
        let line = ' '.repeat(n - i);

        // Print ascending numbers
        for (let j = 1; j <= i; j++) {
            line += j;
        }

        // Print descending numbers
        for (let j = i - 1; j >= 1; j--) {
            line += j;
        }

        // Print the line
        console.log(line);
    }
}

// Example usage
const numberOfRows = 5;
console.log("The PYRAMID pattern will be printed below :")
printPyramid(numberOfRows);
