// char input 

// let charInput : string | null = prompt('enter a character : ')

// if(charInput && charInput.length > 1){
//     console.log(`you entered character is : ${charInput}`);
// }else{
//     console.log('enter valid character');
// }



// sumInput

// let input1 : string | null = prompt('enter the first number : ');
// let input2 : string | null = prompt('enter second number')

// if(input1 !== null && input2 !== null){
//     let num1 : number = parseFloat(input1);
//     let num2 : number = parseFloat(input2)

//     if(!isNaN(num1) && !isNaN(num2)){
//         console.log(`sum of ${num1} and ${num2} = ${num1 + num2}`);
//     }else{
//         console.log("invalid input ");
//     }
// }else{
//     console.log("input cancelled");
// }
 

//simpleInterest

// let principleAmount : string | null = prompt('enter principle amount : ');
// let rateInput : string | null = prompt('enter rate of interest : ');
// let timeInput : string | null = prompt('enter time period(in year) : ')

// if(principleAmount !== null && rateInput !== null && timeInput !== null){
//     let principal :number = parseFloat(principleAmount);
//     let rate : number = parseFloat(rateInput);
//     let time : number = parseFloat(timeInput)
//     if(!isNaN(principal)&& !isNaN(rate) && !isNaN(time)){
//         let simpleInterest : number = (principal * rate * time)/100;
//         console.log(`The Simple Interest for Principal ${principal}, Rate ${rate}%, and Time ${time} years is: ${simpleInterest}`);
//     }else{
//         console.log("invalid input");
//     }
// }else{
//     console.log("input cancelled");
// }

//check mark pass or fail 

// let markInput : string | null = prompt("enter the mark : ")

// if(markInput !== null){
//     let mark : number = parseFloat(markInput)
//     if(mark >= 50){
//         console.log(`student passed mark is ${mark}`);
//     }else{
//         console.log(`student failed mark is ${mark}`);
//     }
// }else{
//     console.log('input cancelled');
// }


//studentGradeSwitch

// let percentageInput: string | null = prompt("Enter your total mark percentage:");

// if (percentageInput !== null) {
//   let percentage: number = parseFloat(percentageInput);

//   if (!isNaN(percentage)) {
//     if (percentage > 90) {
//       console.log("Grade: A");
//     } else if (percentage >= 80 && percentage <= 89) {
//       console.log("Grade: B");
//     } else if (percentage >= 70 && percentage <= 79) {
//       console.log("Grade: C");
//     } else if (percentage >= 60 && percentage <= 69) {
//       console.log("Grade: D");
//     } else if (percentage >= 50 && percentage <= 59) {
//       console.log("Grade: E");
//     } else {
//       console.log("Grade: Failed");
//     }
//   } else {
//     console.log("Invalid input. Please enter a valid number.");
//   }
// } else {
//   console.log("Input was cancelled.");
// }





//dayOfWeek

// let dayInput: string | null = prompt("Enter a number between 1 and 7:");

// if (dayInput !== null) {
//   let day: number = parseInt(dayInput);

//   switch (day) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//       console.log("Wednesday");
//       break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     case 7:
//       console.log("Saturday");
//       break;
//     default:
//       console.log("Invalid Entry");
//   }
// } else {
//   console.log("Input was cancelled.");
// }


//multiplicationTable

// let numberInput: string | null = prompt("Enter a number to display its multiplication table:");

// if (numberInput !== null) {
//   let number: number = parseInt(numberInput);

//   if (!isNaN(number)) {
//     console.log(`Multiplication Table of ${number}:`);
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${i} x ${number} = ${i * number}`);
//     }
//   } else {
//     console.log("Invalid input. Please enter a valid number.");
//   }
// } else {
//   console.log("Input was cancelled.");
// }

//sumOddNumbers

// let limitInput: string | null = prompt("Enter a limit to find the sum of all odd numbers:");

// if (limitInput !== null) {
//   let limit: number = parseInt(limitInput);

//   if (!isNaN(limit) && limit > 0) {
//     let sum: number = 0;

//     for (let i = 1; i <= limit; i += 2) {
//       sum += i;
//     }

//     console.log(`Sum of odd numbers up to ${limit} = ${sum}`);
//   } else {
//     console.log("Invalid input. Please enter a positive number.");
//   }
// } else {
//   console.log("Input was cancelled.");
// }

//numberPattern
// let limit: number = 5;  // You can change this value to print a different number of rows.

// for (let i = 1; i <= limit; i++) {
//   let row: string = '';
//   for (let j = 1; j <= i; j++) {
//     row += j + ' ';
//   }
//   console.log(row.trim());
// }

//swapArrays
// let sizeInput: string | null = prompt("Enter the size of arrays:");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);
  
//   if (!isNaN(size) && size > 0) {
//     let array1Input: string | null = prompt(`Enter ${size} values for Array 1, separated by commas:`);
//     let array2Input: string | null = prompt(`Enter ${size} values for Array 2, separated by commas:`);
    
//     if (array1Input !== null && array2Input !== null) {
//       let array1: string[] = array1Input.split(',').map(value => value.trim());
//       let array2: string[] = array2Input.split(',').map(value => value.trim());

//       if (array1.length === size && array2.length === size) {
//         // Swap arrays
//         let temp: string[] = array1;
//         array1 = array2;
//         array2 = temp;

//         console.log("Arrays after swapping:");
//         console.log("Array1:", array1.join(', '));
//         console.log("Array2:", array2.join(', '));
//       } else {
//         console.log("Please enter exactly", size, "values for each array.");
//       }
//     } else {
//       console.log("Input for arrays was cancelled.");
//     }
//   } else {
//     console.log("Invalid size. Please enter a positive number.");
//   }
// } else {
//   console.log("Input for size was cancelled.");
// }

//evenNumbersCount


// let sizeInput: string | null = prompt("Enter the size of the array:");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   if (!isNaN(size) && size > 0) {
//     let arrayInput: string | null = prompt(`Enter ${size} values for the array, separated by commas:`);

//     if (arrayInput !== null) {
//       let array: number[] = arrayInput.split(',').map(value => parseInt(value.trim()));
      
//       if (array.length === size && array.every(value => !isNaN(value))) {
//         let evenCount: number = array.filter(value => value % 2 === 0).length;

//         console.log(`Number of even numbers in the given array is ${evenCount}`);
//       } else {
//         console.log("Please enter exactly", size, "valid numbers.");
//       }
//     } else {
//       console.log("Input for array was cancelled.");
//     }
//   } else {
//     console.log("Invalid size. Please enter a positive number.");
//   }
// } else {
//   console.log("Input for size was cancelled.");
// }


//sortDescending

// let sizeInput: string | null = prompt("Enter the size of the array:");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   if (!isNaN(size) && size > 0) {
//     let arrayInput: string | null = prompt(`Enter ${size} values for the array, separated by commas:`);

//     if (arrayInput !== null) {
//       let array: number[] = arrayInput.split(',').map(value => parseInt(value.trim()));
      
//       if (array.length === size && array.every(value => !isNaN(value))) {
//         // Sorting the array in descending order
//         array.sort((a, b) => b - a);

//         console.log("Sorted array:");
//         console.log(array.join(', '));
//       } else {
//         console.log("Please enter exactly", size, "valid numbers.");
//       }
//     } else {
//       console.log("Input for array was cancelled.");
//     }
//   } else {
//     console.log("Invalid size. Please enter a positive number.");
//   }
// } else {
//   console.log("Input for size was cancelled.");
// }



//palindromeCheck
// let inputString: string | null = prompt("Enter a string:");

// if (inputString !== null) {
//   // Convert the input string to lowercase for case-insensitive comparison
//   let cleanString: string = inputString.toLowerCase();

//   // Reverse the string and compare with the original
//   let reversedString: string = cleanString.split('').reverse().join('');

//   // Check if the original string is equal to the reversed string
//   if (cleanString === reversedString) {
//     console.log("Entered string is a palindrome");
//   } else {
//     console.log("Entered string is not a palindrome");
//   }
// } else {
//   console.log("Input was cancelled.");
// }


//sum2DArrays
// let sizeInput: string | null = prompt("Enter the size of the arrays (e.g., 3 for a 3x3 array):");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   if (!isNaN(size) && size > 0) {
//     // Initialize two 2D arrays
//     let array1: number[][] = [];
//     let array2: number[][] = [];
    
//     // Input for first 2D array
//     let array1Input: string | null = prompt(`Enter the values of Array 1, each row separated by a comma (e.g., 1 2 3):`);
//     if (array1Input !== null) {
//       let rows1 = array1Input.split(','); // Expect rows to be comma-separated
//       for (let i = 0; i < size; i++) {
//         let rowValues1 = rows1[i].trim().split(' ').map(value => parseInt(value));
//         array1.push(rowValues1);
//       }
//     }

//     // Input for second 2D array
//     let array2Input: string | null = prompt(`Enter the values of Array 2, each row separated by a comma (e.g., 10 20 30):`);
//     if (array2Input !== null) {
//       let rows2 = array2Input.split(','); // Expect rows to be comma-separated
//       for (let i = 0; i < size; i++) {
//         let rowValues2 = rows2[i].trim().split(' ').map(value => parseInt(value));
//         array2.push(rowValues2);
//       }
//     }

//     // Sum of the two arrays
//     let sumArray: number[][] = [];
//     for (let i = 0; i < size; i++) {
//       let rowSum: number[] = [];
//       for (let j = 0; j < size; j++) {
//         rowSum.push(array1[i][j] + array2[i][j]);
//       }
//       sumArray.push(rowSum);
//     }

//     // Output the sum of the two arrays
//     console.log("Sum of 2 arrays is:");
//     for (let i = 0; i < size; i++) {
//       console.log(sumArray[i].join(' '));
//     }
//   } else {
//     console.log("Invalid size. Please enter a positive number.");
//   }
// } else {
//   console.log("Input for size was cancelled.");
// }


//q


// Main function
// function main(): void {
//     let array: number[] = [];
    
//     getArray(array);
  
//     displayArray(array);
//   }
  
//   function getArray(array: number[]): void {
//     for (let i = 0; i < 5; i++) {
//       let input: string | null = prompt(`Enter value for element ${i + 1}:`);
//       if (input !== null) {
//         array[i] = parseInt(input);
//       } else {
//         console.log("Invalid input!");
//         break;
//       }
//     }
//   }
  
//   function displayArray(array: number[]): void {
//     console.log("Array values are:");
//     for (let i = 0; i < array.length; i++) {
//       console.log(`Element ${i + 1}: ${array[i]}`);
//     }
//   }
  
  
//   main();
  

// function isPrime(num: number): boolean {
//     if (num <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function main(): void {
//     let input: string | null = prompt("Enter a number:");
//     if (input !== null) {
//       let num: number = parseInt(input);
  
//       if (isPrime(num)) {
//         console.log("Entered number is a Prime number");
//       } else {
//         console.log("Entered number is not a Prime number");
//       }
//     } else {
//       console.log("Invalid input!");
//     }
//   }
  
//   main();
  

//q

// class Calculator {
//     addition(num1: number, num2: number): number {
//       return num1 + num2;
//     }
  
//     subtraction(num1: number, num2: number): number {
//       return num1 - num2;
//     }
  
//     multiplication(num1: number, num2: number): number {
//       return num1 * num2;
//     }
  
//     division(num1: number, num2: number): number {
//       if (num2 === 0) {
//         console.log("Error! Division by zero.");
//         return NaN;
//       }
//       return num1 / num2;
//     }
//   }
  
//   function main(): void {
//     let calculator = new Calculator();
  
//     let choice: number;
//     let num1: number, num2: number;
  
//     do {
//       console.log("Menu:");
//       console.log("1. Addition");
//       console.log("2. Subtraction");
//       console.log("3. Multiplication");
//       console.log("4. Division");
//       console.log("5. Exit");
  
//       choice = parseInt(prompt("Enter your choice (1-5):") || "");
  
//       if (choice >= 1 && choice <= 4) {
//         num1 = parseFloat(prompt("Enter the first number:") || "");
//         num2 = parseFloat(prompt("Enter the second number:") || "");
//       }
  
//       switch (choice) {
//         case 1:
//           console.log("Result of Addition: " + calculator.addition(num1, num2));
//           break;
//         case 2:
//           console.log("Result of Subtraction: " + calculator.subtraction(num1, num2));
//           break;
//         case 3:
//           console.log("Result of Multiplication: " + calculator.multiplication(num1, num2));
//           break;
//         case 4:
//           console.log("Result of Division: " + calculator.division(num1, num2));
//           break;
//         case 5:
//           console.log("Exiting...");
//           break;
//         default:
//           console.log("Invalid choice. Please enter a valid option.");
//       }
//     } while (choice !== 5);
//   }
  
//   main();
  

//q

// function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
//     const weightedAverage = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
//     return weightedAverage;
//   }
  
//   function main(): void {
//     const writtenTest = parseFloat(prompt("Enter the marks for Written test:") || "");
//     const labExams = parseFloat(prompt("Enter the marks for Lab exams:") || "");
//     const assignments = parseFloat(prompt("Enter the marks for Assignments:") || "");
  
//     const grade = calculateGrade(writtenTest, labExams, assignments);
  
//     console.log(`Grade of the student is ${grade.toFixed(1)}`);
//   }
  
//   main();
  
//q

// function calculateIncomeTax(income: number): number {
//     let taxAmount = 0;
  
//     if (income <= 250000) {
//       taxAmount = 0;
//     } else if (income <= 500000) {
//       taxAmount = (income - 250000) * 0.05;
//     } else if (income <= 1000000) {
//       taxAmount = (income - 500000) * 0.20 + 2500;
//     } else if (income <= 5000000) {
//       taxAmount = (income - 1000000) * 0.30 + 12000;
//     } else {
//       taxAmount = (income - 5000000) * 0.30 + 120000;
//     }
  
//     return taxAmount;
//   }
  
//   function main(): void {
//     const income = parseFloat(prompt("Enter the annual income:") || "0");
//     const taxAmount = calculateIncomeTax(income);
//     console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
//   }
  
//   main();
  

//q

// function printPattern(): void {
//     let num = 1;
//     for (let i = 1; i <= 4; i++) {
//       let row = "";
//       for (let j = 1; j <= i; j++) {
//         row += num + "\t";
//         num++;
//       }
//       console.log(row);
//     }
//   }
  
//   printPattern();
  
  //q


//   function main() {
//     const limit = parseInt(prompt("Enter the array limit: ") || "0");
//     const inputValuesString = prompt("Enter the values of the array (use spaces or commas): ") || "";
  
//     // Handle both spaces and commas as delimiters
//     const inputValues = inputValuesString.split(/[\s,]+/).map(Number);
  
//     if (inputValues.length !== limit) {
//       console.log("Invalid input. Please enter exactly " + limit + " values.");
//       return;
//     }
  
//     const resultArray: number[] = [];
//     for (let i = 0; i < limit - 1; i++) {
//       resultArray.push(inputValues[i] * inputValues[i + 1]);
//     }
  
//     console.log("Output:");
//     console.log(resultArray.join("\t"));
//   }
  
//   main();
  
  //q

//   function main() {
//     const size = parseInt(prompt("Enter the size of array: ") || "0");
//     const array1: number[][] = getArray(size, "array 1");
//     const array2: number[][] = getArray(size, "array 2");
//     const sumArray: number[][] = addArray(array1, array2, size);
//     displayArray(sumArray, size);
//   }
  
//   function getArray(size: number, arrayName: string): number[][] {
//     const array: number[][] = [];
//     console.log(`Enter the values of ${arrayName}:`);
//     for (let i = 0; i < size; i++) {
//       const row = prompt(`Row ${i + 1}: `)?.split(/\s+/).map(Number) || [];
//       array.push(row);
//     }
//     return array;
//   }
  
//   function addArray(array1: number[][], array2: number[][], size: number): number[][] {
//     const result: number[][] = [];
//     for (let i = 0; i < size; i++) {
//       const row: number[] = [];
//       for (let j = 0; j < size; j++) {
//         row.push(array1[i][j] + array2[i][j]);
//       }
//       result.push(row);
//     }
//     return result;
//   }
  
//   function displayArray(array: number[][], size: number): void {
//     console.log("Sum of array 1 and array 2:");
//     for (let i = 0; i < size; i++) {
//       console.log(array[i].join("\t"));
//     }
//   }
  
//   main();
  

//q


// class TwoDArray {
//     private array: number[][] = [];
  
//     getArray(size: number): void {
//       console.log("Enter the array values:");
//       for (let i = 0; i < size; i++) {
//         const row = prompt(`Row ${i + 1}: `)?.split(/\s+/).map(Number) || [];
//         this.array.push(row);
//       }
//     }
  
//     displayArray(): void {
//       console.log("Array elements are:");
//       this.array.forEach(row => console.log(row.join("\t")));
//     }
//   }
  
//   function main() {
//     const size = parseInt(prompt("Enter the size of array: ") || "0");
//     const arrayObject = new TwoDArray();
//     arrayObject.getArray(size);
//     arrayObject.displayArray();
//   }
  
//   main();
  

//q



// class Area {
//   circle(radius: number): number {
//     return 3.1416 * radius * radius;
//   }

//   square(side: number): number {
//     return side * side;
//   }

//   rectangle(length: number, breadth: number): number {
//     return length * breadth;
//   }

//   triangle(base: number, height: number): number {
//     return 0.5 * base * height;
//   }
// }

// class MyClass {
//   private areaCalculator: Area = new Area();

//   getCircleArea(): void {
//     const radius = parseFloat(prompt("Enter the radius: ") || "0");
//     console.log(`Area of the circle is: ${this.areaCalculator.circle(radius).toFixed(2)}`);
//   }

//   getSquareArea(): void {
//     const side = parseFloat(prompt("Enter the side: ") || "0");
//     console.log(`Area of the square is: ${this.areaCalculator.square(side)}`);
//   }

//   getRectangleArea(): void {
//     const length = parseFloat(prompt("Enter the length: ") || "0");
//     const breadth = parseFloat(prompt("Enter the breadth: ") || "0");
//     console.log(`Area of the rectangle is: ${this.areaCalculator.rectangle(length, breadth)}`);
//   }

//   getTriangleArea(): void {
//     const base = parseFloat(prompt("Enter the base: ") || "0");
//     const height = parseFloat(prompt("Enter the height: ") || "0");
//     console.log(`Area of the triangle is: ${this.areaCalculator.triangle(base, height)}`);
//   }

//   main(): void {
//     console.log("Choose an option to calculate area:");
//     console.log("1. Circle\n2. Square\n3. Rectangle\n4. Triangle");
//     const choice = parseInt(prompt("Enter your choice (1-4): ") || "0");

//     switch (choice) {
//       case 1:
//         this.getCircleArea();
//         break;
//       case 2:
//         this.getSquareArea();
//         break;
//       case 3:
//         this.getRectangleArea();
//         break;
//       case 4:
//         this.getTriangleArea();
//         break;
//       default:
//         console.log("Invalid choice!");
//     }
//   }
// }

// function main() {
//   const myClassInstance = new MyClass();
//   myClassInstance.main();
// }

// main();


//q

// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// function displayBookStatus(library) {
//     library.forEach(book => {
//         if (book.readingStatus) {
//             console.log(`Already read '${book.title}' by ${book.author}.`);
//         } else {
//             console.log(`You still need to read '${book.title}' by ${book.author}.`);
//         }
//     });
// }

// displayBookStatus(library);

//q

// let my_string = '1234'; 

// try {
//     // Attempt to reverse the string
//     let reversedString = my_string.split("").reverse().join("");
//     console.log(`Reversed string is : ${reversedString}`);
// } catch (err) {
//     // Catch any error that occurs during the reversal process
//     console.log(`Error : ${err.message}`);
// } finally {
//     // Always print the type of the variable in the finally block
//     console.log(`Type of my_string is : ${typeof my_string}`);
// }

//q

// let my_height: any = 77; 

// try {
//     if (isNaN(my_height)) {
//         throw new Error("notANumberError");
//     } else if (my_height > 70) {
//         throw new Error("hugeHeightError");
//     } else if (my_height < 1) {
//         throw new Error("tinyHeightError");
//     } else {
//         console.log(my_height);
//     }
// } catch (err: any) {
//     console.log(err.message);
// }


//q

// function Car(name: string, mileage: number, max_speed: number) {
//     this.name = name;
//     this.mileage = mileage;
//     this.max_speed = max_speed;
// }


// const myCar = new Car('Toyota', 15, 180);

// // Display the values
// console.log(`Car Name: ${myCar.name}`);
// console.log(`Mileage: ${myCar.mileage} km/l`);
// console.log(`Max Speed: ${myCar.max_speed} km/h`);

//q

// function myFilter(myArray: number[], callback: (num: number) => boolean): number {
//     let sum = 0;

    
//     for (let num of myArray) {
//         if (callback(num)) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// function isEven(num: number): boolean {
//     return num % 2 === 0;
// }

// const inputArray = [1, 2, 3, 4, 5];

// const result = myFilter(inputArray, isEven);

// console.log(`The sum of even numbers is: ${result}`);
