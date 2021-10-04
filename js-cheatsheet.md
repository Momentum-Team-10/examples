# The Basics
Welcome to the "Wild West" of programming! JavaScript is an incredibly powerful programming language that will help make your web applications **interactive**. But, why is it called the "Wild West" of programming? You'll find that JavaScript allows you do a lot of interesting things...because of this, sometimes JavaScript doesn't act as quite expected. Follow the guidelines below and you will have a way to get the heck outta Dogde!
<br>
<br>

### Declaring Variables
A **variable** stores a value that can be used later on. You can think of a variable as a container for data.

Use **let** for reassigning values
<br>
`let name = 'Lila'`  

Use **const** when the value will not change
<br>
`const pi = 3.14` 

### Data Types
Data types describe the different types or kinds of data that we're gonna be working with and storing in variables.

- **Strings** are always in quotations `"This is a string"`
- **Numbers** (integers) `10, -1, 3.14`
- Booleans are either `true` or `false`
- `Undefined` means no value has been assigned
- `Null` means the absence of a value
- **Arrays** are used to store a collection of values `["strings", true, 3, {name: "Jeanette"}, [...]]`
- **Objects** are a collection of related data used to represent a person, place, etc. in JavaScript
```
const person = { 
    name: "Trent", location: "Washington", 
    age: 16,
    hobbies: [
        "Under water basket weaving", 
        "Bird watching", 
        "Long walks on the beach", "LARPing"
    ]
}
```
### JavaScript Operators 
An operator performs some operation on single or multiple operands (data value).

### Math Operators
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` modulus, the output is the remainder after the values have been divided
- `**` exponentiation
- `++` increment count up by 1 or given value
- `--` decrement count down by 1 or given value

### Comparison Operators
- `>` means **greater than**
- `>=` means **greater than or equal to**
- `<` means **less than**
- `<=` means **less than or equal to**
- `===` means **deep equality**
- `!==` means **deep inequality**
- `==` means **shallow equality**
- `!=` means **shallow inequality**

### Assignment Operators
- `=` assigning a value
- `+=` addition assignment (x += 2) is same as (x = x + 2)
- `-=` subtraction assignment (x -= 2) is same as (x = x - 2)
- `*=` multiplication assignment `(x *= 2)` is same as `(x = x * 2)`
- `/=` division assignment `(x /= 2)` is same as `(x = x / 2)`
- **= exponentiation assignment `(x **= 2)` is same as `(x = x ** 2)`
- `%=``(x %= 2)` is same as `(x = x % 2)`

# Conditions in JS

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can or should run. 

### Logical operators
- `&&` means both conditions need to evaluate to true
- `||` means either one or the other condition needs to evaluate as true
- `!` this is called a "bang" in programming. In JavaScript it means "not".

### JavaScript If Statements
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if statment syntax
```
if (condition) {
    execute the code!
}
```
if else statment syntax
```
 if (condition to be checked) {
   execute this code statement
   } else if (condition to be checked) {
     execute this code statement instead
   } else {
    execute this code statement if the first 
    two conditions aren't true
}
```

# JavaScript Functions!
A JavaScript function is a saved set of instructions you are giving the computer

### Declaring/ Defining functions
When you **declare** or **define** a function, you are setting up the instructions you want to give to your computer to execute

function keyword syntax
```
// the value in the parens is called parameters
function greeting (name) {
// console.log() prints to the console
  console.log('Hello ' + name)
  // we need the return keyword to return a value
  return 'Hello ' + name
}
```

Arrow function syntax 
```
    const greeting = () => {
        return 'Hello ' + name + '!'
    }
```

### Calling a function
When you **call** a function, you are telling the computer to execute the code inside the function's statement
```
// the value in the parens is called the argument
greeting('Jeanette')
```

### Returning a Value
You cannot use a value from a function unless you **return** it by using the `return` keyword
```
  function greeting(name) {
    return "Hello " + name + "!"
  }
```

### Function Scope
JavaScript has **function scope**: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function
```
    function circleArea (radius) {
        const pi = 3.14
        // We will see the value of pi in the console 
        // becuase we are inside of the function where pi is being defined
        console.log(pi)
        return pi * radius * radius
    }
    
    // We do not have access to this variable because it us out of scope. We will get 'undefined' in our console.
    console.log(pi)
```

### Unreachable Code
You cannot execute any code after a return statement. If you do, the code statment below is **unreachable**

```
  function greeting(name) {
    return "Hello " + name + "!"
    // this line of code will never run!
    console.log(name)
  }
```

### Hoisting in JavaScript
Hoisting is a JavaScript technique which moves variables and function declarations to the top of their scope before code execution begins. 

```
// We can call the function before it is defined because of hoisting

isOdd(3)

function isOdd (number) {
  // check if number is odd
  // we can check for remainder by using %
  if (number % 2 === 1 || number % 2 === -1) {
  // return true if number is odd
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}
```

