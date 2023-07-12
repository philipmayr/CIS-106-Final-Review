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
        question: "The value of True AND True is _____.",
        answers: ["true"]
    },
    {
        question: "Evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values is _____.",
        answers: ["interpolation"]
    },
    {
        question: "_____ is used to identify a block of code in Python.",
        answers: ["Indentation"]
    },
    {
        question: "The data type of all input is _____.",
        answers: ["string"]
    },
    {
        question: "_____ is a branching statement that causes a function to jump back to the function that called it.",
        answers: ["Return"]
    },
    {
        question: "An anomaly where a program overwrites adjacent memory locations is a _____.",
        answers: ["buffer overflow"]
    },
    {
        question: "_____ is a test before loop typically used when the number of iterations is known before entering the loop.",
        answers: ["For"]
    },
    {
        question: "The data type of the value &quot;3.14&quot;.",
        answers: ["string"]
    },
    {
        question: "_____ is a two-way selection control structure.",
        answers: ["if-then-else"]
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
        question: "A widely used approach in systems analysis and software engineering for describing the structure of an information processing program or other process is known as XML.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
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
        answers: ["implementation"]
    },
    {
        question: "Maximum numeric range of a 32-bit integer is 2,147,483,647.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Variables created as part of a program's stack are _____.",
        answers: ["local"]
    },
    {
        question: "The value of False AND False is _____.",
        answers: ["false"]
    },
    {
        question: "The result of reversing the string &quot;Hello&quot; is _____.",
        answers: ["olleH"]
    },
    {
        question: "Software testing includes verifying that the program responds correctly to all kinds of inputs.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "_____ is the index value of the second element in an array.",
        answers: ["1"]
    },
    {
        question: "Define the data format and available procedures for a given type of object.",
        answers: ["Classes"]
    },
    {
        question: "In software testing, test data should be verified by checking the pseudocode to see if it produces correct results.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "A software application that provides comprehensive facilities to computer programmers for software development.",
        answers: ["IDE"]
    },
    {
        question: "The relational operator meaning greater than is _____.",
        answers: [">"]
    },
    {
        question: "A function's communications declaration to a compiler is known as the _____.",
        answers: ["function prototype"]
    },
    {
        question: "The result of finding the first index of &quot;l&quot; in &quot;Hello&quot; is _____.",
        answers: ["2"]
    },
    {
        question: "_____ is a multi-way selection control structure.",
        answers: ["Case"]
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
        answers: ["Braces"]
    },
    {
        question: "_____ is a form of implicit data structure that uses multiple arrays to represent a singular array of data.",
        answers: ["Parallel arrays"]
    },
    {
        question: "_____ is a control structure where the program chooses between two or more options.",
        answers: ["Selection"]
    },
    {
        question: "_____ is a branching statement that terminates the existing structure.",
        answers: ["Break"]
    },
    {
        question: "A specification that defines a procedure or behavior of an object.",
        answers: ["method"]
    },
    {
        question: "_____ describes a loop with no terminating condition typically used when the number of iterations is NOT known before entering the loop.",
        answers: ["Infinite"]
    },
    {
        question: "A method used to return the value of a private member variable, also known as a getter method.",
        answers: ["Accessor"]
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
        answers: ["Exit"]
    },
    {
        question: "_____ describes the amount of system resources used by a program.",
        answers: ["Efficiency"]
    },
    {
        question: "The first action in defining a do loop is test an expression.",
        answers: ["false"]
    },
    {
        question: "An iteration control structure that places one loop inside another loop is known as _____.",
        answers: ["nesting"]
    },
    {
        question: "Keyword used in some computer programming languages to refer to the object, class, or other entity that the currently running code is part of.",
        answers: ["self"]
    },
    {
        question: "Maximum numeric range of a character is 255.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "The value of True OR False is _____.",
        answers: ["true"]
    },
    {
        question: "_____ is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.",
        answers: ["Modular programming"]
    },
    {
        question: "Incorrect output is the result of a _____ error.",
        answers: ["logic error"]
    },
    {
        question: "_____ is a unary operator that adds one to the operand and uses the operand's original value.",
        answers: ["Postfix increment"]
    },
    {
        question: "A _____ shows the relationship of various modules.",
        answers: ["hierarchy chart"]
    },
    {
        question: "_____ is a branching statement that causes a loop to stop its current iteration and begin the next one.",
        answers: ["Continue"]
    },
    {
        question: "The value of True AND NOT True is _____.",
        answers: ["false"]
    },
    {
        question: "The code that descrbes what a function does is known as the _____.",
        answers: ["function definition"]
    },
    {
        question: "_____ describes how often the results of a program are correct.",
        answers: ["Reliability"]
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
        answers: ["!="]
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
        answers: ["&"]
    },
    {
        question: "_____ is a reserved word used to represent a missing value.",
        answers: ["Null"]
    },
    {
        question: "A value that cannot be altered by the program during normal execution is a _____.",
        answers: ["constant"]
    },
    {
        question: "_____ variables belong to the class as a whole; there is only one copy of each one.",
        answers: ["Class"]
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
        question: "In _____ , a statement or block is executed until the program reaches a certain state, or operations have been applied to every element of a collection.",
        answers: ["iteration"]
    },
    {
        question: "_____ describes the ease with which a person can use a program for its intended purpose.",
        answers: ["Usability"]
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
        answers: ["Branching"]
    },
    {
        question: "A programmer needs _____ in order to make changes to a program.",
        answers: ["source code"]
    },
    {
        question: "A _____ is a unit of code consisting of zero or more statements.",
        answers: ["block"]
    },
    {
        question: "_____ describes the range of platforms on which the source code of a program may be compiled or interpreted and run.",
        answers: ["Portability"]
    },
    {
        question: "The data type for the result of a function that returns normally, but does not provide a result value to its caller is _____.",
        answers: ["void"]
    },
    {
        question: "_____ is a control structure where the program chooses between two or more options.",
        answers: ["Condition"]
    },
    {
        question: "_____refers to the number of indicies needed to specify an element in an array.",
        answers: ["Dimensionality"]
    },
    {
        question: "Parameter passing which allows functions to modify the contents of passed arrays is _____.",
        answers: ["by reference"]
    },
    {
        question: "The data type of the value 3.14.",
        answers: ["float"]
    },
    {
        question: "_____ describes an arithmetic operation which attempts to create a numeric value that is outside the range that can be represented with a given number of bits",
        answers: ["Overflow"]
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
        question: "How well a program anticipates errors.",
        answers: ["Robustness"]
    },
    {
        question: "How much a program can be kept up to date.",
        answers: ["Maintainability"]
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
        answers: [","]
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
        answers: ["call"]
    },
    {
        question: "_____ describes how often the results of a program are correct.",
        answers: ["Reliability"]
    },
    {
        question: "Code made available across implementations of a programming language is known as a _____.",
        answers: ["standard library"]
    },
    {
        question: "A programmer-readable explanation or annotation in the source code of a computer program is a ___",
        answers: ["comment"]
    },
    {
        question: "A _____ is a variable used to store information that will normally be used to control the program.",
        answers: ["flag"]
    },
    {
        question: "_____ is the operator used to access elements when indexing an array in current programming languages.",
        answers: ["Square brackets"]
    },
    {
        question: "A programming language that supports programs written for a special run-time environment that automate the execution of tasks that could alternatively be executed one-by-one by a human operator.",
        answers: ["scripting language"]
    },
    {
        question: "Program comments should be self-documenting.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Combining two strings into one string is known as _____.",
        answers: ["concatenation"]
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
        answers: ["%d"]
    },
    {
        question: "The addition operator is _____.",
        answers: ["+"]
    },
    {
        question: "_____ is an algorithm that puts elements of a list in a certain order.",
        answers: ["Sort"]
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
        answers: ["Python"]
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
        question: "In the book examples, processing functions typically had one or more parameters in and a return value out.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "_____ is a unary operator that adds one to the operand and uses the operand's new value.",
        answers: ["Prefix increment"]
    },
    {
        question: "A two-dimensional array element may be accessed using array[row, column].",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
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
        question: "_____ is a control structure where the program executes the items in the order listed.",
        answers: ["Sequence"]
    },
    {
        question: "A software application that provides comprehensive facilities to computer programmers for software development.",
        answers: ["IDE"]
    },
    {
        question: "The _____ flowcharting symbol is used to represent a true/false decision.",
        answers: ["diamond"]
    },
    {
        question: "_____ is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse.",
        answers: ["Encapsulation"]
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
        answers: ["input, process, output"]
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
        question: "The result of selecting a substring of &quot;Hello world&quot; starting at 7 for length 2 is _____.",
        answers: ["or"]
    },
    {
        question: "The value of True AND False is _____.",
        answers: ["False"]
    },
    {
        question: "Maximum numeric range of a 16-bit integer is 32,767.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
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
        question: "The first step in reading a comma-separated-values file is to read the header.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The relational operator meaning equality is _____.",
        answers: ["=="]
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
     /*
    {
        question: "",
        answers: [""]
    },
    {
        question: "",
        answers: [""]
    },
    {
        question: "",
        answers: [""]
    },
    {
        question: "",
        answers: [""]
    },
    {
        question: "",
        answers: [""]
    },
    */
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");
const input = document.getElementById("input");
const checkButton = document.getElementById("check-btn");
const hintButton = document.getElementById("hint-btn");
const audio = new Audio('ping.mp3');
audio.volume = 0.33;

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    x = 0;
    for (const i of questions){
        x++;
        console.log(x);
    }
    questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    hintButton.style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
    
    if (currentQuestionIndex > 0){
        input.placeholder = "";
    }

    if (currentQuestion.answers.length === 1){
        input.style.display = "block";
        input.focus();
        checkButton.style.display = "block";
    }else{
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
}

function resetState(){
    input.style.color = '#03254c';
    input.value = "";
    counter = 0;
    hint = "";
    checkButton.innerHTML = "Check";
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct;
    if(isCorrect){
        audio.play();
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }   
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.focus();
}

nextButton.addEventListener("click", () => {
    input.disabled = false;
    checkButton.style.display = "none";
    input.style.display = "none";
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

checkButton.addEventListener("click", () => {
    const isCorrect = input.value.toLowerCase().trim() == questions[currentQuestionIndex].answers[0].toLowerCase();
    if (isCorrect) {
        audio.play();
        input.value = questions[currentQuestionIndex].answers[0];
        score++;
        checkButton.style.display = "none";
        nextButton.style.display = "block";
        input.style.borderColor = '#008000';
        hintButton.style.display = "none";
        input.style.color = '#008000';
        input.disabled = true;
        nextButton.focus();
    }else{
        input.style.borderColor = 'grey';
        input.style.color = 'grey';
        hintButton.style.display = "block";
    }
});

counter = 0;
hint = "";

nextButton.addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    nextButton.click();
    event.preventDefault();
});

input.addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
        if (input.value != ""){
            checkButton.click();  
        }
    event.preventDefault();
});

hintButton.addEventListener("click", () => {
    if (counter < questions[currentQuestionIndex].answers[0].length){
        input.style.color = '#03254c';
        hint += questions[currentQuestionIndex].answers[0][counter];
        input.value = hint;
        input.focus();
        counter++;
        if (counter == questions[currentQuestionIndex].answers[0].length){
            input.style.color = '#008000';
            input.style.borderColor = '#008000';
            checkButton.style.display = "none";
            nextButton.style.display = "block";
            hintButton.style.display = "none";
            input.disabled = true;
            score++;
        }
    }
});

function showScore(){
    resetState();
    questionElement.innerHTML = `You got ${score} out of 50 questions right.`;
    nextButton.innerHTML = "Restart Review";
    nextButton.style.display = "block";
    score = 0;
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < 50){
        showQuestion();
    }else{
        showScore();
    }
}

startQuiz();
