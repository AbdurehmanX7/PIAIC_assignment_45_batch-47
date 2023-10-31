// equality and inequality
let grades = "A+"
console.log("Does grades == 'A+'? I predict True");
console.log(grades == "A+");

let grades1 = "C+"
console.log("Does grades =! 'D'? I predict False");
console.log(grades1 != "C+");

// numerical tests

let marks2=80;
console.log("Does marks2 =='80'? I predict true");
console.log(marks2==80); 

let marks3=80;
console.log("Does marks3 =!'80'? I predict false");
console.log(marks3 != 80);

let marks4=20;
console.log("Does marks4 >='15'? I predict true");
console.log(marks4 >= 15);

let marks5=50;
console.log("Does marks5 <=t '80'? I predict false");
console.log(marks5 <= 40);

// It is an array:
function isArray(item:any): boolean {
  return Array.isArray(item);
}

const item1 = [1, 2, 3];
console.log(isArray(item1)); // true (it's an array)

//It is not an array
function isNotArray(item: any): boolean {
    return !Array.isArray(item);
  }
  const item2 = "Hello, World!";
  console.log(isNotArray(item2)); // true (it's not an array)

  //Logical "AND" (&&)
  function testLogicalOperators(a: number, b: number): void {
    // Logical AND (&&)
    if (a > 0 && b > 0) {
      console.log("Both a and b are greater than 0.");
    } else {
      console.log("Either a or b (or both) are not greater than 0.");
    }
 }
    testLogicalOperators(2, 3);
    testLogicalOperators(2, 0);
   
    // Logical OR (||)
    function testLogicalOperators2(a: number, b: number): void {
    if (a === 0 || b === 0) {
      console.log("Either a or b (or both) are equal to 0.");
    } else {
      console.log("Neither a nor b are equal to 0.");
    }
  }
  testLogicalOperators2(2, 3); 
  testLogicalOperators2(7, 0,);
  