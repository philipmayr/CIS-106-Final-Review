let questions = [
    {
        question: "A random access, variable-size data structure that allows elements to be added or removed is a random array.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Good programming practice follows the DRIP principle.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The first action in defining a while loop is to test an expression.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "In software testing, test data should be verified by checking the pseudocode to see if it produces correct results.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "In the book examples, output functions typically had no parameters in and a return value out.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Code block designators include indentation, curly braces, and end statements, depending on programming language.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "A widely used approach in systems analysis and software engineering for describing the structure of an information processing program or other process is known as XML.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Maximum numeric range of a 32-bit integer is 2,147,483,647.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Software testing includes verifying that the program responds correctly to all kinds of inputs.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "In software testing, test data should be verified by checking the pseudocode to see if it produces correct results.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The first action in defining a do loop is to test an expression.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Maximum numeric range of a character is 255.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Program comments should be self-documenting.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The broad areas of program design include identifying program requirements.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "A two-dimensional array element may be accessed using array[row, column].",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "A two-dimensional array element may be accessed using _____.",
        answers: [
            { text: "array[row][column]", correct: true },
            { text: "array[column][row]", correct: false },
            { text: "array[row, column]", correct: false },
            { text: "array[column, row]", correct: false }
        ]
    },
    {
        question: "Maximum numeric range of a 64-bit integer is 2,147,483,647.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Horizontal variable alignment makes a program harder to maintain.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "In the book examples, input functions typically had one or more parameters in and no return value out.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Maximum numeric range of a 16-bit integer is 32,767.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "The first step in reading a comma-separated-values file is to read the header.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "In the book examples, processing functions typically had one or more parameters in and a return value out.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Starting with Planning, the correct order regarding the Systems Development Life Cycle is: Planning - Analysis - Design - Implementation - Maintenance.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "The last action in defining a while loop is test an expression.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The value of True AND True is _____.",
        answers: ["True"]
    },
    {
        question: "Evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values is _____.",
        answers: ["interpolation"]
    },
    {
        question: "_____ is used to identify a block of code in Python.",
        answers: ["indentation"]
    },
    {
        question: "The data type of all input is _____.",
        answers: ["string"]
    },
    {
        question: "_____ is a branching statement that causes a function to jump back to the function that called it.",
        answers: ["return"]
    },
    {
        question: "An anomaly where a program overwrites adjacent memory locations is a _____.",
        answers: ["buffer overflow"]
    },
    {
        question: "_____ is a test before loop typically used when the number of iterations is known before entering the loop.",
        answers: ["for"]
    },
    {
        question: "_____ is a test after loop typically used when the number of iterations is NOT known before entering the loop.",
        answers: ["do"]
    },
    {
        question: "The data type of the value &quot;3.14&quot;.",
        answers: ["string"]
    },
    {
        question: "_____ is a two-way selection control structure.",
        answers: ["if-then-else", "if then else"]
    },
    {
        question: "Standard input stream, typically the keyboard is _____.",
        answers: ["stdin"]
    },
    {
        question: "A _____ is a character array.",
        answers: ["string"]
    },
    {
        question: "The assignment operator is _____.",
        answers: ["="]
    },
    {
        question: "The _____ flowcharting symbol is used to designate input and output operations.",
        answers: ["parallelogram"]
    },
    {
        question: "An _____ is a value provided as input to a function.",
        answers: ["argument"]
    },
    {
        question: "Standard output error stream, typically the monitor is _____.",
        answers: ["stderr"]
    },
    {
        question: "During the _____ phase of the System Development Life Cycle, the programmers would be assigned to write the specific programs using a programming language decided by the System Analyst.",
        answers: ["Implementation"]
    },
    {
        question: "Variables created as part of a program's stack are _____.",
        answers: ["local"]
    },
    {
        question: "The value of False AND False is _____.",
        answers: ["False"]
    },
    {
        question: "The result of reversing the string &quot;Hello&quot; is _____.",
        answers: ["olleH"]
    },
    {
        question: "_____ is the index value of the second element in an array.",
        answers: ["1"]
    },
    {
        question: "Define the data format and available procedures for a given type of object.",
        answers: ["classes"]
    },
    {
        question: "A software application that provides comprehensive facilities to computer programmers for software development.",
        answers: ["IDE", "integrated development environment"]
    },
    {
        question: "The relational operator meaning greater than is _____.",
        answers: [">"]
    },
    {
        question: "A function's communications declaration to a compiler is known as the _____.",
        answers: ["prototype", "function prototype"]
    },
    {
        question: "The result of finding the first index of &quot;l&quot; in &quot;Hello&quot; is _____.",
        answers: ["2"]
    },
    {
        question: "_____ is a multi-way selection control structure.",
        answers: ["case", "switch"]
    },
    {
        question: "The most popular version control system is _____.",
        answers: ["Git"]
    },
    {
        question: "Variables created inside a function are _____ in scope.",
        answers: ["local"]
    },
    {
        question: "Maximum number of digits in a 64-bit floating-point value is _____.",
        answers: ["15"]
    },
    {
        question: "A _____ is a single-dimension array.",
        answers: ["list"]
    },
    {
        question: "_____ are used to identify a block of code in languages such as C++, C#, Java, and JavaScript.",
        answers: ["braces", "curly braces", "{}"]
    },
    {
        question: "_____ is a form of implicit data structure that uses multiple arrays to represent a singular array of data.",
        answers: ["parallel arrays"]
    },
    {
        question: "_____ is a control structure where the program chooses between two or more options.",
        answers: ["selection", "condition"]
    },
    {
        question: "_____ is a branching statement that terminates the existing structure.",
        answers: ["break"]
    },
    {
        question: "A specification that defines a procedure or behavior of an object.",
        answers: ["method"]
    },
    {
        question: "_____ describes a loop with no terminating condition typically used when the number of iterations is NOT known before entering the loop.",
        answers: ["infinite"]
    },
    {
        question: "A method used to return the value of a private member variable, also known as a getter method.",
        answers: ["accessor"]
    },
    {
        question: "The result of trimming &quot; &quot; from &quot;Hello world&quot; is _____.",
        answers: ["Hello world"]
    },
    {
        question: "A _____ causes a computer to begin executing a different instruction sequence.",
        answers: ["branch"]
    },
    {
        question: "An interpreted high-level programming language for general purpose programming is _____.",
        answers: ["Python"]
    },
    {
        question: "In _____ case, each word is lowercase with underscores separating words.",
        answers: ["snake"]
    },
    {
        question: "_____ is a predefined function used to prematurely stop a program and return to the operating system.",
        answers: ["exit"]
    },
    {
        question: "_____ describes the amount of system resources used by a program.",
        answers: ["efficiency"]
    },
    {
        question: "An iteration control structure that places one loop inside another loop is known as _____.",
        answers: ["nesting", "nested"]
    },
    {
        question: "Keyword used in some computer programming languages to refer to the object, class, or other entity that the currently running code is part of.",
        answers: ["this", "self", "me"]
    },
    {
        question: "The value of True OR False is _____.",
        answers: ["True"]
    },
    {
        question: "_____ is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.",
        answers: ["modular programming"]
    },
    {
        question: "Incorrect output is the result of a _____ error.",
        answers: ["logic"]
    },
    {
        question: "_____ is a unary operator that adds one to the operand and uses the operand's original value.",
        answers: ["postfix increment"]
    },
    {
        question: "A _____ shows the relationship of various modules.",
        answers: ["hierarchy chart"]
    },
    {
        question: "_____ is a branching statement that causes a loop to stop its current iteration and begin the next one.",
        answers: ["continue"]
    },
    {
        question: "The value of True AND NOT True is _____.",
        answers: ["False"]
    },
    {
        question: "The code that describes what a function does is known as the _____.",
        answers: ["definition", "function definition"]
    },
    {
        question: "_____ describes how often the results of a program are correct.",
        answers: ["reliability"]
    },
    {
        question: "A value that can be changed during normal execution is a _____.",
        answers: ["variable"]
    },
    {
        question: "The region of a computer program where the name can be used to refer to the entity is its _____.",
        answers: ["scope"]
    },
    {
        question: "The relational operator meaning inequality is _____.",
        answers: ["<>", "!="]
    },
    {
        question: "A violation of the rules of a given programming language is a _____ error.",
        answers: ["syntax"]
    },
    {
        question: "The _____ flowcharting symbol is used to designate a process, such as a mathematical computation, or a variable assignment.",
        answers: ["rectangle"]
    },
    {
        question: "In _____ case, each word is capitalized including the first word, with no intervening spaces.",
        answers: ["Pascal"]
    },
    {
        question: "The operator used to concatenate string values is _____.",
        answers: ["+", "&"]
    },
    {
        question: "_____ is a reserved word used to represent a missing value.",
        answers: ["null", "None", "nil", "Nothing"]
    },
    {
        question: "A value that cannot be altered by the program during normal execution is a _____.",
        answers: ["constant"]
    },
    {
        question: "_____ variables belong to the class as a whole; there is only one copy of each one.",
        answers: ["class"]
    },
    {
        question: "Items that cannot occur at the same time are _____.",
        answers: ["mutually exclusive"]
    },
    {
        question: "An informal high-level description of the operating principle of a computer program or other algorithm is known as _____.",
        answers: ["pseudocode"]
    },
    {
        question: "The provision of a single interface to entities of different types.",
        answers: ["polymorphism"]
    },

    {
        question: "The _____ flowcharting symbol is used to indicate the flowchart's starting and ending points.",
        answers: ["rounded rectangle"]
    },
    {
        question: "In _____, a statement or block is executed until the program reaches a certain state, or operations have been applied to every element of a collection.",
        answers: ["iteration", "loop"]
    },
    {
        question: "_____ describes the ease with which a person can use a program for its intended purpose.",
        answers: ["usability"]
    },
    {
        question: "_____ describes the ease with which a person can comprehend the source code of a program.",
        answers: ["readability"]
    },
    {
        question: "A _____ combines object files into an executable program.",
        answers: ["linker"]
    },
    {
        question: "A _____ will check each element of a list for the target value until a match is found or until all the elements have been searched.",
        answers: ["linear search"]
    },
    {
        question: "_____ is the code structure that results in 'spaghetti code'.",
        answers: ["branching"]
    },
    {
        question: "A programmer needs _____ in order to make changes to a program.",
        answers: ["source code"]
    },
    {
        question: "A _____ is a unit of code consisting of zero or more statements.",
        answers: ["block", "code block"]
    },
    {
        question: "_____ describes the range of platforms on which the source code of a program may be compiled or interpreted and run.",
        answers: ["portability"]
    },
    {
        question: "The data type for the result of a function that returns normally, but does not provide a result value to its caller is _____.",
        answers: ["void", "None"]
    },
    {
        question: "_____ is a control structure where the program chooses between two or more options.",
        answers: ["condition"]
    },
    {
        question: "_____ refers to the number of indicies needed to specify an element in an array.",
        answers: ["dimensionality", "dimensions"]
    },
    {
        question: "Parameter passing which allows functions to modify the contents of passed arrays is _____.",
        answers: ["by reference"]
    },
    {
        question: "The data type of the value 3.14.",
        answers: ["float", "real", "double"]
    },
    {
        question: "_____ describes an arithmetic operation which attempts to create a numeric value that is outside the range that can be represented with a given number of bits.",
        answers: ["overflow"]
    },
    {
        question: "To define a _____, each word is uppercase with underscores separating words.",
        answers: ["constant"]
    },
    {
        question: "To request access to an existing file or to create a new file is known as _____.",
        answers: ["open"]
    },
    {
        question: "To move data from a device into a memory location defined in your program is known as _____.",
        answers: ["read"]
    },
    {
        question: "An interpreted programming language that is one of the three core technologies of the World Wide Web is _____.",
        answers: ["JavaScript"]
    },
    {
        question: "_____ describes how well a program anticipates problems due to errors.",
        answers: ["robustness"]
    },
    {
        question: "How much a program can be kept up to date.",
        answers: ["maintainability"]
    },
    {
        question: "AND, OR, and NOT are _____ operators.",
        answers: ["logical"]
    },
    {
        question: "A general purpose programming language developed by Microsoft around 2000 is _____.",
        answers: ["C#"]
    },
    {
        question: "An _____ is an integer indicating the distance from the beginning of an object to a given element.",
        answers: ["offset"]
    },
    {
        question: "To move data from a memory location defined in your program to a device is known as _____.",
        answers: ["write"]
    },
    {
        question: "A value that is typed into the program wherever it is needed is a _____.",
        answers: ["literal"]
    },
    {
        question: "A _____ represents a logical result.",
        answers: ["boolean"]
    },
    {
        question: "The process of removing errors from a program is _____.",
        answers: ["debugging"]
    },
    {
        question: "A _____ is a classification of data which tells the compiler or interpreter how the programmer intends to use the data.",
        answers: ["data type"]
    },
    {
        question: "During the _____ phase of the System Development Life Cycle, the System Analyst will document the inputs, processing and outputs of each program within the application.",
        answers: ["Design"]
    },
    {
        question: "What acronym can be used to remember the order of the System Development Life Cycle?",
        answers: ["PADIM"]
    },
    {
        question: "Maximum numeric range of a 16-bit integer is_____",
        answers: ["32,767"]
    },
    {
        question: "_____ is the operator used to separate elements when initializing an array.",
        answers: ["comma", ","]
    },
    {
        question: "A name that represents a value is an _____.",
        answers: ["identifier"]
    },
    {
        question: "A general purpose programming language developed at Bell Labs starting in 1979 is _____.",
        answers: ["C++"]
    },
    {
        question: "A function's using or invoking of another function is known as a _____.",
        answers: ["call", "function call"]
    },
    {
        question: "_____ describes how often the results of a program are correct.",
        answers: ["reliability"]
    },
    {
        question: "Code made available across implementations of a programming language is known as a _____.",
        answers: ["standard library"]
    },
    {
        question: "A programmer-readable explanation or annotation in the source code of a computer program is a _____.",
        answers: ["comment"]
    },
    {
        question: "A _____ is a variable used to store information that will normally be used to control the program.",
        answers: ["flag"]
    },
    {
        question: "_____ is the operator used to access elements when indexing an array in current programming languages.",
        answers: ["square brackets", "[]"]
    },
    {
        question: "A programming language that supports programs written for a special run-time environment that automate the execution of tasks that could alternatively be executed one-by-one by a human operator.",
        answers: ["scripting language"]
    },
    {
        question: "Combining two strings into one string is known as _____.",
        answers: ["concatenation", "string concatenation"]
    },
    {
        question: "The exploitation of a computer bug that is caused by processing invalid data is _____.",
        answers: ["code injection"]
    },
    {
        question: "The standard input device is a _____.",
        answers: ["keyboard"]
    },
    {
        question: "The modulus operator is _____.",
        answers: ["%"]
    },
    {
        question: "The addition operator is _____.",
        answers: ["+"]
    },
    {
        question: "_____ is an algorithm that puts elements of a list in a certain order.",
        answers: ["sort"]
    },
    {
        question: "The length of the string &quot;Hello world&quot; is _____.",
        answers: ["11"]
    },
    {
        question: "The data type of the value True.",
        answers: ["boolean"]
    },
    {
        question: "The multiplication operator is _____.",
        answers: ["*"]
    },
    {
        question: "Standard output stream, originally a printer, but now typically the monitor is _____.",
        answers: ["stdout"]
    },
    {
        question: "Blockly generates sample code in five programming languages, including _____.",
        answers: ["JavaScript", "Python", "Lua", "PHP", "Dart"]
    },
    {
        question: "Many programmers neglect to complete the _____ step before starting to code the program.",
        answers: ["planning"]
    },
    {
        question: "A computer program that transforms source code written in a programming language (the source language) into another computer language (the target language), with the latter often having a binary form known as object code is a _____.",
        answers: ["compiler"]
    },
    {
        question: "An _____ represents whole numbers.",
        answers: ["integer"]
    },
    {
        question: "_____ is a unary operator that adds one to the operand and uses the operand's new value.",
        answers: ["prefix increment"]
    },
    {
        question: "_____ is a control structure that allows some lines of code to be executed many times.",
        answers: ["iteration", "loop"]
    },
    {
        question: "_____ is a control structure where the program executes the items in the order listed.",
        answers: ["sequence"]
    },
    {
        question: "A software application that provides comprehensive facilities to computer programmers for software development.",
        answers: ["IDE", "integrated developer environment"]
    },
    {
        question: "The _____ flowcharting symbol is used to represent a true/false decision.",
        answers: ["diamond"]
    },
    {
        question: "_____ is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse.",
        answers: ["encapsulation"]
    },
    {
        question: "The division operator is _____.",
        answers: ["/"]
    },
    {
        question: "Objects are created by calling a special type of method in the class known as a _____.",
        answers: ["constructor"]
    },
    {
        question: "A parameter supplied by the caller can be affected by actions within the called function is known as call by _____.",
        answers: ["reference"]
    },
    {
        question: "IPO in computer programming refers to the _____ model.",
        answers: ["input, process, output", "input process output"]
    },
    {
        question: "The result of selecting a substring of &quot;Hello world&quot; starting at 7 for length 2 is _____.",
        answers: ["or"]
    },
    {
        question: "The value of True AND False is _____.",
        answers: ["False"]
    },
    {
        question: "A general purpose programming language developed at Sun Microsystems and released in 1995.",
        answers: ["Java"]
    },
    {
        question: "_____ is the mnemonic used to remember the order of operations.",
        answers: ["PEMDAS"]
    },
    {
        question: "The result of using a lower function on the string &quot;Hello&quot; is _____.",
        answers: ["hello"]
    },
    {
        question: "The relational operator meaning equality is _____.",
        answers: ["=="]
    },
    {
        question: "The relational operator meaning less than is _____.",
        answers: ["<"]
    },
    {
        question: "Maximum number of digits in a 32-bit floating-point value is _____.",
        answers: ["7"]
    },
    {
        question: "Good programming practice follows the _____ principle.",
        answers: ["DRY"]
    },
    {
        question: "A two-dimensional array element may be accessed using:",
        answers: ["array[row][column]"]
    },
    {
        question: "A unary operator that subtracts one from the operand and uses the operand's original value.",
        answers: ["postfix decrement"]
    },
    {
        question: "A unary operator that subtracts one from the operand and uses the operand's new value.",
        answers: ["prefix decrement"]
    },
    {
        question: "The first action in defining a while loop is:",
        answers: ["initialize the flag"]
    },
    {
        question: "An unstructured branching statement that causes the logic to jump to a different place in the program.",
        answers: ["goto"]
    },
    {
        question: "_____ is a method of planning programs that avoids the branching category of control structures.",
        answers: ["structured programming"]
    },
    {
        question: "A test after loop typically used when the number of iterations is NOT known before entering the loop.",
        answers: ["do"]
    },
    {
        question: "The last action in defining a do loop is:",
        answers: ["test an expression"]
    },
    {
        question: "Preferred programming style used to declare multiple variables in a function.",
        answers: ["vertical alignment"]
    },
    {
        question: "A parameter acts within the function as a new local variable initialized to the value of the argument is known as call by _____.",
        answers: ["value"]
    },
    {
        question: "A special kind of variable used in a function to refer to one of the pieces of data provided as input to the function.",
        answers: ["parameter"]
    },
    {
        question: "_____ is a test before loop typically used when the number of iterations is NOT known before entering the loop.",
        answers: ["while"]
    },
    {
        question: "A technique for arranging complexity of computer systems so that functionality may be separated from specific implementation details.",
        answers: ["abstraction"]
    },
    {
        question: "_____ is a phase in the System Development Life Cycle.",
        answers: ["Planning", "Analysis", "Design", "Implementation", "Maintenance"]
    },
    {
        question: "_____ is NOT a phase in the Systems Development Life Cycle.",
        answers: [
            { text: "Testing", correct: true },
            { text: "Planning", correct: false },
            { text: "Analysis", correct: false },
            { text: "Design", correct: false }
        ]
    },
    {
        question: "Subtraction operator.",
        answers: ["-"]
    },
    {
        question: "The standard output device.",
        answers: ["monitor", "display"]
    },
    {
        question: "True OR True",
        answers: ["True"]
    },
    {
        question: "To release access to a file is known as _____.",
        answers: ["close"]
    },
    {
        question: "The result of splitting &quot;Hello world&quot; using &quot &quot.",
        answers: ["[&quot;Hello&quot;, &quot;world&quot;]"]
    },
    {
        question: "A data structure consisting of a collection of elements (values or variables), each identified by at least one index.",
        answers: ["array"]
    },
    {
        question: "A random access, variable-size data structure that allows elements to be added or removed.",
        answers: ["dynamic array"]
    },
    {
        question: "A _____ causes execution to leave the current function and resume at the point in the code immediately after where the function was called.",
        answers: ["return statement", "return"]
    },
    {
        question: "Used to delineate a string literal.",
        answers: ['"']
    },
    {
        question: "_____ belong to individual objects, every object has its own copy of each one.",
        answers: ["instance variables"]
    },
    {
        question: "An uncontrolled structure that allows the flow of execution to jump to a different part of the program.",
        answers: ["branching"]
    },
    {
        question: "Represents fractional numbers.",
        answers: ["floating point"]
    },
    {
        question: "True AND NOT False",
        answers: ["True"]
    },
    {
        question: "A widely used approach in systems analysis and software engineering for describing the structure of an information processing program or other process.",
        answers: ["IPO"]
    },
    {
        question: "A concrete occurrence of an object.",
        answers: ["instance"]
    },
    {
        question: "Within objects, data is in the form of _____, often known as _____.",
        answers: ["fields, attributes"]
    },
    {
        question: "A specification that defines a property of an object.",
        answers: ["attribute"]
    },
    {
        question: "Variables created as part of a program's object code are _____.",
        answers: ["global"]
    }
    ,
    {
        question: "The result of joining [&quot;Hello&quot;, &quot;world&quot;] using &quot; &quot; is _____.",
        answers: ["Hello world"]
    }
    ,
    {
        question: "The value of 1 + 2 * 3 is _____.",
        answers: ["7"]
    }
    ,
    {
        question: "A method used to control changes to a private member variables, also known as a setter method.",
        answers: ["mutator"]
    }
    ,
    {
        question: "An object or class being based on another object or class, using the same implementation or specifying a new implementation to maintain the same behavior.",
        answers: ["inheritance"]
    }
    ,
    {
        question: "Objects are instances of _____.",
        answers: ["classes"]
    }
    ,
    {
        question: "Within objects, code is in the form of procedures, often known as _____.",
        answers: ["methods"]
    },
    {
        question: "A _____ is a sequence of program instructions that performs a specific task, packaged as a unit.",
        answers: ["function"]
    },
    {
        question: "A sequence of characters is a _____.",
        answers: ["string"]
    },
    {
        question: "A computer program that directly executes, i. e. performs, instructions written in a programming or scripting language, without previously compiling them into a machine language program.",
        answers: ["interpreter"]
    }
    ,
    {
        question: "Properties or methods of a class that apply to all instances of the class rather than to any specific instance.",
        answers: ["static"]
    }
    ,
    {
        question: "The result of replacing &quot;H&quot; with &quot;j&quot; in the string &quot;Hello&quot; is _____.",
        answers: ["jello"]
    },
    {
        question: "The value obtained by inverting all the bits in the binary representation of a number is the _____.",
        answers: ["one's complement", "ones complement"]
    }
    /*
    {
        question: "",
        answers: [""]
    }
    */
];

const questionCounter = document.getElementById("question-counter");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const checkButton = document.getElementById("check-btn");
const nextButton = document.getElementById("next-btn");
const hintButton = document.getElementById("hint-btn");
const input = document.getElementById("input");
const audio = new Audio('ping.mp3');

let currentQuestionIndex = 0;
let counter = 0;
let score = 0;
let hint = "";

audio.volume = 0.33;

function startQuiz() {
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    hintButton.style.display = "none";
    questionCounter.innerHTML = "1 of 50";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    
    if (currentQuestionIndex > 0) {
        input.placeholder = "";
    }

    if (currentQuestion.answers[0].text == null) {
        input.style.display = "block";
        input.style.color = '#03254c';
        input.style.borderColor = '#03254c';
        input.focus();
        checkButton.style.display = "block";
    } else {
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
}

function resetState() {
    flag = false;
    questionCounter.innerHTML = `${currentQuestionIndex + 1} of 50`;
    input.style.color = '#03254c';
    input.value = "";
    counter = 0;
    hint = "";
    checkButton.innerHTML = "Check";
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct;
    if (isCorrect) {
        audio.play();
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }   
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.focus();
}

nextButton.addEventListener("click", () => {
    nextButton.innerHTML = "Next";
    input.disabled = false;
    checkButton.style.display = "none";
    input.style.display = "none";
    if(currentQuestionIndex < 50) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

checkButton.addEventListener("click", () => {
    let index = 0;
    let isCorrect = false;
    for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
        if (input.value.toLowerCase().trim().replace(/\s+/g, " ") == questions[currentQuestionIndex].answers[i].toLowerCase()) {
            index = i;
            isCorrect = true;
            break;
        }
    }
    if (isCorrect) {
        audio.play();
        input.value = questions[currentQuestionIndex].answers[index];
        score++;
        checkButton.style.display = "none";
        nextButton.style.display = "block";
        input.style.borderColor = '#008000';
        hintButton.style.display = "none";
        input.style.color = '#008000';
        input.disabled = true;
        nextButton.focus();
    } else {
        input.style.borderColor = 'grey';
        input.style.color = 'grey';
        hintButton.style.display = "block";
    }
});

nextButton.addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    nextButton.click();
    event.preventDefault();
});

document.addEventListener("keyup", event => {
    if ((event.key === "t" || event.key === "1") && (input.style.display === "none" || input.style.display === "")) {
        answerButtons.children[0].click();
    } else if ((event.key === "f" || event.key === "2") && (input.style.display === "none" || input.style.display === "")) {
        answerButtons.children[1].click();
    } else if (event.key === "3" && (input.style.display === "none" || input.style.display === "")) {
        answerButtons.children[2].click();
    } else if (event.key === "4" && (input.style.display === "none" || input.style.display === "")) {
        answerButtons.children[3].click();
    } else if (event.key === " " && (input.disabled === true || input.style.display === "none")) {
        nextButton.click();
    } else if (event.key === "h" && hintButton.style.display === "block" && document.activeElement !== input) {
        hintButton.click();
    } else if ((event.key === "Enter" || event.key === " ") && document.activeElement !== input && flag === false) {
        if (nextButton.style.display === "block") {
            nextButton.click();
        } else if (checkButton.style.display === "block") {
            checkButton.click();
        }
    }
    event.preventDefault();
});

let flag = false;

input.addEventListener("keyup", event => {
    if (event.key !== "Enter") {
        input.style.color = '#03254c';
        return;
    }
    if (input.value != "") {
        flag = true;
        checkButton.click();  
    }
    event.preventDefault();
});

hintButton.addEventListener("click", () => {
    let index = 0;
    let answer = 0;
    const answers = questions[currentQuestionIndex].answers;
    let inputValue = input.value.trim().toLowerCase().replace(/\s+/g, " ");
    const inputLength = inputValue.length;
    for (let a = 0; a < answers.length; a++) {
        for (let i = 0; i < answers[a].length; i++) {
            if (answers[a].toLowerCase().startsWith(inputValue.substring(0, i))) {
                if (i > index) {
                    index = i;
                    answer = a;
                }
            } else {
                break;
            }
        }
    }
    const currentAnswer = answers[answer];
    if (inputValue == currentAnswer.toLowerCase()) {
        input.style.color = '#008000';
        input.style.borderColor = '#008000';
        input.value = currentAnswer;
        checkButton.style.display = "none";
        nextButton.style.display = "block";
        hintButton.style.display = "none";
        nextButton.focus();
        input.disabled = true;
        score++;
    } else {
        if (inputLength > 0 && inputLength < currentAnswer.length + 1 && (inputValue == currentAnswer.substring(0, inputLength).toLowerCase())){
            hint = input.value + currentAnswer[inputLength];
        } else if (inputLength >= currentAnswer.length) {
            hint = currentAnswer.substring(0, index + 1);
            counter--;
        } else {
            hint += currentAnswer[counter];
        }
        input.value = hint;
        input.focus();
        counter++;
        inputValue = hint.trim().replace(/\s+/g, " ").toLowerCase();
        if (inputValue == currentAnswer.toLowerCase()) {
            input.style.color = '#008000';
            input.style.borderColor = '#008000';
            input.value = currentAnswer;
            checkButton.style.display = "none";
            nextButton.style.display = "block";
            hintButton.style.display = "none";
            nextButton.focus();
            input.disabled = true;
            score++;
        }
    }
});

function showScore() {
    nextButton.disabled = true;
    resetState();
    nextButton.disabled = false;
    questionElement.innerHTML = `You got ${score} out of 50 questions right.`;
    questionCounter.innerHTML = "50 of 50 - All Done !";
    nextButton.innerHTML = "Restart Review";
    nextButton.style.display = "block";
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = -1;
    score = 0;
}

function handleNextButton() {
    if (nextButton.innerHTML == "Restart Review") {
        startQuiz();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < 50) {
            showQuestion();
        } else {
            showScore();
        }
    }
}

startQuiz();
