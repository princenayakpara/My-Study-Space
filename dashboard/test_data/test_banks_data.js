window.OFFLINE_TEST_BANKS = {
  " c_language\: 
{
  "subject_name": "C Language",
  "units": [
    {
      "unit_name": "1. Introduction to C",
      "mcqs": [
        {
          "id": 101,
          "question": "Which of the following is correct about C language?",
          "options": [
            "C is a high level language",
            "C is a low level language",
            "C is a middle level language",
            "C is a machine level language"
          ],
          "correct_option": "C",
          "explanation": "C is often called a middle-level language because it combines the features of high-level languages with the functionality of assembly language.",
          "difficulty": "Easy"
        },
        {
          "id": 102,
          "question": "Who is the father of C language?",
          "options": [
            "Steve Jobs",
            "James Gosling",
            "Dennis Ritchie",
            "Rasmus Lerdorf"
          ],
          "correct_option": "C",
          "explanation": "Dennis Ritchie created C at Bell Labs in 1972.",
          "difficulty": "Easy"
        },
        {
          "id": 103,
          "question": "Which of the following consists of only valid variable names?",
          "options": [
            "int, float, 3_name",
            "name, _name, $name",
            "name, _name, name_3",
            "#name, name, %name"
          ],
          "correct_option": "C",
          "explanation": "Variable names cannot start with a digit or contain special characters other than underscore.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 151,
          "question": "Explain the structure of a C program.",
          "model_answer": "A C program consists of preprocessor directives, global declarations, the main() function, local declarations, and program statements. It may also include user-defined functions.",
          "key_points": [
            "Preprocessor directives (#include)",
            "main() function entry point",
            "Variable declarations",
            "Statements and Expressions",
            "Comments"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 181,
          "problem_statement": "Write a C program to print 'Hello, World!' to the console.",
          "input_format": "None",
          "output_format": "The string 'Hello, World!'",
          "constraints": "None",
          "sample_input": "None",
          "sample_output": "Hello, World!",
          "solution_explanation": "Use the standard output function printf().",
          "code_c": "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\");\n    return 0;\n}",
          "code_js": "console.log('Hello, World!');",
          "code_py": "print('Hello, World!')",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "2. Control Structures (If/Else, Switch)",
      "mcqs": [
        {
          "id": 201,
          "question": "What is the output of: if(5 > 10) printf('Yes'); else printf('No');",
          "options": [
            "Yes",
            "No",
            "Error",
            "None"
          ],
          "correct_option": "B",
          "explanation": "5 is not greater than 10, so the else block executes.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 251,
          "question": "Differentiate between 'while' and 'do-while' loops.",
          "model_answer": "A while loop checks the condition before executing the body (entry-controlled). A do-while loop executes the body at least once before checking the condition (exit-controlled).",
          "key_points": [
            "Entry vs Exit control",
            "Minimum execution count (0 vs 1)",
            "Syntax difference"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 281,
          "problem_statement": "Write a program to find the largest of three numbers.",
          "input_format": "Three integers A, B, C",
          "output_format": "The largest integer",
          "constraints": "-1000 <= A,B,C <= 1000",
          "sample_input": "10 20 5",
          "sample_output": "20",
          "solution_explanation": "Use nested if-else statements or logic operators (A>B && A>C).",
          "code_c": "#include <stdio.h>\nint main() {\n    int a, b, c;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    if(a>=b && a>=c) printf(\"%d\", a);\n    else if(b>=a && b>=c) printf(\"%d\", b);\n    else printf(\"%d\", c);\n    return 0;\n}",
          "code_js": "",
          "code_py": "",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "3. Loops (For, While, Do-While)",
      "mcqs": [
        {
          "id": 301,
          "question": "Which loop is guaranteed to execute at least once?",
          "options": [
            "for",
            "while",
            "do-while",
            "None"
          ],
          "correct_option": "C",
          "explanation": "do-while is exit-controlled.",
          "difficulty": "Easy"
        },
        {
          "id": 302,
          "question": "What comes after 'for(' in a for loop?",
          "options": [
            "Condition",
            "Increment",
            "Initialization",
            "Statement"
          ],
          "correct_option": "C",
          "explanation": "Syntax: for(initialization; condition; increment).",
          "difficulty": "Easy"
        },
        {
          "id": 303,
          "question": "What keyword skips the current iteration?",
          "options": [
            "break",
            "continue",
            "goto",
            "return"
          ],
          "correct_option": "B",
          "explanation": "continue skips to the next iteration.",
          "difficulty": "Easy"
        },
        {
          "id": 304,
          "question": "Infinite loop syntax in for loop?",
          "options": [
            "for(;;)",
            "for()",
            "for(1)",
            "for(0)"
          ],
          "correct_option": "A",
          "explanation": "for(;;) is the standard infinite loop.",
          "difficulty": "Easy"
        },
        {
          "id": 305,
          "question": "Output of: int i=0; while(i<3) printf(\"%d\", i++);",
          "options": [
            "012",
            "123",
            "0123",
            "Infinite"
          ],
          "correct_option": "A",
          "explanation": "Prints 0, increments to 1. Prints 1, inc to 2. Prints 2, inc to 3. 3<3 false.",
          "difficulty": "Medium"
        },
        {
          "id": 306,
          "question": "Which header is required for loops?",
          "options": [
            "<stdio.h>",
            "<conio.h>",
            "<stdlib.h>",
            "None"
          ],
          "correct_option": "D",
          "explanation": "Loops are core language features, no header needed.",
          "difficulty": "Easy"
        },
        {
          "id": 307,
          "question": "Can we nest loops in C?",
          "options": [
            "Yes",
            "No",
            "Only for loops",
            "Only 2 levels"
          ],
          "correct_option": "A",
          "explanation": "Any loop can be nested inside another.",
          "difficulty": "Easy"
        },
        {
          "id": 308,
          "question": "Value of i after: for(i=0; i<=5; i++);",
          "options": [
            "4",
            "5",
            "6",
            "0"
          ],
          "correct_option": "C",
          "explanation": "Loop runs 0 to 5. Last increment makes it 6, condition 6<=5 fails.",
          "difficulty": "Medium"
        },
        {
          "id": 309,
          "question": "What is 'break' used for?",
          "options": [
            "Stop program",
            "Exit loop/switch",
            "Skip iteration",
            "Restart loop"
          ],
          "correct_option": "B",
          "explanation": "Terminates the nearest enclosing loop or switch.",
          "difficulty": "Easy"
        },
        {
          "id": 310,
          "question": "Syntax for while loop?",
          "options": [
            "while(cond) {}",
            "do {} while(cond)",
            "while {}",
            "loop {}"
          ],
          "correct_option": "A",
          "explanation": "Standard syntax.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 351,
          "question": "Explain the syntax and flow of a for loop.",
          "model_answer": "Initialization -> Condition Check -> Body Execution -> Increment/Decrement -> Condition Check...",
          "key_points": [
            "Initialization",
            "Condition",
            "Update expression"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 352,
          "question": "Difference between break and continue.",
          "model_answer": "Break exits the loop completely. Continue skips the rest of the current iteration and jumps to the update/condition step.",
          "key_points": [
            "Exit vs Skip",
            "Control flow"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 381,
          "problem_statement": "Print the first N natural numbers.",
          "input_format": "Integer N",
          "output_format": "Numbers 1 to N",
          "code_c": "#include <stdio.h>\nint main() { int n; scanf(\"%d\", &n); for(int i=1;i<=n;i++) printf(\"%d \", i); return 0; }",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "4. Arrays & Strings",
      "mcqs": [
        {
          "id": 401,
          "question": "Array index starts from?",
          "options": [
            "0",
            "1",
            "-1",
            "undefined"
          ],
          "correct_option": "A",
          "explanation": "0-based indexing.",
          "difficulty": "Easy"
        },
        {
          "id": 402,
          "question": "Correct declaration of array size 10?",
          "options": [
            "int arr[10];",
            "arr{10};",
            "int arr(10);",
            "array arr[10];"
          ],
          "correct_option": "A",
          "explanation": "Standard C syntax.",
          "difficulty": "Easy"
        },
        {
          "id": 403,
          "question": "Does C check array bounds?",
          "options": [
            "Yes",
            "No",
            "Sometimes",
            "Compiler dependent"
          ],
          "correct_option": "B",
          "explanation": "C does not perform bound checking, leading to possible memory corruption.",
          "difficulty": "Medium"
        },
        {
          "id": 404,
          "question": "String terminator character?",
          "options": [
            "\\0",
            "\\n",
            "0",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Null character \\0 terminates strings.",
          "difficulty": "Easy"
        },
        {
          "id": 405,
          "question": "Size of char s[] = \"ABC\";?",
          "options": [
            "3",
            "4",
            "2",
            "8"
          ],
          "correct_option": "B",
          "explanation": "A, B, C, \\0 = 4 bytes.",
          "difficulty": "Medium"
        },
        {
          "id": 406,
          "question": "Function to copy strings?",
          "options": [
            "strcpy",
            "strcopy",
            "copystr",
            "memcpy"
          ],
          "correct_option": "A",
          "explanation": "strcpy() from <string.h>.",
          "difficulty": "Easy"
        },
        {
          "id": 407,
          "question": "What is an array?",
          "options": [
            "Collection of similar types",
            "Collection of different types",
            "Dynamic list",
            "Primitive type"
          ],
          "correct_option": "A",
          "explanation": "Homogeneous data collection.",
          "difficulty": "Easy"
        },
        {
          "id": 408,
          "question": "Accessing arr[5] in int arr[5]; causes?",
          "options": [
            "Error",
            "Warning",
            "Undefined Behavior",
            "0"
          ],
          "correct_option": "C",
          "explanation": "Index 5 is out of bounds (0-4).",
          "difficulty": "Hard"
        },
        {
          "id": 409,
          "question": "2D array declaration?",
          "options": [
            "int arr[2][2]",
            "int arr(2,2)",
            "int arr[2,2]",
            "int arr{2}{2}"
          ],
          "correct_option": "A",
          "explanation": "Row and column brackets.",
          "difficulty": "Easy"
        },
        {
          "id": 410,
          "question": "Format specifier for string input?",
          "options": [
            "%s",
            "%c",
            "%str",
            "%a"
          ],
          "correct_option": "A",
          "explanation": "%s is for strings.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 451,
          "question": "What is a string in C?",
          "model_answer": "A 1D array of characters terminated by a null character (\\0).",
          "key_points": [
            "Array of chars",
            "Null termination"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 452,
          "question": "Explain how 2D arrays are stored in memory.",
          "model_answer": "Row-major order typically. Contiguous memory blocks.",
          "key_points": [
            "Contiguous",
            "Row-major"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 481,
          "problem_statement": "Reverse a given string.",
          "input_format": "String S",
          "output_format": "Reversed String",
          "code_c": "#include <stdio.h>\n#include <string.h>\nint main() { char s[100]; scanf(\"%s\", s); strrev(s); printf(\"%s\", s); return 0; }",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "5. Functions & Recursion",
      "mcqs": [
        {
          "id": 501,
          "question": "What is the return type of a function that does not return any value?",
          "options": [
            "int",
            "void",
            "null",
            "float"
          ],
          "correct_option": "B",
          "explanation": "void return type specifies no return value.",
          "difficulty": "Easy"
        },
        {
          "id": 502,
          "question": "By default, how are parameters passed in C?",
          "options": [
            "Pass by Reference",
            "Pass by Value",
            "Pass by Pointer",
            "None"
          ],
          "correct_option": "B",
          "explanation": "C uses pass-by-value strictly. Pointers simulate pass-by-reference.",
          "difficulty": "Medium"
        },
        {
          "id": 503,
          "question": "What is recursion?",
          "options": [
            "Looping",
            "Function calling itself",
            "Function calling main",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Self-referential function call.",
          "difficulty": "Easy"
        },
        {
          "id": 504,
          "question": "Base case in recursion is used to?",
          "options": [
            "Start recursion",
            "Teminate recursion",
            "Skip recursion",
            "Loop forever"
          ],
          "correct_option": "B",
          "explanation": "Prevents infinite stack overflow.",
          "difficulty": "Easy"
        },
        {
          "id": 505,
          "question": "Variables declared inside a function are called?",
          "options": [
            "Global",
            "Local",
            "Static",
            "External"
          ],
          "correct_option": "B",
          "explanation": "Scope is limited to the block.",
          "difficulty": "Easy"
        },
        {
          "id": 506,
          "question": "Which storage class preserves value between function calls?",
          "options": [
            "auto",
            "register",
            "static",
            "extern"
          ],
          "correct_option": "C",
          "explanation": "Static variables retain value for program lifetime.",
          "difficulty": "Medium"
        },
        {
          "id": 507,
          "question": "Where are local variables stored in memory?",
          "options": [
            "Stack",
            "Heap",
            "Data Segment",
            "Code Segment"
          ],
          "correct_option": "A",
          "explanation": "Stack frames.",
          "difficulty": "Medium"
        },
        {
          "id": 508,
          "question": "Maximum number of arguments a function can take?",
          "options": [
            "10",
            "100",
            "Compiler dependent",
            "Unlimited"
          ],
          "correct_option": "C",
          "explanation": "Depends on system limits (stack size).",
          "difficulty": "Easy"
        },
        {
          "id": 509,
          "question": "What is the scope of an extern variable?",
          "options": [
            "Local",
            "Global within file",
            "Global across files",
            "Function only"
          ],
          "correct_option": "C",
          "explanation": "External linkage.",
          "difficulty": "Hard"
        },
        {
          "id": 510,
          "question": "Recursion uses which data structure internally?",
          "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Tree"
          ],
          "correct_option": "B",
          "explanation": "Call stack.",
          "difficulty": "Medium"
        },
        {
          "id": 511,
          "question": "Output of: void f() { static int x=0; x++; printf(\"%d\", x); } called twice?",
          "options": [
            "0 0",
            "1 1",
            "1 2",
            "0 1"
          ],
          "correct_option": "C",
          "explanation": "Static x persists. 0->1, then 1->2.",
          "difficulty": "Hard"
        },
        {
          "id": 512,
          "question": "Function prototype declaration tells compiler about?",
          "options": [
            "Return type",
            "Parameters",
            "Function name",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "Signature details.",
          "difficulty": "Easy"
        },
        {
          "id": 513,
          "question": "Can a function return a function?",
          "options": [
            "Yes",
            "No",
            "Only via pointer",
            "Runtime error"
          ],
          "correct_option": "C",
          "explanation": "Can return a function pointer.",
          "difficulty": "Hard"
        },
        {
          "id": 514,
          "question": "Can main() be called recursively?",
          "options": [
            "Yes",
            "No",
            "Compiler Error",
            "Runtime Error"
          ],
          "correct_option": "A",
          "explanation": "It's just a normal function.",
          "difficulty": "Medium"
        },
        {
          "id": 515,
          "question": "What is an inline function?",
          "options": [
            "Executes faster",
            "Code replaced at call site",
            "Cannot have loops",
            "All of above"
          ],
          "correct_option": "B",
          "explanation": "Avoids overhead of function call.",
          "difficulty": "Medium"
        },
        {
          "id": 516,
          "question": "Factorial of 5 using recursion needs how many stack frames?",
          "options": [
            "4",
            "5",
            "6",
            "1"
          ],
          "correct_option": "C",
          "explanation": "f(5)..f(1) and main. ~6.",
          "difficulty": "Hard"
        },
        {
          "id": 517,
          "question": "Correct syntax to pass array to function?",
          "options": [
            "void f(int arr[])",
            "void f(int arr)",
            "void f(arr[])",
            "void f(int)"
          ],
          "correct_option": "A",
          "explanation": "Array decays to pointer.",
          "difficulty": "Easy"
        },
        {
          "id": 518,
          "question": "What happens if return statement is missing in non-void function?",
          "options": [
            "Error",
            "Warning & Garbage value",
            "Returns 0",
            "Crash"
          ],
          "correct_option": "B",
          "explanation": "Undefined behavior usually.",
          "difficulty": "Medium"
        },
        {
          "id": 519,
          "question": "Call by value overhead?",
          "options": [
            "Memory for copy",
            "Pointer dereference",
            "None",
            "Speed"
          ],
          "correct_option": "A",
          "explanation": "Copying large structs is expensive.",
          "difficulty": "Medium"
        },
        {
          "id": 520,
          "question": "Math functions like pow() are in which header?",
          "options": [
            "stdlib.h",
            "math.h",
            "stdio.h",
            "conio.h"
          ],
          "correct_option": "B",
          "explanation": "Standard math library.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 551,
          "question": "Differentiate between Call by Value and Call by Reference.",
          "model_answer": "Call by Value: Copy of data passed, changes don't affect original. Call by Reference (via Pointers): Address passed, changes affect original variable.",
          "key_points": [
            "Copy vs Address",
            "Memory usage",
            "Side effects"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 552,
          "question": "Explain Recursion with an example.",
          "model_answer": "A process where a function calls itself. Example: valid/invalid checking or Factorial. Must have a base case.",
          "key_points": [
            "Base case",
            "Recursive step",
            "Stack usage"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 553,
          "question": "What are Storage Classes in C? Name them.",
          "model_answer": "They define scope, visibility, and lifetime of variables. 1. auto 2. register 3. static 4. extern.",
          "key_points": [
            "Scope/Lifetime",
            "Auto/Register/Static/Extern"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 554,
          "question": "Explain the use of 'static' keyword for a variable.",
          "model_answer": "Inside function: Retains value between calls. Global: Limits scope to the file (internal linkage).",
          "key_points": [
            "Retains value",
            "File scope",
            "Lifetime"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 555,
          "question": "Pros and Cons of Recursion.",
          "model_answer": "Pros: Clean code for complex problems (Tree/Graph). Cons: High memory overhead (Stack), risk of overflow, usually slower than iteration.",
          "key_points": [
            "Code clarity",
            "Stack overflow",
            "Performance"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 556,
          "question": "What is a Function Pointer? Syntax?",
          "model_answer": "A pointer that stores the address of a function. Syntax: return_type (*ptr_name)(params). Used for callbacks.",
          "key_points": [
            "Pointer to code",
            "(*ptr)(args)",
            "Callbacks"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 557,
          "question": "Explain 'register' storage class.",
          "model_answer": "Requests compiler to store variable in CPU register for fast access. Address cannot be taken (&x invalid).",
          "key_points": [
            "CPU Register",
            "Fast access",
            "No address"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 558,
          "question": "What is actual vs formal parameters?",
          "model_answer": "Formal: Variables in function definition. Actual: Values passed during function call.",
          "key_points": [
            "Definition vs Call",
            "Placeholders vs Values"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "6. Pointers",
      "mcqs": [
        {
          "id": 601,
          "question": "What does a pointer store?",
          "options": [
            "Value",
            "Address",
            "Variable name",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Stores memory address of another variable.",
          "difficulty": "Easy"
        },
        {
          "id": 602,
          "question": "Size of a pointer in 64-bit system?",
          "options": [
            "2 bytes",
            "4 bytes",
            "8 bytes",
            "16 bytes"
          ],
          "correct_option": "C",
          "explanation": "64-bit address space requires 8 bytes.",
          "difficulty": "Medium"
        },
        {
          "id": 603,
          "question": "Operator used to get address of variable?",
          "options": [
            "*",
            "&",
            "->",
            "."
          ],
          "correct_option": "B",
          "explanation": "Address-of operator (&).",
          "difficulty": "Easy"
        },
        {
          "id": 604,
          "question": "Operator used to access value at address?",
          "options": [
            "*",
            "&",
            "#",
            "@"
          ],
          "correct_option": "A",
          "explanation": "Dereference operator (*).",
          "difficulty": "Easy"
        },
        {
          "id": 605,
          "question": "What is a NULL pointer?",
          "options": [
            "Void pointer",
            "Pointer equal to 0",
            "Uninitialized",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Points to nothing (address 0).",
          "difficulty": "Easy"
        },
        {
          "id": 606,
          "question": "Which arithmetic is valid on pointers?",
          "options": [
            "Multiplication",
            "Division",
            "Modulus",
            "Subtraction"
          ],
          "correct_option": "D",
          "explanation": "Can subtract two pointers (result is distance).",
          "difficulty": "Medium"
        },
        {
          "id": 607,
          "question": "int *ptr; ptr++; increases address by?",
          "options": [
            "1 byte",
            "2 bytes",
            "sizeof(int)",
            "4 bytes"
          ],
          "correct_option": "C",
          "explanation": "Increments by size of type it points to.",
          "difficulty": "Medium"
        },
        {
          "id": 608,
          "question": "What is a void pointer?",
          "options": [
            "Pointer to function",
            "Generic pointer",
            "Null pointer",
            "Invalid pointer"
          ],
          "correct_option": "B",
          "explanation": "Can hold address of any type (void *).",
          "difficulty": "Medium"
        },
        {
          "id": 609,
          "question": "Variable that stores address of a pointer?",
          "options": [
            "Pointer",
            "Double Pointer",
            "Reference",
            "Array"
          ],
          "correct_option": "B",
          "explanation": "int **ptr.",
          "difficulty": "Easy"
        },
        {
          "id": 610,
          "question": "Array name acts as?",
          "options": [
            "Constant pointer to first element",
            "Variable pointer",
            "Null pointer",
            "Void pointer"
          ],
          "correct_option": "A",
          "explanation": "Decays to &arr[0].",
          "difficulty": "Medium"
        },
        {
          "id": 611,
          "question": "Are (*ptr)++ and *ptr++ same?",
          "options": [
            "Yes",
            "No",
            "Always",
            "Compiler dependent"
          ],
          "correct_option": "B",
          "explanation": "Order of operations. *ptr++ increments pointer, (*ptr)++ increments value.",
          "difficulty": "Hard"
        },
        {
          "id": 612,
          "question": "Dangling pointer is?",
          "options": [
            "Points to deleted memory",
            "Points to NULL",
            "Uninitialized",
            "Global"
          ],
          "correct_option": "A",
          "explanation": "Memory freed but pointer not cleared.",
          "difficulty": "Medium"
        },
        {
          "id": 613,
          "question": "Which represents pointer to array of 5 ints?",
          "options": [
            "int *ptr[5]",
            "int (*ptr)[5]",
            "int *ptr",
            "int **ptr"
          ],
          "correct_option": "B",
          "explanation": "Parentheses required for precedence.",
          "difficulty": "Hard"
        },
        {
          "id": 614,
          "question": "Illegal operation on pointers?",
          "options": [
            "Adding integer",
            "Subtracting integer",
            "Subtracting pointer",
            "Adding two pointers"
          ],
          "correct_option": "D",
          "explanation": "Adding addresses makes no sense.",
          "difficulty": "Easy"
        },
        {
          "id": 615,
          "question": "Wild pointer is?",
          "options": [
            "Uninitialized pointer",
            "NULL pointer",
            "Void pointer",
            "Function pointer"
          ],
          "correct_option": "A",
          "explanation": "Contains garbage address.",
          "difficulty": "Easy"
        },
        {
          "id": 616,
          "question": "Accessing 5th element via pointer p?",
          "options": [
            "*(p+4)",
            "p[4]",
            "Both",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Array indexing is pointer arithmetic.",
          "difficulty": "Medium"
        },
        {
          "id": 617,
          "question": "Indirection operator is?",
          "options": [
            "&",
            "*",
            "->",
            "."
          ],
          "correct_option": "B",
          "explanation": "Synonym for dereference.",
          "difficulty": "Easy"
        },
        {
          "id": 618,
          "question": "Can we compare two pointers?",
          "options": [
            "Yes",
            "No",
            "Only for equality",
            "Only if same array"
          ],
          "correct_option": "D",
          "explanation": "Comparison undefined unless pointing to same object/array.",
          "difficulty": "Hard"
        },
        {
          "id": 619,
          "question": "Which is faster?",
          "options": [
            "Array indexing",
            "Pointer arithmetic",
            "Same",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Modern compilers optimize both equally.",
          "difficulty": "Medium"
        },
        {
          "id": 620,
          "question": "const int *p means?",
          "options": [
            "Pointer is const",
            "Value is const",
            "Both",
            "Neither"
          ],
          "correct_option": "B",
          "explanation": "Pointer to constant integer (cannot change value).",
          "difficulty": "Hard"
        }
      ],
      "theory_questions": [
        {
          "id": 651,
          "question": "Differentiate between 'int *p' and 'int **p'.",
          "model_answer": "'int *p' points to an integer. 'int **p' points to a pointer that points to an integer (Double Pointer), used for 2D arrays or changing pointer address.",
          "key_points": [
            "Level of indirection",
            "Address of variable vs Address of pointer"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 652,
          "question": "What is Pointer Arithmetic? Give rules.",
          "model_answer": "Operations allowed on pointers. 1. Adding/Sub int (moves by sizeof type). 2. Sub two pointers (returns elements between). 3. Invalid: Add two pointers, Mul/Div.",
          "key_points": [
            "Scaling by size",
            "Distance",
            "Invalid ops"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 653,
          "question": "Explain 'const char *p' vs 'char * const p'.",
          "model_answer": "const char *p: Value pointed to is constant (cannot change *p). char * const p: Pointer itself is constant (cannot change p).",
          "key_points": [
            "Read-only data",
            "Fixed address"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 654,
          "question": "What is a Dangling Pointer? How to avoid?",
          "model_answer": "Pointer pointing to memory location that has been deleted/freed. Avoid by setting pointer to NULL after free().",
          "key_points": [
            "Deallocated memory",
            "Set to NULL"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 655,
          "question": "How do Array Name and Pointer relate?",
          "model_answer": "Array name decays to pointer to 1st element. arr[i] == *(arr+i). However, array name is a constant address (cannot increment arr++).",
          "key_points": [
            "Decay",
            "Equivalence",
            "Constant address"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "7. Structures & Unions",
      "mcqs": [
        {
          "id": 701,
          "question": "Keyword to define structure?",
          "options": [
            "struct",
            "class",
            "union",
            "object"
          ],
          "correct_option": "A",
          "explanation": "Standard C keyword.",
          "difficulty": "Easy"
        },
        {
          "id": 702,
          "question": "Difference between struct and union memory?",
          "options": [
            "Struct: Sum of members, Union: Max of members",
            "Struct: Max, Union: Sum",
            "Same",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Union shares memory for all members.",
          "difficulty": "Medium"
        },
        {
          "id": 703,
          "question": "Operator to access member of structure variable?",
          "options": [
            ".",
            "->",
            "*",
            "&"
          ],
          "correct_option": "A",
          "explanation": "Dot operator.",
          "difficulty": "Easy"
        },
        {
          "id": 704,
          "question": "Operator to access member via structure pointer?",
          "options": [
            ".",
            "->",
            "*",
            "&"
          ],
          "correct_option": "B",
          "explanation": "Arrow operator (ptr->mem).",
          "difficulty": "Easy"
        },
        {
          "id": 705,
          "question": "Variable used in Bit Fields must be?",
          "options": [
            "int/unsigned int",
            "float",
            "double",
            "array"
          ],
          "correct_option": "A",
          "explanation": "Integral types only.",
          "difficulty": "Hard"
        },
        {
          "id": 706,
          "question": "Can we compare two structures with == ?",
          "options": [
            "Yes",
            "No",
            "Sometimes",
            "Only if same members"
          ],
          "correct_option": "B",
          "explanation": "No built-in equality for structs (because of padding).",
          "difficulty": "Medium"
        },
        {
          "id": 707,
          "question": "Size of empty structure in C?",
          "options": [
            "0",
            "1",
            "Undefined/Error",
            "2"
          ],
          "correct_option": "A",
          "explanation": "Standard C allows 0 (GCC) but undefined in some standards. Usually 0/1.",
          "difficulty": "Hard"
        },
        {
          "id": 708,
          "question": "Self-referential structure is used for?",
          "options": [
            "Arrays",
            "Linked Lists/Trees",
            "Loops",
            "Math"
          ],
          "correct_option": "B",
          "explanation": "Struct containing pointer to same struct type.",
          "difficulty": "Medium"
        },
        {
          "id": 709,
          "question": "Padding in structures is for?",
          "options": [
            "Memory saving",
            "Alignment/Speed",
            "Security",
            "Syntax"
          ],
          "correct_option": "B",
          "explanation": "CPU fetch optimization.",
          "difficulty": "Hard"
        },
        {
          "id": 710,
          "question": "typedef is used to?",
          "options": [
            "Create variables",
            "Create alias for types",
            "Define struct",
            "Header"
          ],
          "correct_option": "B",
          "explanation": "Renaming types.",
          "difficulty": "Easy"
        },
        {
          "id": 711,
          "question": "Can a structure contain function?",
          "options": [
            "Yes",
            "No",
            "Only pointers",
            "In C++ yes"
          ],
          "correct_option": "B",
          "explanation": "C structs contain data only. Can contain function POINTERS.",
          "difficulty": "Medium"
        },
        {
          "id": 712,
          "question": "Correct syntax to init struct?",
          "options": [
            "struct P p = {1, 2};",
            "struct P p = (1, 2);",
            "P p = {1, 2};",
            "struct p = 1, 2;"
          ],
          "correct_option": "A",
          "explanation": "Braces initialization.",
          "difficulty": "Easy"
        },
        {
          "id": 713,
          "question": "Union useful for?",
          "options": [
            "Storing multiple values",
            "Storing one of multiple types",
            "Arrays",
            "Functions"
          ],
          "correct_option": "B",
          "explanation": "Polymorphic data storage.",
          "difficulty": "Medium"
        },
        {
          "id": 714,
          "question": "Assigning value to new union member does what?",
          "options": [
            "Adds value",
            "Overwrites previous value",
            "Error",
            "Nothing"
          ],
          "correct_option": "B",
          "explanation": "Shared memory location.",
          "difficulty": "Easy"
        },
        {
          "id": 715,
          "question": "Can we have array of structures?",
          "options": [
            "Yes",
            "No",
            "Max 10",
            "Undefined"
          ],
          "correct_option": "A",
          "explanation": "Common data structure.",
          "difficulty": "Easy"
        },
        {
          "id": 716,
          "question": "Size of union {char a; int b; double c;} in 32-bit?",
          "options": [
            "13",
            "8",
            "4",
            "1"
          ],
          "correct_option": "B",
          "explanation": "Size is size of largest member (double = 8).",
          "difficulty": "Medium"
        },
        {
          "id": 717,
          "question": "How to pass structure to function efficiently?",
          "options": [
            "By Value",
            "By Reference (Pointer)",
            "Global",
            "Array"
          ],
          "correct_option": "B",
          "explanation": "Avoids copying entire structure.",
          "difficulty": "Easy"
        },
        {
          "id": 718,
          "question": "Anonymous structure is?",
          "options": [
            "Struct without name",
            "Struct without members",
            "Struct without variable",
            "Error"
          ],
          "correct_option": "A",
          "explanation": "Used inside unions often.",
          "difficulty": "Medium"
        },
        {
          "id": 719,
          "question": "Accessing struct member: (*ptr).mem is same as?",
          "options": [
            "ptr->mem",
            "ptr.mem",
            "ptr-mem",
            "ptr*mem"
          ],
          "correct_option": "A",
          "explanation": "Arrow syntax sugar.",
          "difficulty": "Easy"
        },
        {
          "id": 720,
          "question": "Nested structure means?",
          "options": [
            "Struct inside function",
            "Struct inside struct",
            "Struct inside if",
            "Loop in struct"
          ],
          "correct_option": "B",
          "explanation": "Composition.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 751,
          "question": "Compare Structure and Union.",
          "model_answer": "Structure: Separate memory for each member, all active, size = sum + padding. Union: Shared memory, only one active, size = largest member.",
          "key_points": [
            "Memory Allocation",
            "Access",
            "Size calculation"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 752,
          "question": "What is Structure Padding and Packing?",
          "model_answer": "Padding: Empty bytes inserted for alignment (faster access). Packing: #pragma pack(1) removes padding (saves memory, slower).",
          "key_points": [
            "Alignment",
            "Holes",
            "Pragma pack"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 753,
          "question": "Explain Bit Fields with syntax.",
          "model_answer": "Allows specifying number of bits for a member. struct { int age : 7; }. Saves space for booleans/small ints.",
          "key_points": [
            "Bit width",
            "Space saving",
            "colons"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 754,
          "question": "What is a Self-Referential Structure?",
          "model_answer": "A struct containing a pointer to an object of the same struct type. Essential for Linked Lists and Trees.",
          "key_points": [
            "Pointer to same type",
            "Data Structures"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 755,
          "question": "Use of 'typedef' with structures.",
          "model_answer": "Creates alias to avoid typing 'struct Name' every time. typedef struct Name { ... } Alias;",
          "key_points": [
            "Alias",
            "Syntax simplification"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "8. File Handling",
      "mcqs": [
        {
          "id": 801,
          "question": "Function to open a file?",
          "options": [
            "fopen",
            "open",
            "file_open",
            "start"
          ],
          "correct_option": "A",
          "explanation": "Standard IO function.",
          "difficulty": "Easy"
        },
        {
          "id": 802,
          "question": "Mode 'w' does what?",
          "options": [
            "Read only",
            "Write (Truncate)",
            "Append",
            "Read/Write"
          ],
          "correct_option": "B",
          "explanation": "Opens for writing, erases existing content.",
          "difficulty": "Easy"
        },
        {
          "id": 803,
          "question": "Return type of fopen?",
          "options": [
            "int",
            "FILE*",
            "void",
            "char*"
          ],
          "correct_option": "B",
          "explanation": "Pointer to FILE structure.",
          "difficulty": "Easy"
        },
        {
          "id": 804,
          "question": "Function to close file?",
          "options": [
            "fclose",
            "close",
            "end",
            "exit"
          ],
          "correct_option": "A",
          "explanation": "Flushes buffers and releases handle.",
          "difficulty": "Easy"
        },
        {
          "id": 805,
          "question": "EOF stands for?",
          "options": [
            "End Of File",
            "Error Of Function",
            "End Of Function",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Macro indicating end of stream.",
          "difficulty": "Easy"
        },
        {
          "id": 806,
          "question": "fprintf is used for?",
          "options": [
            "Console output",
            "File output",
            "String output",
            "Error"
          ],
          "correct_option": "B",
          "explanation": "Formatted print to file stream.",
          "difficulty": "Easy"
        },
        {
          "id": 807,
          "question": "Mode 'a' does what?",
          "options": [
            "Append",
            "Accumulate",
            "Add",
            "Access"
          ],
          "correct_option": "A",
          "explanation": "Write at end, preserve content.",
          "difficulty": "Easy"
        },
        {
          "id": 808,
          "question": "fseek is used to?",
          "options": [
            "Find file",
            "Move file pointer",
            "Delete file",
            "Read file"
          ],
          "correct_option": "B",
          "explanation": "Random access.",
          "difficulty": "Medium"
        },
        {
          "id": 809,
          "question": "SEEK_END refers to?",
          "options": [
            "Start of file",
            "End of file",
            "Current position",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Offset from end.",
          "difficulty": "Easy"
        },
        {
          "id": 810,
          "question": "ftell returns?",
          "options": [
            "File size",
            "Current cursor position",
            "File name",
            "Error"
          ],
          "correct_option": "B",
          "explanation": "Current byte offset.",
          "difficulty": "Medium"
        },
        {
          "id": 811,
          "question": "Which specifices binary mode?",
          "options": [
            "b",
            "bin",
            "2",
            "0"
          ],
          "correct_option": "A",
          "explanation": "'rb', 'wb' etc.",
          "difficulty": "Easy"
        },
        {
          "id": 812,
          "question": "rewind() is equivalent to?",
          "options": [
            "fseek(fp,0,SEEK_SET)",
            "fseek(fp,0,SEEK_END)",
            "fclose",
            "fopen"
          ],
          "correct_option": "A",
          "explanation": "Resets ptr to start.",
          "difficulty": "Medium"
        },
        {
          "id": 813,
          "question": "fscanf reads from?",
          "options": [
            "Keyboard",
            "File stream",
            "String",
            "Screen"
          ],
          "correct_option": "B",
          "explanation": "Formatted read from file.",
          "difficulty": "Easy"
        },
        {
          "id": 814,
          "question": "If fopen fails it returns?",
          "options": [
            "NULL",
            "-1",
            "0",
            "Error"
          ],
          "correct_option": "A",
          "explanation": "Error checking requirement.",
          "difficulty": "Easy"
        },
        {
          "id": 815,
          "question": "feof() checks for?",
          "options": [
            "File error",
            "End of File",
            "File open",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Returns true if EOF reached.",
          "difficulty": "Easy"
        },
        {
          "id": 816,
          "question": "getc() reads?",
          "options": [
            "String",
            "Integer",
            "Character",
            "Line"
          ],
          "correct_option": "C",
          "explanation": "Single char.",
          "difficulty": "Easy"
        },
        {
          "id": 817,
          "question": "Access mode 'r+' means?",
          "options": [
            "Read only",
            "Read/Write (No truncate)",
            "Read/Write (Truncate)",
            "Append"
          ],
          "correct_option": "B",
          "explanation": "Updates existing file.",
          "difficulty": "Hard"
        },
        {
          "id": 818,
          "question": "Buffer flushing is done by?",
          "options": [
            "fflush",
            "flush",
            "clean",
            "clear"
          ],
          "correct_option": "A",
          "explanation": "Forces write to disk.",
          "difficulty": "Medium"
        },
        {
          "id": 819,
          "question": "remove() function is used to?",
          "options": [
            "Delete file",
            "Clear content",
            "Remove permission",
            "Close"
          ],
          "correct_option": "A",
          "explanation": "Deletes file from system.",
          "difficulty": "Medium"
        },
        {
          "id": 820,
          "question": "stdin, stdout, stderr are?",
          "options": [
            "File pointers",
            "Ints",
            "Strings",
            "Functions"
          ],
          "correct_option": "A",
          "explanation": "Standard streams.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 851,
          "question": "Explain file opening modes 'w', 'r', 'a', 'r+'.",
          "model_answer": "w: Write(Overwrite). r: Read(Error if missing). a: Append. r+: Read/Write(No overwrite). Adding 'b' makes them binary.",
          "key_points": [
            "Read/Write/Append",
            "Truncate behavior",
            "r+ update"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 852,
          "question": "Difference between Text and Binary files.",
          "model_answer": "Text: ASCII, line translations (\\n -> \\r\\n). Binary: Raw bytes, exact image of memory, no translation.",
          "key_points": [
            "Encoding",
            "Translation",
            "Raw bytes"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 853,
          "question": "Usage of fseek, ftell, rewind.",
          "model_answer": "fseek: Move cursor to offset. ftell: Get current position. rewind: logic reset to 0.",
          "key_points": [
            "Navigation",
            "Random Access"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 854,
          "question": "Steps to process a file in C.",
          "model_answer": "1. Declare FILE pointer. 2. fopen() and check NULL. 3. Read/Write ops. 4. fclose().",
          "key_points": [
            "Pointer",
            "Open/Close",
            "Operations"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 855,
          "question": "How to handle errors during file I/O?",
          "model_answer": "Check return value of fopen (NULL). Use ferror() to detect IO errors. Use feof() to check termination.",
          "key_points": [
            "NULL check",
            "ferror",
            "feof"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "9. Dynamic Memory (malloc/calloc)",
      "mcqs": [
        {
          "id": 901,
          "question": "Which header file for malloc?",
          "options": [
            "stdlib.h",
            "stdio.h",
            "mem.h",
            "alloc.h"
          ],
          "correct_option": "A",
          "explanation": "Standard Library.",
          "difficulty": "Easy"
        },
        {
          "id": 902,
          "question": "malloc returns pointer of type?",
          "options": [
            "void*",
            "int*",
            "char*",
            "null"
          ],
          "correct_option": "A",
          "explanation": "Generic pointer, must cast.",
          "difficulty": "Easy"
        },
        {
          "id": 903,
          "question": "Difference malloc vs calloc?",
          "options": [
            "calloc initializes to 0",
            "malloc initializes to 0",
            "Same",
            "calloc is faster"
          ],
          "correct_option": "A",
          "explanation": "Cler Alloc vs Memory Alloc.",
          "difficulty": "Medium"
        },
        {
          "id": 904,
          "question": "Function to free memory?",
          "options": [
            "delete",
            "free",
            "remove",
            "dealloc"
          ],
          "correct_option": "B",
          "explanation": "Returns memory to heap.",
          "difficulty": "Easy"
        },
        {
          "id": 905,
          "question": "realloc is used to?",
          "options": [
            "Resize allocated memory",
            "Free memory",
            "Alloc new memory",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Changes size of existing block.",
          "difficulty": "Medium"
        },
        {
          "id": 906,
          "question": "Where is dynamic memory allocated?",
          "options": [
            "Stack",
            "Heap",
            "Data segment",
            "Register"
          ],
          "correct_option": "B",
          "explanation": "Program heap.",
          "difficulty": "Easy"
        },
        {
          "id": 907,
          "question": "If malloc fails it returns?",
          "options": [
            "NULL",
            "-1",
            "Garbage",
            "Crash"
          ],
          "correct_option": "A",
          "explanation": "Out of memory.",
          "difficulty": "Easy"
        },
        {
          "id": 908,
          "question": "Memory leak happens when?",
          "options": [
            "Memory not freed",
            "Memory freed twice",
            "Memory accessed after free",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Lost reference to allocated block.",
          "difficulty": "Medium"
        },
        {
          "id": 909,
          "question": "free(NULL) causes?",
          "options": [
            "Crash",
            "Error",
            "No action",
            "Warning"
          ],
          "correct_option": "C",
          "explanation": "Defined as safe no-op.",
          "difficulty": "Medium"
        },
        {
          "id": 910,
          "question": "sizeof(pointer) depends on?",
          "options": [
            "Type pointed to",
            "Architecture (32/64)",
            "Value",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Address bus width.",
          "difficulty": "Medium"
        },
        {
          "id": 911,
          "question": "Accessing freed memory is called?",
          "options": [
            "Dangling pointer",
            "Null pointer",
            "Wild pointer",
            "Void pointer"
          ],
          "correct_option": "A",
          "explanation": "Use after free.",
          "difficulty": "Easy"
        },
        {
          "id": 912,
          "question": "calloc takes arguments?",
          "options": [
            "1 (size)",
            "2 (num, size)",
            "3",
            "0"
          ],
          "correct_option": "B",
          "explanation": "Count and Element Size.",
          "difficulty": "Medium"
        },
        {
          "id": 913,
          "question": "Heap memory is managed by?",
          "options": [
            "Compiler",
            "Operating System/Programmer",
            "CPU",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Manual management in C.",
          "difficulty": "Easy"
        },
        {
          "id": 914,
          "question": "Is heap slower than stack?",
          "options": [
            "Yes",
            "No",
            "Same",
            "Depends"
          ],
          "correct_option": "A",
          "explanation": "Allocation overhead + fragmentation.",
          "difficulty": "Medium"
        },
        {
          "id": 915,
          "question": "Double free leads to?",
          "options": [
            "Undefined Behavior/Crash",
            "Nothing",
            "Memory check",
            "Warning"
          ],
          "correct_option": "A",
          "explanation": "Corruption of heap manager.",
          "difficulty": "Hard"
        },
        {
          "id": 916,
          "question": "Can realloc move memory block?",
          "options": [
            "Yes",
            "No",
            "Always",
            "Never"
          ],
          "correct_option": "A",
          "explanation": "If cannot extend in place, finds new spot.",
          "difficulty": "Medium"
        },
        {
          "id": 917,
          "question": "malloc(0) returns?",
          "options": [
            "NULL or Unique Ptr",
            "Simple NULL",
            "Error",
            "1"
          ],
          "correct_option": "A",
          "explanation": "Implementation defined, usually safe.",
          "difficulty": "Hard"
        },
        {
          "id": 918,
          "question": "Which causes Segmentation Fault?",
          "options": [
            "Dereferencing NULL",
            "Infinite loop",
            "Large file",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Access violation.",
          "difficulty": "Easy"
        },
        {
          "id": 919,
          "question": "Why cast return of malloc?",
          "options": [
            "Explicit type safety (C++)",
            "Required in C",
            "Faster",
            "Style"
          ],
          "correct_option": "A",
          "explanation": "Not strictly needed in C (void* promotes), but good practice for C++ compat.",
          "difficulty": "Medium"
        },
        {
          "id": 920,
          "question": "Maximum memory allocatable?",
          "options": [
            "RAM size",
            "Virtual Memory limits",
            "Hard disk size",
            "2GB"
          ],
          "correct_option": "B",
          "explanation": "Limited by address space/OS.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 951,
          "question": "Difference between Static and Dynamic Memory Allocation.",
          "model_answer": "Static: Compile time, Stack/Data, Fixed size. Dynamic: Runtime, Heap, Resizable, Manual free required.",
          "key_points": [
            "Time of alloc",
            "Location",
            "Flexibility"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 952,
          "question": "Explain malloc, calloc, realloc and free.",
          "model_answer": "malloc: Alloc bytes. calloc: Alloc + Zero. realloc: Resize existing. free: Release.",
          "key_points": [
            "Functions",
            "Purpose",
            "Syntax"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 953,
          "question": "What is a Memory Leak? Example.",
          "model_answer": "Allocating memory but never freeing it. Loop { p = malloc(10); } without free leaks memory until crash.",
          "key_points": [
            "Resource leak",
            "Exhaustion",
            "Example"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 954,
          "question": "Why check NULL after malloc?",
          "model_answer": "Allocation can fail if memory is full. Dereferencing NULL causes SegFault.",
          "key_points": [
            "Safety",
            "Crash prevention"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 955,
          "question": "Structure of Heap vs Stack.",
          "model_answer": "Stack: LIFO, Function Frames, Auto cleanup, Fast. Heap: Free pool, Manual control, Fragmentation issues, Slower.",
          "key_points": [
            "Organization",
            "Speed",
            "Management"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "10. Preprocessor & Macros",
      "mcqs": [
        {
          "id": 1001,
          "question": "Preprocessor directive lines start with?",
          "options": [
            "#",
            "//",
            "/*",
            "@"
          ],
          "correct_option": "A",
          "explanation": "Hash symbol.",
          "difficulty": "Easy"
        },
        {
          "id": 1002,
          "question": "#define is used for?",
          "options": [
            "Functions",
            "Macros/Constants",
            "Variables",
            "Loops"
          ],
          "correct_option": "B",
          "explanation": "Text substitution.",
          "difficulty": "Easy"
        },
        {
          "id": 1003,
          "question": "#include <filename> looks for file in?",
          "options": [
            "Current dir",
            "Standard include path",
            "Both",
            "Root"
          ],
          "correct_option": "B",
          "explanation": "Angle brackets = System path.",
          "difficulty": "Medium"
        },
        {
          "id": 1004,
          "question": "#include \"filename\" looks for file in?",
          "options": [
            "Current dir first",
            "System path only",
            "Root",
            "Internet"
          ],
          "correct_option": "A",
          "explanation": "Quotes = Local directory first.",
          "difficulty": "Medium"
        },
        {
          "id": 1005,
          "question": "Macros are expanded at?",
          "options": [
            "Compile time",
            "Pre-processing time",
            "Runtime",
            "Link time"
          ],
          "correct_option": "B",
          "explanation": "Before compilation proper.",
          "difficulty": "Medium"
        },
        {
          "id": 1006,
          "question": "Which is conditional compilation?",
          "options": [
            "#ifdef",
            "#define",
            "#include",
            "#pragma"
          ],
          "correct_option": "A",
          "explanation": "If Defined.",
          "difficulty": "Easy"
        },
        {
          "id": 1007,
          "question": "__LINE__ macro yields?",
          "options": [
            "Current line number",
            "File name",
            "Date",
            "Time"
          ],
          "correct_option": "A",
          "explanation": "Standard predefined macro.",
          "difficulty": "Easy"
        },
        {
          "id": 1008,
          "question": "Macro vs Function speed?",
          "options": [
            "Macro faster",
            "Function faster",
            "Same",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No call overhead, but larger code size.",
          "difficulty": "Medium"
        },
        {
          "id": 1009,
          "question": "#pragma is used for?",
          "options": [
            "Compiler specific instructions",
            "Comments",
            "Variables",
            "Loops"
          ],
          "correct_option": "A",
          "explanation": "Pack, poison, etc.",
          "difficulty": "Hard"
        },
        {
          "id": 1010,
          "question": "To undefine a macro?",
          "options": [
            "#undef",
            "#delete",
            "#remove",
            "#end"
          ],
          "correct_option": "A",
          "explanation": "Standard directive.",
          "difficulty": "Easy"
        },
        {
          "id": 1011,
          "question": "Avoid multiple inclusion of header?",
          "options": [
            "Include Guards",
            "Comments",
            "Loops",
            "None"
          ],
          "correct_option": "A",
          "explanation": "#ifndef HEADER_H ...",
          "difficulty": "Medium"
        },
        {
          "id": 1012,
          "question": "#error directive does what?",
          "options": [
            "Stops compilation with error",
            "Prints warning",
            "Runtime error",
            "Nothing"
          ],
          "correct_option": "A",
          "explanation": "Used for version checks etc.",
          "difficulty": "Hard"
        },
        {
          "id": 1013,
          "question": "Can macros have arguments?",
          "options": [
            "Yes",
            "No",
            "Variables only",
            "Ints only"
          ],
          "correct_option": "A",
          "explanation": "Function-like macros.",
          "difficulty": "Easy"
        },
        {
          "id": 1014,
          "question": "SQUARE(x) x*x. SQUARE(1+2) expands to?",
          "options": [
            "1+2*1+2",
            "9",
            "3",
            "Error"
          ],
          "correct_option": "A",
          "explanation": "Text substitution: 1+2*1+2 = 1+2+2 = 5. Needs parens (x)*(x).",
          "difficulty": "Hard"
        },
        {
          "id": 1015,
          "question": "#if directive tests?",
          "options": [
            "Constant expression",
            "Variable value",
            "Function return",
            "String"
          ],
          "correct_option": "A",
          "explanation": "Evaluated at compile time.",
          "difficulty": "Medium"
        },
        {
          "id": 1016,
          "question": "__FILE__ yields?",
          "options": [
            "Filename string",
            "File ptr",
            "Lines",
            "Size"
          ],
          "correct_option": "A",
          "explanation": "Current source filename.",
          "difficulty": "Easy"
        },
        {
          "id": 1017,
          "question": "Token pasting operator?",
          "options": [
            "##",
            "#",
            "@",
            "&"
          ],
          "correct_option": "A",
          "explanation": "Concatenates tokens.",
          "difficulty": "Hard"
        },
        {
          "id": 1018,
          "question": "Stringizing operator?",
          "options": [
            "#",
            "##",
            "$",
            "%"
          ],
          "correct_option": "A",
          "explanation": "Turns argument into string.",
          "difficulty": "Hard"
        },
        {
          "id": 1019,
          "question": "File inclusion limit?",
          "options": [
            "Memory/Compiler limit",
            "10",
            "1",
            "100"
          ],
          "correct_option": "A",
          "explanation": "Conceptually infinite nesting.",
          "difficulty": "Easy"
        },
        {
          "id": 1020,
          "question": "Is preprocessor C code?",
          "options": [
            "No",
            "Yes",
            "Assembly",
            "Binary"
          ],
          "correct_option": "A",
          "explanation": "It's a text processor running before compiler.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 1051,
          "question": "Stages of Compilation in C.",
          "model_answer": "Preprocessing -> Compilation -> Assembly -> Linking.",
          "key_points": [
            "4 stages",
            "Expansion to Machine Code"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1052,
          "question": "Difference between #define and const.",
          "model_answer": "#define: Text replacement, no type check, no memory. const: Variable with type, memory allocated, scoped.",
          "key_points": [
            "Text vs Var",
            "Type safety",
            "Scope"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1053,
          "question": "What are Header Guards? Why needed?",
          "model_answer": "#ifndef MACRO #define MACRO ... #endif. Prevents duplicate definitions when header is included multiple times.",
          "key_points": [
            "Idempotence",
            "Redefinition error prevention"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1054,
          "question": "Explain Macros with Arguments (Function-like macros). Pitfalls?",
          "model_answer": "Faster than functions but dangerous due to operator precedence. #define ABS(x) ((x)<0?-(x):(x)). Pitfall: Side effects in args ABS(i++).",
          "key_points": [
            "Performance",
            "Precedence issues",
            "Side effects"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1055,
          "question": "Operators # and ## in Preprocessor.",
          "model_answer": "#: Stringifies argument. ##: Concatenates two tokens into one.",
          "key_points": [
            "Stringify",
            "Token Paste"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": []
    }
  ]
}
,
 \maths\: 
{
  "subject_name": "Maths",
  "units": [
    {
      "unit_name": "1. Foundation & Logic",
      "mcqs": [
        {
          "id": 101,
          "question": "Which of the following is a proposition?",
          "options": [
            "x + 2 = 5",
            "Is it raining?",
            "2 + 2 = 4",
            "Sit down."
          ],
          "correct_option": "C",
          "explanation": "A proposition describes a fact that is either true or false.",
          "difficulty": "Easy"
        },
        {
          "id": 102,
          "question": "What is the negation of 'P OR Q'?",
          "options": [
            "NOT P OR NOT Q",
            "NOT P AND NOT Q",
            "P AND NOT Q",
            "NOT P OR Q"
          ],
          "correct_option": "B",
          "explanation": "De Morgan's Law: ~(P v Q) <=> ~P ^ ~Q.",
          "difficulty": "Medium"
        },
        {
          "id": 103,
          "question": "A set with no elements is called?",
          "options": [
            "Null set",
            "Singleton set",
            "Finite set",
            "Infinite set"
          ],
          "correct_option": "A",
          "explanation": "Also called the empty set.",
          "difficulty": "Easy"
        },
        {
          "id": 104,
          "question": "If A = {1, 2} and B = {a, b}, what is A x B?",
          "options": [
            "{(1,a), (2,b)}",
            "{(1,a), (1,b), (2,a), (2,b)}",
            "{1, 2, a, b}",
            "{(a,1), (b,2)}"
          ],
          "correct_option": "B",
          "explanation": "Cartesian product includes all ordered pairs.",
          "difficulty": "Medium"
        },
        {
          "id": 105,
          "question": "Which represents a function?",
          "options": [
            "One input maps to multiple outputs",
            "Multiple inputs map to one output",
            "Vertical line intersects graph twice",
            "Domain has unmapped elements"
          ],
          "correct_option": "B",
          "explanation": "A function maps each input to exactly one output.",
          "difficulty": "Easy"
        },
        {
          "id": 106,
          "question": "In logic, p -> q is false only when?",
          "options": [
            "p is true, q is true",
            "p is false, q is true",
            "p is true, q is false",
            "p is false, q is false"
          ],
          "correct_option": "C",
          "explanation": "Implication is false only if True implies False.",
          "difficulty": "Medium"
        },
        {
          "id": 107,
          "question": "What is the cardinality of the power set of {1, 2, 3}?",
          "options": [
            "3",
            "6",
            "8",
            "9"
          ],
          "correct_option": "C",
          "explanation": "2^n where n=3, so 2^3 = 8.",
          "difficulty": "Medium"
        },
        {
          "id": 108,
          "question": "Which symbol represents 'For All'?",
          "options": [
            "âˆƒ",
            "âˆ€",
            "âˆˆ",
            "âŠ‚"
          ],
          "correct_option": "B",
          "explanation": "Universal Quantifier.",
          "difficulty": "Easy"
        },
        {
          "id": 109,
          "question": "If P is True and Q is False, P AND Q is?",
          "options": [
            "True",
            "False",
            "Undefined",
            "Both"
          ],
          "correct_option": "B",
          "explanation": "AND requires both operands to be True.",
          "difficulty": "Easy"
        },
        {
          "id": 110,
          "question": "Inverse of function f(x) = x + 2 is?",
          "options": [
            "x - 2",
            "x + 2",
            "2x",
            "x / 2"
          ],
          "correct_option": "A",
          "explanation": "y = x + 2 => x = y - 2 => f^-1(x) = x - 2.",
          "difficulty": "Medium"
        },
        {
          "id": 111,
          "question": "Which property does Intersection obey?",
          "options": [
            "Commutative",
            "Associative",
            "Both",
            "None"
          ],
          "correct_option": "C",
          "explanation": "A n B = B n A and (A n B) n C = A n (B n C).",
          "difficulty": "Easy"
        },
        {
          "id": 112,
          "question": "Truth table rows for 3 distinct variables?",
          "options": [
            "4",
            "6",
            "8",
            "9"
          ],
          "correct_option": "C",
          "explanation": "2^3 = 8 rows.",
          "difficulty": "Easy"
        },
        {
          "id": 113,
          "question": "A logical statement that is always true is a?",
          "options": [
            "Contradiction",
            "Tautology",
            "Contingency",
            "Fallacy"
          ],
          "correct_option": "B",
          "explanation": "Definition of Tautology.",
          "difficulty": "Medium"
        },
        {
          "id": 114,
          "question": "Which is not a boolean operator?",
          "options": [
            "AND",
            "OR",
            "XOR",
            "MAYBE"
          ],
          "correct_option": "D",
          "explanation": "MAYBE is not a standard boolean logic operator.",
          "difficulty": "Easy"
        },
        {
          "id": 115,
          "question": "Range of f(x) = x^2 for real x?",
          "options": [
            "(-âˆž, âˆž)",
            "[0, âˆž)",
            "(0, âˆž)",
            "(-âˆž, 0]"
          ],
          "correct_option": "B",
          "explanation": "Squaring a real number always yields a non-negative result.",
          "difficulty": "Medium"
        },
        {
          "id": 116,
          "question": "Example of a tautology?",
          "options": [
            "P AND ~P",
            "P OR ~P",
            "P -> Q",
            "P"
          ],
          "correct_option": "B",
          "explanation": "Law of Excluded Middle.",
          "difficulty": "Medium"
        },
        {
          "id": 117,
          "question": "If f: A->B is bijective, it must be?",
          "options": [
            "Injective only",
            "Surjective only",
            "Neither",
            "Both Injective and Surjective"
          ],
          "correct_option": "D",
          "explanation": "Definition of Bijective.",
          "difficulty": "Medium"
        },
        {
          "id": 118,
          "question": "Complement of Set A (A') contains?",
          "options": [
            "Elements in A",
            "Elements NOT in A but in U",
            "Empty set",
            "Universal set"
          ],
          "correct_option": "B",
          "explanation": "A' = U - A.",
          "difficulty": "Easy"
        },
        {
          "id": 119,
          "question": "Statement p <-> q is true if?",
          "options": [
            "p and q have same truth value",
            "p is true",
            "q is false",
            "p and q differ"
          ],
          "correct_option": "A",
          "explanation": "Biconditional is true when both are true or both are false.",
          "difficulty": "Medium"
        },
        {
          "id": 120,
          "question": "Contrapositive of 'If P then Q'?",
          "options": [
            "If Q then P",
            "If not P then not Q",
            "If not Q then not P",
            "If P then not Q"
          ],
          "correct_option": "C",
          "explanation": "Contrapositive has same truth value as original.",
          "difficulty": "Hard"
        },
        {
          "id": 121,
          "question": "{1, 2} âˆª {2, 3} equals?",
          "options": [
            "{1, 2, 2, 3}",
            "{1, 2, 3}",
            "{2}",
            "{1, 3}"
          ],
          "correct_option": "B",
          "explanation": "Union combines elements without duplication.",
          "difficulty": "Easy"
        },
        {
          "id": 122,
          "question": "Is {a} a subset of {a, b}?",
          "options": [
            "Yes",
            "No",
            "Depends on a",
            "Undefined"
          ],
          "correct_option": "A",
          "explanation": "All elements of {a} are in {a, b}.",
          "difficulty": "Easy"
        },
        {
          "id": 123,
          "question": "If A has m elements, B has n elements, how many relations A->B?",
          "options": [
            "m*n",
            "m+n",
            "2^(m*n)",
            "2^(m+n)"
          ],
          "correct_option": "C",
          "explanation": "Relations are subsets of A x B. |AxB| = mn, Power set = 2^mn.",
          "difficulty": "Hard"
        },
        {
          "id": 124,
          "question": "Which represents 'There exists'?",
          "options": [
            "âˆ€",
            "âˆƒ",
            "!",
            "?"
          ],
          "correct_option": "B",
          "explanation": "Existential Quantifier.",
          "difficulty": "Easy"
        },
        {
          "id": 125,
          "question": "Type of proof: Assuming theorem false leads to contradiction.",
          "options": [
            "Direct",
            "Induction",
            "Contradiction",
            "Exhaustion"
          ],
          "correct_option": "C",
          "explanation": "Reductio ad absurdum.",
          "difficulty": "Medium"
        },
        {
          "id": 126,
          "question": "P XOR Q is true whenever?",
          "options": [
            "P is true",
            "Both true",
            "One is true, other false",
            "Both false"
          ],
          "correct_option": "C",
          "explanation": "Exclusive OR.",
          "difficulty": "Medium"
        },
        {
          "id": 127,
          "question": "Identity element for Set Union?",
          "options": [
            "Universal Set",
            "Empty Set",
            "Set itself",
            "None"
          ],
          "correct_option": "B",
          "explanation": "A U {} = A.",
          "difficulty": "Medium"
        },
        {
          "id": 128,
          "question": "Modus Ponens rule?",
          "options": [
            "((P->Q) ^ P) -> Q",
            "((P->Q) ^ ~Q) -> ~P",
            "P -> P",
            "P -> Q"
          ],
          "correct_option": "A",
          "explanation": "Classic inference rule.",
          "difficulty": "Hard"
        },
        {
          "id": 129,
          "question": "Let A = {1, 2}, B = {2, 3}. A - B is?",
          "options": [
            "{1, 3}",
            "{1}",
            "{2}",
            "{3}"
          ],
          "correct_option": "B",
          "explanation": "Elements in A but NOT in B.",
          "difficulty": "Easy"
        },
        {
          "id": 130,
          "question": "Function f(x)=x^2 from Z to Z is?",
          "options": [
            "Injective",
            "Surjective",
            "Bijective",
            "None of these"
          ],
          "correct_option": "D",
          "explanation": "Not injective (f(-2)=f(2)), not surjective (no maps to negative integers).",
          "difficulty": "Hard"
        },
        {
          "id": 131,
          "question": "Predicate P(x): x > 3. P(2) is?",
          "options": [
            "True",
            "False",
            "Undefined",
            "Invalid"
          ],
          "correct_option": "B",
          "explanation": "2 > 3 is false.",
          "difficulty": "Easy"
        },
        {
          "id": 132,
          "question": "De Morgan's law for Sets?",
          "options": [
            "(A U B)' = A' U B'",
            "(A U B)' = A' n B'",
            "(A n B)' = A' n B'",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Complement of Union is Intersection of Complements.",
          "difficulty": "Medium"
        },
        {
          "id": 133,
          "question": "A relation R is symmetric if?",
          "options": [
            "(a,b) in R => (b,a) in R",
            "(a,a) in R",
            "(a,b) and (b,c) => (a,c)",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Definition of Symmetric.",
          "difficulty": "Easy"
        },
        {
          "id": 134,
          "question": "Reflexive relation on A requires?",
          "options": [
            "(a,a) for some a",
            "(a,a) for all a in A",
            "(a,b) => (b,a)",
            "No (a,a)"
          ],
          "correct_option": "B",
          "explanation": "Must hold for every element.",
          "difficulty": "Medium"
        },
        {
          "id": 135,
          "question": "Equivalence relation must be?",
          "options": [
            "Reflexive",
            "Symmetric",
            "Transitive",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "RST properties define equivalence.",
          "difficulty": "Easy"
        },
        {
          "id": 136,
          "question": "P -> Q is equivalent to?",
          "options": [
            "~P v Q",
            "P ^ ~Q",
            "~P ^ Q",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard logical equivalence.",
          "difficulty": "Hard"
        },
        {
          "id": 137,
          "question": "Ceiling function ceil(2.3) is?",
          "options": [
            "2",
            "3",
            "2.5",
            "2.0"
          ],
          "correct_option": "B",
          "explanation": "Smallest integer >= x.",
          "difficulty": "Easy"
        },
        {
          "id": 138,
          "question": "Floor function floor(-2.3) is?",
          "options": [
            "-2",
            "-3",
            "-2.5",
            "-2.0"
          ],
          "correct_option": "B",
          "explanation": "Largest integer <= x. -3 is less than -2.3.",
          "difficulty": "Medium"
        },
        {
          "id": 139,
          "question": "Disjoint sets have intersection?",
          "options": [
            "Empty set",
            "Universal set",
            "Finite",
            "Infinite"
          ],
          "correct_option": "A",
          "explanation": "No common elements.",
          "difficulty": "Easy"
        },
        {
          "id": 140,
          "question": "Sum of first n integers formula?",
          "options": [
            "n(n+1)",
            "n(n+1)/2",
            "n^2",
            "n(n-1)/2"
          ],
          "correct_option": "B",
          "explanation": "Standard arithmetic series sum.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 151,
          "question": "Define Tautology and Contradiction with examples.",
          "model_answer": "Tautology: Always true statement (P OR NOT P). Contradiction: Always false statement (P AND NOT P).",
          "key_points": [
            "Always True",
            "Always False",
            "Truth Table examples"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 152,
          "question": "Explain De Morgan's Laws of Logic.",
          "model_answer": "1. NOT (P OR Q) is equivalent to (NOT P AND NOT Q). 2. NOT (P AND Q) is equivalent to (NOT P OR NOT Q). It distributes negation changing operators.",
          "key_points": [
            "Two laws",
            "Logical equivalence",
            "OR becomes AND",
            "AND becomes OR"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 153,
          "question": "Differentiate between Injective, Surjective, and Bijective functions.",
          "model_answer": "Injective (One-to-One): Distinct inputs have distinct outputs. Surjective (Onto): Range equals Co-domain. Bijective: Both Injective and Surjective.",
          "key_points": [
            "One-to-One",
            "Onto",
            "Invertible"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 154,
          "question": "Prove that for any sets A and B, (A âˆª B)' = A' âˆ© B'.",
          "model_answer": "Show x in LHS => x in RHS and vice versa. x not in AUB => x not in A AND x not in B => x in A' AND x in B' => x in A'nB'.",
          "key_points": [
            "Set builder notation or Logic proof",
            "Double inclusion"
          ],
          "marks": 10,
          "difficulty": "Hard"
        },
        {
          "id": 155,
          "question": "Explain Mathematical Induction principle.",
          "model_answer": "Step 1: Base Case P(1) is true. Step 2: Inductive Hypothesis assume P(k). Step 3: Inductive Step show P(k+1) is true. Conclusion: P(n) is true for all n.",
          "key_points": [
            "Base case",
            "Hypothesis",
            "Inductive step"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 156,
          "question": "Describe the Pigeonhole Principle.",
          "model_answer": "If n items are put into m containers, with n > m, then at least one container must contain more than one item.",
          "key_points": [
            "n > m",
            "at least one collision"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 157,
          "question": "What is an Equivalence Relation?",
          "model_answer": "A relation that is Reflexive, Symmetric, and Transitive. It partitions the set into equivalence classes.",
          "key_points": [
            "Reflexive",
            "Symmetric",
            "Transitive",
            "Partitions"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 158,
          "question": "Define Power Set.",
          "model_answer": "The set of all subsets of a set S, including the empty set and S itself. Denoted P(S). Cardinality is 2^|S|.",
          "key_points": [
            "Set of subsets",
            "Includes empty set",
            "Size 2^n"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 159,
          "question": "Explain Implication (P -> Q).",
          "model_answer": "Logical connective 'If P then Q'. It is false only when P is true and Q is false. P is hypothesis, Q is conclusion.",
          "key_points": [
            "Truth table",
            "Hypothesis/Conclusion",
            "False case"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 160,
          "question": "Show Truth Table for (P AND Q) -> R.",
          "model_answer": "Construct table with 8 rows for P, Q, R. Calculate P AND Q column. Use implication rule to find final result.",
          "key_points": [
            "8 rows",
            "Intermediate column",
            "Final result"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 161,
          "question": "Difference between Calculus and Discrete Math?",
          "model_answer": "Calculus deals with continuous change, limits, and real numbers. Discrete Math deals with distinct, separate objects (integers, graphs, logic) without continuity.",
          "key_points": [
            "Continuous vs Discrete",
            "Real numbers vs Integers/Objects"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 162,
          "question": "What is a Quantifier?",
          "model_answer": "A symbol used to state the extent of validity of a predicate. Universal (For all) and Existential (There exists).",
          "key_points": [
            "Extent of predicate",
            "Universal",
            "Existential"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 163,
          "question": "Define Cartesian Product.",
          "model_answer": "For sets A and B, A x B is the set of all ordered pairs (a, b) where a is in A and b is in B.",
          "key_points": [
            "Ordered pairs",
            "Set definition"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 164,
          "question": "What is Modus Tollens?",
          "model_answer": "Inference rule: If P -> Q is true and Q is false (~Q), then P must be false (~P).",
          "key_points": [
            "Inference rule",
            "~Q -> ~P"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 165,
          "question": "Properties of Set Difference.",
          "model_answer": "A - B is set of elements in A but not B. Not commutative (A-B != B-A). A - B = A intersection B'.",
          "key_points": [
            "Not commutative",
            "Relative complement"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "2. Graph Theory",
      "mcqs": [
        {
          "id": 201,
          "question": "A graph with no loops and no parallel edges is called?",
          "options": [
            "Simple Graph",
            "Multi Graph",
            "Pseudo Graph",
            "Weighted Graph"
          ],
          "correct_option": "A",
          "explanation": "Definition of simple graph.",
          "difficulty": "Easy"
        },
        {
          "id": 202,
          "question": "Degree of a vertex in a simple graph is?",
          "options": [
            "Number of edges incident",
            "Number of loops",
            "Number of paths",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Count of connected edges.",
          "difficulty": "Easy"
        },
        {
          "id": 203,
          "question": "Handshaking Lemma states sum of degrees is?",
          "options": [
            "Odd",
            "Even",
            "Twice number of edges",
            "Number of vertices"
          ],
          "correct_option": "C",
          "explanation": "Sum(deg(v)) = 2|E|.",
          "difficulty": "Easy"
        },
        {
          "id": 204,
          "question": "A connected graph with no cycles is a?",
          "options": [
            "Tree",
            "Loop",
            "Complete Graph",
            "Bipartite Graph"
          ],
          "correct_option": "A",
          "explanation": "Tree definition.",
          "difficulty": "Easy"
        },
        {
          "id": 205,
          "question": "Maximum edges in a simple graph with n vertices?",
          "options": [
            "n",
            "n(n-1)/2",
            "n^2",
            "2n"
          ],
          "correct_option": "B",
          "explanation": "nC2 combinations.",
          "difficulty": "Medium"
        },
        {
          "id": 206,
          "question": "A graph where every pair of distinct vertices is adjacent?",
          "options": [
            "Regular",
            "Complete",
            "Bipartite",
            "Cyclic"
          ],
          "correct_option": "B",
          "explanation": "Denoted by Kn.",
          "difficulty": "Easy"
        },
        {
          "id": 207,
          "question": "Number of edges in K5?",
          "options": [
            "5",
            "10",
            "15",
            "20"
          ],
          "correct_option": "B",
          "explanation": "5*4/2 = 10.",
          "difficulty": "Medium"
        },
        {
          "id": 208,
          "question": "A path that visits every vertex exactly once?",
          "options": [
            "Euler Path",
            "Hamiltonian Path",
            "Circuit",
            "Loop"
          ],
          "correct_option": "B",
          "explanation": "Hamiltonian touches vertices; Euler touches edges.",
          "difficulty": "Medium"
        },
        {
          "id": 209,
          "question": "A circuit that contains every edge exactly once?",
          "options": [
            "Euler Circuit",
            "Hamiltonian Circuit",
            "Tree",
            "Planar"
          ],
          "correct_option": "A",
          "explanation": "Eulerian definition.",
          "difficulty": "Medium"
        },
        {
          "id": 210,
          "question": "Is K3,3 planar?",
          "options": [
            "Yes",
            "No",
            "Maybe",
            "Undefined"
          ],
          "correct_option": "B",
          "explanation": "Kuratowski's Theorem.",
          "difficulty": "Hard"
        },
        {
          "id": 211,
          "question": "Adjacency Matrix of undirected graph is always?",
          "options": [
            "Symmetric",
            "Skew-symmetric",
            "Identity",
            "Zero"
          ],
          "correct_option": "A",
          "explanation": "If i is connected to j, j is connected to i.",
          "difficulty": "Easy"
        },
        {
          "id": 212,
          "question": "Does a tree with n vertices have n-1 edges?",
          "options": [
            "Always",
            "Never",
            "Sometimes",
            "Only if binary"
          ],
          "correct_option": "A",
          "explanation": "Fundamental property of trees.",
          "difficulty": "Easy"
        },
        {
          "id": 213,
          "question": "Chromatic number of K4?",
          "options": [
            "2",
            "3",
            "4",
            "1"
          ],
          "correct_option": "C",
          "explanation": "Every vertex connected to every other, need distinct colors.",
          "difficulty": "Medium"
        },
        {
          "id": 214,
          "question": "Which algorithm finds shortest path?",
          "options": [
            "Prim's",
            "Kruskal's",
            "Dijkstra's",
            "DFS"
          ],
          "correct_option": "C",
          "explanation": "Dijkstra is for shortest paths.",
          "difficulty": "Easy"
        },
        {
          "id": 215,
          "question": "A graph capable of being drawn without edge crossings?",
          "options": [
            "Planar",
            "Non-planar",
            "Complete",
            "Bipartite"
          ],
          "correct_option": "A",
          "explanation": "Planar definition.",
          "difficulty": "Easy"
        },
        {
          "id": 216,
          "question": "Minimum colors to color a map (4 Color Theorem)?",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "correct_option": "B",
          "explanation": "Famous theorem.",
          "difficulty": "Medium"
        },
        {
          "id": 217,
          "question": "Vertex with degree 0 is called?",
          "options": [
            "Pendant",
            "Isolated",
            "Root",
            "Leaf"
          ],
          "correct_option": "B",
          "explanation": "Isolated vertex.",
          "difficulty": "Easy"
        },
        {
          "id": 218,
          "question": "Vertex with degree 1 is called?",
          "options": [
            "Pendant",
            "Isolated",
            "Internal",
            "Cycle"
          ],
          "correct_option": "A",
          "explanation": "Pendant vertex.",
          "difficulty": "Easy"
        },
        {
          "id": 219,
          "question": "Sum of degrees in a graph with 10 edges?",
          "options": [
            "10",
            "20",
            "5",
            "100"
          ],
          "correct_option": "B",
          "explanation": "2 * 10 = 20.",
          "difficulty": "Medium"
        },
        {
          "id": 220,
          "question": "Bipartite graph K2,3 has how many edges?",
          "options": [
            "5",
            "6",
            "2",
            "3"
          ],
          "correct_option": "B",
          "explanation": "2 * 3 = 6.",
          "difficulty": "Medium"
        },
        {
          "id": 221,
          "question": "Complement of Complete Graph?",
          "options": [
            "Null Graph",
            "Cycle Graph",
            "Path Graph",
            "Star Graph"
          ],
          "correct_option": "A",
          "explanation": "No edges in complement.",
          "difficulty": "Easy"
        },
        {
          "id": 222,
          "question": "Is C4 bipartite?",
          "options": [
            "Yes",
            "No",
            "Depends",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Square cycle, even length, yes.",
          "difficulty": "Hard"
        },
        {
          "id": 223,
          "question": "Is C5 bipartite?",
          "options": [
            "Yes",
            "No",
            "Depends",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Odd cycle, no.",
          "difficulty": "Hard"
        },
        {
          "id": 224,
          "question": "Walk with no repeated edges?",
          "options": [
            "Trail",
            "Path",
            "Circuit",
            "Cycle"
          ],
          "correct_option": "A",
          "explanation": "Trail allows repeated vertices but not edges.",
          "difficulty": "Medium"
        },
        {
          "id": 225,
          "question": "Walk with no repeated vertices?",
          "options": [
            "Path",
            "Trail",
            "Circuit",
            "Walk"
          ],
          "correct_option": "A",
          "explanation": "Simple path.",
          "difficulty": "Medium"
        },
        {
          "id": 226,
          "question": "Graph isomorphism checks?",
          "options": [
            "Structure preservation",
            "Node names",
            "Edge weights",
            "Drawing style"
          ],
          "correct_option": "A",
          "explanation": "Same connections.",
          "difficulty": "Medium"
        },
        {
          "id": 227,
          "question": "Number of vertices in binary tree of depth d?",
          "options": [
            "2^d",
            "2^(d+1)-1",
            "d^2",
            "2d"
          ],
          "correct_option": "B",
          "explanation": "Sum of powers of 2.",
          "difficulty": "Medium"
        },
        {
          "id": 228,
          "question": "Which traversal moves level by level?",
          "options": [
            "DFS",
            "BFS",
            "Inorder",
            "Preorder"
          ],
          "correct_option": "B",
          "explanation": "Breadth First Search.",
          "difficulty": "Easy"
        },
        {
          "id": 229,
          "question": "Cut vertex removal does what?",
          "options": [
            "Increases components",
            "Decreases components",
            "No change",
            "Adds edges"
          ],
          "correct_option": "A",
          "explanation": "Disconnects graph.",
          "difficulty": "Medium"
        },
        {
          "id": 230,
          "question": "Euler's Formula for planar graphs?",
          "options": [
            "V-E+R=2",
            "V+E-R=2",
            "V-E-R=2",
            "V+E+R=2"
          ],
          "correct_option": "A",
          "explanation": "Standard formula.",
          "difficulty": "Hard"
        },
        {
          "id": 231,
          "question": "Minimal Spanning Tree algorithm?",
          "options": [
            "Kruskal's",
            "DFS",
            "BFS",
            "Floyd's"
          ],
          "correct_option": "A",
          "explanation": "Or Prim's.",
          "difficulty": "Easy"
        },
        {
          "id": 232,
          "question": "In incidence matrix, sum of each column is?",
          "options": [
            "1",
            "2",
            "0",
            "Degree"
          ],
          "correct_option": "B",
          "explanation": "Each edge connects 2 vertices.",
          "difficulty": "Medium"
        },
        {
          "id": 233,
          "question": "Height of a tree with single node?",
          "options": [
            "0",
            "1",
            "-1",
            "Infinite"
          ],
          "correct_option": "A",
          "explanation": "Depth 0.",
          "difficulty": "Easy"
        },
        {
          "id": 234,
          "question": "Rooted tree has how many roots?",
          "options": [
            "1",
            "2",
            "0",
            "n"
          ],
          "correct_option": "A",
          "explanation": "Exactly one.",
          "difficulty": "Easy"
        },
        {
          "id": 235,
          "question": "A graph is Eulerian if?",
          "options": [
            "All degrees even",
            "All degrees odd",
            "At least 2 odd",
            "No edges"
          ],
          "correct_option": "A",
          "explanation": "Condition for Euler Circuit.",
          "difficulty": "Medium"
        },
        {
          "id": 236,
          "question": "Post order traversal?",
          "options": [
            "Left-Right-Root",
            "Root-Left-Right",
            "Left-Root-Right",
            "Right-Answer"
          ],
          "correct_option": "A",
          "explanation": "Standard tree traversal.",
          "difficulty": "Easy"
        },
        {
          "id": 237,
          "question": "Wheel graph Wn has edges?",
          "options": [
            "2n",
            "n",
            "n-1",
            "3n"
          ],
          "correct_option": "A",
          "explanation": "Outer cycle n + n spokes.",
          "difficulty": "Medium"
        },
        {
          "id": 238,
          "question": "Regular graph definition?",
          "options": [
            "All vertices same degree",
            "No cycles",
            "Connected",
            "Planar"
          ],
          "correct_option": "A",
          "explanation": "k-regular.",
          "difficulty": "Easy"
        },
        {
          "id": 239,
          "question": "Cycle graph C3 is also?",
          "options": [
            "K3",
            "K4",
            "K2",
            "Tree"
          ],
          "correct_option": "A",
          "explanation": "Triangle is Complete graph of size 3.",
          "difficulty": "Easy"
        },
        {
          "id": 240,
          "question": "Is network topology related to Graph Theory?",
          "options": [
            "Yes",
            "No",
            "Only for wireless",
            "Only for Mesh"
          ],
          "correct_option": "A",
          "explanation": "Foundation of networks.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 251,
          "question": "State and prove the Handshaking Theorem.",
          "model_answer": "Sum of degrees equals twice the number of edges. Each edge contributes 2 to the sum (one for each endpoint).",
          "key_points": [
            "2|E|",
            "Sum of degrees",
            "Edge incidence"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 252,
          "question": "Difference between Eulerian and Hamiltonian graphs.",
          "model_answer": "Eulerian visits every edge exactly once. Hamiltonian visits every vertex exactly once.",
          "key_points": [
            "Edges vs Vertices",
            "Circuits vs Cycles"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 253,
          "question": "Define Planar Graph and Euler's Formula.",
          "model_answer": "Graph drawn without crossing edges is planar. V-E+R=2 for connected planar logic.",
          "key_points": [
            "No crossing",
            "v-e+r=2",
            "Faces/Regions"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 254,
          "question": "Explain Adjacency Matrix vs Incidence Matrix.",
          "model_answer": "Adj Matrix: VxV, 1 if connected. Incidence: VxE, 1 if vertex is endpoint of edge.",
          "key_points": [
            "Square vs Rectangular",
            "Relations"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 255,
          "question": "Describe Dijkstra's Algorithm.",
          "model_answer": "Greedy algo to find shortest path. Initialize dists to infinity, use priority queue to pick min distance, update neighbors.",
          "key_points": [
            "Shortest path",
            "Relaxation",
            "Greedy"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 256,
          "question": "What is a Tree? List properties.",
          "model_answer": "Connected acyclic graph. n vertices => n-1 edges. Unique path between any 2 nodes.",
          "key_points": [
            "Acyclic",
            "Connected",
            "n-1 edges"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 257,
          "question": "State Kuratowski's Theorem.",
          "model_answer": "A graph is non-planar iff it contains a subgraph homeomorphic to K5 or K3,3.",
          "key_points": [
            "Non-planar",
            "K5",
            "K3,3"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 258,
          "question": "Algorithm for Minimal Spanning Tree?",
          "model_answer": "Prim's: Grow tree from start node. Kruskal's: Add lightest valid edges sorted by weight.",
          "key_points": [
            "Spanning Tree",
            "Min weight",
            "No cycles"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 259,
          "question": "Define Isomorphism of graphs.",
          "model_answer": "Bijective mapping between vertex sets preserving adjacency.",
          "key_points": [
            "One-to-one mapping",
            "Preserves structure"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 260,
          "question": "What is Graph Coloring? Apply to map coloring.",
          "model_answer": "Assignment of labels (colors) to vertices such that no adjacent vertices share same color. Map coloring is dual problem.",
          "key_points": [
            "Chromatic number",
            "Adjacent distinct"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 261,
          "question": "Explain BFS vs DFS.",
          "model_answer": "BFS uses Queue (Level order). DFS uses Stack (Depth first).",
          "key_points": [
            "Queue vs Stack",
            "Breadth vs Depth"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 262,
          "question": "What is a Bipartite Graph?",
          "model_answer": "Vertices can be divided into two disjoint sets U and V such that every edge connects a vertex in U to one in V.",
          "key_points": [
            "Two sets",
            "No internal edges"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 263,
          "question": "Define Walk, Trail, Path, and Cycle.",
          "model_answer": "Walk: Sequence of V-E. Trail: No repeated edges. Path: No repeated vertices. Cycle: Closed path.",
          "key_points": [
            "Definitions",
            "Differences"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 264,
          "question": "Applications of Graph Theory in CS?",
          "model_answer": "Networks, Social media, Routing, Dependency resolution, Garbage collection.",
          "key_points": [
            "Routing",
            "Social networks",
            "Databases"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 265,
          "question": "Find Chromatic number of Cycle Graph C5.",
          "model_answer": "Needs 3 colors. (Odd cycles need 3, Even need 2).",
          "key_points": [
            "3 colors",
            "Odd cycle"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "3. Probability & Statistics",
      "mcqs": [
        {
          "id": 301,
          "question": "Probability of an impossible event is?",
          "options": [
            "1",
            "0",
            "0.5",
            "Infinite"
          ],
          "correct_option": "B",
          "explanation": "Definition.",
          "difficulty": "Easy"
        },
        {
          "id": 302,
          "question": "Sum of probabilities of all elementary events is?",
          "options": [
            "0",
            "1",
            "100",
            "Undefined"
          ],
          "correct_option": "B",
          "explanation": "Total probability is 1.",
          "difficulty": "Easy"
        },
        {
          "id": 303,
          "question": "P(A U B) = ?",
          "options": [
            "P(A) + P(B)",
            "P(A) * P(B)",
            "P(A) + P(B) - P(A n B)",
            "P(A) - P(B)"
          ],
          "correct_option": "C",
          "explanation": "Addition Theorem.",
          "difficulty": "Easy"
        },
        {
          "id": 304,
          "question": "If A and B are mutually exclusive, P(A n B) is?",
          "options": [
            "0",
            "1",
            "0.5",
            "P(A)P(B)"
          ],
          "correct_option": "A",
          "explanation": "Cannot happen together.",
          "difficulty": "Easy"
        },
        {
          "id": 305,
          "question": "If A and B are independent, P(A n B) is?",
          "options": [
            "0",
            "P(A)+P(B)",
            "P(A)P(B)",
            "1"
          ],
          "correct_option": "C",
          "explanation": "Multiplication rule for independent events.",
          "difficulty": "Medium"
        },
        {
          "id": 306,
          "question": "Valid range for probability P(E)?",
          "options": [
            "-1 to 1",
            "0 to 1",
            "0 to 100",
            "-inf to inf"
          ],
          "correct_option": "B",
          "explanation": "Axiom of probability.",
          "difficulty": "Easy"
        },
        {
          "id": 307,
          "question": "Bayes' Theorem calculates?",
          "options": [
            "Prior Probability",
            "Posterior Probability",
            "Marginal Probability",
            "Joint Probability"
          ],
          "correct_option": "B",
          "explanation": "P(A|B) using P(B|A).",
          "difficulty": "Medium"
        },
        {
          "id": 308,
          "question": "Mean of Binomial Distribution?",
          "options": [
            "np",
            "npq",
            "sqrt(npq)",
            "n/p"
          ],
          "correct_option": "A",
          "explanation": "Expected value E[X] = np.",
          "difficulty": "Medium"
        },
        {
          "id": 309,
          "question": "Variance of Poisson Distribution with parameter lambda?",
          "options": [
            "lambda",
            "lambda^2",
            "sqrt(lambda)",
            "1/lambda"
          ],
          "correct_option": "A",
          "explanation": "Mean = Variance = lambda.",
          "difficulty": "Hard"
        },
        {
          "id": 310,
          "question": "Total area under Normal Distribution curve?",
          "options": [
            "0",
            "0.5",
            "1",
            "100"
          ],
          "correct_option": "C",
          "explanation": "Total probability.",
          "difficulty": "Easy"
        },
        {
          "id": 311,
          "question": "In a deck of 52 cards, probability of drawing a King?",
          "options": [
            "1/13",
            "1/52",
            "1/4",
            "1/2"
          ],
          "correct_option": "A",
          "explanation": "4 Kings / 52 Cards = 1/13.",
          "difficulty": "Easy"
        },
        {
          "id": 312,
          "question": "P(A|B) represents?",
          "options": [
            "Prob of A and B",
            "Prob of A given B",
            "Prob of B given A",
            "Prob of A or B"
          ],
          "correct_option": "B",
          "explanation": "Conditional Probability.",
          "difficulty": "Easy"
        },
        {
          "id": 313,
          "question": "Number of ways to arrange letters of 'CAT'?",
          "options": [
            "3",
            "6",
            "9",
            "27"
          ],
          "correct_option": "B",
          "explanation": "3! = 3x2x1 = 6.",
          "difficulty": "Easy"
        },
        {
          "id": 314,
          "question": "Combination formula nCr?",
          "options": [
            "n!/r!",
            "n!/(n-r)!",
            "n!/(r!(n-r)!)",
            "r!/n!"
          ],
          "correct_option": "C",
          "explanation": "Selection order doesn't matter.",
          "difficulty": "Medium"
        },
        {
          "id": 315,
          "question": "Permutation formula nPr?",
          "options": [
            "n!/r!",
            "n!/(n-r)!",
            "n!/(r!(n-r)!)",
            "n!"
          ],
          "correct_option": "B",
          "explanation": "Selection order matters.",
          "difficulty": "Medium"
        },
        {
          "id": 316,
          "question": "Random variable X takes values 1, 2, 3 with prob 0.2, 0.3, 0.5. Mean?",
          "options": [
            "2.0",
            "2.3",
            "2.5",
            "3.0"
          ],
          "correct_option": "B",
          "explanation": "1(0.2)+2(0.3)+3(0.5) = 0.2+0.6+1.5=2.3.",
          "difficulty": "Medium"
        },
        {
          "id": 317,
          "question": "Which distribution models number of successes in n trials?",
          "options": [
            "Poisson",
            "Normal",
            "Binomial",
            "Exponential"
          ],
          "correct_option": "C",
          "explanation": "Bernoulli trials.",
          "difficulty": "Medium"
        },
        {
          "id": 318,
          "question": "Which distribution models rare events in fixed interval?",
          "options": [
            "Poisson",
            "Uniform",
            "Binomial",
            "Normal"
          ],
          "correct_option": "A",
          "explanation": "Poisson process.",
          "difficulty": "Medium"
        },
        {
          "id": 319,
          "question": "Standard Normal Distribution has Mean and SD?",
          "options": [
            "0, 1",
            "1, 0",
            "0, 0",
            "1, 1"
          ],
          "correct_option": "A",
          "explanation": "Z-distribution.",
          "difficulty": "Easy"
        },
        {
          "id": 320,
          "question": "Empirical Rule: What % within 1 SD in Normal Dist?",
          "options": [
            "50%",
            "68%",
            "95%",
            "99.7%"
          ],
          "correct_option": "B",
          "explanation": "68-95-99.7 rule.",
          "difficulty": "Hard"
        },
        {
          "id": 321,
          "question": "Correlation coefficient range?",
          "options": [
            "0 to 1",
            "-1 to 1",
            "0 to infinity",
            "-inf to inf"
          ],
          "correct_option": "B",
          "explanation": "Pearson's r.",
          "difficulty": "Easy"
        },
        {
          "id": 322,
          "question": "Two coins tossed. Prob of exactly one Head?",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "1"
          ],
          "correct_option": "B",
          "explanation": "HT, TH out of HH, HT, TH, TT. 2/4 = 1/2.",
          "difficulty": "Easy"
        },
        {
          "id": 323,
          "question": "Covariance of independent variables?",
          "options": [
            "1",
            "0",
            "-1",
            "Undefined"
          ],
          "correct_option": "B",
          "explanation": "No linear relationship.",
          "difficulty": "Medium"
        },
        {
          "id": 324,
          "question": "Mode is?",
          "options": [
            "Average value",
            "Middle value",
            "Most frequent value",
            "Difference max-min"
          ],
          "correct_option": "C",
          "explanation": "Central tendency measure.",
          "difficulty": "Easy"
        },
        {
          "id": 325,
          "question": "Median of 1, 3, 3, 6, 7, 8, 9?",
          "options": [
            "3",
            "6",
            "7",
            "5"
          ],
          "correct_option": "B",
          "explanation": "Sorted, middle element is 6.",
          "difficulty": "Easy"
        },
        {
          "id": 326,
          "question": "Geometric distribution models?",
          "options": [
            "Number of trials to 1st success",
            "Number of successes",
            "Time between events",
            "Height of people"
          ],
          "correct_option": "A",
          "explanation": "Bernoulli trials until success.",
          "difficulty": "Medium"
        },
        {
          "id": 327,
          "question": "Condition for PDF f(x)?",
          "options": [
            "Integral -inf to inf f(x)dx = 1",
            "Sum f(x) = 0",
            "f(x) < 0 allowed",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Total prob is 1.",
          "difficulty": "Hard"
        },
        {
          "id": 328,
          "question": "P(A') is?",
          "options": [
            "1 + P(A)",
            "1 - P(A)",
            "P(A)",
            "1/P(A)"
          ],
          "correct_option": "B",
          "explanation": "Complement rule.",
          "difficulty": "Easy"
        },
        {
          "id": 329,
          "question": "Sample space of rolling a die?",
          "options": [
            "{1,2,3,4,5,6}",
            "{1,6}",
            "{H, T}",
            "Real numbers"
          ],
          "correct_option": "A",
          "explanation": "All possible outcomes.",
          "difficulty": "Easy"
        },
        {
          "id": 330,
          "question": "If P(A)=0.4, P(B)=0.5, Mutually Excl, P(A U B)?",
          "options": [
            "0.9",
            "0.2",
            "0.1",
            "0"
          ],
          "correct_option": "A",
          "explanation": "0.4 + 0.5 = 0.9.",
          "difficulty": "Easy"
        },
        {
          "id": 331,
          "question": "Coefficient of Variation?",
          "options": [
            "Mean/SD",
            "SD/Mean * 100",
            "Variance/Mean",
            "Mean/Variance"
          ],
          "correct_option": "B",
          "explanation": "Relative variability.",
          "difficulty": "Medium"
        },
        {
          "id": 332,
          "question": "Bernoulli trial has how many outcomes?",
          "options": [
            "1",
            "2",
            "3",
            "Infinite"
          ],
          "correct_option": "B",
          "explanation": "Success or Failure.",
          "difficulty": "Easy"
        },
        {
          "id": 333,
          "question": "Central Limit Theorem relates to?",
          "options": [
            "Sample Mean distribution",
            "Sample Median",
            "Population range",
            "Outliers"
          ],
          "correct_option": "A",
          "explanation": "Converges to Normal distribution.",
          "difficulty": "Hard"
        },
        {
          "id": 334,
          "question": "Skewness measures?",
          "options": [
            "Peakedness",
            "Asymmetry",
            "Spread",
            "Center"
          ],
          "correct_option": "B",
          "explanation": "Symmtery around mean.",
          "difficulty": "Medium"
        },
        {
          "id": 335,
          "question": "Kurtosis measures?",
          "options": [
            "Peakedness/Tail weight",
            "Asymmetry",
            "Centrality",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Lepto/Meso/Platykurtic.",
          "difficulty": "Hard"
        },
        {
          "id": 336,
          "question": "Discrete Random Variable takes?",
          "options": [
            "Countable values",
            "Interval values",
            "Any real value",
            "Complex values"
          ],
          "correct_option": "A",
          "explanation": "Finite or countably infinite.",
          "difficulty": "Easy"
        },
        {
          "id": 337,
          "question": "Type I Error is?",
          "options": [
            "Reject True Null",
            "Accept False Null",
            "Reject False Null",
            "Correct Decision"
          ],
          "correct_option": "A",
          "explanation": "False Positive.",
          "difficulty": "Hard"
        },
        {
          "id": 338,
          "question": "Type II Error is?",
          "options": [
            "Reject True Null",
            "Accept False Null",
            "Correct Decision",
            "None"
          ],
          "correct_option": "B",
          "explanation": "False Negative.",
          "difficulty": "Hard"
        },
        {
          "id": 339,
          "question": "Power of a test is?",
          "options": [
            "1 - Alpha",
            "1 - Beta",
            "Alpha",
            "Beta"
          ],
          "correct_option": "B",
          "explanation": "Prob of correctly rejecting false null.",
          "difficulty": "Hard"
        },
        {
          "id": 340,
          "question": "Regression line y = mx + c. m is?",
          "options": [
            "Intercept",
            "Slope",
            "Correlation",
            "Error"
          ],
          "correct_option": "B",
          "explanation": "Equation of line.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 351,
          "question": "State the three axioms of Probability.",
          "model_answer": "1. P(E) >= 0. 2. P(S) = 1. 3. P(Un An) = Sum P(An) for exclusive events.",
          "key_points": [
            "Non-negativity",
            "Normalization",
            "Additivity"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 352,
          "question": "State and Prove Bayes' Theorem.",
          "model_answer": "P(A|B) = P(B|A)P(A) / P(B). Derived from P(AnB) = P(A|B)P(B) = P(B|A)P(A).",
          "key_points": [
            "Formula",
            "Derivation",
            "Posterior"
          ],
          "marks": 10,
          "difficulty": "Hard"
        },
        {
          "id": 353,
          "question": "Explain Difference between Binomial and Poisson Distribution.",
          "model_answer": "Binomial: Fixed n trials, constant p. Poisson: Infinite n, very small p, fixed lambda=np. Poisson is limit of Binomial.",
          "key_points": [
            "n fixed vs large",
            "Success vs Rate",
            "Limiting case"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 354,
          "question": "Define Conditional Probability.",
          "model_answer": "Probability of event A occurring given B has occurred. P(A|B) = P(AnB)/P(B).",
          "key_points": [
            "Definition",
            "Formula",
            "Reduced Sample Space"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 355,
          "question": "What is a Random Variable?",
          "model_answer": "A real-valued function defined on the sample space of a random experiment.",
          "key_points": [
            "Function",
            "Mapping to Reals",
            "Discrete/Continuous"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 356,
          "question": "Explain Central Limit Theorem.",
          "model_answer": "For large sample size n, the sampling distribution of the mean approaches a Normal Distribution regardless of population shape.",
          "key_points": [
            "Large n",
            "Normal approximation",
            "Mean sampling"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 357,
          "question": "Define Expectation and Variance.",
          "model_answer": "Expectation E[X] is probability-weighted average. Variance Var(X) is expected squared deviation from mean E[(X-mu)^2].",
          "key_points": [
            "Mean/Average",
            "Spread/Dispersion",
            "Formulas"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 358,
          "question": "Differentiate between Correlation and Regression.",
          "model_answer": "Correlation measures strength of association. Regression models the relationship to predict one variable from another.",
          "key_points": [
            "Association vs Prediction",
            "Relationship"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 359,
          "question": "What are Mutually Exclusive and Independent events?",
          "model_answer": "Exclusive: Cannot happen together (Intersection is empty). Independent: Occurrence of one doesn't affect other P(AnB)=P(A)P(B).",
          "key_points": [
            "Disjoint",
            "No influence"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 360,
          "question": "Properties of Normal Distribution curve.",
          "model_answer": "Bell-shaped, Symmetric about mean, Mean=Median=Mode, Asymptotic to x-axis, Area=1.",
          "key_points": [
            "Bell shape",
            "Symmetric",
            "Mean=Median=Mode"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 361,
          "question": "Explain Law of Total Probability.",
          "model_answer": "P(B) = Sum P(B|Ai)P(Ai) for a partition {Ai}.",
          "key_points": [
            "Partition",
            "Summation",
            "Formula"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 362,
          "question": "What is a Cumulative Distribution Function (CDF)?",
          "model_answer": "F(x) = P(X <= x). It is non-decreasing, F(-inf)=0, F(inf)=1.",
          "key_points": [
            "P(X<=x)",
            "Right continuous",
            "0 to 1"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 363,
          "question": "Probability Mass Function vs Probability Density Function.",
          "model_answer": "PMF for discrete RV (prob at a point). PDF for continuous RV (prob in an interval).",
          "key_points": [
            "Discrete vs Continuous",
            "Point vs Interval"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 364,
          "question": "Geometric vs Hypergeometric Distribution.",
          "model_answer": "Geometric: Trials to first success (with replacement). Hypergeometric: Successes in sample without replacement.",
          "key_points": [
            "Replacement",
            "Infinite vs Finite pop"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 365,
          "question": "Chebyshev's Inequality statement.",
          "model_answer": "At least 1-1/k^2 of data values fall within k standard deviations of the mean.",
          "key_points": [
            "Bound",
            "Any distribution",
            "k SDs"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": []
    },
    {
      "unit_name": "4. Linear Algebra Basics",
      "mcqs": [
        {
          "id": 401,
          "question": "Order of matrix with m rows and n columns?",
          "options": [
            "m x n",
            "n x m",
            "m + n",
            "m * n"
          ],
          "correct_option": "A",
          "explanation": "Rows x Columns.",
          "difficulty": "Easy"
        },
        {
          "id": 402,
          "question": "Matrix A is symmetric if?",
          "options": [
            "A = A^T",
            "A = -A^T",
            "A = A^-1",
            "A = I"
          ],
          "correct_option": "A",
          "explanation": "Transpose equals original.",
          "difficulty": "Easy"
        },
        {
          "id": 403,
          "question": "Inverse of A exists only if?",
          "options": [
            "det(A) = 0",
            "det(A) != 0",
            "A is identity",
            "A is singular"
          ],
          "correct_option": "B",
          "explanation": "Non-singular requirement.",
          "difficulty": "Easy"
        },
        {
          "id": 404,
          "question": "Identity matrix I has?",
          "options": [
            "1s on diagonal, 0 elsewhere",
            "0s on diagonal, 1 elsewhere",
            "All 1s",
            "All 0s"
          ],
          "correct_option": "A",
          "explanation": "Definition of I.",
          "difficulty": "Easy"
        },
        {
          "id": 405,
          "question": "If AB = BA = I, then B is?",
          "options": [
            "Inverse of A",
            "Transpose of A",
            "Adjoint of A",
            "Equal to A"
          ],
          "correct_option": "A",
          "explanation": "Definition of Inverse.",
          "difficulty": "Easy"
        },
        {
          "id": 406,
          "question": "Rank of a Matrix is?",
          "options": [
            "Number of non-zero rows in Echelon form",
            "Number of columns",
            "Number of elements",
            "Determinant value"
          ],
          "correct_option": "A",
          "explanation": "Dimension of column space.",
          "difficulty": "Medium"
        },
        {
          "id": 407,
          "question": "System Ax=b has unique solution if?",
          "options": [
            "Rank(A) = Rank(A|b) = n",
            "Rank(A) < Rank(A|b)",
            "Rank(A) = Rank(A|b) < n",
            "det(A) = 0"
          ],
          "correct_option": "A",
          "explanation": "Consistent and full rank.",
          "difficulty": "Hard"
        },
        {
          "id": 408,
          "question": "Eigenvalues are roots of?",
          "options": [
            "Characteristic equation",
            "Linear equation",
            "Differential equation",
            "None"
          ],
          "correct_option": "A",
          "explanation": "det(A - lambda*I) = 0.",
          "difficulty": "Medium"
        },
        {
          "id": 409,
          "question": "Trace of a matrix is?",
          "options": [
            "Sum of diagonal elements",
            "Product of diagonal elements",
            "Sum of all elements",
            "Determinant"
          ],
          "correct_option": "A",
          "explanation": "Sum of a_ii.",
          "difficulty": "Easy"
        },
        {
          "id": 410,
          "question": "For orthogonal matrix A, A^T is?",
          "options": [
            "A^-1",
            "A",
            "-A",
            "I"
          ],
          "correct_option": "A",
          "explanation": "A A^T = I.",
          "difficulty": "Medium"
        },
        {
          "id": 411,
          "question": "Determinant of 2x2 matrix [a b; c d]?",
          "options": [
            "ad - bc",
            "ac - bd",
            "ab - cd",
            "ad + bc"
          ],
          "correct_option": "A",
          "explanation": "Standard formula.",
          "difficulty": "Easy"
        },
        {
          "id": 412,
          "question": "Matrix multiplication AB is possible if?",
          "options": [
            "Cols of A = Rows of B",
            "Rows of A = Cols of B",
            "A and B same size",
            "Square matrices only"
          ],
          "correct_option": "A",
          "explanation": "Dimension compatibility.",
          "difficulty": "Easy"
        },
        {
          "id": 413,
          "question": "Singular matrix has determinant?",
          "options": [
            "0",
            "1",
            "-1",
            "Infinite"
          ],
          "correct_option": "A",
          "explanation": "Not invertible.",
          "difficulty": "Easy"
        },
        {
          "id": 414,
          "question": "Transpose of (AB) is?",
          "options": [
            "A^T B^T",
            "B^T A^T",
            "A^T + B^T",
            "AB"
          ],
          "correct_option": "B",
          "explanation": "Reversal rule.",
          "difficulty": "Medium"
        },
        {
          "id": 415,
          "question": "Cayley-Hamilton theorem states?",
          "options": [
            "Every square matrix satisfies its characteristic eq",
            "Matrix has real eigenvalues",
            "Inverse exists",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Key matrix theorem.",
          "difficulty": "Medium"
        },
        {
          "id": 416,
          "question": "If A is 3x3 diagonal matrix with entries 1, 2, 3. Det(A)?",
          "options": [
            "6",
            "5",
            "0",
            "1"
          ],
          "correct_option": "A",
          "explanation": "Product of diagonal: 1*2*3=6.",
          "difficulty": "Easy"
        },
        {
          "id": 417,
          "question": "Idempotent matrix satisfies?",
          "options": [
            "A^2 = A",
            "A^2 = I",
            "A^T = A",
            "A^-1 = A"
          ],
          "correct_option": "A",
          "explanation": "Projection matrices.",
          "difficulty": "Medium"
        },
        {
          "id": 418,
          "question": "Nilpotent matrix satisfies?",
          "options": [
            "A^k = 0",
            "A^2 = I",
            "A^T = -A",
            "det(A)=1"
          ],
          "correct_option": "A",
          "explanation": "Some power is zero matrix.",
          "difficulty": "Medium"
        },
        {
          "id": 419,
          "question": "Sum of eigenvalues equals?",
          "options": [
            "Trace",
            "Determinant",
            "Rank",
            "0"
          ],
          "correct_option": "A",
          "explanation": "Fundamental property.",
          "difficulty": "Medium"
        },
        {
          "id": 420,
          "question": "Product of eigenvalues equals?",
          "options": [
            "Determinant",
            "Trace",
            "Rank",
            "1"
          ],
          "correct_option": "A",
          "explanation": "Fundamental property.",
          "difficulty": "Medium"
        },
        {
          "id": 421,
          "question": "System with no solution is called?",
          "options": [
            "Inconsistent",
            "Consistent",
            "Trivial",
            "Homogeneous"
          ],
          "correct_option": "A",
          "explanation": "No x satisfies Ax=b.",
          "difficulty": "Easy"
        },
        {
          "id": 422,
          "question": "Homogeneous system Ax=0 always has?",
          "options": [
            "Trivial solution",
            "Unique solution",
            "No solution",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Zero vector always works.",
          "difficulty": "Easy"
        },
        {
          "id": 423,
          "question": "Inverse of diagonal matrix?",
          "options": [
            "Reciprocals of diagonal entries",
            "Same matrix",
            "Negative entries",
            "Identity"
          ],
          "correct_option": "A",
          "explanation": "diag(1/d_ii).",
          "difficulty": "Medium"
        },
        {
          "id": 424,
          "question": "Skew-symmetric matrix diagonal entries are?",
          "options": [
            "All 0",
            "All 1",
            "Any value",
            "Positive"
          ],
          "correct_option": "A",
          "explanation": "a_ii = -a_ii => 2a_ii=0.",
          "difficulty": "Medium"
        },
        {
          "id": 425,
          "question": "Cramer's Rule uses?",
          "options": [
            "Determinants",
            "Integration",
            "Differentiation",
            "Graphing"
          ],
          "correct_option": "A",
          "explanation": "Solving systems.",
          "difficulty": "Easy"
        },
        {
          "id": 426,
          "question": "Two vectors u and v are orthogonal if?",
          "options": [
            "dot product is 0",
            "cross product is 0",
            "sum is 0",
            "equal"
          ],
          "correct_option": "A",
          "explanation": "Perpendicular.",
          "difficulty": "Easy"
        },
        {
          "id": 427,
          "question": "Unit vector has magnitude?",
          "options": [
            "1",
            "0",
            "10",
            "Infinite"
          ],
          "correct_option": "A",
          "explanation": "Standard def.",
          "difficulty": "Easy"
        },
        {
          "id": 428,
          "question": "Hermitian matrix satisfies?",
          "options": [
            "A = Conjugate Transpose of A",
            "A = Transpose",
            "A = Inverse",
            "A = -A"
          ],
          "correct_option": "A",
          "explanation": "Complex analogue of symmetric.",
          "difficulty": "Hard"
        },
        {
          "id": 429,
          "question": "Rank of Null matrix?",
          "options": [
            "0",
            "1",
            "Undefined",
            "n"
          ],
          "correct_option": "A",
          "explanation": "No non-zero rows.",
          "difficulty": "Easy"
        },
        {
          "id": 430,
          "question": "Involutory matrix satisfies?",
          "options": [
            "A^2 = I",
            "A^2 = A",
            "A^T = A",
            "A^-1 = 0"
          ],
          "correct_option": "A",
          "explanation": "Its own inverse.",
          "difficulty": "Hard"
        },
        {
          "id": 431,
          "question": "Row Echelon Form involves?",
          "options": [
            "Zeros below pivots",
            "Zeros above pivots",
            "All ones",
            "Diagonal only"
          ],
          "correct_option": "A",
          "explanation": "Step-like structure.",
          "difficulty": "Medium"
        },
        {
          "id": 432,
          "question": "A square matrix is invertible iff?",
          "options": [
            "It is full rank",
            "It has zero row",
            "Det is 0",
            "Trace is 0"
          ],
          "correct_option": "A",
          "explanation": "Non-singular.",
          "difficulty": "Medium"
        },
        {
          "id": 433,
          "question": "Determinant of [2 0; 0 3]?",
          "options": [
            "6",
            "5",
            "0",
            "2"
          ],
          "correct_option": "A",
          "explanation": "2*3 - 0 = 6.",
          "difficulty": "Easy"
        },
        {
          "id": 434,
          "question": "Adjoint matrix is transpose of?",
          "options": [
            "Cofactor matrix",
            "Minor matrix",
            "Inverse",
            "Original"
          ],
          "correct_option": "A",
          "explanation": "Adj A = C^T.",
          "difficulty": "Medium"
        },
        {
          "id": 435,
          "question": "Vector space must be closed under?",
          "options": [
            "Addition & Scalar Mult",
            "Subtraction & Div",
            "Product",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Linear combinations.",
          "difficulty": "Medium"
        },
        {
          "id": 436,
          "question": "Dimension of R^3?",
          "options": [
            "3",
            "2",
            "1",
            "Infinite"
          ],
          "correct_option": "A",
          "explanation": "Basis has 3 vectors.",
          "difficulty": "Easy"
        },
        {
          "id": 437,
          "question": "Linear independence means?",
          "options": [
            "No vector is combo of others",
            "All vectors 0",
            "Orthogonal",
            "Parallel"
          ],
          "correct_option": "A",
          "explanation": "Unique combination for zero.",
          "difficulty": "Medium"
        },
        {
          "id": 438,
          "question": "Span of a set is?",
          "options": [
            "Set of all linear combos",
            "Length",
            "Determinant",
            "Null space"
          ],
          "correct_option": "A",
          "explanation": "Subspace generated.",
          "difficulty": "Medium"
        },
        {
          "id": 439,
          "question": "Unitary Matrix condition?",
          "options": [
            "A A^dagger = I",
            "A^T = A",
            "A^2 = I",
            "Det=0"
          ],
          "correct_option": "A",
          "explanation": "Complex orthogonal.",
          "difficulty": "Hard"
        },
        {
          "id": 440,
          "question": "Nullity is dimension of?",
          "options": [
            "Null Space",
            "Column Space",
            "Row Space",
            "Total Space"
          ],
          "correct_option": "A",
          "explanation": "Kernel dimension.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 451,
          "question": "Define Rank of a Matrix.",
          "model_answer": "Maximum number of linearly independent rows or columns. Dimension of image space.",
          "key_points": [
            "Linear Independence",
            "Row/Col Space",
            "Echelon form"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 452,
          "question": "Explain Cayley-Hamilton Theorem.",
          "model_answer": "Every square matrix satisfies its own characteristic equation. Use: Finding inverse or high powers.",
          "key_points": [
            "Satisfies char eqn",
            "Inverse calculation"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 453,
          "question": "What are Eigenvalues and Eigenvectors?",
          "model_answer": "For Ax = lambda*x, lambda is eigenvalue, x is eigenvector. Vector direction invariant under transformation.",
          "key_points": [
            "Ax = lambda x",
            "Characteristic Root",
            "Direction invariant"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 454,
          "question": "Conditions for Consistency of Linear System Ax=B.",
          "model_answer": "System is consistent if Rank(A) = Rank(A|B). Unique sol if Rank=n, Infinite if Rank<n.",
          "key_points": [
            "Rank condition",
            "Augmented matrix",
            "n unknowns"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 455,
          "question": "Properties of Determinants.",
          "model_answer": "1. det(AB)=det(A)det(B). 2. det(A^T)=det(A). 3. Row swap changes sign. 4. Row add doesn't change value.",
          "key_points": [
            "Product rule",
            "Transpose",
            "Row ops"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 456,
          "question": "Define Orthogonal Matrix.",
          "model_answer": "Square matrix A where A^T = A^-1. Columns form orthonormal basis. det(A) is +1 or -1.",
          "key_points": [
            "A Transpose = A Inverse",
            "Orthonormal columns"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 457,
          "question": "What is Diagonalization?",
          "model_answer": "Finding P such that P^-1 A P = D (diagonal). Possible if A has n independent eigenvectors.",
          "key_points": [
            "Similarity transform",
            "Basis of eigenvectors"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 458,
          "question": "Find Inverse of 2x2 matrix [a b; c d].",
          "model_answer": "1/(ad-bc) * [d -b; -c a]. Exists if ad-bc != 0.",
          "key_points": [
            "Determinant",
            "Swap diagonal",
            "Sign off-diagonal"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 459,
          "question": "Explain Cramer's Rule.",
          "model_answer": "Method to solve linear system using determinants. x_i = det(A_i)/det(A).",
          "key_points": [
            "Determinant ratio",
            "Only for unique solution"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 460,
          "question": "Difference between Symmetric and Skew-Symmetric matrices.",
          "model_answer": "Symmetric: A^T = A. Skew: A^T = -A (Diagonal must be 0 for skew).",
          "key_points": [
            "Transpose relation",
            "Diagonal property"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 461,
          "question": "Define Vector Space.",
          "model_answer": "Set of vectors closed under addition and scalar multiplication, satisfying 8 axioms (associativity, identity, etc).",
          "key_points": [
            "Closure",
            "Axioms",
            "Linear combination"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 462,
          "question": "What is Row Echelon Form?",
          "model_answer": "Matrix form where leading entries move right, zeros below. Used for rank finding and Gaussian elimination.",
          "key_points": [
            "Step structure",
            "Gaussian elimination"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 463,
          "question": "Relationship between Trace and Eigenvalues.",
          "model_answer": "Trace(A) = Sum of Eigenvalues.",
          "key_points": [
            "Sum check",
            "Invariant"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 464,
          "question": "Relationship between Determinant and Eigenvalues.",
          "model_answer": "Det(A) = Product of Eigenvalues.",
          "key_points": [
            "Product check",
            "Invariant"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 465,
          "question": "What is a Homogeneous System?",
          "model_answer": "System where all constant terms are zero (Ax=0). Always consistent (trivial solution 0).",
          "key_points": [
            "Ax=0",
            "Always consistent"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": []
    }
  ]
}
,
 \html_css_js\: 
{
  "subject_name": "HTML / CSS / JavaScript",
  "units": [
    {
      "unit_name": "1. HTML Essentials (Intro, Text, Formatting)",
      "mcqs": [
        {
          "id": 101,
          "question": "What does HTML stand for?",
          "options": [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Multi Language"
          ],
          "correct_option": "A",
          "explanation": "Standard definition.",
          "difficulty": "Easy"
        },
        {
          "id": 102,
          "question": "Which tag is the root element of an HTML page?",
          "options": [
            "<body>",
            "<head>",
            "<html>",
            "<root>"
          ],
          "correct_option": "C",
          "explanation": "All other elements are descendants of <html>.",
          "difficulty": "Easy"
        },
        {
          "id": 103,
          "question": "Which tag is used for the largest heading?",
          "options": [
            "<head>",
            "<h6>",
            "<h1>",
            "<header>"
          ],
          "correct_option": "C",
          "explanation": "<h1> is largest, <h6> is smallest.",
          "difficulty": "Easy"
        },
        {
          "id": 104,
          "question": "What is the correct HTML element for inserting a line break?",
          "options": [
            "<lb>",
            "<break>",
            "<br>",
            "<newline>"
          ],
          "correct_option": "C",
          "explanation": "Void element <br>.",
          "difficulty": "Easy"
        },
        {
          "id": 105,
          "question": "Which character entity represents the copyright symbol?",
          "options": [
            "&copy;",
            "&copyright;",
            "&cr;",
            "&copyr;"
          ],
          "correct_option": "A",
          "explanation": "Standard entity.",
          "difficulty": "Easy"
        },
        {
          "id": 106,
          "question": "Which element is used to define emphasized text?",
          "options": [
            "<italic>",
            "<em>",
            "<i>",
            "<e>"
          ],
          "correct_option": "B",
          "explanation": "<em> indicates semantic importance (often italics).",
          "difficulty": "Medium"
        },
        {
          "id": 107,
          "question": "The <title> element belongs inside which section?",
          "options": [
            "<body>",
            "<head>",
            "<footer>",
            "<main>"
          ],
          "correct_option": "B",
          "explanation": "Metadata goes in <head>.",
          "difficulty": "Easy"
        },
        {
          "id": 108,
          "question": "Which attribute is used to provide an advisory text (tooltip)?",
          "options": [
            "title",
            "alt",
            "tooltip",
            "src"
          ],
          "correct_option": "A",
          "explanation": "Global attribute 'title'.",
          "difficulty": "Medium"
        },
        {
          "id": 109,
          "question": "To display 'H2O', which tag is needed for '2'?",
          "options": [
            "<sup>",
            "<sub>",
            "<small>",
            "<lo>"
          ],
          "correct_option": "B",
          "explanation": "Subscript: <sub>.",
          "difficulty": "Medium"
        },
        {
          "id": 110,
          "question": "Which tag defines preformatted text?",
          "options": [
            "<code>",
            "<pre>",
            "<text>",
            "<format>"
          ],
          "correct_option": "B",
          "explanation": "Preserves whitespace and formatting.",
          "difficulty": "Easy"
        },
        {
          "id": 111,
          "question": "How to write comments in HTML?",
          "options": [
            "// Comment",
            "/* Comment */",
            "<!-- Comment -->",
            "# Comment"
          ],
          "correct_option": "C",
          "explanation": "SGML style comments.",
          "difficulty": "Easy"
        },
        {
          "id": 112,
          "question": "Which element represents computer code?",
          "options": [
            "<kbd>",
            "<samp>",
            "<code>",
            "<var>"
          ],
          "correct_option": "C",
          "explanation": "Generic inline code.",
          "difficulty": "Easy"
        },
        {
          "id": 113,
          "question": "Which tag is used to highlight text (yellow background usually)?",
          "options": [
            "<highlight>",
            "<mark>",
            "<b>",
            "<em>"
          ],
          "correct_option": "B",
          "explanation": "Marked/Highlighted text.",
          "difficulty": "Medium"
        },
        {
          "id": 114,
          "question": "What does the 'style' attribute do?",
          "options": [
            "Adds internal CSS",
            "Adds external CSS",
            "Adds inline CSS",
            "Adds JS"
          ],
          "correct_option": "C",
          "explanation": "Inline styling on elements.",
          "difficulty": "Easy"
        },
        {
          "id": 115,
          "question": "Use of <kbd> tag?",
          "options": [
            "Keyboard Input",
            "Key Variable",
            "Kernel Binary Data",
            "Keyword"
          ],
          "correct_option": "A",
          "explanation": "Represents user input.",
          "difficulty": "Medium"
        },
        {
          "id": 116,
          "question": "Which tag represents variables in math or code?",
          "options": [
            "<v>",
            "<var>",
            "<val>",
            "<math>"
          ],
          "correct_option": "B",
          "explanation": "Semantic element for variables.",
          "difficulty": "Medium"
        },
        {
          "id": 117,
          "question": "Symbol for 'Greater Than' entity?",
          "options": [
            "&gt;",
            "&lt;",
            "&great;",
            "&g;"
          ],
          "correct_option": "A",
          "explanation": "Greater Than (&gt;).",
          "difficulty": "Easy"
        },
        {
          "id": 118,
          "question": "Blockquote tag is used for?",
          "options": [
            "Short quotes",
            "Long quotations from another source",
            "Blocks of code",
            "Bold text"
          ],
          "correct_option": "B",
          "explanation": "Usually indented by browsers.",
          "difficulty": "Easy"
        },
        {
          "id": 119,
          "question": "Which is a void element?",
          "options": [
            "<p>",
            "<hr>",
            "<div>",
            "<span>"
          ],
          "correct_option": "B",
          "explanation": "Horizontal Rule, no closing tag.",
          "difficulty": "Medium"
        },
        {
          "id": 120,
          "question": "<address> tag provides?",
          "options": [
            "IP address",
            "Contact information",
            "Home address only",
            "URL"
          ],
          "correct_option": "B",
          "explanation": "Author/Owner contact info.",
          "difficulty": "Easy"
        },
        {
          "id": 121,
          "question": "What is the correct way to strike out text?",
          "options": [
            "<strike>",
            "<s>",
            "<del>",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "<s> and <del> are modern, <strike> is deprecated but works.",
          "difficulty": "Medium"
        },
        {
          "id": 122,
          "question": "Attribute 'lang' is vital for?",
          "options": [
            "Styling",
            "Accessibility/Screen Readers",
            "Server processing",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Defines language context.",
          "difficulty": "Medium"
        },
        {
          "id": 123,
          "question": "Which defines sample output from a computer program?",
          "options": [
            "<samp>",
            "<out>",
            "<res>",
            "<code>"
          ],
          "correct_option": "A",
          "explanation": "Sample Output.",
          "difficulty": "Hard"
        },
        {
          "id": 124,
          "question": "DOCTYPE declaration for HTML5?",
          "options": [
            "<!DOCTYPE html>",
            "<!DOCTYPE HTML5>",
            "<!DOCTYPE TRANSITIONAL>",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Case-insensitive standard.",
          "difficulty": "Easy"
        },
        {
          "id": 125,
          "question": "Can block elements be nested in inline elements?",
          "options": [
            "Yes",
            "No",
            "Only in HTML5",
            "Never"
          ],
          "correct_option": "B",
          "explanation": "Generally forbidden (except <a> around block in HTML5).",
          "difficulty": "Hard"
        },
        {
          "id": 126,
          "question": "<small> tag is used for?",
          "options": [
            "Small size only",
            "Side comments/Copyright",
            "Subscripts",
            "Icons"
          ],
          "correct_option": "B",
          "explanation": "Represents side comments/fine print.",
          "difficulty": "Medium"
        },
        {
          "id": 127,
          "question": "Difference between <b> and <strong>?",
          "options": [
            "None",
            "Strong implies semantic importance",
            "B is for bold",
            "Both B and C"
          ],
          "correct_option": "D",
          "explanation": "<b> is stylistic, <strong> is semantic.",
          "difficulty": "Medium"
        },
        {
          "id": 128,
          "question": "&nbsp; stands for?",
          "options": [
            "No Break Space",
            "New Break Space",
            "Null Space",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Non-breaking space.",
          "difficulty": "Easy"
        },
        {
          "id": 129,
          "question": "Attribute 'dir' is used for?",
          "options": [
            "Directory",
            "Text Direction (ltr/rtl)",
            "Direct Link",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Left-to-right or Right-to-left.",
          "difficulty": "Medium"
        },
        {
          "id": 130,
          "question": "Default display value of <span>?",
          "options": [
            "block",
            "inline",
            "inline-block",
            "none"
          ],
          "correct_option": "B",
          "explanation": "Inline container.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 151,
          "question": "Explain the Block vs Inline elements difference.",
          "model_answer": "Block: Starts on new line, takes full width (div, p, h1). Inline: Takes only necessary width, no line break (span, a, img).",
          "key_points": [
            "Line break",
            "Width usage",
            "Examples"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 152,
          "question": "What are HTML Entities? Give examples.",
          "model_answer": "Strings used to display reserved characters. Examples: &lt; covers <, &gt; covers >, &amp; covers &.",
          "key_points": [
            "Reserved chars",
            "Syntax &name;",
            "Examples"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 153,
          "question": "Purpose of the <!DOCTYPE html> declaration.",
          "model_answer": "It informs the browser about the document type and version (HTML5) to trigger standard mode rendering instead of quirks mode.",
          "key_points": [
            "Version info",
            "Rendering mode",
            "Not a tag"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 154,
          "question": "Describe the use of <pre> tag.",
          "model_answer": "Defines preformatted text. It preserves both spaces and line breaks exactly as written in the source code.",
          "key_points": [
            "Preserves whitespace",
            "Fixed-width font",
            "Code snippets"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 155,
          "question": "Difference between <b>/<i> and <strong>/<em>.",
          "model_answer": "b/i are purely presentational (bold/italic). strong/em are semantic (importance/emphasis). Screen readers stress semantic tags.",
          "key_points": [
            "Presentation vs Semantics",
            "Accessibility"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 156,
          "question": "What are Attributes in HTML?",
          "model_answer": "Additional information about elements. Placed in start tag. Format: name=\"value\". Global attributes like id, class, style exist.",
          "key_points": [
            "Metadata",
            "Name-value pair",
            "Start tag"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 157,
          "question": "List 3 void elements and explain why they are void.",
          "model_answer": "br, hr, img. They cannot have content or end tags because they insert something rather than wrap content.",
          "key_points": [
            "No content",
            "No closing tag",
            "Examples"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 158,
          "question": "Explain the global attribute 'title'.",
          "model_answer": "Provides additional info as a tooltip when mouse hovers over the element. Useful for accessibility.",
          "key_points": [
            "Tooltip",
            "Advisory info"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 159,
          "question": "Role of <head> tag.",
          "model_answer": "Container for metadata (title, meta, link, script, style). Not displayed directly in viewport.",
          "key_points": [
            "Metadata container",
            "Non-visual"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 160,
          "question": "What is semantic HTML?",
          "model_answer": "Using tags that convey meaning about the content (article, aside, nav) rather than just presentation (div).",
          "key_points": [
            "Meaning",
            "Accessibility",
            "SEO"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 181,
          "problem_statement": "Create a paragraph with bold, italic, and underlined text.",
          "input_format": "None",
          "output_format": "Formatted HTML",
          "code_html": "<p>This is <b>Bold</b>, <i>Italic</i>, and <u>Underlined</u>.</p>",
          "difficulty": "Easy"
        },
        {
          "id": 182,
          "problem_statement": "Display a chemical formula H2SO4 using tags.",
          "input_format": "None",
          "output_format": "HTML with subscripts",
          "code_html": "<p>H<sub>2</sub>SO<sub>4</sub></p>",
          "difficulty": "Easy"
        },
        {
          "id": 183,
          "problem_statement": "Create a tooltip saying 'Hello' on a button.",
          "input_format": "None",
          "output_format": "Button element",
          "code_html": "<button title=\"Hello\">Hover Me</button>",
          "difficulty": "Easy"
        },
        {
          "id": 184,
          "problem_statement": "Show the code snippet 'print(x)' preserving whitespace.",
          "input_format": "None",
          "output_format": "Preformatted code",
          "code_html": "<pre><code>\n  print(x)\n</code></pre>",
          "difficulty": "Medium"
        },
        {
          "id": 185,
          "problem_statement": "Insert a copyright symbol after text 'Footer'.",
          "input_format": "None",
          "output_format": "HTML Entity",
          "code_html": "<p>Footer &copy;</p>",
          "difficulty": "Easy"
        },
        {
          "id": 186,
          "problem_statement": "Create a heading that is centered using style attribute.",
          "input_format": "None",
          "output_format": "h1 with inline style",
          "code_html": "<h1 style=\"text-align:center\">Centered</h1>",
          "difficulty": "Easy"
        },
        {
          "id": 187,
          "problem_statement": "Mark the word 'Important' in a sentence.",
          "input_format": "None",
          "output_format": "Mark tag",
          "code_html": "<p>This is <mark>Important</mark> text.</p>",
          "difficulty": "Easy"
        },
        {
          "id": 188,
          "problem_statement": "Use specific tag to indicate user keyboard input 'Ctrl+C'.",
          "input_format": "None",
          "output_format": "Kbd tag",
          "code_html": "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd></p>",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "2. HTML Content (Links, Images, Lists, Tables)",
      "mcqs": [
        {
          "id": 201,
          "question": "Tag for Hyperlink?",
          "options": [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
          ],
          "correct_option": "B",
          "explanation": "Anchor tag.",
          "difficulty": "Easy"
        },
        {
          "id": 202,
          "question": "Attribute to specify URL in <a> tag?",
          "options": [
            "src",
            "link",
            "href",
            "url"
          ],
          "correct_option": "C",
          "explanation": "Hypertext Reference.",
          "difficulty": "Easy"
        },
        {
          "id": 203,
          "question": "Which attribute opens link in new tab?",
          "options": [
            "target=\"_blank\"",
            "target=\"new\"",
            "window=\"new\"",
            "tab=\"new\""
          ],
          "correct_option": "A",
          "explanation": "Target _blank.",
          "difficulty": "Easy"
        },
        {
          "id": 204,
          "question": "Tag to embed image?",
          "options": [
            "<img>",
            "<image>",
            "<pic>",
            "<src>"
          ],
          "correct_option": "A",
          "explanation": "Image tag.",
          "difficulty": "Easy"
        },
        {
          "id": 205,
          "question": "Alt attribute in <img> is for?",
          "options": [
            "Alternative text",
            "Alert text",
            "Alignment",
            "All of above"
          ],
          "correct_option": "A",
          "explanation": "Accessibility when image fails.",
          "difficulty": "Easy"
        },
        {
          "id": 206,
          "question": "Create an unordered list?",
          "options": [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
          ],
          "correct_option": "A",
          "explanation": "Unordered List (bullets).",
          "difficulty": "Easy"
        },
        {
          "id": 207,
          "question": "Create an ordered list?",
          "options": [
            "<ul>",
            "<ol>",
            "<dl>",
            "<list type='1'>"
          ],
          "correct_option": "B",
          "explanation": "Ordered List (numbers).",
          "difficulty": "Easy"
        },
        {
          "id": 208,
          "question": "List item tag?",
          "options": [
            "<list>",
            "<item>",
            "<li>",
            "<ul-item>"
          ],
          "correct_option": "C",
          "explanation": "List Item.",
          "difficulty": "Easy"
        },
        {
          "id": 209,
          "question": "Correct structure of a table?",
          "options": [
            "<table><tr><td>",
            "<table><head><body>",
            "<table><list>",
            "<table><row>"
          ],
          "correct_option": "A",
          "explanation": "Table, Table Row, Table Data.",
          "difficulty": "Medium"
        },
        {
          "id": 210,
          "question": "Which tag defines table header cell?",
          "options": [
            "<thead>",
            "<th>",
            "<head>",
            "<h>"
          ],
          "correct_option": "B",
          "explanation": "Table Header (bold, centered).",
          "difficulty": "Easy"
        },
        {
          "id": 211,
          "question": "Merging columns in a table uses?",
          "options": [
            "rowspan",
            "colspan",
            "span",
            "merge"
          ],
          "correct_option": "B",
          "explanation": "Column Span.",
          "difficulty": "Medium"
        },
        {
          "id": 212,
          "question": "Merging rows in a table uses?",
          "options": [
            "rowspan",
            "colspan",
            "rowmerge",
            "span"
          ],
          "correct_option": "A",
          "explanation": "Row Span.",
          "difficulty": "Medium"
        },
        {
          "id": 213,
          "question": "Description List tag?",
          "options": [
            "<dl>",
            "<dt>",
            "<dd>",
            "<list>"
          ],
          "correct_option": "A",
          "explanation": "Wraps dt and dd.",
          "difficulty": "Medium"
        },
        {
          "id": 214,
          "question": "Which tag embeds another HTML page?",
          "options": [
            "<iframe>",
            "<frame>",
            "<embed>",
            "<object>"
          ],
          "correct_option": "A",
          "explanation": "Inline Frame.",
          "difficulty": "Medium"
        },
        {
          "id": 215,
          "question": "Start an ordered list from 50?",
          "options": [
            "<ol start='50'>",
            "<ol begin='50'>",
            "<ol num='50'>",
            "<li value='50'>"
          ],
          "correct_option": "A",
          "explanation": "Start attribute.",
          "difficulty": "Medium"
        },
        {
          "id": 216,
          "question": "Change bullet type in <ul> to square?",
          "options": [
            "type='square'",
            "style='list-style-type:square'",
            "bullet='square'",
            "A and B"
          ],
          "correct_option": "D",
          "explanation": "Type attribute (old) or CSS (new).",
          "difficulty": "Medium"
        },
        {
          "id": 217,
          "question": "Link to an email address?",
          "options": [
            "href='mailto:x@y.com'",
            "href='email:x@y.com'",
            "href='x@y.com'",
            "target='email'"
          ],
          "correct_option": "A",
          "explanation": "mailto protocol.",
          "difficulty": "Easy"
        },
        {
          "id": 218,
          "question": "Link to a specific ID on page?",
          "options": [
            "#id",
            "@id",
            "id",
            "&id"
          ],
          "correct_option": "A",
          "explanation": "Fragment identifier.",
          "difficulty": "Easy"
        },
        {
          "id": 219,
          "question": "Caption for a table?",
          "options": [
            "<caption>",
            "<title>",
            "<summary>",
            "<head>"
          ],
          "correct_option": "A",
          "explanation": "First child of table.",
          "difficulty": "Easy"
        },
        {
          "id": 220,
          "question": "Group table body content?",
          "options": [
            "<tbody>",
            "<body>",
            "<content>",
            "<table-body>"
          ],
          "correct_option": "A",
          "explanation": "Variable semantic grouping.",
          "difficulty": "Easy"
        },
        {
          "id": 221,
          "question": "Is <img> a block or inline element?",
          "options": [
            "Block",
            "Inline",
            "Inline-block",
            "Flex"
          ],
          "correct_option": "B",
          "explanation": "Inline (replaced element).",
          "difficulty": "Medium"
        },
        {
          "id": 222,
          "question": "Relative path '../img.jpg' means?",
          "options": [
            "Parent directory",
            "Current directory",
            "Root directory",
            "Error"
          ],
          "correct_option": "A",
          "explanation": ".. goes up one level.",
          "difficulty": "Medium"
        },
        {
          "id": 223,
          "question": "Attribute to remove iframe border?",
          "options": [
            "border='0'",
            "frameborder='0'",
            "seamless",
            "noborder"
          ],
          "correct_option": "B",
          "explanation": "frameborder (deprecated but commonly tested) or CSS.",
          "difficulty": "Medium"
        },
        {
          "id": 224,
          "question": "Correct nested list structure?",
          "options": [
            "<ul><ul><li>",
            "<ul><li><ul>...</ul></li></ul>",
            "<li><ul>",
            "<ul><ol>"
          ],
          "correct_option": "B",
          "explanation": "Nested list must be inside a <li>.",
          "difficulty": "Hard"
        },
        {
          "id": 225,
          "question": "Default border of table?",
          "options": [
            "0",
            "1",
            "Thin",
            "Black"
          ],
          "correct_option": "A",
          "explanation": "No border by default.",
          "difficulty": "Easy"
        },
        {
          "id": 226,
          "question": "Clickable image map tag?",
          "options": [
            "<map>",
            "<area>",
            "<img>",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "Img uses map, map contains areas.",
          "difficulty": "Hard"
        },
        {
          "id": 227,
          "question": "Target='_self' does what?",
          "options": [
            "Opens in same frame (Default)",
            "New window",
            "Parent frame",
            "Full body"
          ],
          "correct_option": "A",
          "explanation": "Default behavior.",
          "difficulty": "Easy"
        },
        {
          "id": 228,
          "question": "Favicon is linked using?",
          "options": [
            "<link rel='icon'>",
            "<icon>",
            "<meta icon>",
            "<img icon>"
          ],
          "correct_option": "A",
          "explanation": "Link relation.",
          "difficulty": "Medium"
        },
        {
          "id": 229,
          "question": "Cellpadding vs Cellspacing?",
          "options": [
            "Padding: content to border, Spacing: between cells",
            "Reverse",
            "Same",
            "Deprecated"
          ],
          "correct_option": "A",
          "explanation": "Standard definition.",
          "difficulty": "Medium"
        },
        {
          "id": 230,
          "question": "HTML5 figure caption?",
          "options": [
            "<figcaption>",
            "<caption>",
            "<figure-title>",
            "<img-cap>"
          ],
          "correct_option": "A",
          "explanation": "Inside <figure>.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 251,
          "question": "Differentiate between Relative and Absolute URLs.",
          "model_answer": "Absolute: Full path (https://example.com/a.jpg). Relative: Path from current file (../images/a.jpg). Absolute is rigid, Relative is portable.",
          "key_points": [
            "Full vs Partial",
            "Portability",
            "Domain dependency"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 252,
          "question": "Explain the structure of an HTML Table.",
          "model_answer": "Table wrapper <table>, Rows <tr>, Headers <th>, Data Cells <td>. Optional groupings: <thead>, <tbody>, <tfoot>.",
          "key_points": [
            "tr, td, th",
            "groupings",
            "hierarchy"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 253,
          "question": "What is an Iframe? Security risks?",
          "model_answer": "Embeds another document. Risks: Clickjacking, XSS. Mitigate with 'sandbox' attribute.",
          "key_points": [
            "Embedding",
            "Sandbox",
            "Security"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 254,
          "question": "Explain 'colspan' and 'rowspan'.",
          "model_answer": "Attributes on td/th. Colspan merges horizontally (across columns). Rowspan merges vertically (across rows).",
          "key_points": [
            "Merge cells",
            "Horizontal vs Vertical"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 255,
          "question": "Difference between Ordered, Unordered, and Description Lists.",
          "model_answer": "UL: Bullets. OL: Numbers/Letters. DL: Term (dt) and Description (dd) pairs.",
          "key_points": [
            "<ul> <ol> <dl>",
            "bullets vs numbers",
            "key-value pairs"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 256,
          "question": "Accessibility best practices for Images.",
          "model_answer": "Always use 'alt' attribute describing image function/content. Use empty alt for decorative images.",
          "key_points": [
            "Alt text",
            "Screen readers",
            "Decorative"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 257,
          "question": "How to create a nested list?",
          "model_answer": "Place a new <ul> or <ol> *inside* a <li> element of the parent list, not as a direct child of the parent <ul>.",
          "key_points": [
            "Inside <li>",
            "Proper nesting"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 258,
          "question": "What are Anchor 'target' values?",
          "model_answer": "_self (same frame), _blank (new tab), _parent (parent frame), _top (full body).",
          "key_points": [
            "_blank",
            "_self",
            "_top"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 259,
          "question": "Use of <figure> and <figcaption>.",
          "model_answer": "Semantic grouping of content (img, code) with a caption. figcaption provides the description associated with the figure.",
          "key_points": [
            "Semantic grouping",
            "Captioning"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 260,
          "question": "How to link to a specific section of the same page?",
          "model_answer": "Assign 'id' to element (id='sect'). Link using href='#sect'.",
          "key_points": [
            "ID attribute",
            "Hash link"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 281,
          "problem_statement": "Create a link to google.com that opens in a new tab.",
          "input_format": "None",
          "output_format": "Anchor tag",
          "code_html": "<a href=\"https://google.com\" target=\"_blank\">Google</a>",
          "difficulty": "Easy"
        },
        {
          "id": 282,
          "problem_statement": "Create a 2x2 table with headers 'Name' and 'Age'.",
          "input_format": "None",
          "output_format": "Table structure",
          "code_html": "<table border='1'><tr><th>Name</th><th>Age</th></tr><tr><td>A</td><td>10</td></tr></table>",
          "difficulty": "Medium"
        },
        {
          "id": 283,
          "problem_statement": "Display an image 'cat.jpg' with width 100px.",
          "input_format": "None",
          "output_format": "Img tag",
          "code_html": "<img src=\"cat.jpg\" alt=\"Cat\" width=\"100\">",
          "difficulty": "Easy"
        },
        {
          "id": 284,
          "problem_statement": "Create a list where items are numbered A, B, C.",
          "input_format": "None",
          "output_format": "OL type A",
          "code_html": "<ol type=\"A\"><li>One</li><li>Two</li></ol>",
          "difficulty": "Medium"
        },
        {
          "id": 285,
          "problem_statement": "Embed a website 'example.com' in an iframe.",
          "input_format": "None",
          "output_format": "Iframe tag",
          "code_html": "<iframe src=\"https://example.com\"></iframe>",
          "difficulty": "Easy"
        },
        {
          "id": 286,
          "problem_statement": "Create a Description List for terms HTML and CSS.",
          "input_format": "None",
          "output_format": "DL structure",
          "code_html": "<dl><dt>HTML</dt><dd>Markup</dd><dt>CSS</dt><dd>Style</dd></dl>",
          "difficulty": "Medium"
        },
        {
          "id": 287,
          "problem_statement": "Merge two cells horizontally in a table.",
          "input_format": "None",
          "output_format": "Colspan",
          "code_html": "<td colspan=\"2\">Merged</td>",
          "difficulty": "Medium"
        },
        {
          "id": 288,
          "problem_statement": "Create a mailto link with subject 'Hello'.",
          "input_format": "None",
          "output_format": "Anchor tag",
          "code_html": "<a href=\"mailto:me@test.com?subject=Hello\">Mail</a>",
          "difficulty": "Hard"
        }
      ]
    },
    {
      "unit_name": "3. Advanced HTML (Forms, Media, Semantics)",
      "mcqs": [
        {
          "id": 301,
          "question": "Tag for HTML Form?",
          "options": [
            "<form>",
            "<input>",
            "<submit>",
            "<field>"
          ],
          "correct_option": "A",
          "explanation": "Container for user input.",
          "difficulty": "Easy"
        },
        {
          "id": 302,
          "question": "Input type for password?",
          "options": [
            "text",
            "secure",
            "password",
            "hidden"
          ],
          "correct_option": "C",
          "explanation": "Masks characters.",
          "difficulty": "Easy"
        },
        {
          "id": 303,
          "question": "Form submission method types?",
          "options": [
            "GET/POST",
            "PUSH/PULL",
            "SEND/RECEIVE",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard HTTP verbs.",
          "difficulty": "Easy"
        },
        {
          "id": 304,
          "question": "Group related form elements?",
          "options": [
            "<fieldset>",
            "<group>",
            "<section>",
            "<div>"
          ],
          "correct_option": "A",
          "explanation": "Used with <legend>.",
          "difficulty": "Medium"
        },
        {
          "id": 305,
          "question": "Tag for dropdown list?",
          "options": [
            "<list>",
            "<dropdown>",
            "<select>",
            "<input type='dropdown'>"
          ],
          "correct_option": "C",
          "explanation": "Contains <option> tags.",
          "difficulty": "Easy"
        },
        {
          "id": 306,
          "question": "New HTML5 input types include?",
          "options": [
            "email, date, color",
            "name, address",
            "object",
            "float"
          ],
          "correct_option": "A",
          "explanation": "Modern validation types.",
          "difficulty": "Medium"
        },
        {
          "id": 307,
          "question": "Semantic tag for main content?",
          "options": [
            "<content>",
            "<main>",
            "<body>",
            "<center>"
          ],
          "correct_option": "B",
          "explanation": "Unique content of document.",
          "difficulty": "Easy"
        },
        {
          "id": 308,
          "question": "Semantic tag for navigation links?",
          "options": [
            "<nav>",
            "<links>",
            "<menu>",
            "<dir>"
          ],
          "correct_option": "A",
          "explanation": "Navigation section.",
          "difficulty": "Easy"
        },
        {
          "id": 309,
          "question": "Tag to play video?",
          "options": [
            "<media>",
            "<video>",
            "<movie>",
            "<play>"
          ],
          "correct_option": "B",
          "explanation": "HTML5 Video.",
          "difficulty": "Easy"
        },
        {
          "id": 310,
          "question": "Attribute for video controls (play/pause)?",
          "options": [
            "controls",
            "show",
            "buttons",
            "ui"
          ],
          "correct_option": "A",
          "explanation": "Boolean attribute.",
          "difficulty": "Easy"
        },
        {
          "id": 311,
          "question": "Meta tag for character set?",
          "options": [
            "<meta charset='UTF-8'>",
            "<meta encoding='UTF-8'>",
            "<meta type='text'>",
            "<head charset>"
          ],
          "correct_option": "A",
          "explanation": "Defines encoding.",
          "difficulty": "Easy"
        },
        {
          "id": 312,
          "question": "Meta tag for viewport/RWD?",
          "options": [
            "name='viewport'",
            "name='screen'",
            "name='mobile'",
            "name='layout'"
          ],
          "correct_option": "A",
          "explanation": "Crucial for responsive design.",
          "difficulty": "Hard"
        },
        {
          "id": 313,
          "question": "Input attribute for hint text?",
          "options": [
            "value",
            "hint",
            "placeholder",
            "title"
          ],
          "correct_option": "C",
          "explanation": "Greyed out hint text.",
          "difficulty": "Easy"
        },
        {
          "id": 314,
          "question": "Input attribute to make field required?",
          "options": [
            "validate",
            "required",
            "mandatory",
            "need"
          ],
          "correct_option": "B",
          "explanation": "Browser validation.",
          "difficulty": "Easy"
        },
        {
          "id": 315,
          "question": "Tag for sidebar content?",
          "options": [
            "<sidebar>",
            "<aside>",
            "<side>",
            "<nav>"
          ],
          "correct_option": "B",
          "explanation": "Indirectly related content.",
          "difficulty": "Medium"
        },
        {
          "id": 316,
          "question": "Tag for footer?",
          "options": [
            "<bottom>",
            "<footer>",
            "<end>",
            "<leg>"
          ],
          "correct_option": "B",
          "explanation": "Footer section.",
          "difficulty": "Easy"
        },
        {
          "id": 317,
          "question": "Checkbox user selection?",
          "options": [
            "Multiple",
            "Single",
            "None",
            "Text"
          ],
          "correct_option": "A",
          "explanation": "Many options allowed.",
          "difficulty": "Easy"
        },
        {
          "id": 318,
          "question": "Radio button user selection?",
          "options": [
            "Multiple",
            "Single in group",
            "Text",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Only one per name group.",
          "difficulty": "Easy"
        },
        {
          "id": 319,
          "question": "Tag for multiple lines of text input?",
          "options": [
            "<textarea>",
            "<input type='textarea'>",
            "<text>",
            "<box>"
          ],
          "correct_option": "A",
          "explanation": "Multiline text area.",
          "difficulty": "Easy"
        },
        {
          "id": 320,
          "question": "Audio tag attribute for repeating?",
          "options": [
            "repeat",
            "loop",
            "again",
            "cycle"
          ],
          "correct_option": "B",
          "explanation": "Loop playback.",
          "difficulty": "Medium"
        },
        {
          "id": 321,
          "question": "Label tag 'for' attribute matches what?",
          "options": [
            "Input name",
            "Input id",
            "Input class",
            "Input type"
          ],
          "correct_option": "B",
          "explanation": "Binds label to input ID.",
          "difficulty": "Hard"
        },
        {
          "id": 322,
          "question": "<article> tag usage?",
          "options": [
            "Independent content",
            "Grouping",
            "Image",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Self-contained content like blog post.",
          "difficulty": "Medium"
        },
        {
          "id": 323,
          "question": "Button inside form defaults to type?",
          "options": [
            "button",
            "submit",
            "reset",
            "none"
          ],
          "correct_option": "B",
          "explanation": "Submits form by default.",
          "difficulty": "Hard"
        },
        {
          "id": 324,
          "question": "Tag for progress bar?",
          "options": [
            "<progress>",
            "<bar>",
            "<meter>",
            "<load>"
          ],
          "correct_option": "A",
          "explanation": "Completion progress.",
          "difficulty": "Medium"
        },
        {
          "id": 325,
          "question": "<meter> tag is for?",
          "options": [
            "Scalar measurement within range",
            "Progress",
            "Distance",
            "Speed"
          ],
          "correct_option": "A",
          "explanation": "Disk usage etc.",
          "difficulty": "Hard"
        },
        {
          "id": 326,
          "question": "Datalist provides?",
          "options": [
            "Dropdown for inputs",
            "List of data",
            "Table",
            "Grid"
          ],
          "correct_option": "A",
          "explanation": "AutoComplete suggestions.",
          "difficulty": "Medium"
        },
        {
          "id": 327,
          "question": "Input type='file' allows?",
          "options": [
            "File upload",
            "File read",
            "File write",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Select files from disk.",
          "difficulty": "Easy"
        },
        {
          "id": 328,
          "question": "Meta keywords are used for?",
          "options": [
            "SEO (limited)",
            "Styling",
            "Scripting",
            "Layout"
          ],
          "correct_option": "A",
          "explanation": "Search engines (historically).",
          "difficulty": "Easy"
        },
        {
          "id": 329,
          "question": "Favicon format?",
          "options": [
            ".ico",
            ".png",
            ".svg",
            "All"
          ],
          "correct_option": "D",
          "explanation": "Modern browsers support multiple.",
          "difficulty": "Medium"
        },
        {
          "id": 330,
          "question": "Form autocomplete attribute?",
          "options": [
            "on/off",
            "yes/no",
            "true/false",
            "1/0"
          ],
          "correct_option": "A",
          "explanation": "autocomplete=\"off\".",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 351,
          "question": "Difference between GET and POST.",
          "model_answer": "GET: Data in URL, less secure, cached, length limit. POST: Data in body, secure, no limit, not cached.",
          "key_points": [
            "URL vs Body",
            "Security",
            "Caching"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 352,
          "question": "Explain importance of Semantic Elements.",
          "model_answer": "Provide meaning to browser/developer/screen-reader (e.g. <header> vs <div>). Improves SEO and Accessibility.",
          "key_points": [
            "Meaning",
            "Accessibility (A11y)",
            "SEO"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 353,
          "question": "What is the Viewport Meta tag?",
          "model_answer": "Configures how a page scales on mobile devices. width=device-width, initial-scale=1.0.",
          "key_points": [
            "Responsive Design",
            "Scaling",
            "Mobile"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 354,
          "question": "Difference between <section> and <article>.",
          "model_answer": "Article: Independent, self-contained (blog post). Section: Thematic grouping of content (chapter). Article can contain Sections.",
          "key_points": [
            "Independence",
            "Grouping",
            "Context"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 355,
          "question": "List 5 new Input types in HTML5.",
          "model_answer": "color, date, email, number, range, search, tel, url, time.",
          "key_points": [
            "Validation",
            "Mobile keyboard",
            "Examples"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 356,
          "question": "How to make a form accessible?",
          "model_answer": "Use <label> with 'for' linked to input 'id'. Use fieldset/legend for groups. ARIA attributes if needed.",
          "key_points": [
            "Labels",
            "For/ID",
            "Fieldset"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 357,
          "question": "Explain <datalist> vs <select>.",
          "model_answer": "Select: User forces to choose from list options. Datalist: User can pick option OR type custom value (autocomplete).",
          "key_points": [
            "Forced choice vs Suggestion",
            "Typing allowed"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 358,
          "question": "What is the purpose of <fieldset> and <legend>?",
          "model_answer": "Fieldset groups related form elements visually (box). Legend provides a caption for that group.",
          "key_points": [
            "Grouping",
            "Caption",
            "UX"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 359,
          "question": "How to embed Audio and Video?",
          "model_answer": "Use <audio> or <video> tags with 'src' or <source> child tags. Use 'controls' attribute for UI.",
          "key_points": [
            "Tags",
            "Controls",
            "Source"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 360,
          "question": "What are HTML Entities for special characters?",
          "model_answer": "Escape sequences to display reserved chars. < (&lt;), > (&gt;), \" (&quot;).",
          "key_points": [
            "Reserved chars",
            "Escaping"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 381,
          "problem_statement": "Create a login form with Username and Password.",
          "input_format": "None",
          "output_format": "Form structure",
          "code_html": "<form><input type='text' placeholder='User'><input type='password' placeholder='Pass'><button>Login</button></form>",
          "difficulty": "Easy"
        },
        {
          "id": 382,
          "problem_statement": "Create a radio button group for Gender (Male/Female).",
          "input_format": "None",
          "output_format": "Radio inputs with same name",
          "code_html": "<input type='radio' name='gen' value='M'> Male <input type='radio' name='gen' value='F'> Female",
          "difficulty": "Medium"
        },
        {
          "id": 383,
          "problem_statement": "Create a dropdown for selecting a car (Volvo, BMW).",
          "input_format": "None",
          "output_format": "Select tag",
          "code_html": "<select><option>Volvo</option><option>BMW</option></select>",
          "difficulty": "Easy"
        },
        {
          "id": 384,
          "problem_statement": "Embed a video 'movie.mp4' with controls.",
          "input_format": "None",
          "output_format": "Video tag",
          "code_html": "<video src='movie.mp4' controls></video>",
          "difficulty": "Easy"
        },
        {
          "id": 385,
          "problem_statement": "Create a text area with 4 rows and 50 cols.",
          "input_format": "None",
          "output_format": "Textarea",
          "code_html": "<textarea rows='4' cols='50'></textarea>",
          "difficulty": "Easy"
        },
        {
          "id": 386,
          "problem_statement": "Use semantic tags to structure a page header.",
          "input_format": "None",
          "output_format": "Header/Nav",
          "code_html": "<header><h1>Logo</h1><nav>...</nav></header>",
          "difficulty": "Medium"
        },
        {
          "id": 387,
          "problem_statement": "Create an input that accepts only numbers 1-10.",
          "input_format": "None",
          "output_format": "Number input with min/max",
          "code_html": "<input type='number' min='1' max='10'>",
          "difficulty": "Medium"
        },
        {
          "id": 388,
          "problem_statement": "Add a viewport meta tag for mobile responsiveness.",
          "input_format": "None",
          "output_format": "Meta tag",
          "code_html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "4. Introduction to CSS",
      "mcqs": [
        {
          "id": 401,
          "question": "What does CSS stand for?",
          "options": [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style SheetsLine"
          ],
          "correct_option": "B",
          "explanation": "Cascading Style Sheets.",
          "difficulty": "Easy"
        },
        {
          "id": 402,
          "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
          "options": [
            "In the <head> section",
            "At the end of the document",
            "In the <body> section",
            "None of above"
          ],
          "correct_option": "A",
          "explanation": "Inside the <head> using <link>.",
          "difficulty": "Easy"
        },
        {
          "id": 403,
          "question": "Which HTML tag is used to define an internal style sheet?",
          "options": [
            "<script>",
            "<style>",
            "<css>",
            "<link>"
          ],
          "correct_option": "B",
          "explanation": "The <style> tag.",
          "difficulty": "Easy"
        },
        {
          "id": 404,
          "question": "Which HTML attribute is used to define inline styles?",
          "options": [
            "styles",
            "style",
            "class",
            "font"
          ],
          "correct_option": "B",
          "explanation": "The 'style' attribute.",
          "difficulty": "Easy"
        },
        {
          "id": 405,
          "question": "Which is the correct CSS syntax?",
          "options": [
            "body {color: black;}",
            "{body:color=black;}",
            "body:color=black;",
            "body {color=black;}"
          ],
          "correct_option": "A",
          "explanation": "Selector { property: value; }",
          "difficulty": "Easy"
        },
        {
          "id": 406,
          "question": "How do you insert a comment in a CSS file?",
          "options": [
            "// this is a comment",
            "/* this is a comment */",
            "' this is a comment",
            "// this is a comment //"
          ],
          "correct_option": "B",
          "explanation": "C-style block comments.",
          "difficulty": "Easy"
        },
        {
          "id": 407,
          "question": "Which property is used to change the background color?",
          "options": [
            "color",
            "bg-color",
            "background-color",
            "bgcolor"
          ],
          "correct_option": "C",
          "explanation": "Standard property name.",
          "difficulty": "Easy"
        },
        {
          "id": 408,
          "question": "How do you add a background color for all <h1> elements?",
          "options": [
            "all.h1 {background-color: #FFFFFF;}",
            "h1.all {background-color: #FFFFFF;}",
            "h1 {background-color: #FFFFFF;}",
            "h1 {bg: #FFFFFF;}"
          ],
          "correct_option": "C",
          "explanation": "Tag selector.",
          "difficulty": "Easy"
        },
        {
          "id": 409,
          "question": "Which CSS property is used to change the text color of an element?",
          "options": [
            "fgcolor",
            "text-color",
            "color",
            "font-color"
          ],
          "correct_option": "C",
          "explanation": "The 'color' property.",
          "difficulty": "Easy"
        },
        {
          "id": 410,
          "question": "Which CSS property controls the text size?",
          "options": [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
          ],
          "correct_option": "C",
          "explanation": "Self-explanatory.",
          "difficulty": "Easy"
        },
        {
          "id": 411,
          "question": "What is the correct CSS syntax for making all the <p> elements bold?",
          "options": [
            "p {font-weight: bold;}",
            "p {text-size: bold;}",
            "p {font: bold;}",
            "<p style='font-size: bold;'>"
          ],
          "correct_option": "A",
          "explanation": "Font-weight handles thickness.",
          "difficulty": "Medium"
        },
        {
          "id": 412,
          "question": "How do you display hyperlinks without an underline?",
          "options": [
            "a {text-decoration:none;}",
            "a {underline:none;}",
            "a {decoration:no-underline;}",
            "a {text-style:none;}"
          ],
          "correct_option": "A",
          "explanation": "Standard reset.",
          "difficulty": "Easy"
        },
        {
          "id": 413,
          "question": "How do you make each word in a text start with a capital letter?",
          "options": [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "transform: capitalize",
            "font-transform: capitalize"
          ],
          "correct_option": "A",
          "explanation": "Pascal case styling.",
          "difficulty": "Medium"
        },
        {
          "id": 414,
          "question": "Which property is used to change the font of an element?",
          "options": [
            "font-style",
            "font-weight",
            "font-family",
            "font-type"
          ],
          "correct_option": "C",
          "explanation": "Defines typeface.",
          "difficulty": "Easy"
        },
        {
          "id": 415,
          "question": "Priority of CSS (highest to lowest)?",
          "options": [
            "Inline > Internal > External > Browser",
            "External > Internal > Inline",
            "Browser > External > Inline",
            "All same"
          ],
          "correct_option": "A",
          "explanation": "Proximity to element usually wins.",
          "difficulty": "Medium"
        },
        {
          "id": 416,
          "question": "Which CSS file extension is correct?",
          "options": [
            ".c",
            ".style",
            ".css",
            ".js"
          ],
          "correct_option": "C",
          "explanation": "Standard.",
          "difficulty": "Easy"
        },
        {
          "id": 417,
          "question": "The # symbol in CSS is for?",
          "options": [
            "Class",
            "ID",
            "Tag",
            "Universal"
          ],
          "correct_option": "B",
          "explanation": "ID selector.",
          "difficulty": "Easy"
        },
        {
          "id": 418,
          "question": "The . symbol in CSS is for?",
          "options": [
            "Class",
            "ID",
            "Tag",
            "Universal"
          ],
          "correct_option": "A",
          "explanation": "Class selector.",
          "difficulty": "Easy"
        },
        {
          "id": 419,
          "question": "Which selector matches all elements?",
          "options": [
            "*",
            "#",
            ".",
            "@"
          ],
          "correct_option": "A",
          "explanation": "Universal selector.",
          "difficulty": "Easy"
        },
        {
          "id": 420,
          "question": "CSS cascaded by?",
          "options": [
            "Source order",
            "Specificity",
            "Importance",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "How conflicts are resolved.",
          "difficulty": "Hard"
        },
        {
          "id": 421,
          "question": "Which value of position is default?",
          "options": [
            "relative",
            "fixed",
            "absolute",
            "static"
          ],
          "correct_option": "D",
          "explanation": "Natural flow.",
          "difficulty": "Medium"
        },
        {
          "id": 422,
          "question": "External CSS uses which tag?",
          "options": [
            "<style>",
            "<link>",
            "<css>",
            "<meta>"
          ],
          "correct_option": "B",
          "explanation": "Rel='stylesheet'.",
          "difficulty": "Easy"
        },
        {
          "id": 423,
          "question": "Which property makes text italic?",
          "options": [
            "font-weight",
            "font-style",
            "text-italic",
            "italic"
          ],
          "correct_option": "B",
          "explanation": "Uses 'italic' or 'oblique'.",
          "difficulty": "Easy"
        },
        {
          "id": 424,
          "question": "Grouping multiple selectors uses?",
          "options": [
            "Semicolon",
            "Comma",
            "Space",
            "Dot"
          ],
          "correct_option": "B",
          "explanation": "h1, h2 { ... }",
          "difficulty": "Medium"
        },
        {
          "id": 425,
          "question": "Rel attribute in link tag stands for?",
          "options": [
            "Relative",
            "Relationship",
            "Release",
            "Reload"
          ],
          "correct_option": "B",
          "explanation": "Defines link type.",
          "difficulty": "Medium"
        },
        {
          "id": 426,
          "question": "CSS was proposed by?",
          "options": [
            "Bjarne Stroustrup",
            "HÃ¥kon Wium Lie",
            "Tim Berners-lee",
            "Brendan Eich"
          ],
          "correct_option": "B",
          "explanation": "In 1994.",
          "difficulty": "Hard"
        },
        {
          "id": 427,
          "question": "CSS3 is?",
          "options": [
            "Latest version",
            "Module based",
            "Backward compatible",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "Evolution of CSS.",
          "difficulty": "Easy"
        },
        {
          "id": 428,
          "question": "Is CSS case sensitive?",
          "options": [
            "Yes (selectors)",
            "No",
            "Only for font names",
            "Depends on browser"
          ],
          "correct_option": "B",
          "explanation": "Usually case-insensitive except for class/id names in some environments.",
          "difficulty": "Medium"
        },
        {
          "id": 429,
          "question": "Which property centers text?",
          "options": [
            "align",
            "text-align",
            "center",
            "horizontal-align"
          ],
          "correct_option": "B",
          "explanation": "text-align: center.",
          "difficulty": "Easy"
        },
        {
          "id": 430,
          "question": "Can CSS change content?",
          "options": [
            "No",
            "Yes (using ::before/::after content)",
            "Only in JS",
            "Only in HTML"
          ],
          "correct_option": "B",
          "explanation": "Visual content injection.",
          "difficulty": "Hard"
        }
      ],
      "theory_questions": [
        {
          "id": 451,
          "question": "Explain the 3 ways to insert CSS.",
          "model_answer": "1. Inline (style attribute). 2. Internal (style tag in head). 3. External (link to .css file). External is best for maintainability.",
          "key_points": [
            "Inline, Internal, External",
            "Maintainability",
            "Link tag"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 452,
          "question": "What is the CSS Box Model?",
          "model_answer": "Every element is a box consisting of Content, Padding, Border, and Margin.",
          "key_points": [
            "Content",
            "Padding",
            "Border",
            "Margin"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 453,
          "question": "Describe CSS Specificity.",
          "model_answer": "A weight applied to a CSS statement based on selector type (Inline > ID > Class > Tag).",
          "key_points": [
            "Hierarchy",
            "Weights",
            "Conflicts"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 454,
          "question": "Difference between ID and Class selectors.",
          "model_answer": "ID (#) is unique to one element. Class (.) can be used on multiple elements.",
          "key_points": [
            "Uniqueness",
            "Reusable",
            "# vs ."
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 455,
          "question": "What is Cascading in CSS?",
          "model_answer": "The process of combining multiple stylesheets and resolving conflicts based on origin, importance, and specificity.",
          "key_points": [
            "Conflict resolution",
            "Hierarchy"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 456,
          "question": "Explain the Universal Selector.",
          "model_answer": "Represented by an asterisk (*). It matches every single element on the page. Often used for resets.",
          "key_points": [
            "*",
            "Every element",
            "Reset"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 457,
          "question": "Why use External CSS instead of Inline?",
          "model_answer": "Clean code, caching, sitewide changes from one file, faster loading.",
          "key_points": [
            "Cleanliness",
            "Cache",
            "Global changes"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 458,
          "question": "What are shorthand properties?",
          "model_answer": "Properties that allow setting multiple values in one line (e.g., margin: 10px 5px; instead of individual tops/lefts).",
          "key_points": [
            "Conciseness",
            "Examples (margin, font, border)"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 459,
          "question": "Role of the Semicolon in CSS.",
          "model_answer": "Separates declarations. Required for multiple styles in a block.",
          "key_points": [
            "Separator",
            "Declaration end"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 460,
          "question": "What happens if a property is written twice in same block?",
          "model_answer": "The last one written will override the previous ones due to source order.",
          "key_points": [
            "Overriding",
            "Source order"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 481,
          "problem_statement": "Change text color to red for all paragraphs.",
          "input_format": "None",
          "output_format": "CSS rule",
          "code_css": "p { color: red; }",
          "difficulty": "Easy"
        },
        {
          "id": 482,
          "problem_statement": "Style an ID 'header' with background blue and text white.",
          "input_format": "None",
          "output_format": "ID selector CSS",
          "code_css": "#header {\n  background-color: blue;\n  color: white;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 483,
          "problem_statement": "Center all text inside class 'main-box'.",
          "input_format": "None",
          "output_format": "Class selector CSS",
          "code_css": ".main-box {\n  text-align: center;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 484,
          "problem_statement": "Apply bold weight and 20px size to H1 using inline style.",
          "input_format": "None",
          "output_format": "HTML tag with style",
          "code_html": "<h1 style=\"font-weight: bold; font-size: 20px;\">Title</h1>",
          "difficulty": "Medium"
        },
        {
          "id": 485,
          "problem_statement": "Link an external file 'main.css' to HTML.",
          "input_format": "None",
          "output_format": "Link tag",
          "code_html": "<link rel=\"stylesheet\" href=\"main.css\">",
          "difficulty": "Easy"
        },
        {
          "id": 486,
          "problem_statement": "Add a comment 'Header section' inside CSS.",
          "input_format": "None",
          "output_format": "CSS Comment",
          "code_css": "/* Header section */",
          "difficulty": "Easy"
        },
        {
          "id": 487,
          "problem_statement": "Select only <a> tags inside <li>.",
          "input_format": "None",
          "output_format": "Descendant selector",
          "code_css": "li a {\n  text-decoration: none;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 488,
          "problem_statement": "Make all elements have zero margin and padding.",
          "input_format": "None",
          "output_format": "Universal reset",
          "code_css": "* {\n  margin: 0;\n  padding: 0;\n}",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "5. CSS Selectors",
      "mcqs": [
        {
          "id": 501,
          "question": "Which selector matches elements based on their ID?",
          "options": [
            ".class",
            "#id",
            "element",
            "*"
          ],
          "correct_option": "B",
          "explanation": "ID selectors start with #.",
          "difficulty": "Easy"
        },
        {
          "id": 502,
          "question": "Which selector matches elements of a specific class?",
          "options": [
            ".class",
            "#id",
            "element",
            "*"
          ],
          "correct_option": "A",
          "explanation": "Class selectors start with a dot.",
          "difficulty": "Easy"
        },
        {
          "id": 503,
          "question": "Which selector selects all <a> tags inside a <div>?",
          "options": [
            "div a",
            "div + a",
            "div > a",
            "div.a"
          ],
          "correct_option": "A",
          "explanation": "Descendant selector (space).",
          "difficulty": "Medium"
        },
        {
          "id": 504,
          "question": "Which selector selects all elements that are direct children of a parent?",
          "options": [
            "p a",
            "p > a",
            "p + a",
            "p ~ a"
          ],
          "correct_option": "B",
          "explanation": "Child selector (>).",
          "difficulty": "Medium"
        },
        {
          "id": 505,
          "question": "Which selector selects the first <li> element inside a <ul>?",
          "options": [
            "li:first-child",
            "li:first",
            "li:one",
            "li:start"
          ],
          "correct_option": "A",
          "explanation": "Pseudo-class :first-child.",
          "difficulty": "Medium"
        },
        {
          "id": 506,
          "question": "Which selector matches an element when the mouse hovers over it?",
          "options": [
            ":click",
            ":hover",
            ":link",
            ":active"
          ],
          "correct_option": "B",
          "explanation": "Hover state.",
          "difficulty": "Easy"
        },
        {
          "id": 507,
          "question": "Which selector targets elements with a specific attribute?",
          "options": [
            "element(attr)",
            "element[attr]",
            "element.attr",
            "element#attr"
          ],
          "correct_option": "B",
          "explanation": "Attribute selector brackets.",
          "difficulty": "Medium"
        },
        {
          "id": 508,
          "question": "The '+' selector in 'div + p' targets which element?",
          "options": [
            "All p inside div",
            "All p after div",
            "The p immediately following div",
            "The div and p"
          ],
          "correct_option": "C",
          "explanation": "Adjacent sibling selector.",
          "difficulty": "Hard"
        },
        {
          "id": 509,
          "question": "Which pseudo-element is used to style the first letter of a paragraph?",
          "options": [
            "::first-letter",
            ":first-line",
            ":letter-one",
            ":start"
          ],
          "correct_option": "A",
          "explanation": "Double colon for pseudo-elements.",
          "difficulty": "Medium"
        },
        {
          "id": 510,
          "question": "Which selector matches all sibling 'p' elements that follow a 'div'?",
          "options": [
            "div + p",
            "div ~ p",
            "div > p",
            "div p"
          ],
          "correct_option": "B",
          "explanation": "General sibling selector.",
          "difficulty": "Hard"
        },
        {
          "id": 511,
          "question": "Which selector matches an input element that is currently focused?",
          "options": [
            ":focus",
            ":active",
            ":hover",
            ":target"
          ],
          "correct_option": "A",
          "explanation": ":focus pseudo-class.",
          "difficulty": "Easy"
        },
        {
          "id": 512,
          "question": "Which selector targets checkboxes that are checked?",
          "options": [
            ":checked",
            ":selected",
            ":on",
            ":active"
          ],
          "correct_option": "A",
          "explanation": ":checked state.",
          "difficulty": "Medium"
        },
        {
          "id": 513,
          "question": "What does 'p::after' do?",
          "options": [
            "Inserts content before p",
            "Inserts content after p",
            "Styles text after p",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Pseudo-element for content injection.",
          "difficulty": "Medium"
        },
        {
          "id": 514,
          "question": "Which selector targets every 2nd 'li'?",
          "options": [
            "li:nth-child(2)",
            "li:nth-child(2n)",
            "li:even",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "All these can target even/2nd items.",
          "difficulty": "Hard"
        },
        {
          "id": 515,
          "question": "Complexity of '.nav .link' vs '.nav-link'?",
          "options": [
            "Same",
            ".nav .link is more specific",
            ".nav-link is more specific",
            "Depends on ID"
          ],
          "correct_option": "B",
          "explanation": "Two classes vs one class.",
          "difficulty": "Hard"
        },
        {
          "id": 516,
          "question": "Which matches an element with both class 'a' and 'b'?",
          "options": [
            ".a .b",
            ".a.b",
            ".a, .b",
            ".a > .b"
          ],
          "correct_option": "B",
          "explanation": "No space means same element.",
          "difficulty": "Hard"
        },
        {
          "id": 517,
          "question": "What is the universal selector?",
          "options": [
            "#",
            ".",
            "*",
            "@"
          ],
          "correct_option": "C",
          "explanation": "Selects all.",
          "difficulty": "Easy"
        },
        {
          "id": 518,
          "question": "Which selector targets visited links?",
          "options": [
            ":link",
            ":active",
            ":visited",
            ":checked"
          ],
          "correct_option": "C",
          "explanation": "Link history state.",
          "difficulty": "Easy"
        },
        {
          "id": 519,
          "question": "The attribute selector [target='_blank'] matches what?",
          "options": [
            "Links",
            "Links opening in new window",
            "All targets",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Matches specific attribute value.",
          "difficulty": "Medium"
        },
        {
          "id": 520,
          "question": "Which selector is more specific: 'p' or '.text'?",
          "options": [
            "p",
            ".text",
            "Same",
            "No priority"
          ],
          "correct_option": "B",
          "explanation": "Class beats Tag.",
          "difficulty": "Medium"
        },
        {
          "id": 521,
          "question": "Which targets elements that have NO children?",
          "options": [
            ":empty",
            ":null",
            ":void",
            ":no-child"
          ],
          "correct_option": "A",
          "explanation": ":empty pseudo-class.",
          "difficulty": "Medium"
        },
        {
          "id": 522,
          "question": "Which targets only the root element (usually html)?",
          "options": [
            ":root",
            ":body",
            ":html",
            ":top"
          ],
          "correct_option": "A",
          "explanation": "Used for variables.",
          "difficulty": "Easy"
        },
        {
          "id": 523,
          "question": "The 'not' pseudo-class syntax?",
          "options": [
            ":not(selector)",
            ".not(selector)",
            "!selector",
            ":no(selector)"
          ],
          "correct_option": "A",
          "explanation": "Negation selector.",
          "difficulty": "Hard"
        },
        {
          "id": 524,
          "question": "Difference between :first-child and :first-of-type?",
          "options": [
            "None",
            "First-child is strictly first, of-type is first among its description",
            "Opposite",
            "Deprecated"
          ],
          "correct_option": "B",
          "explanation": "Type-based filtering.",
          "difficulty": "Hard"
        },
        {
          "id": 525,
          "question": "How to select all tags starting with 'data-'?",
          "options": [
            "*[data-]",
            "[data*='data-']",
            "[class^='data-']",
            "Not possible in CSS"
          ],
          "correct_option": "A",
          "explanation": "Presence of attribute.",
          "difficulty": "Medium"
        },
        {
          "id": 526,
          "question": "Which matches elements with lang 'en'?",
          "options": [
            ":lang(en)",
            "[lang='en']",
            "[lang|='en']",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "Various ways to match language.",
          "difficulty": "Hard"
        },
        {
          "id": 527,
          "question": "CSS3 pseudo-elements use how many colons?",
          "options": [
            "1",
            "2",
            "3",
            "0"
          ],
          "correct_option": "B",
          "explanation": "Standardized to :: in CSS3.",
          "difficulty": "Medium"
        },
        {
          "id": 528,
          "question": "Which selector targets H1 only if it's inside a header?",
          "options": [
            "header h1",
            "header > h1",
            "Both",
            "header.h1"
          ],
          "correct_option": "C",
          "explanation": "Both descendants and children match this.",
          "difficulty": "Medium"
        },
        {
          "id": 529,
          "question": "How to select elements whose class starts with 'btn'?",
          "options": [
            "[class^='btn']",
            "[class*='btn']",
            "[class$='btn']",
            "[class~='btn']"
          ],
          "correct_option": "A",
          "explanation": "^= means starts with.",
          "difficulty": "Medium"
        },
        {
          "id": 530,
          "question": "Selector for valid input fields?",
          "options": [
            ":valid",
            ":correct",
            ":true",
            ":pass"
          ],
          "correct_option": "A",
          "explanation": "Form validation state.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 551,
          "question": "Explain Descendant vs Child Selectors.",
          "model_answer": "Descendant (space) matches all nested elements at any level. Child (>) matches only directly nested elements.",
          "key_points": [
            "Space vs >",
            "All levels vs Immediate"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 552,
          "question": "What are Pseudo-classes? Provide 3 examples.",
          "model_answer": "Selectors that define a special state of an element. Examples: :hover, :active, :nth-child.",
          "key_points": [
            "State-based",
            "Examples"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 553,
          "question": "What are Pseudo-elements? Provide 3 examples.",
          "model_answer": "Selectors used to style specific parts of an element. Examples: ::before, ::after, ::first-letter.",
          "key_points": [
            "Part-based",
            "Examples",
            ":: syntax"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 554,
          "question": "Difference between Adjacent (+) and General (~) sibling selectors.",
          "model_answer": "+ targets the single immediate next sibling. ~ targets all following siblings of the same parent.",
          "key_points": [
            "Immediate vs All",
            "Following siblings"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 555,
          "question": "Explain Attribute Selectors with an example.",
          "model_answer": "Targets elements based on attribute presence or value. Example: input[type='text'].",
          "key_points": [
            "Brackets []",
            "Attribute name/value"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 556,
          "question": "How does the :not() pseudo-class work?",
          "model_answer": "It excludes elements from a match. Example: p:not(.intro) selects all paragraphs except those with class 'intro'.",
          "key_points": [
            "Negation",
            "Parameter"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 557,
          "question": "What is the purpose of the :root selector?",
          "model_answer": "Matches the highest-level parent (usually <html>). Often used to declare global CSS variables (--var).",
          "key_points": [
            "Global scope",
            "CSS Variables"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 558,
          "question": "Difference between :first-child and :first-of-type.",
          "model_answer": ":first-child is ONLY the 1st child of parent. :first-of-type is the 1st child of its specific tag type.",
          "key_points": [
            "Count vs Type"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 559,
          "question": "How to select multiple elements to apply same style?",
          "model_answer": "Use a comma to separate selectors. Example: h1, h2, p { color: black; }.",
          "key_points": [
            "Grouping",
            "Comma"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 560,
          "question": "Explain Specificity of a selector like '#id .class tag'.",
          "model_answer": "Weighted as 1 ID (100) + 1 Class (10) + 1 Tag (1) = 111 specificity.",
          "key_points": [
            "Weight calculation",
            "Priority"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": [
        {
          "id": 581,
          "problem_statement": "Select only even list items (li) in CSS.",
          "input_format": "None",
          "output_format": "Nth-child selector",
          "code_css": "li:nth-child(even) {\n  background: #eee;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 582,
          "problem_statement": "Style the first letter of paragraphs in red and large font.",
          "input_format": "None",
          "output_format": "Pseudo-element",
          "code_css": "p::first-letter {\n  color: red;\n  font-size: 2em;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 583,
          "problem_statement": "Change color of a link when it is hovered.",
          "input_format": "None",
          "output_format": "Hover state CSS",
          "code_css": "a:hover {\n  color: orange;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 584,
          "problem_statement": "Select every <p> element that is a direct child of <div>.",
          "input_format": "None",
          "output_format": "Child selector",
          "code_css": "div > p {\n  margin: 10px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 585,
          "problem_statement": "Add a '*' character before every required label.",
          "input_format": "None",
          "output_format": "Before pseudo-element",
          "code_css": "label.required::before {\n  content: '*';\n  color: red;\n}",
          "difficulty": "Hard"
        },
        {
          "id": 586,
          "problem_statement": "Style inputs that have a 'required' attribute.",
          "input_format": "None",
          "output_format": "Attribute selector",
          "code_css": "input[required] {\n  border: 2px solid blue;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 587,
          "problem_statement": "Select the third <div> child of a section.",
          "input_format": "None",
          "output_format": "Nth-child(3)",
          "code_css": "section div:nth-child(3) {\n  border: 1px solid black;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 588,
          "problem_statement": "Apply style only to checkboxes that are checked.",
          "input_format": "None",
          "output_format": "Checked state",
          "code_css": "input[type='checkbox']:checked {\n  transform: scale(1.5);\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "6. Colors, Backgrounds, Borders",
      "mcqs": [
        {
          "id": 601,
          "question": "Which property is used to set the color of text?",
          "options": [
            "text-color",
            "color",
            "fgcolor",
            "font-color"
          ],
          "correct_option": "B",
          "explanation": "Simple 'color' property.",
          "difficulty": "Easy"
        },
        {
          "id": 602,
          "question": "How do you set a background color?",
          "options": [
            "background-color: blue;",
            "bg: blue;",
            "color-background: blue;",
            "bgcolor: blue;"
          ],
          "correct_option": "A",
          "explanation": "Standard property.",
          "difficulty": "Easy"
        },
        {
          "id": 603,
          "question": "Which property adds an image to the background?",
          "options": [
            "bg-image",
            "background-image",
            "image-bg",
            "src"
          ],
          "correct_option": "B",
          "explanation": "background-image: url();",
          "difficulty": "Easy"
        },
        {
          "id": 604,
          "question": "What is the correct syntax for RGB color?",
          "options": [
            "rgb(255, 0, 0)",
            "color: red(255)",
            "rgb: 255,0,0",
            "#rgb(255)"
          ],
          "correct_option": "A",
          "explanation": "Red-Green-Blue function.",
          "difficulty": "Medium"
        },
        {
          "id": 605,
          "question": "Which value of background-repeat prevents image duplication?",
          "options": [
            "no-repeat",
            "repeat: none",
            "stop-repeat",
            "repeat: false"
          ],
          "correct_option": "A",
          "explanation": "Prevents tiling.",
          "difficulty": "Easy"
        },
        {
          "id": 606,
          "question": "How to fix a background image so it doesn't scroll?",
          "options": [
            "background-fixed: true",
            "background-attachment: fixed",
            "position: fixed-bg",
            "scroll: none"
          ],
          "correct_option": "B",
          "explanation": "Background-attachment property.",
          "difficulty": "Medium"
        },
        {
          "id": 607,
          "question": "Hexadecimal color for White?",
          "options": [
            "#000000",
            "#FFFFFF",
            "#111111",
            "#CCCCCC"
          ],
          "correct_option": "B",
          "explanation": "All channels full.",
          "difficulty": "Easy"
        },
        {
          "id": 608,
          "question": "What does RGBA 'A' stand for?",
          "options": [
            "Alt",
            "Alpha (Opacity)",
            "Active",
            "Amount"
          ],
          "correct_option": "B",
          "explanation": "Controls transparency (0.0 to 1.0).",
          "difficulty": "Medium"
        },
        {
          "id": 609,
          "question": "Which shorthand property sets all border properties?",
          "options": [
            "border-all",
            "border",
            "border-style",
            "outline"
          ],
          "correct_option": "B",
          "explanation": "border: width style color;",
          "difficulty": "Easy"
        },
        {
          "id": 610,
          "question": "Which property makes corners rounded?",
          "options": [
            "border-corner",
            "border-radius",
            "corner-radius",
            "rounded"
          ],
          "correct_option": "B",
          "explanation": "Uses pixels or percentages.",
          "difficulty": "Easy"
        },
        {
          "id": 611,
          "question": "How to set border style to dotted?",
          "options": [
            "border-style: dotted",
            "border: dotted",
            "Both A and B",
            "border-type: dotted"
          ],
          "correct_option": "C",
          "explanation": "Both work, B is shorthand.",
          "difficulty": "Easy"
        },
        {
          "id": 612,
          "question": "Which property defines the thickness of the border?",
          "options": [
            "border-thickness",
            "border-width",
            "border-size",
            "border-weight"
          ],
          "correct_option": "B",
          "explanation": "Standard property.",
          "difficulty": "Easy"
        },
        {
          "id": 613,
          "question": "HSL stands for?",
          "options": [
            "Hue Saturation Lightness",
            "High Saturation Level",
            "Hue Style Layer",
            "Hard Soft Light"
          ],
          "correct_option": "A",
          "explanation": "Modern color model.",
          "difficulty": "Medium"
        },
        {
          "id": 614,
          "question": "Transparent value for color is?",
          "options": [
            "#000",
            "transparent",
            "none",
            "rgba(0,0,0,1)"
          ],
          "correct_option": "B",
          "explanation": "Keyword 'transparent'.",
          "difficulty": "Easy"
        },
        {
          "id": 615,
          "question": "How to center a background image?",
          "options": [
            "background-position: center",
            "background-align: center",
            "image-align: center",
            "background-center: true"
          ],
          "correct_option": "A",
          "explanation": "Standard position property.",
          "difficulty": "Medium"
        },
        {
          "id": 616,
          "question": "Which property scales background image to cover element?",
          "options": [
            "background-size: cover",
            "background-fit: fill",
            "background-scale: full",
            "background-stretch: yes"
          ],
          "correct_option": "A",
          "explanation": "Ensures no empty space.",
          "difficulty": "Hard"
        },
        {
          "id": 617,
          "question": "Can background-image set multiple images?",
          "options": [
            "No",
            "Yes (comma separated)",
            "Only with CSS Grid",
            "Only in HTML"
          ],
          "correct_option": "B",
          "explanation": "Layering backgrounds is possible.",
          "difficulty": "Hard"
        },
        {
          "id": 618,
          "question": "Color value #00FF00 represents?",
          "options": [
            "Red",
            "Green",
            "Blue",
            "Black"
          ],
          "correct_option": "B",
          "explanation": "Pure Green.",
          "difficulty": "Easy"
        },
        {
          "id": 619,
          "question": "HSLA 'A' range?",
          "options": [
            "0 to 100",
            "0 to 255",
            "0 to 1",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Fractional opacity.",
          "difficulty": "Medium"
        },
        {
          "id": 620,
          "question": "Border shorthand order?",
          "options": [
            "style color width",
            "width style color",
            "color width style",
            "Any order works"
          ],
          "correct_option": "B",
          "explanation": "Commonly width, then style, then color.",
          "difficulty": "Medium"
        },
        {
          "id": 621,
          "question": "Which property sets only top border color?",
          "options": [
            "border-color-top",
            "border-top-color",
            "top-border-color",
            "border-top"
          ],
          "correct_option": "B",
          "explanation": "Specific side color.",
          "difficulty": "Medium"
        },
        {
          "id": 622,
          "question": "How to remove border completely?",
          "options": [
            "border: 0",
            "border: none",
            "Both A and B",
            "border: hidden"
          ],
          "correct_option": "C",
          "explanation": "Common methods.",
          "difficulty": "Easy"
        },
        {
          "id": 623,
          "question": "Opacity property affects?",
          "options": [
            "Only text",
            "Only background",
            "Entire element and children",
            "Only border"
          ],
          "correct_option": "C",
          "explanation": "Key difference from RGBA.",
          "difficulty": "Hard"
        },
        {
          "id": 624,
          "question": "Inherit color from parent?",
          "options": [
            "color: inherit",
            "color: parent",
            "color: default",
            "color: auto"
          ],
          "correct_option": "A",
          "explanation": "Standard keyword.",
          "difficulty": "Medium"
        },
        {
          "id": 625,
          "question": "CurrentColor keyword means?",
          "options": [
            "Black",
            "Inherited text color",
            "Browser default",
            "Transparent"
          ],
          "correct_option": "B",
          "explanation": "Useful for icons matching text.",
          "difficulty": "Hard"
        },
        {
          "id": 626,
          "question": "Background-origin property controls?",
          "options": [
            "Starting position",
            "Background area (box)",
            "Color start",
            "Animation"
          ],
          "correct_option": "B",
          "explanation": "border-box, padding-box, etc.",
          "difficulty": "Hard"
        },
        {
          "id": 627,
          "question": "Which property clips background to content?",
          "options": [
            "background-clip",
            "background-crop",
            "background-slice",
            "background-mask"
          ],
          "correct_option": "A",
          "explanation": "Limits fill area.",
          "difficulty": "Hard"
        },
        {
          "id": 628,
          "question": "Border shorthand 'border: 5px red'?",
          "options": [
            "Valid",
            "Invalid (missing style)",
            "Works as black",
            "Depends"
          ],
          "correct_option": "B",
          "explanation": "Style is required (e.g. solid).",
          "difficulty": "Hard"
        },
        {
          "id": 629,
          "question": "Default background color?",
          "options": [
            "White",
            "Black",
            "Transparent",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Standard browser behavior.",
          "difficulty": "Medium"
        },
        {
          "id": 630,
          "question": "How to make a circle using border-radius?",
          "options": [
            "50px",
            "50%",
            "100%",
            "B and C"
          ],
          "correct_option": "D",
          "explanation": "On a square element, 50% or more creates a circle.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 651,
          "question": "Difference between Opacity and RGBA color.",
          "model_answer": "Opacity affects the entire element including its children. RGBA affects only the specific color value (usually background) leaving children fully opaque.",
          "key_points": [
            "Inheritance",
            "Children transparency",
            "Use cases"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 652,
          "question": "Explain the Background Shorthand property order.",
          "model_answer": "Standard order: color image repeat attachment position / size. Example: background: #fff url('a.jpg') no-repeat fixed center / cover.",
          "key_points": [
            "Conciseness",
            "Slashes for size",
            "Order"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 653,
          "question": "How do Hex, RGB, and HSL color models differ?",
          "model_answer": "Hex: Base-16 values. RGB: Additive red/green/blue (0-255). HSL: Intuitive Hue (angle), Saturation (%), Lightness (%).",
          "key_points": [
            "Syntax",
            "Intuition",
            "Numeric ranges"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 654,
          "question": "What is the purpose of 'border-radius'? How to create an ellipse?",
          "model_answer": "Rounds corners. An ellipse is created by providing two values separated by a slash (horizontal/vertical radii) or using percentages on a rectangle.",
          "key_points": [
            "Rounding",
            "Percentage vs Pixels",
            "Slash syntax"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 655,
          "question": "Explain 'background-size: contain' vs 'cover'.",
          "model_answer": "Contain: Entire image visible, may have empty gaps. Cover: Entire element filled, may crop parts of the image.",
          "key_points": [
            "Aspect ratio",
            "Cropping",
            "Scaling"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 656,
          "question": "Describe the 'background-attachment' property.",
          "model_answer": "Determines if background scrolls with page (scroll), stays fixed relative to viewport (fixed), or scrolls with element's inner content (local).",
          "key_points": [
            "Fixed",
            "Scroll",
            "Parallax effect"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 657,
          "question": "How to use Multiple Backgrounds in CSS?",
          "model_answer": "Separate multiple background-image URLs with commas. The first one listed is the 'top' layer.",
          "key_points": [
            "Commas",
            "Layering order"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 658,
          "question": "What are safe color names?",
          "model_answer": "Standard keywords like 'red', 'blue', 'RebeccaPurple' that browsers understand without needing hex codes.",
          "key_points": [
            "Keywords",
            "Case-insensitive"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 659,
          "question": "Role of 'border-collapse' in tables.",
          "model_answer": "Combines adjacent table cell borders into a single border line for a cleaner look.",
          "key_points": [
            "Tables",
            "Double borders",
            "Clean UI"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 660,
          "question": "Explain 'background-clip' vs 'background-origin'.",
          "model_answer": "Origin: Where the background starts (painting area). Clip: Where the background is cut off (visibility area).",
          "key_points": [
            "Painting vs Clipping",
            "Boxes (border/padding/content)"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": [
        {
          "id": 681,
          "problem_statement": "Set background image 'stars.png' that doesn't repeat.",
          "input_format": "None",
          "output_format": "Background properties",
          "code_css": "body {\n  background-image: url('stars.png');\n  background-repeat: no-repeat;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 682,
          "problem_statement": "Create a CSS rule for a red border with 5px thickness and dashed style.",
          "input_format": "None",
          "output_format": "Border shorthand",
          "code_css": ".box {\n  border: 5px dashed red;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 683,
          "problem_statement": "Set background color using HSL (0, 100%, 50%) with 0.5 opacity.",
          "input_format": "None",
          "output_format": "HSLA color",
          "code_css": "div {\n  background-color: hsla(0, 100%, 50%, 0.5);\n}",
          "difficulty": "Medium"
        },
        {
          "id": 684,
          "problem_statement": "Make an image element perfectly circular.",
          "input_format": "Square aspect image",
          "output_format": "Border-radius",
          "code_css": "img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 685,
          "problem_statement": "Fix background image to the bottom-right corner and fix it in place.",
          "input_format": "None",
          "output_format": "Position and Attachment",
          "code_css": "body {\n  background-position: right bottom;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 686,
          "problem_statement": "Apply a gradient background (linear) from blue to green.",
          "input_format": "None",
          "output_format": "Linear-gradient",
          "code_css": "header {\n  background: linear-gradient(to right, blue, green);\n}",
          "difficulty": "Medium"
        },
        {
          "id": 687,
          "problem_statement": "Add a transparent white background (0.3) to a text box.",
          "input_format": "None",
          "output_format": "RGBA usage",
          "code_css": ".textbox {\n  background-color: rgba(255, 255, 255, 0.3);\n}",
          "difficulty": "Easy"
        },
        {
          "id": 688,
          "problem_statement": "Scale background image to fill width completely without repeating.",
          "input_format": "None",
          "output_format": "Background-size",
          "code_css": "div {\n  background-image: url('bg.jpg');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n}",
          "difficulty": "Hard"
        }
      ]
    },
    {
      "unit_name": "7. Margin, Padding, Width, Height, Box Model",
      "mcqs": [
        {
          "id": 701,
          "question": "What consists of the CSS Box Model?",
          "options": [
            "Content, Margin, Padding",
            "Content, Padding, Border, Margin",
            "Padding, Border, Width",
            "Margin, Outline, Padding"
          ],
          "correct_option": "B",
          "explanation": "Every element is a box with these 4 parts.",
          "difficulty": "Easy"
        },
        {
          "id": 702,
          "question": "Which property adds space INSIDE an element's border?",
          "options": [
            "margin",
            "padding",
            "spacing",
            "outline"
          ],
          "correct_option": "B",
          "explanation": "Inner spacing.",
          "difficulty": "Easy"
        },
        {
          "id": 703,
          "question": "Which property adds space OUTSIDE an element's border?",
          "options": [
            "margin",
            "padding",
            "border-width",
            "gap"
          ],
          "correct_option": "A",
          "explanation": "Outer spacing.",
          "difficulty": "Easy"
        },
        {
          "id": 704,
          "question": "By default, total width is calculated as?",
          "options": [
            "width + padding + border",
            "width only",
            "width + margin",
            "padding + border"
          ],
          "correct_option": "A",
          "explanation": "Standard box-sizing (content-box).",
          "difficulty": "Medium"
        },
        {
          "id": 705,
          "question": "Which box-sizing value includes padding/border in width?",
          "options": [
            "content-box",
            "border-box",
            "inherit",
            "none"
          ],
          "correct_option": "B",
          "explanation": "Easier layout management.",
          "difficulty": "Medium"
        },
        {
          "id": 706,
          "question": "Negative values are allowed for?",
          "options": [
            "padding",
            "margin",
            "border-width",
            "All of above"
          ],
          "correct_option": "B",
          "explanation": "Only margin allows negative values for overlapping.",
          "difficulty": "Medium"
        },
        {
          "id": 707,
          "question": "Value of 'margin: 10px 5px' sets?",
          "options": [
            "Top/Bottom 10, Left/Right 5",
            "Top/Left 10, Bottom/Right 5",
            "All sides 10",
            "All sides 5"
          ],
          "correct_option": "A",
          "explanation": "Two-value shorthand.",
          "difficulty": "Easy"
        },
        {
          "id": 708,
          "question": "Value of 'padding: 5px 10px 15px 20px' order?",
          "options": [
            "Top Right Bottom Left",
            "Top Bottom Left Right",
            "Clockwise from top",
            "Both A and C"
          ],
          "correct_option": "D",
          "explanation": "Standard shorthand order.",
          "difficulty": "Medium"
        },
        {
          "id": 709,
          "question": "How to center a block element horizontally?",
          "options": [
            "margin: auto",
            "text-align: center",
            "align: center",
            "float: center"
          ],
          "correct_option": "A",
          "explanation": "Requires a set width.",
          "difficulty": "Easy"
        },
        {
          "id": 710,
          "question": "Max-width property prevents?",
          "options": [
            "Element becoming too small",
            "Element becoming too large",
            "Margins collapsing",
            "Padding issues"
          ],
          "correct_option": "B",
          "explanation": "Limits expansion.",
          "difficulty": "Easy"
        },
        {
          "id": 711,
          "question": "What is Margin Collapse?",
          "options": [
            "Margins disappear",
            "Top/bottom margins of overlapping elements combine",
            "Padding turns into margin",
            "Border disappears"
          ],
          "correct_option": "B",
          "explanation": "Happens in vertical flow.",
          "difficulty": "Hard"
        },
        {
          "id": 712,
          "question": "Property for minimum height?",
          "options": [
            "min-height",
            "height-min",
            "low-height",
            "min-h"
          ],
          "correct_option": "A",
          "explanation": "Standard property.",
          "difficulty": "Easy"
        },
        {
          "id": 713,
          "question": "Does padding affect background color?",
          "options": [
            "No",
            "Yes",
            "Only in IE",
            "Only with border"
          ],
          "correct_option": "B",
          "explanation": "Background extends under padding.",
          "difficulty": "Medium"
        },
        {
          "id": 714,
          "question": "Does margin affect background color?",
          "options": [
            "Yes",
            "No",
            "Only if negative",
            "Depends on border"
          ],
          "correct_option": "B",
          "explanation": "Margins are transparent.",
          "difficulty": "Medium"
        },
        {
          "id": 715,
          "question": "Which value sets width to full parent availability?",
          "options": [
            "100%",
            "auto",
            "fill",
            "max"
          ],
          "correct_option": "A",
          "explanation": "Standard percentage.",
          "difficulty": "Easy"
        },
        {
          "id": 716,
          "question": "Calculate total width: width:300px, padding:20px, border:5px?",
          "options": [
            "325px",
            "350px",
            "300px",
            "345px"
          ],
          "correct_option": "B",
          "explanation": "300 + 20*2 + 5*2 = 350.",
          "difficulty": "Hard"
        },
        {
          "id": 717,
          "question": "Is 'auto' a valid value for padding?",
          "options": [
            "Yes",
            "No",
            "Only in Flexbox",
            "Only for top/bottom"
          ],
          "correct_option": "B",
          "explanation": "Padding must be a specific length.",
          "difficulty": "Medium"
        },
        {
          "id": 718,
          "question": "Relationship between box model and outline?",
          "options": [
            "Outline is part of box model",
            "Outline is outside margin",
            "Outline sits between border and margin",
            "Outline doesn't take space"
          ],
          "correct_option": "D",
          "explanation": "Drawn outside border, doesn't shift layout.",
          "difficulty": "Hard"
        },
        {
          "id": 719,
          "question": "Which property sets height to fixed pixels?",
          "options": [
            "height: 100px",
            "height: 100",
            "size-y: 100px",
            "len: 100px"
          ],
          "correct_option": "A",
          "explanation": "Simple assignment.",
          "difficulty": "Easy"
        },
        {
          "id": 720,
          "question": "Block elements width by default?",
          "options": [
            "Content width",
            "100% of parent",
            "0px",
            "Browser default"
          ],
          "correct_option": "B",
          "explanation": "Full width flow.",
          "difficulty": "Medium"
        },
        {
          "id": 721,
          "question": "Inline elements width by default?",
          "options": [
            "Content width",
            "100%",
            "Inherit",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Wraps content.",
          "difficulty": "Medium"
        },
        {
          "id": 722,
          "question": "Can you set width on <span>?",
          "options": [
            "Yes",
            "No (unless display changed)",
            "Yes (with important)",
            "Always"
          ],
          "correct_option": "B",
          "explanation": "Inline elements ignore width/height.",
          "difficulty": "Hard"
        },
        {
          "id": 723,
          "question": "Padding/Margin units?",
          "options": [
            "px, %, em",
            "only px",
            "only %",
            "vh only"
          ],
          "correct_option": "A",
          "explanation": "All valid CSS units.",
          "difficulty": "Easy"
        },
        {
          "id": 724,
          "question": "What is 'box-sizing: inherit'?",
          "options": [
            "Uses parent's value",
            "Uses browser default",
            "Resets to content-box",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Inheritance keyword.",
          "difficulty": "Medium"
        },
        {
          "id": 725,
          "question": "Percentage padding is relative to?",
          "options": [
            "Parent height",
            "Parent width",
            "Element width",
            "Viewport"
          ],
          "correct_option": "B",
          "explanation": "Counter-intuitive but correct.",
          "difficulty": "Hard"
        },
        {
          "id": 726,
          "question": "Which property hides an element but keeps its space?",
          "options": [
            "display: none",
            "visibility: hidden",
            "opacity: 0",
            "B and C"
          ],
          "correct_option": "D",
          "explanation": "Both preserve box space.",
          "difficulty": "Hard"
        },
        {
          "id": 727,
          "question": "How to remove all margins?",
          "options": [
            "margin: none",
            "margin: 0",
            "margin: empty",
            "no-margin"
          ],
          "correct_option": "B",
          "explanation": "Numeric zero.",
          "difficulty": "Easy"
        },
        {
          "id": 728,
          "question": "Minimum width vs Width?",
          "options": [
            "Min-width prevents overflow",
            "Min-width ensures size doesn't drop below value",
            "Same",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Constraint vs Target.",
          "difficulty": "Medium"
        },
        {
          "id": 729,
          "question": "Can margin-top be set on inline elements?",
          "options": [
            "Yes",
            "No",
            "Only if display: inline-block",
            "B and C"
          ],
          "correct_option": "D",
          "explanation": "Vertical margins ignored on inline.",
          "difficulty": "Hard"
        },
        {
          "id": 730,
          "question": "Standard CSS box-model width formula is for?",
          "options": [
            "Content area",
            "Total visible area",
            "Margin area",
            "Border only"
          ],
          "correct_option": "A",
          "explanation": "In content-box mode.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 751,
          "question": "Explain 'box-sizing: border-box' vs 'content-box'.",
          "model_answer": "Content-box (default): Width/Height only apply to content. Padding/Border are ADDED. Border-box: Width/Height INCLUDE padding/border, making layout calculation easier.",
          "key_points": [
            "Calculation differences",
            "Ease of use",
            "Defaults"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 752,
          "question": "What is Margin Collapsing?",
          "model_answer": "Top and bottom margins of adjacent boxes are sometimes combined into a single margin that is equal to the larger of the two margins.",
          "key_points": [
            "Vertical only",
            "Larger value wins",
            "Adjacent elements"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 753,
          "question": "Difference between Visibility:hidden and Display:none.",
          "model_answer": "Display:none removes the element from document flow (no space taken). Visibility:hidden hides it but the space is still reserved.",
          "key_points": [
            "Document flow",
            "Space preservation"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 754,
          "question": "How does 'margin: auto' work?",
          "model_answer": "The browser calculates equally available space and applies it as margin. Used to center block elements with a fixed width.",
          "key_points": [
            "Equal distribution",
            "Centering",
            "Width requirement"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 755,
          "question": "Why use 'max-width' on images?",
          "model_answer": "To ensure images stay within their container bounds on smaller screens while remaining original size on larger ones.",
          "key_points": [
            "Responsiveness",
            "Container bounds"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 756,
          "question": "Explain the Shorthand properties for Margin.",
          "model_answer": "1 value: all sides. 2 values: top/bottom, left/right. 3 values: top, left/right, bottom. 4 values: top, right, bottom, left.",
          "key_points": [
            "Order",
            "Conciseness"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 757,
          "question": "Relationship between Box Model and Background Color.",
          "model_answer": "Background color fills the content box and the padding box, but stops before the margin starts.",
          "key_points": [
            "Fill area",
            "Padding inclusion",
            "Margin exclusion"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 758,
          "question": "Can we have negative Padding?",
          "model_answer": "No, padding values must be non-negative. Negative Margins are allowed.",
          "key_points": [
            "Positive only",
            "Margin exception"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 759,
          "question": "Describe 'min-height' and its utility.",
          "model_answer": "Ensures an element is at least a certain height, but allows it to grow if content exceeds that height.",
          "key_points": [
            "Growing container",
            "Base size"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 760,
          "question": "How to reset the box model globally?",
          "model_answer": "Using the universal selector: * { box-sizing: border-box; margin: 0; padding: 0; }.",
          "key_points": [
            "*",
            "Predictable layouts"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 781,
          "problem_statement": "Set padding of 10px on top/bottom and 20px on left/right for a div.",
          "input_format": "None",
          "output_format": "Padding shorthand",
          "code_css": "div {\n  padding: 10px 20px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 782,
          "problem_statement": "Center a container with 800px width horizontally.",
          "input_format": "None",
          "output_format": "Margin Auto",
          "code_css": ".container {\n  width: 800px;\n  margin: 0 auto;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 783,
          "problem_statement": "Apply 'border-box' sizing to all elements.",
          "input_format": "None",
          "output_format": "Universal selector",
          "code_css": "* {\n  box-sizing: border-box;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 784,
          "problem_statement": "Set a div to have exactly 100px height and 100% width.",
          "input_format": "None",
          "output_format": "Dimensions",
          "code_css": "div {\n  width: 100%;\n  height: 100px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 785,
          "problem_statement": "Set top padding to 5px, right to 10px, bottom to 15px, and left to 20px.",
          "input_format": "None",
          "output_format": "4-value shorthand",
          "code_css": "div {\n  padding: 5px 10px 15px 20px;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 786,
          "problem_statement": "Ensure an image never exceeds its container's width.",
          "input_format": "None",
          "output_format": "Max-width",
          "code_css": "img {\n  max-width: 100%;\n  height: auto;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 787,
          "problem_statement": "Add a 20px bottom margin to all headers (h1 to h6).",
          "input_format": "None",
          "output_format": "Grouping + Margin",
          "code_css": "h1, h2, h3, h4, h5, h6 {\n  margin-bottom: 20px;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 788,
          "problem_statement": "Hide an element with ID 'secret' without removing it from flow.",
          "input_format": "None",
          "output_format": "Visibility",
          "code_css": "#secret {\n  visibility: hidden;\n}",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "8. Text Formatting and Styling",
      "mcqs": [
        {
          "id": 801,
          "question": "Which property changes the color of text?",
          "options": [
            "text-color",
            "color",
            "fg-color",
            "font-color"
          ],
          "correct_option": "B",
          "explanation": "Simple 'color' property.",
          "difficulty": "Easy"
        },
        {
          "id": 802,
          "question": "How to align text to the center?",
          "options": [
            "text-align: center",
            "align: center",
            "text: center",
            "content-align: center"
          ],
          "correct_option": "A",
          "explanation": "Standard property.",
          "difficulty": "Easy"
        },
        {
          "id": 803,
          "question": "Which property makes text bold?",
          "options": [
            "font-weight: bold",
            "font-style: bold",
            "text-bold: true",
            "weight: bold"
          ],
          "correct_option": "A",
          "explanation": "Weight controls thickness.",
          "difficulty": "Easy"
        },
        {
          "id": 804,
          "question": "Which property adds an underline to text?",
          "options": [
            "text-decoration: underline",
            "text-style: underline",
            "font-underline: yes",
            "decoration: underline"
          ],
          "correct_option": "A",
          "explanation": "Controls decorative lines.",
          "difficulty": "Easy"
        },
        {
          "id": 805,
          "question": "How to capitalize the first letter of each word?",
          "options": [
            "text-transform: capitalize",
            "text-style: uppercase",
            "font-transform: proper",
            "text-case: capitalize"
          ],
          "correct_option": "A",
          "explanation": "Transform controls case.",
          "difficulty": "Medium"
        },
        {
          "id": 806,
          "question": "Which property specifies the font for an element?",
          "options": [
            "font-family",
            "font-style",
            "text-font",
            "font-type"
          ],
          "correct_option": "A",
          "explanation": "Sets prioritized list of fonts.",
          "difficulty": "Easy"
        },
        {
          "id": 807,
          "question": "What is the default font size in browsers?",
          "options": [
            "12px",
            "14px",
            "16px",
            "18px"
          ],
          "correct_option": "C",
          "explanation": "Standard base size.",
          "difficulty": "Medium"
        },
        {
          "id": 808,
          "question": "Property to set space between lines of text?",
          "options": [
            "line-height",
            "text-spacing",
            "line-spacing",
            "vertical-align"
          ],
          "correct_option": "A",
          "explanation": "Controls leading.",
          "difficulty": "Medium"
        },
        {
          "id": 809,
          "question": "How to make text italic?",
          "options": [
            "font-style: italic",
            "text-style: italic",
            "font-weight: italic",
            "italic: true"
          ],
          "correct_option": "A",
          "explanation": "Style controls slant.",
          "difficulty": "Easy"
        },
        {
          "id": 810,
          "question": "Which property controls space between characters?",
          "options": [
            "letter-spacing",
            "word-spacing",
            "text-indent",
            "kerning"
          ],
          "correct_option": "A",
          "explanation": "Standard property.",
          "difficulty": "Medium"
        },
        {
          "id": 811,
          "question": "Which property controls space between words?",
          "options": [
            "word-spacing",
            "letter-spacing",
            "text-spacing",
            "gap"
          ],
          "correct_option": "A",
          "explanation": "Standard property.",
          "difficulty": "Medium"
        },
        {
          "id": 812,
          "question": "Property to indent the first line of a paragraph?",
          "options": [
            "text-indent",
            "margin-left",
            "padding-left",
            "indent"
          ],
          "correct_option": "A",
          "explanation": "Specific for first line.",
          "difficulty": "Medium"
        },
        {
          "id": 813,
          "question": "How to remove underline from links?",
          "options": [
            "text-decoration: none",
            "underline: none",
            "link-style: none",
            "text-style: normal"
          ],
          "correct_option": "A",
          "explanation": "Commonly used on anchors.",
          "difficulty": "Easy"
        },
        {
          "id": 814,
          "question": "Acceptable value for 'font-weight'?",
          "options": [
            "700",
            "bold",
            "lighter",
            "All of above"
          ],
          "correct_option": "D",
          "explanation": "Both keywords and numbers.",
          "difficulty": "Medium"
        },
        {
          "id": 815,
          "question": "What is 'text-decoration: line-through' used for?",
          "options": [
            "Strikethrough",
            "Underline",
            "Overline",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Crosses out text.",
          "difficulty": "Easy"
        },
        {
          "id": 816,
          "question": "Difference between 'em' and 'rem' for font size?",
          "options": [
            "em is relative to parent, rem to root",
            "em is absolute, rem is relative",
            "rem is relative to parent, em to root",
            "Same"
          ],
          "correct_option": "A",
          "explanation": "Root vs Parent context.",
          "difficulty": "Hard"
        },
        {
          "id": 817,
          "question": "Which property controls text case conversions?",
          "options": [
            "text-transform",
            "font-case",
            "text-type",
            "transform"
          ],
          "correct_option": "A",
          "explanation": "uppercase, lowercase, etc.",
          "difficulty": "Medium"
        },
        {
          "id": 818,
          "question": "Generic font family example?",
          "options": [
            "sans-serif",
            "Arial",
            "Times",
            "Verdana"
          ],
          "correct_option": "A",
          "explanation": "Fallback categories.",
          "difficulty": "Medium"
        },
        {
          "id": 819,
          "question": "What is 'font-variant: small-caps'?",
          "options": [
            "Caps at lowercase height",
            "All small letters",
            "All capital letters",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Special typographic feature.",
          "difficulty": "Hard"
        },
        {
          "id": 820,
          "question": "How to justify text on both sides?",
          "options": [
            "text-align: justify",
            "text-justify: auto",
            "align-content: justify",
            "text: spread"
          ],
          "correct_option": "A",
          "explanation": "Even margins on left/right.",
          "difficulty": "Medium"
        },
        {
          "id": 821,
          "question": "Property to add shadow to text?",
          "options": [
            "text-shadow",
            "font-shadow",
            "box-shadow",
            "shadow"
          ],
          "correct_option": "A",
          "explanation": "Distinct from box-shadow.",
          "difficulty": "Medium"
        },
        {
          "id": 822,
          "question": "What does 'line-height: 1.5' mean?",
          "options": [
            "1.5 times the font size",
            "15px",
            "1.5 pixels",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Recommended readable value.",
          "difficulty": "Medium"
        },
        {
          "id": 823,
          "question": "Which property forces text to stay on one line?",
          "options": [
            "white-space: nowrap",
            "overflow: hidden",
            "text-wrap: none",
            "word-break: keep"
          ],
          "correct_option": "A",
          "explanation": "Prevents wrapping.",
          "difficulty": "Hard"
        },
        {
          "id": 824,
          "question": "What is 'font-size-adjust' useful for?",
          "options": [
            "Aspect ratio consistency across fonts",
            "Resizing images",
            "Dynamic scaling",
            "None"
          ],
          "correct_option": "B",
          "explanation": "Helps maintain readability with fallbacks.",
          "difficulty": "Hard"
        },
        {
          "id": 825,
          "question": "How to make text semi-bold numerically?",
          "options": [
            "600",
            "500",
            "400",
            "300"
          ],
          "correct_option": "A",
          "explanation": "400 is normal, 700 is bold.",
          "difficulty": "Medium"
        },
        {
          "id": 826,
          "question": "Which property handles overflowed text with '...'?",
          "options": [
            "text-overflow: ellipsis",
            "text-cut: true",
            "overflow: dot",
            "word-wrap: none"
          ],
          "correct_option": "A",
          "explanation": "Requires overflow:hidden and nowrap.",
          "difficulty": "Hard"
        },
        {
          "id": 827,
          "question": "Property to break long words?",
          "options": [
            "word-break",
            "overflow-wrap",
            "Both A and B",
            "Neither"
          ],
          "correct_option": "C",
          "explanation": "Multiple methods exists.",
          "difficulty": "Hard"
        },
        {
          "id": 828,
          "question": "Direction property for Right-to-Left text?",
          "options": [
            "direction: rtl",
            "align: right",
            "text-rtl: yes",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Used for Arabic/Hebrew.",
          "difficulty": "Medium"
        },
        {
          "id": 829,
          "question": "What is 'text-align-last'?",
          "options": [
            "Aligns the last line of a block",
            "Aligns the last word",
            "Aligns the footer",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Fine control for justified text.",
          "difficulty": "Hard"
        },
        {
          "id": 830,
          "question": "Font shorthand property order?",
          "options": [
            "style variant weight size/line-height family",
            "family weight size",
            "size style family",
            "No specific order"
          ],
          "correct_option": "A",
          "explanation": "Complex but standard.",
          "difficulty": "Hard"
        }
      ],
      "theory_questions": [
        {
          "id": 851,
          "question": "Difference between Serif and Sans-Serif fonts.",
          "model_answer": "Serif fonts have small strokes (feet) at the ends of characters (e.g. Times New Roman). Sans-Serif fonts do not have these strokes (e.g. Arial) and are often preferred for digital screens.",
          "key_points": [
            "Strokes/Feet",
            "Digital vs Print",
            "Examples"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 852,
          "question": "Explain Text-Decoration-Skip-Ink property.",
          "model_answer": "Allows underlines to 'skip' descenders of letters (like p, g, y) so the line doesn't cross the character strokes, making it more readable.",
          "key_points": [
            "Readability",
            "Descenders",
            "Underlining"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 853,
          "question": "What is Line-Height and why is it important?",
          "model_answer": "It defines the distance between baselines of consecutive lines of text. It's crucial for readability; too small makes text cramped, too large makes it disconnected.",
          "key_points": [
            "Vertical spacing",
            "Readability",
            "Accessibility"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 854,
          "question": "Describe the 'text-transform' property values.",
          "model_answer": "Uppercase: all caps. Lowercase: all small. Capitalize: first letter of each word. None: no change.",
          "key_points": [
            "Case control",
            "Dynamic styling"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 855,
          "question": "How does 'font-family' fallback work?",
          "model_answer": "It accepts a comma-separated list. Browsers try the first font; if not installed, they move to the next. Always include a generic family (e.g. sans-serif) at the end.",
          "key_points": [
            "Fallback list",
            "Prioritization",
            "Generic families"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 856,
          "question": "Difference between Font-Weight: 700 and Bold keyword.",
          "model_answer": "Functionally identical in most cases. Numeric values (100-900) allow finer control if the font face supports multiple weights beyond just bold/normal.",
          "key_points": [
            "Specificity",
            "Numeric range",
            "Face support"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 857,
          "question": "What is Letter-Spacing vs Word-Spacing?",
          "model_answer": "Letter-spacing adds space between individual characters. Word-spacing adds space only between words.",
          "key_points": [
            "Character level",
            "Word level",
            "Legibility"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 858,
          "question": "Explain Text-Shadow property syntax.",
          "model_answer": "text-shadow: [h-offset] [v-offset] [blur-radius] [color]. Multiple shadows can be added using commas.",
          "key_points": [
            "Offsets",
            "Blur",
            "Color"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 859,
          "question": "Role of 'white-space' property.",
          "model_answer": "Controls how whitespace inside an element is handled (e.g. collapsing spaces, wrapping lines, or forcing nowrap).",
          "key_points": [
            "Space handling",
            "Wrapping behavior"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 860,
          "question": "How to use Web Fonts (e.g. Google Fonts)?",
          "model_answer": "Include a link tag in HTML or @import in CSS, then use the font name in the font-family property.",
          "key_points": [
            "External assets",
            "@font-face",
            "Import/Link"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 881,
          "problem_statement": "Set the font size of all <p> elements to 18px and line-height to 1.6.",
          "input_format": "None",
          "output_format": "Font properties",
          "code_css": "p {\n  font-size: 18px;\n  line-height: 1.6;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 882,
          "problem_statement": "Center align all <h1> text and make it uppercase.",
          "input_format": "None",
          "output_format": "Align + Transform",
          "code_css": "h1 {\n  text-align: center;\n  text-transform: uppercase;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 883,
          "problem_statement": "Apply a red underline to all links with class 'alert'.",
          "input_format": "None",
          "output_format": "Decoration shorthand",
          "code_css": "a.alert {\n  text-decoration: underline red;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 884,
          "problem_statement": "Use 'Roboto', fallback to 'Arial', then 'sans-serif' for body text.",
          "input_format": "None",
          "output_format": "Font-family list",
          "code_css": "body {\n  font-family: 'Roboto', Arial, sans-serif;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 885,
          "problem_statement": "Add a subtle shadow (2px 2px 4px grey) to heading text.",
          "input_format": "None",
          "output_format": "Text-shadow",
          "code_css": "h2 {\n  text-shadow: 2px 2px 4px grey;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 886,
          "problem_statement": "Indent the first line of paragraphs by 50px.",
          "input_format": "None",
          "output_format": "Text-indent",
          "code_css": "p {\n  text-indent: 50px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 887,
          "problem_statement": "Make italic and bold text for a class called 'highlight'.",
          "input_format": "None",
          "output_format": "Font weight/style",
          "code_css": ".highlight {\n  font-weight: bold;\n  font-style: italic;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 888,
          "problem_statement": "Set letter spacing to 2px for all navigation links.",
          "input_format": "None",
          "output_format": "Letter-spacing",
          "code_css": "nav a {\n  letter-spacing: 2px;\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "9. List and Table Styling",
      "mcqs": [
        {
          "id": 901,
          "question": "Which property removes bullets from a list?",
          "options": [
            "list-style-type: none",
            "bullets: none",
            "list-decoration: none",
            "text-decoration: none"
          ],
          "correct_option": "A",
          "explanation": "Standard list property.",
          "difficulty": "Easy"
        },
        {
          "id": 902,
          "question": "How to set an image as a list bullet?",
          "options": [
            "list-style-image",
            "list-bullet-image",
            "bullet-image",
            "list-image"
          ],
          "correct_option": "A",
          "explanation": "Accepts a url() value.",
          "difficulty": "Medium"
        },
        {
          "id": 903,
          "question": "Which property defines if bullets are inside or outside the list item?",
          "options": [
            "list-style-position",
            "list-position",
            "bullet-align",
            "list-align"
          ],
          "correct_option": "A",
          "explanation": "Values are inside or outside.",
          "difficulty": "Medium"
        },
        {
          "id": 904,
          "question": "Property to collapse table borders into a single line?",
          "options": [
            "border-collapse",
            "border-style",
            "table-border: collapse",
            "border-line: flat"
          ],
          "correct_option": "A",
          "explanation": "Crucial for modern tables.",
          "difficulty": "Easy"
        },
        {
          "id": 905,
          "question": "How to define spacing between table cells?",
          "options": [
            "border-spacing",
            "cell-padding",
            "cell-spacing",
            "gap"
          ],
          "correct_option": "A",
          "explanation": "Works when border-collapse is separate.",
          "difficulty": "Medium"
        },
        {
          "id": 906,
          "question": "Which property sets the position of a table caption?",
          "options": [
            "caption-side",
            "caption-align",
            "text-align",
            "vertical-align"
          ],
          "correct_option": "A",
          "explanation": "top or bottom.",
          "difficulty": "Hard"
        },
        {
          "id": 907,
          "question": "Default value of 'list-style-type' for <ul>?",
          "options": [
            "disc",
            "circle",
            "square",
            "decimal"
          ],
          "correct_option": "A",
          "explanation": "Filled circle.",
          "difficulty": "Easy"
        },
        {
          "id": 908,
          "question": "Default value of 'list-style-type' for <ol>?",
          "options": [
            "decimal",
            "roman",
            "alpha",
            "disc"
          ],
          "correct_option": "A",
          "explanation": "Numbered list.",
          "difficulty": "Easy"
        },
        {
          "id": 909,
          "question": "How to create a horizontal navigation bar from <li>?",
          "options": [
            "display: inline or flex",
            "list-style-type: horizontal",
            "float: center",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Changes block behavior.",
          "difficulty": "Medium"
        },
        {
          "id": 910,
          "question": "Which table property handles empty cell visibility?",
          "options": [
            "empty-cells",
            "zero-cells",
            "hide-empty",
            "show-empty"
          ],
          "correct_option": "A",
          "explanation": "Values: show, hide.",
          "difficulty": "Hard"
        },
        {
          "id": 911,
          "question": "Property for table layout algorithm?",
          "options": [
            "table-layout",
            "layout-mode",
            "grid-template",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Values: auto, fixed.",
          "difficulty": "Hard"
        },
        {
          "id": 912,
          "question": "How to set 'list-style' as shorthand?",
          "options": [
            "type position image",
            "image type",
            "position type",
            "Any order"
          ],
          "correct_option": "A",
          "explanation": "Standard shorthand order.",
          "difficulty": "Medium"
        },
        {
          "id": 913,
          "question": "Which tag is used for data cells in a table?",
          "options": [
            "<td>",
            "<tr>",
            "<th>",
            "<table>"
          ],
          "correct_option": "A",
          "explanation": "Table Data.",
          "difficulty": "Easy"
        },
        {
          "id": 914,
          "question": "Which tag is used for header cells in a table?",
          "options": [
            "<th>",
            "<td>",
            "<thead>",
            "<tr>"
          ],
          "correct_option": "A",
          "explanation": "Table Header.",
          "difficulty": "Easy"
        },
        {
          "id": 915,
          "question": "How to center a table horizontally?",
          "options": [
            "margin: auto",
            "align: center",
            "text-align: center",
            "float: middle"
          ],
          "correct_option": "A",
          "explanation": "Tables behave like block elements.",
          "difficulty": "Medium"
        },
        {
          "id": 916,
          "question": "Can you use 1, 2, 3... for an unordered list?",
          "options": [
            "Yes (via list-style-type)",
            "No",
            "Only with JavaScript",
            "None"
          ],
          "correct_option": "A",
          "explanation": "CSS can change it.",
          "difficulty": "Medium"
        },
        {
          "id": 917,
          "question": "Which list-style-type for Roman numerals?",
          "options": [
            "upper-roman",
            "roman-cap",
            "numerals-roman",
            "None"
          ],
          "correct_option": "A",
          "explanation": "I, II, III...",
          "difficulty": "Medium"
        },
        {
          "id": 918,
          "question": "What is the scope of 'border-collapse: collapse'?",
          "options": [
            "The whole table",
            "Single row",
            "Single cell",
            "Headers only"
          ],
          "correct_option": "A",
          "explanation": "Table-level property.",
          "difficulty": "Easy"
        },
        {
          "id": 919,
          "question": "Property to make table width fixed regardless of content?",
          "options": [
            "table-layout: fixed",
            "width: fixed",
            "content-overflow: clip",
            "grid-fixed"
          ],
          "correct_option": "A",
          "explanation": "Used for speed and predictable layout.",
          "difficulty": "Hard"
        },
        {
          "id": 920,
          "question": "Which unit is best for a responsive table width?",
          "options": [
            "%",
            "px",
            "cm",
            "pt"
          ],
          "correct_option": "A",
          "explanation": "Fluid sizing.",
          "difficulty": "Easy"
        },
        {
          "id": 921,
          "question": "How to add Zebra striping to a table?",
          "options": [
            "tr:nth-child(even)",
            "table-style: zebra",
            "tr:odd-stripes",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Using pseudo-classes.",
          "difficulty": "Medium"
        },
        {
          "id": 922,
          "question": "Property to align text vertically in table cells?",
          "options": [
            "vertical-align",
            "align-y",
            "valign",
            "text-top"
          ],
          "correct_option": "A",
          "explanation": "Works on tables and inline/inline-block.",
          "difficulty": "Medium"
        },
        {
          "id": 923,
          "question": "What does 'list-style-type: square' do?",
          "options": [
            "Changes bullet to filled square",
            "Makes list container square",
            "Draws boxes around items",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Specific bullet shape.",
          "difficulty": "Easy"
        },
        {
          "id": 924,
          "question": "Default value for 'caption-side'?",
          "options": [
            "top",
            "bottom",
            "left",
            "right"
          ],
          "correct_option": "A",
          "explanation": "Standard position.",
          "difficulty": "Medium"
        },
        {
          "id": 925,
          "question": "Which pseudo-class targets the first item in a list?",
          "options": [
            "li:first-child",
            "li:first",
            "li:top",
            "li:one"
          ],
          "correct_option": "A",
          "explanation": "Standard selector.",
          "difficulty": "Easy"
        },
        {
          "id": 926,
          "question": "Can tables have rounded corners?",
          "options": [
            "Yes, with border-radius",
            "No",
            "Only if border-collapse is separate",
            "A and C"
          ],
          "correct_option": "D",
          "explanation": "Usually needs separate borders to work reliably.",
          "difficulty": "Hard"
        },
        {
          "id": 927,
          "question": "Which property adds space inside table cells?",
          "options": [
            "padding",
            "spacing",
            "cell-margin",
            "gap"
          ],
          "correct_option": "A",
          "explanation": "Apply to td/th cells.",
          "difficulty": "Easy"
        },
        {
          "id": 928,
          "question": "Property for list bullets with zero leader (01, 02)?",
          "options": [
            "decimal-leading-zero",
            "decimal-zero",
            "lead-zero",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Specific type.",
          "difficulty": "Hard"
        },
        {
          "id": 929,
          "question": "How to make a table header sticky?",
          "options": [
            "position: sticky",
            "float: top",
            "th { sticky: true }",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Modern CSS positioning.",
          "difficulty": "Hard"
        },
        {
          "id": 930,
          "question": "Maximum columns in CSS table?",
          "options": [
            "No limit",
            "99",
            "65535",
            "Browser dependent"
          ],
          "correct_option": "A",
          "explanation": "Limited by performance and screen width, not spec.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 951,
          "question": "Explain 'border-collapse: collapse' vs 'separate'.",
          "model_answer": "Collapse merges adjacent borders into a single line. Separate keeps cells detached with potential 'border-spacing' between them.",
          "key_points": [
            "Merging borders",
            "Spacing",
            "Default behavior"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 952,
          "question": "What is 'list-style-position: inside'?",
          "model_answer": "It places the marker (bullet/number) inside the list item's content box, causing text wrap to start underneath the bullet.",
          "key_points": [
            "Content box",
            "Text wrapping",
            "Visual offset"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 953,
          "question": "Describe 'table-layout: fixed' and its benefits.",
          "model_answer": "It sets the table width based on the first row's cells. Browsers don't wait for the whole table to load to render it, making it faster.",
          "key_points": [
            "Rendering speed",
            "Predictable widths",
            "Content overflow"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 954,
          "question": "How to achieve responsive tables without horizontal scroll?",
          "model_answer": "Use media queries to change 'display' from table to block/flex, causing cells to stack vertically on small screens.",
          "key_points": [
            "Flex/Block switching",
            "Media queries",
            "Stacking"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 955,
          "question": "What are Generic List Styles?",
          "model_answer": "Keywords like disc, circle, square for <ul> and decimal, lower-roman, upper-alpha for <ol>.",
          "key_points": [
            "Unordered keywords",
            "Ordered keywords"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 956,
          "question": "How does 'border-spacing' work?",
          "model_answer": "It sets the distance between the borders of adjacent cells. It ONLY works when border-collapse is set to 'separate'.",
          "key_points": [
            "Requirement",
            "Cell distance"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 957,
          "question": "Purpose of <thead>, <tbody>, and <tfoot>.",
          "model_answer": "Semantic grouping of table content. Useful for styling and when printing tables that span multiple pages (headers repeat).",
          "key_points": [
            "Semantic structure",
            "Styling hooks",
            "Printing"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 958,
          "question": "Techniques for Zebra Striping.",
          "model_answer": "Using nth-child(even) or nth-child(odd) on table rows to apply a background color to every other line, improving readability.",
          "key_points": [
            "nth-child",
            "Readability",
            "Styling"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 959,
          "question": "What is 'empty-cells: hide'?",
          "model_answer": "Tells the browser not to draw borders or backgrounds if a cell contains no content. Only works in 'separate' border mode.",
          "key_points": [
            "Blank cells",
            "Visual behavior"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 960,
          "question": "How to use an SVG for list bullets?",
          "model_answer": "Set 'list-style-image' to the url of the SVG or use it as a background-image with padding on the list item.",
          "key_points": [
            "list-style-image",
            "SVG inclusion"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 981,
          "problem_statement": "Remove all bullets from an unordered list with ID 'navbar'.",
          "input_format": "None",
          "output_format": "List styling",
          "code_css": "#navbar {\n  list-style-type: none;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 982,
          "problem_statement": "Combine table borders into a single line for all tables.",
          "input_format": "None",
          "output_format": "Border collapse",
          "code_css": "table {\n  border-collapse: collapse;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 983,
          "problem_statement": "Add a light-grey background to even rows in a table.",
          "input_format": "None",
          "output_format": "nth-child",
          "code_css": "tr:nth-child(even) {\n  background-color: #f2f2f2;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 984,
          "problem_statement": "Center a table using margin auto and set its width to 80%.",
          "input_format": "None",
          "output_format": "Table layout",
          "code_css": "table {\n  width: 80%;\n  margin: 0 auto;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 985,
          "problem_statement": "Set the marker of an ordered list to uppercase Roman numerals.",
          "input_format": "None",
          "output_format": "List type",
          "code_css": "ol {\n  list-style-type: upper-roman;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 986,
          "problem_statement": "Fix the table layout to 'fixed' and set table-header backgrounds to blue.",
          "input_format": "None",
          "output_format": "Table styling",
          "code_css": "table {\n  table-layout: fixed;\n}\nth {\n  background-color: blue;\n  color: white;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 987,
          "problem_statement": "Add 15px padding inside all cells (th and td).",
          "input_format": "None",
          "output_format": "Cell padding",
          "code_css": "th, td {\n  padding: 15px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 988,
          "problem_statement": "Set the list-style shorthand to 'square' bullets positioned 'inside'.",
          "input_format": "None",
          "output_format": "Shorthand",
          "code_css": "ul {\n  list-style: square inside;\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "10. CSS Units (px, em, rem, %, vh, vw)",
      "mcqs": [
        {
          "id": 1001,
          "question": "Which unit is an absolute measurement?",
          "options": [
            "px",
            "em",
            "rem",
            "%"
          ],
          "correct_option": "A",
          "explanation": "Pixels are fixed units.",
          "difficulty": "Easy"
        },
        {
          "id": 1002,
          "question": "What does 'em' stand for?",
          "options": [
            "Relative to parent font size",
            "Equal to Margin",
            "External Measurement",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Relative to current element's font size.",
          "difficulty": "Medium"
        },
        {
          "id": 1003,
          "question": "What does 'rem' stand for?",
          "options": [
            "Root EM",
            "Relative EM",
            "Real EM",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Relative to the root element (html) font size.",
          "difficulty": "Medium"
        },
        {
          "id": 1004,
          "question": "1vh is equal to?",
          "options": [
            "1% of Viewport Height",
            "1px of Viewport Height",
            "10% of Viewport Height",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Viewport Height unit.",
          "difficulty": "Easy"
        },
        {
          "id": 1005,
          "question": "1vw is equal to?",
          "options": [
            "1% of Viewport Width",
            "1px of Viewport Width",
            "10% of Viewport Width",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Viewport Width unit.",
          "difficulty": "Easy"
        },
        {
          "id": 1006,
          "question": "Percentage (%) units are relative to?",
          "options": [
            "Parent element size",
            "Viewport size",
            "Screen size",
            "Font size"
          ],
          "correct_option": "A",
          "explanation": "Contextual resizing.",
          "difficulty": "Easy"
        },
        {
          "id": 1007,
          "question": "Which unit is best for accessible font sizing?",
          "options": [
            "rem",
            "px",
            "pt",
            "cm"
          ],
          "correct_option": "A",
          "explanation": "Respects browser settings.",
          "difficulty": "Medium"
        },
        {
          "id": 1008,
          "question": "Default browser font size is usually?",
          "options": [
            "16px",
            "14px",
            "12px",
            "18px"
          ],
          "correct_option": "A",
          "explanation": "Standard across Chrome/FF.",
          "difficulty": "Easy"
        },
        {
          "id": 1009,
          "question": "If root font-size is 20px, how much is 2rem?",
          "options": [
            "40px",
            "20px",
            "10px",
            "32px"
          ],
          "correct_option": "A",
          "explanation": "2 * 20 = 40.",
          "difficulty": "Medium"
        },
        {
          "id": 1010,
          "question": "Does 'em' compound when nested?",
          "options": [
            "Yes",
            "No",
            "Only in lists",
            "Only with padding"
          ],
          "correct_option": "A",
          "explanation": "Multiplies per level.",
          "difficulty": "Hard"
        },
        {
          "id": 1011,
          "question": "Which unit remains constant regardless of nesting?",
          "options": [
            "rem",
            "em",
            "%",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Always refers to root.",
          "difficulty": "Medium"
        },
        {
          "id": 1012,
          "question": "What is 'ex' unit relative to?",
          "options": [
            "x-height of font",
            "Viewport height",
            "Parent width",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Height of lowercase 'x'.",
          "difficulty": "Hard"
        },
        {
          "id": 1013,
          "question": "What is 'ch' unit relative to?",
          "options": [
            "Width of '0' character",
            "Character height",
            "Current font size",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Useful for mono fonts.",
          "difficulty": "Hard"
        },
        {
          "id": 1014,
          "question": "Which unit is physical but rarely used on web?",
          "options": [
            "cm",
            "px",
            "em",
            "rem"
          ],
          "correct_option": "A",
          "explanation": "Centimeters.",
          "difficulty": "Easy"
        },
        {
          "id": 1015,
          "question": "How many 'pt' (points) in 1 inch?",
          "options": [
            "72",
            "96",
            "100",
            "12"
          ],
          "correct_option": "A",
          "explanation": "Printing standard.",
          "difficulty": "Medium"
        },
        {
          "id": 1016,
          "question": "Which unit handles screen orientation changes best?",
          "options": [
            "vmin / vmax",
            "px",
            "%",
            "em"
          ],
          "correct_option": "A",
          "explanation": "Minimum/Maximum viewport dimension.",
          "difficulty": "Hard"
        },
        {
          "id": 1017,
          "question": "What is 100vh?",
          "options": [
            "Full viewport height",
            "Half viewport",
            "Full scrollable height",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Total visible height.",
          "difficulty": "Easy"
        },
        {
          "id": 1018,
          "question": "Why avoid 'px' for font-size?",
          "options": [
            "Doesn't respect user zoom/scaling",
            "Too blurry",
            "Hard to calculate",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Accessibility best practice.",
          "difficulty": "Medium"
        },
        {
          "id": 1019,
          "question": "Unit for printing (standard)?",
          "options": [
            "pt",
            "px",
            "vh",
            "rem"
          ],
          "correct_option": "A",
          "explanation": "Points are physical.",
          "difficulty": "Easy"
        },
        {
          "id": 1020,
          "question": "1pc (Pica) is equal to how many pt?",
          "options": [
            "12",
            "6",
            "72",
            "96"
          ],
          "correct_option": "A",
          "explanation": "Typographic unit.",
          "difficulty": "Medium"
        },
        {
          "id": 1021,
          "question": "Modern approach for responsive text?",
          "options": [
            "clamp(min, preferred, max)",
            "font-size: 5vw",
            "Media queries only",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Fluid typography.",
          "difficulty": "Hard"
        },
        {
          "id": 1022,
          "question": "Relationship between px and in?",
          "options": [
            "1in = 96px",
            "1in = 72px",
            "1in = 100px",
            "None"
          ],
          "correct_option": "A",
          "explanation": "CSS pixel definition.",
          "difficulty": "Hard"
        },
        {
          "id": 1023,
          "question": "Can units be mixed in calc()?",
          "options": [
            "Yes",
            "No",
            "Only same types",
            "Only px and %"
          ],
          "correct_option": "A",
          "explanation": "e.g. calc(100% - 20px).",
          "difficulty": "Medium"
        },
        {
          "id": 1024,
          "question": "Which unit is relative to the small/large viewport in browsers?",
          "options": [
            "svh / lvh",
            "vh",
            "vw",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Newer CSS spec for mobile.",
          "difficulty": "Hard"
        },
        {
          "id": 1025,
          "question": "Best unit for spacing in a flexible layout?",
          "options": [
            "%",
            "px",
            "pt",
            "mm"
          ],
          "correct_option": "A",
          "explanation": "Maintains proportions.",
          "difficulty": "Easy"
        },
        {
          "id": 1026,
          "question": "What is 'rem' default in pixels (usually)?",
          "options": [
            "16px",
            "10px",
            "12px",
            "20px"
          ],
          "correct_option": "A",
          "explanation": "Inherits from html.",
          "difficulty": "Easy"
        },
        {
          "id": 1027,
          "question": "Unit relative to font height of the element?",
          "options": [
            "em",
            "rem",
            "vh",
            "vw"
          ],
          "correct_option": "A",
          "explanation": "Contextual.",
          "difficulty": "Easy"
        },
        {
          "id": 1028,
          "question": "How to set font-size to 1% of viewport width?",
          "options": [
            "font-size: 1vw",
            "font-size: 1vh",
            "font-size: 1%",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Viewport based typography.",
          "difficulty": "Medium"
        },
        {
          "id": 1029,
          "question": "Does vh include the scrollbar width?",
          "options": [
            "Yes (spec says so)",
            "No",
            "Depends on OS",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Usually causes horizontal scroll if misused.",
          "difficulty": "Hard"
        },
        {
          "id": 1030,
          "question": "Which unit is absolute?",
          "options": [
            "mm",
            "rem",
            "vh",
            "vw"
          ],
          "correct_option": "A",
          "explanation": "Physical unit.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 1051,
          "question": "Difference between EM and REM.",
          "model_answer": "REM is relative to the root (html) font size, making it consistent. EM is relative to the element's parent font size, which can result in compounding when nested.",
          "key_points": [
            "Root vs Parent",
            "Compounding",
            "Consistency"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1052,
          "question": "Explain Viewport Units (vh, vw, vmin, vmax).",
          "model_answer": "These units represent percentages of the viewport dimensions. 1vh = 1% height, 1vw = 1% width. vmin/vmax use the smaller/larger dimension respectively.",
          "key_points": [
            "Viewport dimensions",
            "Responsive scaling",
            "vmin/vmax"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1053,
          "question": "Why is it better to use relative units for font-size?",
          "model_answer": "Relative units like rem or em respect user settings (e.g. high contrast or large font modes) and scale predictably across different screens.",
          "key_points": [
            "Accessibility",
            "Scalability",
            "User settings"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1054,
          "question": "What is the 'x-height' and the 'ex' unit?",
          "model_answer": "x-height is the height of the lowercase letter 'x' in the current font. The 'ex' unit is relative to this height.",
          "key_points": [
            "Typographic base",
            "Font specific"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1055,
          "question": "How to create a 62.5% font-size hack?",
          "model_answer": "Set html { font-size: 62.5% }. This makes 1rem = 10px (since 16 * 0.625 = 10), making calculations much easier.",
          "key_points": [
            "Easy math",
            "1rem = 10px",
            "Baseline setting"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1056,
          "question": "Explain the units 'svh', 'lvh', and 'dvh'.",
          "model_answer": "Newer units for mobile browsers: svh (small viewport - without UI bars), lvh (large - with UI bars), dvh (dynamic - adjusts as bars hide).",
          "key_points": [
            "Mobile UI bars",
            "Dynamic adjustment",
            "Layout stability"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1057,
          "question": "Difference between '%' and 'vw' for width.",
          "model_answer": "'%' is relative to the parent container. 'vw' is always relative to the full viewport width regardless of container depth.",
          "key_points": [
            "Parent vs Viewport",
            "Nesting influence"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1058,
          "question": "When to use 'px' instead of relative units?",
          "model_answer": "For properties that require precise, non-scaling values like border widths, icons, or specific shadow offsets.",
          "key_points": [
            "Precision",
            "Non-scaling",
            "UI details"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1059,
          "question": "Describe the 'ch' unit utility.",
          "model_answer": "It's the width of the '0' character. Extremely useful in monospaced fonts or for limiting paragraph widths to a specific number of characters.",
          "key_points": [
            "Character width",
            "Mono fonts",
            "Readability"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1060,
          "question": "What is 'calc()' and how does it help with units?",
          "model_answer": "A function that allows mathematical expressions to determine property values, enabling mixed units (e.g., 100% minus 50px).",
          "key_points": [
            "Dynamic math",
            "Unit mixing"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 1081,
          "problem_statement": "Set the root font size to 62.5% and a container to width 100vw.",
          "input_format": "None",
          "output_format": "Sizing",
          "code_css": "html {\n  font-size: 62.5%;\n}\n.container {\n  width: 100vw;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1082,
          "problem_statement": "Make a hero section cover the full visible height of the screen.",
          "input_format": "None",
          "output_format": "Viewport Height",
          "code_css": ".hero {\n  height: 100vh;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1083,
          "problem_statement": "Set the margin of a paragraph to 2rem and padding to 1.5em.",
          "input_format": "None",
          "output_format": "Relative spacing",
          "code_css": "p {\n  margin: 2rem;\n  padding: 1.5em;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1084,
          "problem_statement": "Limit the width of an article to 70 characters using the 'ch' unit.",
          "input_format": "None",
          "output_format": "Character width",
          "code_css": "article {\n  max-width: 70ch;\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1085,
          "problem_statement": "Calculate the width of a sidebar as 100% minus 300px.",
          "input_format": "None",
          "output_format": "calc() usage",
          "code_css": ".sidebar {\n  width: calc(100% - 300px);\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1086,
          "problem_statement": "Set a font size that scales with viewport width using 'clamp' (min: 16px, pref: 2vw, max: 24px).",
          "input_format": "None",
          "output_format": "Fluid typography",
          "code_css": "h1 {\n  font-size: clamp(16px, 2vw, 24px);\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1087,
          "problem_statement": "Make a square div with width 20% of the viewport's SMALLEST dimension.",
          "input_format": "None",
          "output_format": "vmin",
          "code_css": ".square {\n  width: 20vmin;\n  height: 20vmin;\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1088,
          "problem_statement": "Set border width to exactly 1px for high-definition rendering.",
          "input_format": "None",
          "output_format": "Absolute px",
          "code_css": "div {\n  border: 1px solid black;\n}",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "11. Display property (Block, Inline, Inline-block, None)",
      "mcqs": [
        {
          "id": 1101,
          "question": "Default display value for <div>?",
          "options": [
            "block",
            "inline",
            "inline-block",
            "none"
          ],
          "correct_option": "A",
          "explanation": "Takes full width.",
          "difficulty": "Easy"
        },
        {
          "id": 1102,
          "question": "Default display value for <span>?",
          "options": [
            "inline",
            "block",
            "inline-block",
            "none"
          ],
          "correct_option": "A",
          "explanation": "Wraps content.",
          "difficulty": "Easy"
        },
        {
          "id": 1103,
          "question": "Which display value allows setting width/height on an inline element?",
          "options": [
            "inline-block",
            "inline",
            "block",
            "none"
          ],
          "correct_option": "A",
          "explanation": "Hybrid behavior.",
          "difficulty": "Medium"
        },
        {
          "id": 1104,
          "question": "Which property removes an element from the document flow completely?",
          "options": [
            "display: none",
            "visibility: hidden",
            "opacity: 0",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Space is not reserved.",
          "difficulty": "Easy"
        },
        {
          "id": 1105,
          "question": "What happens if you set 'display: block' on an <a> tag?",
          "options": [
            "It behaves like a div",
            "It stays inline",
            "It disappears",
            "It becomes a button"
          ],
          "correct_option": "A",
          "explanation": "Can now have width/height.",
          "difficulty": "Medium"
        },
        {
          "id": 1106,
          "question": "Which display value is used for Flexbox layout?",
          "options": [
            "flex",
            "grid",
            "block",
            "inline-flex"
          ],
          "correct_option": "A",
          "explanation": "Triggers flex context.",
          "difficulty": "Easy"
        },
        {
          "id": 1107,
          "question": "Difference between 'display: inline' and 'display: inline-block'?",
          "options": [
            "inline-block respects width/height",
            "inline respects width/height",
            "No difference",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Crucial for layout control.",
          "difficulty": "Medium"
        },
        {
          "id": 1108,
          "question": "Which tag has 'display: list-item' by default?",
          "options": [
            "<li>",
            "<ul>",
            "<div>",
            "<p>"
          ],
          "correct_option": "A",
          "explanation": "Enables bullets.",
          "difficulty": "Medium"
        },
        {
          "id": 1109,
          "question": "How to make <div> elements sit side-by-side?",
          "options": [
            "display: inline-block",
            "display: block",
            "display: list-item",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Flows horizontally.",
          "difficulty": "Easy"
        },
        {
          "id": 1110,
          "question": "Does 'display: none' trigger reflow?",
          "options": [
            "Yes",
            "No",
            "Only in IE",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Layout must be recalculated.",
          "difficulty": "Hard"
        },
        {
          "id": 1111,
          "question": "Which display value creates a grid container?",
          "options": [
            "grid",
            "flex",
            "table",
            "block"
          ],
          "correct_option": "A",
          "explanation": "Triggers grid context.",
          "difficulty": "Easy"
        },
        {
          "id": 1112,
          "question": "Default display of <img>?",
          "options": [
            "inline-block (usually)",
            "block",
            "inline",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Has intrinsic dimensions.",
          "difficulty": "Medium"
        },
        {
          "id": 1113,
          "question": "Which display value makes an element behave like a <table>?",
          "options": [
            "table",
            "list-item",
            "table-cell",
            "None"
          ],
          "correct_option": "A",
          "explanation": "CSS table layout.",
          "difficulty": "Hard"
        },
        {
          "id": 1114,
          "question": "What is 'display: contents'?",
          "options": [
            "Element is replaced by its children in layout",
            "Element is hidden",
            "Element is a grid",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Useful for skipping wrappers.",
          "difficulty": "Hard"
        },
        {
          "id": 1115,
          "question": "Can you change any element's display type?",
          "options": [
            "Yes",
            "No",
            "Only block elements",
            "Only inline elements"
          ],
          "correct_option": "A",
          "explanation": "CSS can override defaults.",
          "difficulty": "Easy"
        },
        {
          "id": 1116,
          "question": "Which value allows an inline-level flex container?",
          "options": [
            "inline-flex",
            "flex",
            "inline-block",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Flex inside inline flow.",
          "difficulty": "Medium"
        },
        {
          "id": 1117,
          "question": "Effect of 'display: block' on <span> margin-top?",
          "options": [
            "Margin-top is now respected",
            "Margin-top is ignored",
            "Margin doubles",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Block elements support vertical margins.",
          "difficulty": "Medium"
        },
        {
          "id": 1118,
          "question": "Which value triggers a 'BFC' (Block Formatting Context)?",
          "options": [
            "flow-root",
            "block",
            "inline",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Newer value for fixing floats.",
          "difficulty": "Hard"
        },
        {
          "id": 1119,
          "question": "Display value for table header cells?",
          "options": [
            "table-header-group",
            "table-cell",
            "block",
            "None"
          ],
          "correct_option": "B",
          "explanation": "th/td behavior.",
          "difficulty": "Hard"
        },
        {
          "id": 1120,
          "question": "Which property is a shorthand for display: flex; flex-direction: column;?",
          "options": [
            "None (requires separate props)",
            "flex-column",
            "grid-column",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Display only sets context.",
          "difficulty": "Medium"
        },
        {
          "id": 1121,
          "question": "What does 'display: run-in' do?",
          "options": [
            "Behaves as block or inline depending on sibling",
            "Runs the element animation",
            "Hides element",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Rarely supported correctly.",
          "difficulty": "Hard"
        },
        {
          "id": 1122,
          "question": "Does 'display: none' affect children?",
          "options": [
            "Yes, they are also hidden",
            "No",
            "Only if visible",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Full subtree removal.",
          "difficulty": "Easy"
        },
        {
          "id": 1123,
          "question": "Which value makes an element act like a row in a table?",
          "options": [
            "table-row",
            "table-line",
            "row",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Structural table component.",
          "difficulty": "Medium"
        },
        {
          "id": 1124,
          "question": "Can an element have multiple display values?",
          "options": [
            "Yes (outer and inner)",
            "No",
            "Only in Grid",
            "None"
          ],
          "correct_option": "A",
          "explanation": "e.g. display: inline flex.",
          "difficulty": "Hard"
        },
        {
          "id": 1125,
          "question": "Default display of <button>?",
          "options": [
            "inline-block",
            "block",
            "inline",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard browser style.",
          "difficulty": "Easy"
        },
        {
          "id": 1126,
          "question": "Which value removes bullets from list-item children?",
          "options": [
            "None (display doesn't remove bullets)",
            "display: block",
            "display: none",
            "None"
          ],
          "correct_option": "A",
          "explanation": "list-style-type handles bullets.",
          "difficulty": "Medium"
        },
        {
          "id": 1127,
          "question": "Display of <video>?",
          "options": [
            "inline (usually inline-block)",
            "block",
            "none",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Replaced element.",
          "difficulty": "Medium"
        },
        {
          "id": 1128,
          "question": "Which value avoids margin collapse?",
          "options": [
            "display: flow-root",
            "display: block",
            "display: inline",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Creates new BFC.",
          "difficulty": "Hard"
        },
        {
          "id": 1129,
          "question": "Is 'display: flex' inherited?",
          "options": [
            "No",
            "Yes",
            "Only in Safari",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Only applies to the container.",
          "difficulty": "Medium"
        },
        {
          "id": 1130,
          "question": "Default display of <html>?",
          "options": [
            "block",
            "none",
            "inline",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Root block.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 1151,
          "question": "Block vs Inline vs Inline-Block.",
          "model_answer": "Block: Full width, starts new line, respects margins/padding. Inline: Wrapped width, stays in line, ignores vertical margins. Inline-Block: Stays in line BUT respects width/height/margins.",
          "key_points": [
            "Flow behavior",
            "Width/Height",
            "Margins"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1152,
          "question": "Explain 'display: none' vs 'visibility: hidden'.",
          "model_answer": "Display:none removes the element from the flow (zero space taken). Visibility:hidden hides it but the original box still takes up the same space.",
          "key_points": [
            "Document flow",
            "Space reservation",
            "Dom presence"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1153,
          "question": "What is 'display: contents' useful for?",
          "model_answer": "It makes the container disappear while preserving its children for layout purposes. Great for semantic HTML that might break Flex/Grid structures.",
          "key_points": [
            "Wrapper removal",
            "Children preservation",
            "Accessibility"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1154,
          "question": "Describe 'display: flow-root'.",
          "model_answer": "It creates a new Block Formatting Context (BFC). It's a modern way to contain floats without using clearfix hacks.",
          "key_points": [
            "BFC creation",
            "Float containment",
            "Modern clearfix"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1155,
          "question": "How does 'inline-block' handle whitespace?",
          "model_answer": "Browsers treat whitespace in HTML between inline-block elements as a single space character, which can cause unwanted gaps (e.g. 4px gaps).",
          "key_points": [
            "HTML gaps",
            "Whitespace handling",
            "Font-size: 0 fix"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1156,
          "question": "Role of 'display' in CSS Table Layout.",
          "model_answer": "Allows any element to behave like a table, row, or cell (display: table/table-row/table-cell). Used for complex vertical centering before Flexbox.",
          "key_points": [
            "Structural mimicry",
            "Vertical centering",
            "Legacy layouts"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1157,
          "question": "What is 'inline-flex'?",
          "model_answer": "The container itself behaves like an inline element (stays in text flow) but its internal children follow Flexbox rules.",
          "key_points": [
            "Container flow",
            "Internal context"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1158,
          "question": "Consequences of changing display on <tr>.",
          "model_answer": "If changed to block, the table structure breaks as it no longer adheres to table-specific rendering rules.",
          "key_points": [
            "Structure break",
            "Table semantics"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1159,
          "question": "Display property and Accessibility.",
          "model_answer": "Display:none hides content from screen readers. To hide visually but keep for screen readers, use 'sr-only' techniques or absolute positioning.",
          "key_points": [
            "Screen readers",
            "Visual vs Semantic"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1160,
          "question": "Difference between outer and inner display types.",
          "model_answer": "Modern CSS separates 'what I am to my parent' (block/inline) and 'what my children are to me' (flex/grid).",
          "key_points": [
            "Outer vs Inner",
            "Modern spec"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": [
        {
          "id": 1181,
          "problem_statement": "Make all <li> elements sit horizontally in a single line using inline-block.",
          "input_format": "None",
          "output_format": "Horizontal list",
          "code_css": "li {\n  display: inline-block;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1182,
          "problem_statement": "Completely hide an element with class 'ad-banner'.",
          "input_format": "None",
          "output_format": "Hide element",
          "code_css": ".ad-banner {\n  display: none;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1183,
          "problem_statement": "Make a link (<a>) behave like a block element so it can have a fixed width of 200px.",
          "input_format": "None",
          "output_format": "Block link",
          "code_css": "a {\n  display: block;\n  width: 200px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1184,
          "problem_statement": "Create a vertical menu where each link takes up the full width.",
          "input_format": "None",
          "output_format": "Vertical flow",
          "code_css": "nav a {\n  display: block;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1185,
          "problem_statement": "Align two divs side by side with width 50% each using inline-block.",
          "input_format": "None",
          "output_format": "Layout",
          "code_css": "div {\n  display: inline-block;\n  width: 50%;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1186,
          "problem_statement": "Use 'contents' on a wrapper div with ID 'ghost' to make it transparent to layout.",
          "input_format": "None",
          "output_format": "Display contents",
          "code_css": "#ghost {\n  display: contents;\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1187,
          "problem_statement": "Make an image behave as a block element to center it using margin auto.",
          "input_format": "None",
          "output_format": "Centered image",
          "code_css": "img {\n  display: block;\n  margin: 0 auto;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1188,
          "problem_statement": "Create a container that is inline-level but uses Flexbox for its children.",
          "input_format": "None",
          "output_format": "Inline-flex",
          "code_css": ".container {\n  display: inline-flex;\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "12. Positioning (Static, Relative, Absolute, Fixed, Sticky)",
      "mcqs": [
        {
          "id": 1201,
          "question": "What is the default position value?",
          "options": [
            "static",
            "relative",
            "absolute",
            "fixed"
          ],
          "correct_option": "A",
          "explanation": "Follows document flow.",
          "difficulty": "Easy"
        },
        {
          "id": 1202,
          "question": "Which position is relative to its own normal position?",
          "options": [
            "relative",
            "static",
            "absolute",
            "fixed"
          ],
          "correct_option": "A",
          "explanation": "Offset without moving neighbors.",
          "difficulty": "Easy"
        },
        {
          "id": 1203,
          "question": "Position absolute is relative to?",
          "options": [
            "Nearest positioned ancestor",
            "Viewport",
            "Body",
            "Parent"
          ],
          "correct_option": "A",
          "explanation": "Ancestors with non-static position.",
          "difficulty": "Medium"
        },
        {
          "id": 1204,
          "question": "Which position stays in the same place even when scrolling?",
          "options": [
            "fixed",
            "absolute",
            "sticky",
            "relative"
          ],
          "correct_option": "A",
          "explanation": "Relative to viewport.",
          "difficulty": "Easy"
        },
        {
          "id": 1205,
          "question": "What does 'sticky' do?",
          "options": [
            "Toggles between relative and fixed",
            "Glues to parent",
            "Moves to bottom",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Scroll-dependent positioning.",
          "difficulty": "Medium"
        },
        {
          "id": 1206,
          "question": "Which property defines the stack order?",
          "options": [
            "z-index",
            "stack",
            "order",
            "layer"
          ],
          "correct_option": "A",
          "explanation": "Requires non-static position.",
          "difficulty": "Easy"
        },
        {
          "id": 1207,
          "question": "Can you use 'top' on a static element?",
          "options": [
            "No",
            "Yes",
            "Only in Chrome",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Static elements ignore offsets.",
          "difficulty": "Easy"
        },
        {
          "id": 1208,
          "question": "Does 'position: absolute' take the element out of flow?",
          "options": [
            "Yes",
            "No",
            "Only if width is 100%",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Neighbors act as if it's gone.",
          "difficulty": "Medium"
        },
        {
          "id": 1209,
          "question": "How to center an absolute element perfectly?",
          "options": [
            "top:50%; left:50%; transform:translate(-50%,-50%)",
            "margin: auto",
            "text-align: center",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard centering trick.",
          "difficulty": "Hard"
        },
        {
          "id": 1210,
          "question": "Sticky position requires at least one?",
          "options": [
            "Offset (top/bottom/etc)",
            "Z-index",
            "Overflow: hidden",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Won't stick without an edge defined.",
          "difficulty": "Medium"
        },
        {
          "id": 1211,
          "question": "What happens if no positioned ancestor is found for absolute?",
          "options": [
            "Relative to <html>",
            "Becomes static",
            "Disappears",
            "Relative to parent"
          ],
          "correct_option": "A",
          "explanation": "Falls back to root.",
          "difficulty": "Medium"
        },
        {
          "id": 1212,
          "question": "Does fixed position respect parent padding?",
          "options": [
            "No (viewport relative)",
            "Yes",
            "Only if margin:0",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Breaks out of parent bounds.",
          "difficulty": "Hard"
        },
        {
          "id": 1213,
          "question": "Which position is best for a navigation bar that sticks to top?",
          "options": [
            "fixed or sticky",
            "absolute",
            "relative",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard UI pattern.",
          "difficulty": "Easy"
        },
        {
          "id": 1214,
          "question": "Z-index works only on?",
          "options": [
            "Positioned elements",
            "All elements",
            "Block elements",
            "None"
          ],
          "correct_option": "A",
          "explanation": "static elements ignore it.",
          "difficulty": "Medium"
        },
        {
          "id": 1215,
          "question": "Positive offset (top: 10px) on relative moves element?",
          "options": [
            "Down 10px",
            "Up 10px",
            "Left 10px",
            "Right 10px"
          ],
          "correct_option": "A",
          "explanation": "Space added at top.",
          "difficulty": "Easy"
        },
        {
          "id": 1216,
          "question": "Can absolute elements have auto width?",
          "options": [
            "Yes",
            "No",
            "Only if fixed",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Shrink-wraps content.",
          "difficulty": "Medium"
        },
        {
          "id": 1217,
          "question": "Sticky element won't stick if parent has?",
          "options": [
            "overflow: hidden",
            "width: 100%",
            "background: red",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Common sticky bug.",
          "difficulty": "Hard"
        },
        {
          "id": 1218,
          "question": "Clip property requires which position?",
          "options": [
            "absolute or fixed",
            "relative",
            "static",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Deprecated but functional.",
          "difficulty": "Hard"
        },
        {
          "id": 1219,
          "question": "What is 'inset: 0'?",
          "options": [
            "Shorthand for top/right/bottom/left: 0",
            "Inner shadow",
            "Padding reset",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Modern shorthand.",
          "difficulty": "Hard"
        },
        {
          "id": 1220,
          "question": "Fixed elements width 100% refers to?",
          "options": [
            "Viewport width",
            "Parent width",
            "Screen width",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Viewport relative.",
          "difficulty": "Medium"
        },
        {
          "id": 1221,
          "question": "Does relative position affect document flow?",
          "options": [
            "Yes (original space reserved)",
            "No",
            "Partially",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Visual offset only.",
          "difficulty": "Medium"
        },
        {
          "id": 1222,
          "question": "How to make a 'ghost' element that overlays entire page?",
          "options": [
            "fixed, inset: 0",
            "absolute, width: 100%",
            "sticky, top: 0",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Overlay pattern.",
          "difficulty": "Easy"
        },
        {
          "id": 1223,
          "question": "Z-index: 9999 is?",
          "options": [
            "Technically valid",
            "Invalid",
            "Too large",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No specific limit but avoid high values.",
          "difficulty": "Easy"
        },
        {
          "id": 1224,
          "question": "Position used for Tooltips near trigger?",
          "options": [
            "absolute",
            "fixed",
            "sticky",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Relative to trigger container.",
          "difficulty": "Medium"
        },
        {
          "id": 1225,
          "question": "Can a sticky element stick to the bottom?",
          "options": [
            "Yes (bottom: 0)",
            "No",
            "Only top works",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Supported offsets.",
          "difficulty": "Medium"
        },
        {
          "id": 1226,
          "question": "Absolute element top: 0, left: 0 is?",
          "options": [
            "Top-left corner of ancestor",
            "Top-left corner of screen",
            "Current position",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Origin alignment.",
          "difficulty": "Easy"
        },
        {
          "id": 1227,
          "question": "Which position is 'scroll-bound'?",
          "options": [
            "sticky",
            "fixed",
            "absolute",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Sticks during scroll range.",
          "difficulty": "Easy"
        },
        {
          "id": 1228,
          "question": "Does absolute position respect parent borders?",
          "options": [
            "No (relative to border-box)",
            "Yes",
            "Depends on padding",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Aligned to inside of border.",
          "difficulty": "Hard"
        },
        {
          "id": 1229,
          "question": "Setting z-index: -1 puts element?",
          "options": [
            "Behind content",
            "In front",
            "Invisible",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Stacking order.",
          "difficulty": "Medium"
        },
        {
          "id": 1230,
          "question": "Are offset values (top/left) compatible with all positions?",
          "options": [
            "All except static",
            "Only absolute",
            "Only fixed",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Static ignores them.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 1251,
          "question": "Explain the difference between Relative and Absolute positioning.",
          "model_answer": "Relative offsets an element from its normal position while keeping it in the flow. Absolute removes it from flow and positions it relative to the nearest non-static ancestor.",
          "key_points": [
            "Flow presence",
            "Reference point",
            "Ancestry"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1252,
          "question": "How does 'position: fixed' differs from 'absolute'?",
          "model_answer": "Absolute is relative to a container (ancestor). Fixed is always relative to the viewport (the browser window) and stays visible during scroll.",
          "key_points": [
            "Viewport vs Ancestor",
            "Scrolling behavior"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1253,
          "question": "Describe the mechanics of 'position: sticky'.",
          "model_answer": "It acts like relative until it reaches a specified offset (e.g. top: 0) from the viewport, at which point it 'sticks' and acts like fixed within its parent's bounds.",
          "key_points": [
            "Hybrid behavior",
            "Sticky range",
            "Parent constraints"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1254,
          "question": "What is the Stacking Context and Z-index?",
          "model_answer": "Stacking context determines which elements appear 'closer' to the user. Z-index sets the order within that context. Creating a new context (via opacity, transform, etc.) resets z-index logic.",
          "key_points": [
            "3D order",
            "Context creation",
            "Z-index limitations"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1255,
          "question": "Why does a sticky element sometimes fail to stick?",
          "model_answer": "Common reasons include: missing offset (e.g. no 'top' set), an ancestor having 'overflow: hidden' or 'scroll', or the parent height being equal to the sticky element height.",
          "key_points": [
            "Offset requirement",
            "Overflow issues",
            "Height constraints"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1256,
          "question": "Explain 'inset: 0' and its convenience.",
          "model_answer": "A modern CSS shorthand that sets top, right, bottom, and left to the same value simultaneously. often used with absolute to fill a container.",
          "key_points": [
            "Shorthand",
            "Filling containers"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1257,
          "question": "Relative positioning and 'ghost space'.",
          "model_answer": "Even when a relative element is moved with top/left, its original space in the document flow remains occupied. This is often called 'ghost space'.",
          "key_points": [
            "Flow reservation",
            "Visual vs Physical"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1258,
          "question": "Absolute positioning and 'width: 100%'.",
          "model_answer": "An absolute element with 100% width fills the content area of its nearest positioned ancestor, not necessarily the immediate parent if that parent is static.",
          "key_points": [
            "Ancestor reference",
            "Width calculation"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1259,
          "question": "How to create a layout that centers an absolute element.",
          "model_answer": "Set top/left to 50% and use transform: translate(-50%, -50%) to offset the element's own width/height by half, ensuring perfect center.",
          "key_points": [
            "50% offsets",
            "Transform correction"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1260,
          "question": "Relationship between 'position: fixed' and mobile zoom.",
          "model_answer": "Fixed elements can sometimes cause usability issues on mobile when users zoom in, as they might cover a large portion of the screen.",
          "key_points": [
            "Mobile usability",
            "Viewport scaling"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 1281,
          "problem_statement": "Position an icon absolutely at the top-right corner of a parent with class 'card'.",
          "input_format": "None",
          "output_format": "Absolute positioning",
          "code_css": ".card {\n  position: relative;\n}\n.icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1282,
          "problem_statement": "Make a header bar stay fixed at the top of the screen during scroll.",
          "input_format": "None",
          "output_format": "Fixed header",
          "code_css": "header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1283,
          "problem_statement": "Move an element 20px down from its original position without affecting others.",
          "input_format": "None",
          "output_format": "Relative move",
          "code_css": ".move-me {\n  position: relative;\n  top: 20px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1284,
          "problem_statement": "Make a table header stick to the top as you scroll through the rows.",
          "input_format": "None",
          "output_format": "Sticky header",
          "code_css": "th {\n  position: sticky;\n  top: 0;\n  background: white;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1285,
          "problem_statement": "Overlay a dimming layer across the entire viewport.",
          "input_format": "None",
          "output_format": "Fixed overlay",
          "code_css": ".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.5);\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1286,
          "problem_statement": "Create a back-to-top button fixed 20px from the bottom-right corner.",
          "input_format": "None",
          "output_format": "Fixed button",
          "code_css": ".btn-top {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1287,
          "problem_statement": "Center an element with width 100px absolutely inside its relative parent.",
          "input_format": "None",
          "output_format": "Perfect center",
          "code_css": ".parent {\n  position: relative;\n}\n.child {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100px;\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1288,
          "problem_statement": "Set the stacking order of a modal to be above everything else (e.g. value 1000).",
          "input_format": "None",
          "output_format": "z-index",
          "code_css": ".modal {\n  position: fixed;\n  z-index: 1000;\n}",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "13. CSS Flexbox",
      "mcqs": [
        {
          "id": 1301,
          "question": "Which property defines the main axis direction?",
          "options": [
            "flex-direction",
            "flex-flow",
            "justify-content",
            "align-items"
          ],
          "correct_option": "A",
          "explanation": "row, row-reverse, column, column-reverse.",
          "difficulty": "Easy"
        },
        {
          "id": 1302,
          "question": "Default value of 'flex-direction'?",
          "options": [
            "row",
            "column",
            "row-reverse",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Horizontal flow.",
          "difficulty": "Easy"
        },
        {
          "id": 1303,
          "question": "Property to align items along the main axis?",
          "options": [
            "justify-content",
            "align-items",
            "align-content",
            "flex-pack"
          ],
          "correct_option": "A",
          "explanation": "Handles spacing (center, space-between, etc).",
          "difficulty": "Easy"
        },
        {
          "id": 1304,
          "question": "Property to align items along the cross axis?",
          "options": [
            "align-items",
            "justify-content",
            "align-self",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Handles vertical alignment in rows.",
          "difficulty": "Easy"
        },
        {
          "id": 1305,
          "question": "Which property allows flex items to wrap onto multiple lines?",
          "options": [
            "flex-wrap",
            "flex-flow",
            "flex-line",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Values: nowrap, wrap, wrap-reverse.",
          "difficulty": "Medium"
        },
        {
          "id": 1306,
          "question": "Shorthand for flex-direction and flex-wrap?",
          "options": [
            "flex-flow",
            "flex-box",
            "flex-rule",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Combines two properties.",
          "difficulty": "Medium"
        },
        {
          "id": 1307,
          "question": "Which flex-item property defines the ability to grow?",
          "options": [
            "flex-grow",
            "flex-expand",
            "flex-up",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Unitless value.",
          "difficulty": "Easy"
        },
        {
          "id": 1308,
          "question": "Default value of 'flex-grow'?",
          "options": [
            "0",
            "1",
            "auto",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Does not grow by default.",
          "difficulty": "Easy"
        },
        {
          "id": 1309,
          "question": "Default value of 'flex-shrink'?",
          "options": [
            "1",
            "0",
            "auto",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Will shrink if necessary.",
          "difficulty": "Medium"
        },
        {
          "id": 1310,
          "question": "Which property sets the initial size of a flex item?",
          "options": [
            "flex-basis",
            "flex-size",
            "width",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Relative to main axis.",
          "difficulty": "Medium"
        },
        {
          "id": 1311,
          "question": "Shorthand for grow, shrink, and basis?",
          "options": [
            "flex",
            "flex-item",
            "flex-config",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Highly recommended shorthand.",
          "difficulty": "Easy"
        },
        {
          "id": 1312,
          "question": "Which property aligns individual items along the cross axis?",
          "options": [
            "align-self",
            "align-items",
            "justify-self",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Overrides align-items.",
          "difficulty": "Medium"
        },
        {
          "id": 1313,
          "question": "Align-content only works when?",
          "options": [
            "Items are wrapped (multiple lines)",
            "Single line",
            "flex-direction is column",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Spacing between lines.",
          "difficulty": "Hard"
        },
        {
          "id": 1314,
          "question": "What is 'flex: 1' shorthand for?",
          "options": [
            "1 1 0%",
            "1 0 auto",
            "0 1 auto",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Grow:1, Shrink:1, Basis:0%.",
          "difficulty": "Hard"
        },
        {
          "id": 1315,
          "question": "Which property changes the visual order of items?",
          "options": [
            "order",
            "flex-order",
            "index",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Integer value.",
          "difficulty": "Easy"
        },
        {
          "id": 1316,
          "question": "Does flexbox support 3D layouts?",
          "options": [
            "No",
            "Yes",
            "Only with transform",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Designed for 1D (rows OR columns).",
          "difficulty": "Easy"
        },
        {
          "id": 1317,
          "question": "How to center both vertically and horizontally with flex?",
          "options": [
            "justify-content: center; align-items: center;",
            "text-align: center; vertical-align: middle;",
            "align-content: center;",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Ultimate centering solution.",
          "difficulty": "Easy"
        },
        {
          "id": 1318,
          "question": "What is the 'cross axis' in 'flex-direction: column'?",
          "options": [
            "Horizontal (Width)",
            "Vertical (Height)",
            "Diagonal",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Perpendicular to main axis.",
          "difficulty": "Medium"
        },
        {
          "id": 1319,
          "question": "Which value of justify-content puts equal space BETWEEN items?",
          "options": [
            "space-between",
            "space-around",
            "space-evenly",
            "None"
          ],
          "correct_option": "A",
          "explanation": "First/last items touch edges.",
          "difficulty": "Medium"
        },
        {
          "id": 1320,
          "question": "Which value of justify-content puts equal space AROUND items (including edges)?",
          "options": [
            "space-evenly",
            "space-around",
            "space-between",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Uniform gaps everywhere.",
          "difficulty": "Hard"
        },
        {
          "id": 1321,
          "question": "Can flex containers be nested?",
          "options": [
            "Yes",
            "No",
            "Only 2 levels",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Commonly used for complex apps.",
          "difficulty": "Easy"
        },
        {
          "id": 1322,
          "question": "What does 'flex-basis: auto' do?",
          "options": [
            "Uses width/height or content size",
            "Sets size to 0",
            "Fills parent",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Default sizing logic.",
          "difficulty": "Medium"
        },
        {
          "id": 1323,
          "question": "Which property handles gaps between items (modern)?",
          "options": [
            "gap (or column-gap/row-gap)",
            "spacing",
            "flex-gap",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standardized across Flex/Grid.",
          "difficulty": "Medium"
        },
        {
          "id": 1324,
          "question": "Effect of 'visibility: collapse' on a flex item?",
          "options": [
            "Acts like display: none",
            "Hides visually but keeps space",
            "Does nothing",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Specific flex behavior.",
          "difficulty": "Hard"
        },
        {
          "id": 1325,
          "question": "Which flex item property defines the minimum size allowed?",
          "options": [
            "None (use min-width/height)",
            "flex-min",
            "flex-limit",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Flexbox respects min/max props.",
          "difficulty": "Medium"
        },
        {
          "id": 1326,
          "question": "What is 'flex-flow: row wrap'?",
          "options": [
            "Horizontal flow with wrapping",
            "Vertical flow",
            "No wrapping",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Combined shorthand.",
          "difficulty": "Easy"
        },
        {
          "id": 1327,
          "question": "Default align-items value?",
          "options": [
            "stretch",
            "center",
            "flex-start",
            "flex-end"
          ],
          "correct_option": "A",
          "explanation": "Items expand to fill container height.",
          "difficulty": "Medium"
        },
        {
          "id": 1328,
          "question": "How to push a single item to the right in a flex row?",
          "options": [
            "margin-left: auto",
            "align-self: flex-end",
            "float: right",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Smart margin hack in flexbox.",
          "difficulty": "Hard"
        },
        {
          "id": 1329,
          "question": "Which justify-content value gives 2x space between items compared to edges?",
          "options": [
            "space-around",
            "space-evenly",
            "space-between",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Visual distribution pattern.",
          "difficulty": "Hard"
        },
        {
          "id": 1330,
          "question": "Is flexbox responsive by default?",
          "options": [
            "No (requires media queries or wrap)",
            "Yes",
            "Only on mobile",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Core layout engine, not a framework.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 1351,
          "question": "Explain Main Axis vs Cross Axis.",
          "model_answer": "Main Axis is the primary direction of flex items (defined by flex-direction). Cross Axis is always perpendicular to the Main Axis.",
          "key_points": [
            "Directional dependency",
            "Perpendicular relationship"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1352,
          "question": "Describe the 'flex' shorthand components.",
          "model_answer": "It combines flex-grow (expansion factor), flex-shrink (contraction factor), and flex-basis (initial size). Recommended for performance.",
          "key_points": [
            "Grow",
            "Shrink",
            "Basis"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1353,
          "question": "Difference between 'justify-content' and 'align-items'.",
          "model_answer": "Justify-content aligns items along the main axis (usually horizontal). Align-items aligns them along the cross axis (usually vertical).",
          "key_points": [
            "Main vs Cross",
            "Alignment context"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1354,
          "question": "What is 'flex-basis: 0' vs 'flex-basis: auto'?",
          "model_answer": "Basis 0 ignores the item's content size for calculation. Basis auto respects intrinsic content size or width/height properties.",
          "key_points": [
            "Calculation base",
            "Content influence"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1355,
          "question": "How 'flex-grow' distributes extra space.",
          "model_answer": "Extra space is divided among items proportional to their flex-grow values. An item with grow:2 gets twice as much space as grow:1.",
          "key_points": [
            "Proportionality",
            "Space distribution"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1356,
          "question": "Importance of 'flex-wrap'.",
          "model_answer": "By default, flex items try to fit on one line. Flex-wrap allows them to move to new lines, creating responsive grid-like layouts.",
          "key_points": [
            "Multi-line flow",
            "Responsive layouts"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1357,
          "question": "When to use 'align-content'?",
          "model_answer": "Used when a flex container has multiple lines (wrapped). It aligns the lines themselves within the container.",
          "key_points": [
            "Line alignment",
            "Multi-line requirement"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1358,
          "question": "Using 'order' property and Accessibility.",
          "model_answer": "Order changes visual positioning but NOT the DOM order. This can confuse screen reader users who expect logical sequence.",
          "key_points": [
            "Visual vs DOM",
            "A11y implications"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1359,
          "question": "Explain 'margin: auto' behavior in Flexbox.",
          "model_answer": "In Flexbox, auto margins absorb all available space in that direction, allowing easy centering or 'pushing' elements.",
          "key_points": [
            "Space absorption",
            "Centering trick"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1360,
          "question": "Limitations of Flexbox.",
          "model_answer": "Designed primarily for 1D layouts (one row OR one column). For complex 2D layouts (rows AND columns together), CSS Grid is preferred.",
          "key_points": [
            "1D limitation",
            "Grid comparison"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 1381,
          "problem_statement": "Create a flex container that stacks its children vertically.",
          "input_format": "None",
          "output_format": "Flex column",
          "code_css": ".container {\n  display: flex;\n  flex-direction: column;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1382,
          "problem_statement": "Distribute three items horizontally with equal space BETWEEN them.",
          "input_format": "None",
          "output_format": "Space between",
          "code_css": ".container {\n  display: flex;\n  justify-content: space-between;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1383,
          "problem_statement": "Perfectly center a single div inside a flex container.",
          "input_format": "None",
          "output_format": "Ultimate centering",
          "code_css": ".parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1384,
          "problem_statement": "Make a sidebar with fixed 200px width and a main content area that expands to fill the rest.",
          "input_format": "None",
          "output_format": "Flex grow",
          "code_css": ".container {\n  display: flex;\n}\n.sidebar {\n  flex-basis: 200px;\n}\n.main {\n  flex-grow: 1;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1385,
          "problem_statement": "Allow flex items to wrap and set a 20px gap between them.",
          "input_format": "None",
          "output_format": "Wrap and gap",
          "code_css": ".container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1386,
          "problem_statement": "Change the order of an element with class 'first' to appear last in a 3-item list.",
          "input_format": "None",
          "output_format": "Order property",
          "code_css": ".first {\n  order: 3;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1387,
          "problem_statement": "Make a flex item proportional where it grows twice as fast as others.",
          "input_format": "None",
          "output_format": "Proportional grow",
          "code_css": ".fast {\n  flex-grow: 2;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1388,
          "problem_statement": "Align a single flex item to the bottom-right of a column container using self-alignment.",
          "input_format": "None",
          "output_format": "Align self",
          "code_css": ".container {\n  display: flex;\n  flex-direction: column;\n}\n.item {\n  align-self: flex-end;\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "14. CSS Grid Layout",
      "mcqs": [
        {
          "id": 1401,
          "question": "Which property makes an element a grid container?",
          "options": [
            "display: grid",
            "layout: grid",
            "grid: template",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Triggers grid context.",
          "difficulty": "Easy"
        },
        {
          "id": 1402,
          "question": "Property to define the number and width of columns?",
          "options": [
            "grid-template-columns",
            "grid-cols",
            "columns",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Accepts px, %, fr units.",
          "difficulty": "Easy"
        },
        {
          "id": 1403,
          "question": "What does the 'fr' unit stand for in Grid?",
          "options": [
            "Fractional unit",
            "Fixed radius",
            "Frame rate",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Represents a fraction of available space.",
          "difficulty": "Easy"
        },
        {
          "id": 1404,
          "question": "How to create 3 columns of equal width using 'fr'?",
          "options": [
            "grid-template-columns: 1fr 1fr 1fr",
            "grid-template-columns: 33% 33% 33%",
            "grid-template-columns: repeat(3, 1fr)",
            "Both A and C"
          ],
          "correct_option": "D",
          "explanation": "Multiple valid syntaxes.",
          "difficulty": "Medium"
        },
        {
          "id": 1405,
          "question": "Which property defines the space between grid items?",
          "options": [
            "gap (or grid-gap)",
            "grid-spacing",
            "margin",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Shorthand for row-gap and column-gap.",
          "difficulty": "Easy"
        },
        {
          "id": 1406,
          "question": "Property for an item to span across multiple columns?",
          "options": [
            "grid-column",
            "grid-span",
            "column-span",
            "None"
          ],
          "correct_option": "A",
          "explanation": "e.g. grid-column: span 2.",
          "difficulty": "Medium"
        },
        {
          "id": 1407,
          "question": "What does 'grid-template-areas' do?",
          "options": [
            "Assigns names to grid cells",
            "Sets background colors",
            "Defines grid size",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Visual way to define layout.",
          "difficulty": "Hard"
        },
        {
          "id": 1408,
          "question": "Which property aligns all grid items along the inline (horizontal) axis?",
          "options": [
            "justify-items",
            "align-items",
            "justify-content",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Sets default for all items.",
          "difficulty": "Medium"
        },
        {
          "id": 1409,
          "question": "Which property aligns a SINGLE grid item along the block (vertical) axis?",
          "options": [
            "align-self",
            "justify-self",
            "align-items",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Overrides container defaults.",
          "difficulty": "Medium"
        },
        {
          "id": 1410,
          "question": "What is the 'implicit grid'?",
          "options": [
            "Grid created automatically for extra content",
            "Defined by template",
            "Grid inside a grid",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Handles overflow items.",
          "difficulty": "Hard"
        },
        {
          "id": 1411,
          "question": "Property to control size of implicit grid rows?",
          "options": [
            "grid-auto-rows",
            "grid-template-rows",
            "rows-auto",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Defines default height for extra rows.",
          "difficulty": "Hard"
        },
        {
          "id": 1412,
          "question": "What does 'repeat(auto-fit, minmax(100px, 1fr))' do?",
          "options": [
            "Creates a responsive grid without media queries",
            "Forces 100px width",
            "Repeat 100 times",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Powerful responsive pattern.",
          "difficulty": "Hard"
        },
        {
          "id": 1413,
          "question": "Difference between auto-fill and auto-fit?",
          "options": [
            "auto-fit collapses empty tracks",
            "auto-fill collapses empty tracks",
            "No difference",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Subtle layout distinction.",
          "difficulty": "Hard"
        },
        {
          "id": 1414,
          "question": "Default value of grid-auto-flow?",
          "options": [
            "row",
            "column",
            "dense",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Fills rows first.",
          "difficulty": "Medium"
        },
        {
          "id": 1415,
          "question": "Can grid items overlap?",
          "options": [
            "Yes (using grid-column/row)",
            "No",
            "Only in Firefox",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Layering is supported.",
          "difficulty": "Medium"
        },
        {
          "id": 1416,
          "question": "Maximum number of 'fr' units you can use?",
          "options": [
            "No limit",
            "12",
            "16",
            "100"
          ],
          "correct_option": "A",
          "explanation": "Depends on available space.",
          "difficulty": "Easy"
        },
        {
          "id": 1417,
          "question": "Does Grid support 'z-index'?",
          "options": [
            "Yes (for positioned or overlapping items)",
            "No",
            "Only if display: block",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Crucial for overlapping cells.",
          "difficulty": "Medium"
        },
        {
          "id": 1418,
          "question": "Which shorthand combines all template properties?",
          "options": [
            "grid-template",
            "grid",
            "grid-layout",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Complex but compact.",
          "difficulty": "Medium"
        },
        {
          "id": 1419,
          "question": "Value of 'grid-column' to start at line 1 and end at line 3?",
          "options": [
            "1 / 3",
            "1 - 3",
            "span 2",
            "None"
          ],
          "correct_option": "A",
          "explanation": "StartLine / EndLine syntax.",
          "difficulty": "Easy"
        },
        {
          "id": 1420,
          "question": "How to name a grid line?",
          "options": [
            "[name]",
            "(name)",
            "{name}",
            "<name>"
          ],
          "correct_option": "A",
          "explanation": "Square brackets in template.",
          "difficulty": "Hard"
        },
        {
          "id": 1421,
          "question": "What is 'minmax(100px, auto)'?",
          "options": [
            "At least 100px, grows with content",
            "Fixed at 100px",
            "Always 100px",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Flexible sizing function.",
          "difficulty": "Medium"
        },
        {
          "id": 1422,
          "question": "Default align-items for Grid?",
          "options": [
            "stretch",
            "start",
            "center",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Fills the cell area.",
          "difficulty": "Easy"
        },
        {
          "id": 1423,
          "question": "Which property aligns the entire grid INSIDE the container?",
          "options": [
            "justify-content / align-content",
            "justify-items",
            "margin",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Aligns the grid itself.",
          "difficulty": "Hard"
        },
        {
          "id": 1424,
          "question": "CSS property for grid column spanning?",
          "options": [
            "grid-column-end",
            "grid-spanning",
            "colspan",
            "None"
          ],
          "correct_option": "A",
          "explanation": "End line or span value.",
          "difficulty": "Medium"
        },
        {
          "id": 1425,
          "question": "Is CSS Grid 2-Dimensional?",
          "options": [
            "Yes",
            "No",
            "Only rows",
            "Only columns"
          ],
          "correct_option": "A",
          "explanation": "Handles both axes simultaneously.",
          "difficulty": "Easy"
        },
        {
          "id": 1426,
          "question": "Can you use Flexbox inside a Grid cell?",
          "options": [
            "Yes",
            "No",
            "Only in Chrome",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Nesting layout engines is common.",
          "difficulty": "Easy"
        },
        {
          "id": 1427,
          "question": "Effect of 'grid-column: 1 / -1'?",
          "options": [
            "Spans the full width of the grid",
            "Spans one column",
            "Error",
            "None"
          ],
          "correct_option": "A",
          "explanation": "-1 refers to the last line.",
          "difficulty": "Hard"
        },
        {
          "id": 1428,
          "question": "Which browser first introduced stable Grid?",
          "options": [
            "IE (prefixed)",
            "Chrome",
            "Firefox",
            "Safari"
          ],
          "correct_option": "A",
          "explanation": "Legacy IE had a basic version.",
          "difficulty": "Hard"
        },
        {
          "id": 1429,
          "question": "What does 'dense' flow do?",
          "options": [
            "Fills holes in the grid",
            "Makes grid smaller",
            "Increases gap",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Packing algorithm.",
          "difficulty": "Hard"
        },
        {
          "id": 1430,
          "question": "Default gap value?",
          "options": [
            "0",
            "normal",
            "10px",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No gap by default.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 1451,
          "question": "Flexbox vs CSS Grid.",
          "model_answer": "Flexbox is 1-Dimensional (Row OR Column), best for alignment inside a component. Grid is 2-Dimensional (Row AND Column), best for full page layouts.",
          "key_points": [
            "Dimensionality",
            "Use cases",
            "AXIS control"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1452,
          "question": "Explain the 'fr' unit and its advantages.",
          "model_answer": "It stands for 'fraction of available space'. It avoids fixed percentages and handles gaps automatically, preventing layout overflows.",
          "key_points": [
            "Fractional space",
            "Gaps handling",
            "Responsiveness"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1453,
          "question": "What are Grid Lines and Grid Tracks?",
          "model_answer": "Tracks are the columns and rows themselves. Lines are the dividers between them. You can position items based on line numbers.",
          "key_points": [
            "Physical space",
            "Mathematical dividers",
            "Numbering"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1454,
          "question": "How does 'grid-template-areas' simplify layout?",
          "model_answer": "It allows mapping ASCII-like strings to grid areas. Makes code much more readable than using line numbers.",
          "key_points": [
            "Readable syntax",
            "Visual mapping",
            "Named areas"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1455,
          "question": "Describe the Implicit vs Explicit Grid.",
          "model_answer": "Explicit Grid is what you define in code. Implicit Grid is what the browser creates automatically to hold extra content.",
          "key_points": [
            "Definition",
            "Overflow handling",
            "Auto properties"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1456,
          "question": "Role of 'minmax()' in responsive design.",
          "model_answer": "It sets a range for track size. e.g., minmax(200px, 1fr) ensures a column never shrinks below 200px but can grow to fill space.",
          "key_points": [
            "Size range",
            "Fluidity",
            "Constraints"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1457,
          "question": "Explain 'repeat(auto-fit, ...)' magic.",
          "model_answer": "It tells the browser to fit as many columns as possible into the container. When space is low, it wraps items without media queries.",
          "key_points": [
            "Auto wrapping",
            "No media queries",
            "Layout filling"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1458,
          "question": "Centering in Grid vs Flexbox.",
          "model_answer": "Grid can center with 'place-items: center' on the container, which is simpler than flexbox's two-property approach.",
          "key_points": [
            "Place-items",
            "Property count",
            "Simplicity"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1459,
          "question": "Overlapping items in Grid.",
          "model_answer": "By assigning two items the same grid-column and grid-row coordinates, they will overlap. Z-index controls which is on top.",
          "key_points": [
            "Layering",
            "Coordinates",
            "Z-index"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1460,
          "question": "Subgrid and its purpose.",
          "model_answer": "Subgrid allows a child element to inherit the grid tracks of its parent, making it easy to align children across disparate parents.",
          "key_points": [
            "Track inheritance",
            "Nested alignment"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": [
        {
          "id": 1481,
          "problem_statement": "Create a 3x3 grid with 20px gaps.",
          "input_format": "None",
          "output_format": "3x3 layout",
          "code_css": ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 20px;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1482,
          "problem_statement": "Make a grid item span horizontally across the first two columns.",
          "input_format": "None",
          "output_format": "Column spanning",
          "code_css": ".item {\n  grid-column: 1 / 3;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1483,
          "problem_statement": "Create a responsive grid where columns are at least 150px wide and fill the container.",
          "input_format": "None",
          "output_format": "Responsive grid",
          "code_css": ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1484,
          "problem_statement": "Align all grid items to the center of their cells both vertically and horizontally.",
          "input_format": "None",
          "output_format": "Place items center",
          "code_css": ".grid {\n  display: grid;\n  place-items: center;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1485,
          "problem_statement": "Define a grid layout with 'header', 'main', and 'sidebar' using areas.",
          "input_format": "None",
          "output_format": "Grid areas",
          "code_css": ".grid {\n  display: grid;\n  grid-template-areas: \n    \"head head\"\n    \"side main\";\n}\n.header { grid-area: head; }\n.sidebar { grid-area: side; }\n.main { grid-area: main; }",
          "difficulty": "Medium"
        },
        {
          "id": 1486,
          "problem_statement": "Make an item with class 'full' span the entire width of any grid.",
          "input_format": "None",
          "output_format": "Full width span",
          "code_css": ".full {\n  grid-column: 1 / -1;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1487,
          "problem_statement": "Set the implicit grid to auto-generate rows with 100px height.",
          "input_format": "None",
          "output_format": "Auto rows",
          "code_css": ".grid {\n  display: grid;\n  grid-auto-rows: 100px;\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1488,
          "problem_statement": "Overlap two items in the first cell of a grid.",
          "input_format": "None",
          "output_format": "Overlapped Items",
          "code_css": ".item1, .item2 {\n  grid-column: 1;\n  grid-row: 1;\n}\n.item2 {\n  z-index: 2;\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "15. CSS Transitions and Animations",
      "mcqs": [
        {
          "id": 1501,
          "question": "Which property defines the duration of a transition?",
          "options": [
            "transition-duration",
            "transition-time",
            "duration",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Sets how long the change takes.",
          "difficulty": "Easy"
        },
        {
          "id": 1502,
          "question": "Default timing function for transitions?",
          "options": [
            "ease",
            "linear",
            "ease-in",
            "ease-out"
          ],
          "correct_option": "A",
          "explanation": "Slow start, fast middle, slow end.",
          "difficulty": "Easy"
        },
        {
          "id": 1503,
          "question": "How to delay the start of a transition?",
          "options": [
            "transition-delay",
            "transition-pause",
            "wait",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Time to wait before starting.",
          "difficulty": "Easy"
        },
        {
          "id": 1504,
          "question": "Which shorthand property transitions all animatable properties?",
          "options": [
            "transition: all 0.5s;",
            "transition: 0.5s;",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "'all' is often the default.",
          "difficulty": "Medium"
        },
        {
          "id": 1505,
          "question": "Rule used to define animation sequences?",
          "options": [
            "@keyframes",
            "@animation",
            "@sequence",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Defines intermediate steps.",
          "difficulty": "Easy"
        },
        {
          "id": 1506,
          "question": "Property to name the @keyframes to use?",
          "options": [
            "animation-name",
            "animation-id",
            "animation-source",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Links element to keyframes.",
          "difficulty": "Easy"
        },
        {
          "id": 1507,
          "question": "How to make an animation run forever?",
          "options": [
            "animation-iteration-count: infinite",
            "animation-repeat: endless",
            "loop: true",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Continuous looping.",
          "difficulty": "Easy"
        },
        {
          "id": 1508,
          "question": "Which property defines if animation plays forward, backward, or alternates?",
          "options": [
            "animation-direction",
            "animation-flow",
            "animation-mode",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Values: normal, reverse, alternate.",
          "difficulty": "Medium"
        },
        {
          "id": 1509,
          "question": "What does 'animation-fill-mode: forwards' do?",
          "options": [
            "Retains styles from the last keyframe",
            "Resets to start",
            "Speeds up",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Prevents snapping back.",
          "difficulty": "Medium"
        },
        {
          "id": 1510,
          "question": "Which timing function has a constant speed?",
          "options": [
            "linear",
            "ease",
            "steps()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No acceleration.",
          "difficulty": "Easy"
        },
        {
          "id": 1511,
          "question": "Function for frame-by-frame (staccato) animation?",
          "options": [
            "steps()",
            "cubic-bezier()",
            "frame()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Useful for sprite animations.",
          "difficulty": "Hard"
        },
        {
          "id": 1512,
          "question": "Maximum number of keyframes in one @keyframes rule?",
          "options": [
            "No limit",
            "100",
            "10",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Can use 0% to 100% and any % in between.",
          "difficulty": "Easy"
        },
        {
          "id": 1513,
          "question": "How to pause an animation via CSS?",
          "options": [
            "animation-play-state: paused",
            "animation: stop",
            "display: none",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Can be toggled with JS/hover.",
          "difficulty": "Medium"
        },
        {
          "id": 1514,
          "question": "Which property is a shorthand for all animation properties?",
          "options": [
            "animation",
            "animate",
            "keyframes",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Follows specific order.",
          "difficulty": "Medium"
        },
        {
          "id": 1515,
          "question": "Can you transition 'display: none'?",
          "options": [
            "No",
            "Yes",
            "Only in Safari",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Display is not animatable (discrete).",
          "difficulty": "Hard"
        },
        {
          "id": 1516,
          "question": "Effect of 'alternate-reverse' direction?",
          "options": [
            "Plays backward then forward",
            "Plays forward then backward",
            "Random",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Complex looping.",
          "difficulty": "Hard"
        },
        {
          "id": 1517,
          "question": "Animation shorthand requires which two properties to function minimum?",
          "options": [
            "Name and Duration",
            "Name and Delay",
            "Duration and Count",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Won't run without time.",
          "difficulty": "Medium"
        },
        {
          "id": 1518,
          "question": "What is the 'cubic-bezier' function used for?",
          "options": [
            "Custom timing functions",
            "3D math",
            "Path drawing",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Defines custom ease curves.",
          "difficulty": "Hard"
        },
        {
          "id": 1519,
          "question": "Does 'opacity' support transitions?",
          "options": [
            "Yes (highly performant)",
            "No",
            "Only for images",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard for fade effects.",
          "difficulty": "Easy"
        },
        {
          "id": 1520,
          "question": "Which properties are best for smooth animations?",
          "options": [
            "transform and opacity",
            "width and height",
            "margin and padding",
            "None"
          ],
          "correct_option": "A",
          "explanation": "They don't trigger layout reflow.",
          "difficulty": "Hard"
        },
        {
          "id": 1521,
          "question": "Keyword for 0% in @keyframes?",
          "options": [
            "from",
            "start",
            "begin",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Interchangeable with 0%.",
          "difficulty": "Easy"
        },
        {
          "id": 1522,
          "question": "Keyword for 100% in @keyframes?",
          "options": [
            "to",
            "end",
            "finish",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Interchangeable with 100%.",
          "difficulty": "Easy"
        },
        {
          "id": 1523,
          "question": "Default animation-iteration-count?",
          "options": [
            "1",
            "0",
            "infinite",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Plays once.",
          "difficulty": "Easy"
        },
        {
          "id": 1524,
          "question": "Can an element have multiple animations?",
          "options": [
            "Yes (comma separated)",
            "No",
            "Only one",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard CSS behavior.",
          "difficulty": "Medium"
        },
        {
          "id": 1525,
          "question": "What is 'will-change' property?",
          "options": [
            "Tells browser to optimize for future animation",
            "Forces animation",
            "Hides element",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Performance hint.",
          "difficulty": "Hard"
        },
        {
          "id": 1526,
          "question": "Will an animation run if display is none?",
          "options": [
            "No",
            "Yes",
            "Only keyframes",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Hidden elements don't render.",
          "difficulty": "Medium"
        },
        {
          "id": 1527,
          "question": "Default animation-direction?",
          "options": [
            "normal",
            "reverse",
            "alternate",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Start to end.",
          "difficulty": "Easy"
        },
        {
          "id": 1528,
          "question": "Does transition support 'negative' delay?",
          "options": [
            "Yes (starts animation mid-way)",
            "No",
            "Only in Firefox",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Advanced shortcut.",
          "difficulty": "Hard"
        },
        {
          "id": 1529,
          "question": "Which value of fill-mode applies both 'forwards' and 'backwards'?",
          "options": [
            "both",
            "none",
            "full",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Extends styles in both directions.",
          "difficulty": "Hard"
        },
        {
          "id": 1530,
          "question": "Is CSS animation hardware accelerated?",
          "options": [
            "Yes (usually for transform/opacity)",
            "No",
            "Only in Safari",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Gpu handles these efficiently.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 1551,
          "question": "CSS Transitions vs. Keyframe Animations.",
          "model_answer": "Transitions are simple changes between state A and B (triggered by hover, class change). Animations are complex sequences with multiple steps defined by @keyframes.",
          "key_points": [
            "State-based vs Sequence-based",
            "Triggers",
            "Complexity levels"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1552,
          "question": "Explain the importance of 'animation-fill-mode'.",
          "model_answer": "By default, animations return to the original state. 'forwards' keeps the end state, 'backwards' applies the start state during delay, and 'both' does both.",
          "key_points": [
            "State persistence",
            "Snap-back prevention",
            "Delay behavior"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1553,
          "question": "Why use 'transform' instead of 'top/left' for animations?",
          "model_answer": "Transform doesn't trigger layout or paint cycles in the document flow; it only triggers compositing (GPU), making it much smoother (60 FPS).",
          "key_points": [
            "Performance",
            "Reflow vs Compositing",
            "GPU acceleration"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1554,
          "question": "What is a 'Timing Function' and how does it affect UI?",
          "model_answer": "It controls the rate of change over time (acceleration/deceleration). Using 'ease-in-out' makes a UI feel more natural and physical compared to 'linear'.",
          "key_points": [
            "Rate of change",
            "User experience",
            "Natural motion"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1555,
          "question": "Describe the 'steps()' function use case.",
          "model_answer": "Used for non-interpolated changes, such as a ticking clock hand or a sprite-sheet animation where you want to jump between rigid frames.",
          "key_points": [
            "Non-linear jump",
            "Sprite animations",
            "Discrete states"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1556,
          "question": "Explain @keyframes percentage syntax.",
          "model_answer": "Percentages (0%, 50%, 100%) allow you to specify exactly what properties should be at specific points in the animation timeline.",
          "key_points": [
            "Timeline control",
            "Intermediate steps",
            "Granularity"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1557,
          "question": "What is 'cubic-bezier' and how can it be created?",
          "model_answer": "It's a mathematical curve used for custom timing. Developers often use browser dev tools or online sites (cubic-bezier.com) to generate the four coordinates.",
          "key_points": [
            "Mathematical curves",
            "Custom easing",
            "Dev tool integration"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1558,
          "question": "Role of 'transition-delay' in staggered menus.",
          "model_answer": "By applying increasing delays to sequential menu items, you can create a 'cascade' effect where they appear one after another.",
          "key_points": [
            "Staggered effects",
            "Cascade animation",
            "Sequence timing"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1559,
          "question": "Managing accessibility with animations.",
          "model_answer": "Excessive motion can cause dizziness. Use the 'prefers-reduced-motion' media query to disable or simplify animations for users who need it.",
          "key_points": [
            "User health",
            "Reduced motion query",
            "Inclusive design"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1560,
          "question": "Pausing and Resuming Animations.",
          "model_answer": "Controlled by 'animation-play-state'. Useful for games or interactive elements where you want the animation to stop on hover and resume later.",
          "key_points": [
            "Animation-play-state",
            "Interaction control"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 1581,
          "problem_statement": "Make a button change its background color to red over 0.3 seconds when hovered.",
          "input_format": "None",
          "output_format": "Transition hover",
          "code_css": "button {\n  transition: background-color 0.3s;\n}\nbutton:hover {\n  background-color: red;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1582,
          "problem_statement": "Create a keyframe animation called 'fade' that goes from opacity 0 to 1.",
          "input_format": "None",
          "output_format": "@keyframes",
          "code_css": "@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1583,
          "problem_statement": "Apply an animation named 'spin' that lasts 2s, loops infinitely, and has a linear speed.",
          "input_format": "None",
          "output_format": "Infinite spin",
          "code_css": ".spinner {\n  animation: spin 2s linear infinite;\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1584,
          "problem_statement": "Ensure an animation named 'slide' stops at its final position instead of resetting.",
          "input_format": "None",
          "output_format": "Fill-mode forwards",
          "code_css": ".box {\n  animation: slide 1s forwards;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1585,
          "problem_statement": "Create a bounce effect where an element moves up 20px at 50% of the animation.",
          "input_format": "None",
          "output_format": "Intermediate keyframe",
          "code_css": "@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1586,
          "problem_statement": "Scale an image to 1.2x size smoothly when hovered using transform.",
          "input_format": "None",
          "output_format": "Scale transition",
          "code_css": "img {\n  transition: transform 0.5s;\n}\nimg:hover {\n  transform: scale(1.2);\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1587,
          "problem_statement": "Pause an animation with class 'flow' when the mouse is over its parent.",
          "input_format": "None",
          "output_format": "Pause state",
          "code_css": ".parent:hover .flow {\n  animation-play-state: paused;\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1588,
          "problem_statement": "Use a staggered transition delay for three spans (0.1s, 0.2s, 0.3s).",
          "input_format": "None",
          "output_format": "Staggered delay",
          "code_css": "span:nth-child(1) { transition-delay: 0.1s; }\nspan:nth-child(2) { transition-delay: 0.2s; }\nspan:nth-child(3) { transition-delay: 0.3s; }",
          "difficulty": "Hard"
        }
      ]
    },
    {
      "unit_name": "16. Media Queries and Responsive Design",
      "mcqs": [
        {
          "id": 1601,
          "question": "Which @-rule is used to apply styles based on device characteristics?",
          "options": [
            "@media",
            "@screen",
            "@responsive",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard for conditional styling.",
          "difficulty": "Easy"
        },
        {
          "id": 1602,
          "question": "Which media type is used for computer screens, tablets, and phones?",
          "options": [
            "screen",
            "print",
            "speech",
            "all"
          ],
          "correct_option": "A",
          "explanation": "Target digital displays.",
          "difficulty": "Easy"
        },
        {
          "id": 1603,
          "question": "What is the 'Viewport'?",
          "options": [
            "The user's visible area of a web page",
            "The browser's toolbar",
            "The monitor's resolution",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Critical for mobile layout.",
          "difficulty": "Easy"
        },
        {
          "id": 1604,
          "question": "Which meta tag is required for responsive design?",
          "options": [
            "viewport",
            "charset",
            "description",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Controls scaling on mobile.",
          "difficulty": "Easy"
        },
        {
          "id": 1605,
          "question": "What does 'width=device-width' do in the viewport meta tag?",
          "options": [
            "Sets page width to match device screen",
            "Forces 1000px width",
            "Zooms in",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Ensures proper scaling.",
          "difficulty": "Medium"
        },
        {
          "id": 1606,
          "question": "CSS strategy that starts with small screen styles first?",
          "options": [
            "Mobile First",
            "Desktop First",
            "Tablet First",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Industry standard approach.",
          "difficulty": "Easy"
        },
        {
          "id": 1607,
          "question": "Which logical operator combines multiple media features?",
          "options": [
            "and",
            "plus",
            "with",
            "None"
          ],
          "correct_option": "A",
          "explanation": "e.g., (min-width: 600px) and (orientation: landscape).",
          "difficulty": "Easy"
        },
        {
          "id": 1608,
          "question": "Difference between 'min-width' and 'max-width'?",
          "options": [
            "min: styles for larger screens; max: styles for smaller screens",
            "min: for mobile; max: for desktop",
            "No difference",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Logic for breakpoints.",
          "difficulty": "Medium"
        },
        {
          "id": 1609,
          "question": "Which unit is relative to the viewport's total width?",
          "options": [
            "vw",
            "vh",
            "rem",
            "%"
          ],
          "correct_option": "A",
          "explanation": "1vw = 1% of viewport width.",
          "difficulty": "Easy"
        },
        {
          "id": 1610,
          "question": "What is a 'Breakpoint'?",
          "options": [
            "Screen width where layout changes",
            "A bug in the code",
            "The end of a CSS file",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Defined by media queries.",
          "difficulty": "Easy"
        },
        {
          "id": 1611,
          "question": "Common breakpoint for typical mobile devices?",
          "options": [
            "480px",
            "1024px",
            "1920px",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard mobile threshold.",
          "difficulty": "Medium"
        },
        {
          "id": 1612,
          "question": "Which property allows an image to scale with its container but not exceed original size?",
          "options": [
            "max-width: 100%; height: auto;",
            "width: 100%;",
            "object-fit: contain;",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Basic 'fluid image' technique.",
          "difficulty": "Medium"
        },
        {
          "id": 1613,
          "question": "Logical operator to exclude a media type?",
          "options": [
            "not",
            "except",
            "minus",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Reverses the query.",
          "difficulty": "Hard"
        },
        {
          "id": 1614,
          "question": "What is 'orientation: landscape' targeting?",
          "options": [
            "Devices wider than they are tall",
            "Portrait mode",
            "High-res screens",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Landscape/Portrait feature.",
          "difficulty": "Easy"
        },
        {
          "id": 1615,
          "question": "Which unit is best for accessible font sizing in responsive design?",
          "options": [
            "rem",
            "px",
            "cm",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Respects user's browser settings.",
          "difficulty": "Medium"
        },
        {
          "id": 1616,
          "question": "Does '@media print' hide elements with 'display: none'?",
          "options": [
            "Yes (standard technique for hiding UI navs for print)",
            "No",
            "Only on paper",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Print stylesheet usage.",
          "difficulty": "Medium"
        },
        {
          "id": 1617,
          "question": "What is 'aspect-ratio' media feature?",
          "options": [
            "Ratio of width to height",
            "Screen brightness",
            "Color depth",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Modern feature for videos/images.",
          "difficulty": "Hard"
        },
        {
          "id": 1618,
          "question": "Keyword for high-resolution screens?",
          "options": [
            "resolution",
            "min-device-pixel-ratio",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Check for Retina/High-DPI.",
          "difficulty": "Hard"
        },
        {
          "id": 1619,
          "question": "How to chain media queries that check for EITHER feature?",
          "options": [
            "comma separated list",
            "or",
            "pipe (|)",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Comma acts as OR.",
          "difficulty": "Hard"
        },
        {
          "id": 1620,
          "question": "Can media queries be nested inside other CSS rules?",
          "options": [
            "Yes (in modern CSS)",
            "No",
            "Only in SASS",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Native CSS nesting support.",
          "difficulty": "Hard"
        },
        {
          "id": 1621,
          "question": "Is 'hover' a detectable media feature?",
          "options": [
            "Yes (any-hover: hover)",
            "No",
            "Only via JS",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Mobile vs Mouse detection.",
          "difficulty": "Hard"
        },
        {
          "id": 1622,
          "question": "Default value of 'initial-scale' in viewport tag?",
          "options": [
            "1.0",
            "0",
            "100%",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard 1:1 zoom.",
          "difficulty": "Easy"
        },
        {
          "id": 1623,
          "question": "Percentage (%) width is relative to?",
          "options": [
            "Parent width",
            "Viewport width",
            "Screen width",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Constraint propagation.",
          "difficulty": "Easy"
        },
        {
          "id": 1624,
          "question": "Which value of 'flex-basis' is best for responsive columns?",
          "options": [
            "auto or percentage",
            "fixed px",
            "100vh",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Flexible initial sizing.",
          "difficulty": "Medium"
        },
        {
          "id": 1625,
          "question": "What is 'light-level' media feature?",
          "options": [
            "Ambient light sensor reading",
            "Screen brightness",
            "CSS color mode",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Experimental feature.",
          "difficulty": "Hard"
        },
        {
          "id": 1626,
          "question": "Does media query affect SEO?",
          "options": [
            "Yes (Google favors mobile-friendly sites)",
            "No",
            "Only on Bing",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Mobile-first indexing.",
          "difficulty": "Medium"
        },
        {
          "id": 1627,
          "question": "Media feature to detect dark mode preference?",
          "options": [
            "prefers-color-scheme",
            "color-mode",
            "dark-active",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard for dark/light themes.",
          "difficulty": "Medium"
        },
        {
          "id": 1628,
          "question": "Which @media value targets only screen and print?",
          "options": [
            "screen, print",
            "all",
            "multiscreen",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Comma separates targets.",
          "difficulty": "Easy"
        },
        {
          "id": 1629,
          "question": "Is it possible to use media queries for JS?",
          "options": [
            "Yes (window.matchMedia)",
            "No",
            "Only in React",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Browser API integration.",
          "difficulty": "Hard"
        },
        {
          "id": 1630,
          "question": "Common reason for horizontal scroll on mobile?",
          "options": [
            "Fixed-width elements exceeding viewport",
            "Large fonts",
            "Padding",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Breaking the container.",
          "difficulty": "Easy"
        }
      ],
      "theory_questions": [
        {
          "id": 1651,
          "question": "Logic behind 'Mobile-First' Design.",
          "model_answer": "Writing styles for small screens by default and progressively adding complexity for larger screens using min-width. It reduces code bloat and prioritizes performance.",
          "key_points": [
            "Progressive enhancement",
            "Performance",
            "Code efficiency"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1652,
          "question": "Explain the Viewport Meta Tag components.",
          "model_answer": "width=device-width makes the page match device width. initial-scale=1.0 sets the zoom level. user-scalable=no (not recommended) prevents zooming.",
          "key_points": [
            "Device width",
            "Scaling",
            "User zoom"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1653,
          "question": "Difference between 'em' and 'rem' in responsive design.",
          "model_answer": "em is relative to the parent font-size (can cause compounding issues). rem is relative to the root (html) font-size, making it more predictable.",
          "key_points": [
            "Parent vs Root",
            "Compounding",
            "Scalability"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1654,
          "question": "How to handle high-resolution (Retina) images?",
          "model_answer": "Use media queries for 'min-resolution' to swap standard images for @2x versions, or use the HTML 'srcset' attribute for responsive images.",
          "key_points": [
            "DPI check",
            "Srcset",
            "Asset swapping"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1655,
          "question": "What is 'Fluid Layout'?",
          "model_answer": "A design that uses relative units (%, vw) instead of fixed units (px). This allows components to resize smoothly across all resolutions.",
          "key_points": [
            "Relative units",
            "Smooth resizing",
            "Resolution independence"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1656,
          "question": "Common Breakpoints and their justification.",
          "model_answer": "Standard breakpoints are usually 480px (mobile), 768px (tablet), 1024px (laptop), and 1200px+ (desktop). They map to physical device ranges.",
          "key_points": [
            "Device ranges",
            "Thresholds",
            "Layout shifting"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1657,
          "question": "Explain the 'not' operator in media queries.",
          "model_answer": "It negates the query. e.g., '@media not screen' targets print/speech. Note: it requires a media type to be specified.",
          "key_points": [
            "Negation",
            "Type requirement",
            "Filter usage"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1658,
          "question": "Responsive Typography techniques.",
          "model_answer": "Using 'clamp(min, preferred, max)' or calc() with viewport units (e.g. 2vw + 1rem) to make text scale fluidly with the screen.",
          "key_points": [
            "Clamp()",
            "Calc() + VW",
            "Legibility"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1659,
          "question": "What is 'Container Queries' vs 'Media Queries'?",
          "model_answer": "Media queries check the viewport size. Container queries check the specific parent container size, allowing components to be more modular.",
          "key_points": [
            "Viewport vs Parent",
            "Modularity",
            "Modern CSS"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1660,
          "question": "The 'prefers-reduced-motion' query.",
          "model_answer": "A user setting that signals the browser to avoid unnecessary animations. Crucial for users with vestibular disorders.",
          "key_points": [
            "A11y",
            "Motion reduction",
            "User preference"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 1681,
          "problem_statement": "Change the body background to blue only on screens smaller than 600px.",
          "input_format": "None",
          "output_format": "Max-width query",
          "code_css": "@media (max-width: 600px) {\n  body {\n    background-color: blue;\n  }\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1682,
          "problem_statement": "Hide an element with ID 'sidebar' on mobile (max-width: 480px).",
          "input_format": "None",
          "output_format": "Conditional hide",
          "code_css": "@media (max-width: 480px) {\n  #sidebar {\n    display: none;\n  }\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1683,
          "problem_statement": "Set the font size to 14px on mobile and 18px on screens wider than 1024px.",
          "input_format": "None",
          "output_format": "Mobile-first approach",
          "code_css": "body {\n  font-size: 14px;\n}\n@media (min-width: 1024px) {\n  body {\n    font-size: 18px;\n  }\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1684,
          "problem_statement": "Make a div with class 'container' occupy 100% width on small screens and 80% on large screens (min-width: 768px).",
          "input_format": "None",
          "output_format": "Fluid container",
          "code_css": ".container {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 80%;\n  }\n}",
          "difficulty": "Easy"
        },
        {
          "id": 1685,
          "problem_statement": "Add a special style for devices in landscape orientation.",
          "input_format": "None",
          "output_format": "Orientation query",
          "code_css": "@media (orientation: landscape) {\n  .hero {\n    height: 100vh;\n  }\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1686,
          "problem_statement": "Use calc() to set a width that is 100% minus 50px of padding.",
          "input_format": "None",
          "output_format": "Responsive math",
          "code_css": ".box {\n  width: calc(100% - 50px);\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1687,
          "problem_statement": "Apply dark mode styles using the prefers-color-scheme feature.",
          "input_format": "None",
          "output_format": "Dark mode query",
          "code_css": "@media (prefers-color-scheme: dark) {\n  body {\n    background: black;\n    color: white;\n  }\n}",
          "difficulty": "Medium"
        },
        {
          "id": 1688,
          "problem_statement": "Create a query that targets ONLY screens between 768px and 1024px width.",
          "input_format": "None",
          "output_format": "Range query",
          "code_css": "@media (min-width: 768px) and (max-width: 1024px) {\n  .content {\n    padding: 20px;\n  }\n}",
          "difficulty": "Hard"
        }
      ]
    },
    {
      "unit_name": "17. Introduction to DOM & Selectors",
      "mcqs": [
        {
          "id": 1701,
          "question": "What does DOM stand for?",
          "options": [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Markup",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard tree representation of HTML.",
          "difficulty": "Easy"
        },
        {
          "id": 1702,
          "question": "Which method selects an element by its ID?",
          "options": [
            "document.getElementById()",
            "document.querySelector()",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Both work, but getElementById is faster.",
          "difficulty": "Easy"
        },
        {
          "id": 1703,
          "question": "Which method returns ALL elements matching a CSS selector?",
          "options": [
            "querySelectorAll()",
            "getElementsByClassName()",
            "Both A and B",
            "None"
          ],
          "correct_option": "A",
          "explanation": "querySelectorAll is most versatile.",
          "difficulty": "Easy"
        },
        {
          "id": 1704,
          "question": "What does querySelector() return if no match is found?",
          "options": [
            "null",
            "undefined",
            "empty array",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Returns null for no match.",
          "difficulty": "Medium"
        },
        {
          "id": 1705,
          "question": "Difference between getElementById and querySelector?",
          "options": [
            "getElementById is faster; querySelector is more flexible",
            "No difference",
            "querySelector is faster",
            "None"
          ],
          "correct_option": "A",
          "explanation": "ID lookup is optimized.",
          "difficulty": "Medium"
        },
        {
          "id": 1706,
          "question": "Which property gets/sets the HTML content of an element?",
          "options": [
            "innerHTML",
            "textContent",
            "innerText",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Parses HTML tags.",
          "difficulty": "Easy"
        },
        {
          "id": 1707,
          "question": "Which property gets ONLY the text (no HTML tags)?",
          "options": [
            "textContent",
            "innerHTML",
            "value",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Strips all markup.",
          "difficulty": "Easy"
        },
        {
          "id": 1708,
          "question": "How to change an element's CSS class?",
          "options": [
            "element.className or element.classList",
            "element.class",
            "element.style.class",
            "None"
          ],
          "correct_option": "A",
          "explanation": "classList is preferred for manipulation.",
          "difficulty": "Medium"
        },
        {
          "id": 1709,
          "question": "Which method adds a class without removing existing ones?",
          "options": [
            "classList.add()",
            "className +=",
            "Both A and B",
            "None"
          ],
          "correct_option": "A",
          "explanation": "classList is safer.",
          "difficulty": "Easy"
        },
        {
          "id": 1710,
          "question": "How to check if an element has a specific class?",
          "options": [
            "classList.contains()",
            "hasClass()",
            "className.includes()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard DOM API.",
          "difficulty": "Easy"
        },
        {
          "id": 1711,
          "question": "What does element.style.color = 'red' do?",
          "options": [
            "Sets inline style",
            "Sets stylesheet rule",
            "Changes CSS file",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Inline styles have high specificity.",
          "difficulty": "Easy"
        },
        {
          "id": 1712,
          "question": "Which property accesses an element's parent?",
          "options": [
            "parentElement",
            "parent",
            "parentNode",
            "Both A and C"
          ],
          "correct_option": "D",
          "explanation": "Both work; parentElement is more common.",
          "difficulty": "Medium"
        },
        {
          "id": 1713,
          "question": "Which property gets all child elements (not text nodes)?",
          "options": [
            "children",
            "childNodes",
            "kids",
            "None"
          ],
          "correct_option": "A",
          "explanation": "childNodes includes text/comments.",
          "difficulty": "Hard"
        },
        {
          "id": 1714,
          "question": "How to get the first child element?",
          "options": [
            "firstElementChild",
            "firstChild",
            "children[0]",
            "Both A and C"
          ],
          "correct_option": "D",
          "explanation": "firstChild may return text node.",
          "difficulty": "Hard"
        },
        {
          "id": 1715,
          "question": "Which method creates a new element?",
          "options": [
            "document.createElement()",
            "document.newElement()",
            "new Element()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard factory method.",
          "difficulty": "Easy"
        },
        {
          "id": 1716,
          "question": "How to append a child to an element?",
          "options": [
            "appendChild()",
            "append()",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "append() is newer and more flexible.",
          "difficulty": "Medium"
        },
        {
          "id": 1717,
          "question": "Difference between appendChild and append?",
          "options": [
            "append can add multiple nodes and text; appendChild only one node",
            "No difference",
            "appendChild is newer",
            "None"
          ],
          "correct_option": "A",
          "explanation": "append() is more versatile.",
          "difficulty": "Hard"
        },
        {
          "id": 1718,
          "question": "How to remove an element from the DOM?",
          "options": [
            "element.remove()",
            "element.delete()",
            "parent.removeChild(element)",
            "Both A and C"
          ],
          "correct_option": "D",
          "explanation": "remove() is modern; removeChild is legacy.",
          "difficulty": "Medium"
        },
        {
          "id": 1719,
          "question": "Which property gets/sets an input's value?",
          "options": [
            "value",
            "innerHTML",
            "textContent",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard for form inputs.",
          "difficulty": "Easy"
        },
        {
          "id": 1720,
          "question": "How to get an attribute value?",
          "options": [
            "getAttribute()",
            "attr()",
            "element.attribute",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard DOM method.",
          "difficulty": "Easy"
        },
        {
          "id": 1721,
          "question": "How to set a custom data attribute?",
          "options": [
            "setAttribute('data-name', value) or dataset.name",
            "data.name",
            "setData()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "dataset is modern shorthand.",
          "difficulty": "Medium"
        },
        {
          "id": 1722,
          "question": "What does querySelectorAll return?",
          "options": [
            "NodeList",
            "Array",
            "HTMLCollection",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Static snapshot of matches.",
          "difficulty": "Hard"
        },
        {
          "id": 1723,
          "question": "Can you use forEach on a NodeList?",
          "options": [
            "Yes (modern browsers)",
            "No",
            "Only with polyfill",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Native support added.",
          "difficulty": "Medium"
        },
        {
          "id": 1724,
          "question": "Which is faster: getElementById or querySelector('#id')?",
          "options": [
            "getElementById",
            "querySelector",
            "Same speed",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Direct hash lookup.",
          "difficulty": "Hard"
        },
        {
          "id": 1725,
          "question": "How to select all paragraphs inside a div with class 'content'?",
          "options": [
            "document.querySelectorAll('.content p')",
            "document.getElements('.content p')",
            "document.select('.content p')",
            "None"
          ],
          "correct_option": "A",
          "explanation": "CSS selector syntax.",
          "difficulty": "Medium"
        },
        {
          "id": 1726,
          "question": "What does element.cloneNode(true) do?",
          "options": [
            "Deep clone (with children)",
            "Shallow clone",
            "Moves the element",
            "None"
          ],
          "correct_option": "A",
          "explanation": "true = deep copy.",
          "difficulty": "Hard"
        },
        {
          "id": 1727,
          "question": "Which property checks if an element is visible?",
          "options": [
            "None (use getComputedStyle or offsetParent)",
            "isVisible",
            "visible",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No direct property exists.",
          "difficulty": "Hard"
        },
        {
          "id": 1728,
          "question": "How to insert an element before another?",
          "options": [
            "parent.insertBefore(new, existing)",
            "element.before()",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "before() is modern shorthand.",
          "difficulty": "Medium"
        },
        {
          "id": 1729,
          "question": "What is the root element of the DOM?",
          "options": [
            "document.documentElement (html tag)",
            "document.body",
            "document.root",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Points to <html>.",
          "difficulty": "Medium"
        },
        {
          "id": 1730,
          "question": "Can you modify the DOM before DOMContentLoaded fires?",
          "options": [
            "Yes (if script is after elements)",
            "No",
            "Only with defer",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Script placement matters.",
          "difficulty": "Hard"
        }
      ],
      "theory_questions": [
        {
          "id": 1751,
          "question": "Explain the DOM tree structure.",
          "model_answer": "The DOM represents HTML as a tree of nodes. Each element is a node with parent, children, and siblings. The root is document, with documentElement (<html>) as the first child.",
          "key_points": [
            "Tree hierarchy",
            "Node relationships",
            "Document root"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1752,
          "question": "Difference between innerHTML and textContent.",
          "model_answer": "innerHTML parses and renders HTML tags. textContent treats everything as plain text and is safer against XSS attacks.",
          "key_points": [
            "HTML parsing",
            "Security",
            "Performance"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1753,
          "question": "When to use querySelector vs getElementById?",
          "model_answer": "Use getElementById for simple ID lookups (faster). Use querySelector when you need complex CSS selectors or consistency across selection methods.",
          "key_points": [
            "Performance",
            "Flexibility",
            "Use case"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1754,
          "question": "Explain NodeList vs HTMLCollection.",
          "model_answer": "NodeList is static (snapshot). HTMLCollection is live (auto-updates when DOM changes). querySelectorAll returns NodeList; getElementsByClassName returns HTMLCollection.",
          "key_points": [
            "Static vs Live",
            "Update behavior",
            "Method differences"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1755,
          "question": "What are data attributes and their use?",
          "model_answer": "Custom attributes prefixed with 'data-' (e.g., data-user-id). Accessed via dataset property. Used to store extra information on elements without affecting layout.",
          "key_points": [
            "Custom storage",
            "Dataset API",
            "Semantic separation"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1756,
          "question": "Explain classList methods.",
          "model_answer": "classList.add() adds classes, remove() removes them, toggle() switches, contains() checks existence, replace() swaps one for another. Safer than manipulating className string.",
          "key_points": [
            "Add/Remove/Toggle",
            "Safety",
            "Modern API"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1757,
          "question": "Difference between children and childNodes.",
          "model_answer": "children returns only element nodes. childNodes returns all nodes including text nodes, comments, and whitespace. children is usually preferred.",
          "key_points": [
            "Element vs All nodes",
            "Whitespace handling",
            "Common usage"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1758,
          "question": "How does element.remove() differ from removeChild?",
          "model_answer": "remove() is called on the element itself (modern). removeChild() is called on the parent and requires a reference to both. remove() is simpler.",
          "key_points": [
            "Modern vs Legacy",
            "Syntax simplicity",
            "Browser support"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1759,
          "question": "What is the purpose of cloneNode?",
          "model_answer": "Creates a copy of a node. cloneNode(true) does a deep clone (with children), cloneNode(false) is shallow. Useful for templates and duplication.",
          "key_points": [
            "Deep vs Shallow",
            "Template pattern",
            "Event listeners not copied"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1760,
          "question": "Explain DOMContentLoaded vs load events.",
          "model_answer": "DOMContentLoaded fires when HTML is parsed and DOM is ready (images may still load). load fires when all resources (images, CSS) are fully loaded.",
          "key_points": [
            "Timing difference",
            "Resource loading",
            "Performance implications"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 1781,
          "problem_statement": "Select an element with ID 'header' and change its text to 'Welcome'.",
          "input_format": "None",
          "output_format": "DOM selection",
          "code_js": "const header = document.getElementById('header');\nheader.textContent = 'Welcome';",
          "difficulty": "Easy"
        },
        {
          "id": 1782,
          "problem_statement": "Select all elements with class 'item' and log their count.",
          "input_format": "None",
          "output_format": "NodeList",
          "code_js": "const items = document.querySelectorAll('.item');\nconsole.log(items.length);",
          "difficulty": "Easy"
        },
        {
          "id": 1783,
          "problem_statement": "Add a class 'active' to an element with ID 'menu'.",
          "input_format": "None",
          "output_format": "classList",
          "code_js": "const menu = document.getElementById('menu');\nmenu.classList.add('active');",
          "difficulty": "Easy"
        },
        {
          "id": 1784,
          "problem_statement": "Create a new paragraph element with text 'Hello' and append it to body.",
          "input_format": "None",
          "output_format": "createElement",
          "code_js": "const p = document.createElement('p');\np.textContent = 'Hello';\ndocument.body.appendChild(p);",
          "difficulty": "Medium"
        },
        {
          "id": 1785,
          "problem_statement": "Remove an element with ID 'old-banner' from the DOM.",
          "input_format": "None",
          "output_format": "remove",
          "code_js": "const banner = document.getElementById('old-banner');\nbanner.remove();",
          "difficulty": "Easy"
        },
        {
          "id": 1786,
          "problem_statement": "Get the value of an input with ID 'username' and log it.",
          "input_format": "None",
          "output_format": "input value",
          "code_js": "const input = document.getElementById('username');\nconsole.log(input.value);",
          "difficulty": "Easy"
        },
        {
          "id": 1787,
          "problem_statement": "Set a data attribute 'data-user-id' to '123' on an element with ID 'profile'.",
          "input_format": "None",
          "output_format": "dataset",
          "code_js": "const profile = document.getElementById('profile');\nprofile.dataset.userId = '123';",
          "difficulty": "Medium"
        },
        {
          "id": 1788,
          "problem_statement": "Toggle class 'hidden' on an element with ID 'sidebar'.",
          "input_format": "None",
          "output_format": "classList toggle",
          "code_js": "const sidebar = document.getElementById('sidebar');\nsidebar.classList.toggle('hidden');",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "18. DOM Events and Event Handling",
      "mcqs": [
        {
          "id": 1801,
          "question": "Which method adds an event listener to an element?",
          "options": [
            "addEventListener()",
            "attachEvent()",
            "on()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard modern API.",
          "difficulty": "Easy"
        },
        {
          "id": 1802,
          "question": "How to remove an event listener?",
          "options": [
            "removeEventListener()",
            "detachEvent()",
            "off()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Must match exact function reference.",
          "difficulty": "Easy"
        },
        {
          "id": 1803,
          "question": "What is event.preventDefault()?",
          "options": [
            "Stops default browser behavior",
            "Stops event propagation",
            "Removes the event",
            "None"
          ],
          "correct_option": "A",
          "explanation": "e.g., prevents form submission.",
          "difficulty": "Easy"
        },
        {
          "id": 1804,
          "question": "What does event.stopPropagation() do?",
          "options": [
            "Stops event from bubbling/capturing further",
            "Prevents default action",
            "Removes listener",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Halts propagation chain.",
          "difficulty": "Medium"
        },
        {
          "id": 1805,
          "question": "Which phase happens first in event propagation?",
          "options": [
            "Capturing",
            "Bubbling",
            "Target",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Capture â†’ Target â†’ Bubble.",
          "difficulty": "Hard"
        },
        {
          "id": 1806,
          "question": "How to listen during the capturing phase?",
          "options": [
            "addEventListener('click', fn, true)",
            "addEventListener('click', fn, {capture: true})",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "Third parameter enables capture.",
          "difficulty": "Hard"
        },
        {
          "id": 1807,
          "question": "What is event delegation?",
          "options": [
            "Attaching one listener to a parent for multiple children",
            "Delegating events to server",
            "Removing events",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Efficient pattern for dynamic elements.",
          "difficulty": "Medium"
        },
        {
          "id": 1808,
          "question": "Which property gets the element that triggered the event?",
          "options": [
            "event.target",
            "event.currentTarget",
            "event.element",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Original source of event.",
          "difficulty": "Easy"
        },
        {
          "id": 1809,
          "question": "Difference between event.target and event.currentTarget?",
          "options": [
            "target = where event originated; currentTarget = where listener is attached",
            "No difference",
            "currentTarget is deprecated",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Critical for delegation.",
          "difficulty": "Hard"
        },
        {
          "id": 1810,
          "question": "Which event fires when a key is pressed?",
          "options": [
            "keydown",
            "keypress",
            "keyup",
            "All of the above"
          ],
          "correct_option": "A",
          "explanation": "keydown is most common.",
          "difficulty": "Easy"
        },
        {
          "id": 1811,
          "question": "Which event fires when an input value changes?",
          "options": [
            "input",
            "change",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "'input' fires immediately; 'change' on blur.",
          "difficulty": "Medium"
        },
        {
          "id": 1812,
          "question": "How to pass custom data to an event listener?",
          "options": [
            "Use arrow function or bind()",
            "event.data",
            "listener.data",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Closure or bind method.",
          "difficulty": "Hard"
        },
        {
          "id": 1813,
          "question": "What is event.stopImmediatePropagation()?",
          "options": [
            "Stops propagation AND prevents other listeners on same element",
            "Same as stopPropagation",
            "Deprecated",
            "None"
          ],
          "correct_option": "A",
          "explanation": "More aggressive than stopPropagation.",
          "difficulty": "Hard"
        },
        {
          "id": 1814,
          "question": "Which event fires when the mouse enters an element (no bubbling)?",
          "options": [
            "mouseenter",
            "mouseover",
            "hover",
            "None"
          ],
          "correct_option": "A",
          "explanation": "mouseenter doesn't bubble.",
          "difficulty": "Medium"
        },
        {
          "id": 1815,
          "question": "Which event fires when the mouse leaves an element (no bubbling)?",
          "options": [
            "mouseleave",
            "mouseout",
            "exit",
            "None"
          ],
          "correct_option": "A",
          "explanation": "mouseleave doesn't bubble.",
          "difficulty": "Medium"
        },
        {
          "id": 1816,
          "question": "What is the 'once' option in addEventListener?",
          "options": [
            "Listener fires only once then auto-removes",
            "Fires once per second",
            "Deprecated",
            "None"
          ],
          "correct_option": "A",
          "explanation": "{once: true} option.",
          "difficulty": "Medium"
        },
        {
          "id": 1817,
          "question": "Can you have multiple listeners for the same event on one element?",
          "options": [
            "Yes",
            "No",
            "Only with jQuery",
            "None"
          ],
          "correct_option": "A",
          "explanation": "All will execute in order.",
          "difficulty": "Easy"
        },
        {
          "id": 1818,
          "question": "What is event.which (deprecated)?",
          "options": [
            "Keycode or mouse button number",
            "Event type",
            "Element ID",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Use event.key or event.button instead.",
          "difficulty": "Hard"
        },
        {
          "id": 1819,
          "question": "Which event fires when a form is submitted?",
          "options": [
            "submit",
            "send",
            "post",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Triggered on <form> element.",
          "difficulty": "Easy"
        },
        {
          "id": 1820,
          "question": "How to prevent a form from submitting?",
          "options": [
            "event.preventDefault() on submit event",
            "return false",
            "Both A and B",
            "None"
          ],
          "correct_option": "A",
          "explanation": "preventDefault is standard.",
          "difficulty": "Easy"
        },
        {
          "id": 1821,
          "question": "Which event fires when an element loses focus?",
          "options": [
            "blur",
            "focusout",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "blur doesn't bubble; focusout does.",
          "difficulty": "Medium"
        },
        {
          "id": 1822,
          "question": "Which event fires when an element gains focus?",
          "options": [
            "focus",
            "focusin",
            "Both A and B",
            "None"
          ],
          "correct_option": "C",
          "explanation": "focus doesn't bubble; focusin does.",
          "difficulty": "Medium"
        },
        {
          "id": 1823,
          "question": "What is the 'passive' option for event listeners?",
          "options": [
            "Tells browser listener won't call preventDefault (performance)",
            "Listener is inactive",
            "Deprecated",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Improves scroll performance.",
          "difficulty": "Hard"
        },
        {
          "id": 1824,
          "question": "Which event fires when the page finishes loading?",
          "options": [
            "load",
            "DOMContentLoaded",
            "ready",
            "None"
          ],
          "correct_option": "A",
          "explanation": "load waits for all resources.",
          "difficulty": "Easy"
        },
        {
          "id": 1825,
          "question": "Which event fires when the DOM is ready (before images load)?",
          "options": [
            "DOMContentLoaded",
            "load",
            "ready",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Faster than 'load'.",
          "difficulty": "Easy"
        },
        {
          "id": 1826,
          "question": "Can you add event listeners to text nodes?",
          "options": [
            "No (only element nodes)",
            "Yes",
            "Only in Firefox",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Text nodes don't support events.",
          "difficulty": "Hard"
        },
        {
          "id": 1827,
          "question": "What is event.type?",
          "options": [
            "Name of the event (e.g., 'click')",
            "Data type",
            "Element type",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Useful in shared handlers.",
          "difficulty": "Easy"
        },
        {
          "id": 1828,
          "question": "Which event fires when the window is resized?",
          "options": [
            "resize",
            "sizechange",
            "windowresize",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Fires on window object.",
          "difficulty": "Easy"
        },
        {
          "id": 1829,
          "question": "Which event fires when the user scrolls?",
          "options": [
            "scroll",
            "scrolling",
            "onscroll",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Can be throttled for performance.",
          "difficulty": "Easy"
        },
        {
          "id": 1830,
          "question": "What is event bubbling?",
          "options": [
            "Event travels from target up to root",
            "Event travels from root down to target",
            "Event loops infinitely",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Default propagation direction.",
          "difficulty": "Medium"
        }
      ],
      "theory_questions": [
        {
          "id": 1851,
          "question": "Explain the three phases of event propagation.",
          "model_answer": "1) Capturing: event travels from window down to target. 2) Target: event reaches the target element. 3) Bubbling: event travels back up to window. Most listeners use bubbling phase.",
          "key_points": [
            "Capture phase",
            "Target phase",
            "Bubble phase"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1852,
          "question": "What is event delegation and its benefits?",
          "model_answer": "Attaching a single event listener to a parent element to handle events from multiple children. Benefits: fewer listeners (better performance), works with dynamically added elements.",
          "key_points": [
            "Single parent listener",
            "Performance",
            "Dynamic elements"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1853,
          "question": "Difference between addEventListener and onclick.",
          "model_answer": "addEventListener allows multiple listeners for same event and provides more control (capture/passive/once). onclick can only have one handler and is less flexible.",
          "key_points": [
            "Multiple listeners",
            "Options",
            "Modern vs legacy"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1854,
          "question": "When to use preventDefault vs stopPropagation?",
          "model_answer": "preventDefault stops default browser action (e.g., link navigation, form submit). stopPropagation stops event from reaching other elements. They serve different purposes.",
          "key_points": [
            "Default behavior",
            "Event flow",
            "Use cases"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1855,
          "question": "Explain event.target vs event.currentTarget.",
          "model_answer": "event.target is the element that originally triggered the event. event.currentTarget is the element the listener is attached to. They differ when using event delegation.",
          "key_points": [
            "Origin vs Listener",
            "Delegation context",
            "Practical difference"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1856,
          "question": "What are passive event listeners?",
          "model_answer": "Listeners marked with {passive: true} promise not to call preventDefault(). This allows the browser to optimize scrolling performance by not waiting for the listener to complete.",
          "key_points": [
            "Performance optimization",
            "Scroll handling",
            "Browser optimization"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1857,
          "question": "How to remove an event listener properly?",
          "model_answer": "Use removeEventListener with the exact same function reference, event type, and capture setting as addEventListener. Anonymous functions can't be removed.",
          "key_points": [
            "Function reference",
            "Matching parameters",
            "Named functions"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1858,
          "question": "Explain the 'once' option in event listeners.",
          "model_answer": "When {once: true} is set, the listener automatically removes itself after firing once. Useful for one-time actions like welcome modals or initialization.",
          "key_points": [
            "Auto-removal",
            "One-time execution",
            "Use cases"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1859,
          "question": "Difference between 'input' and 'change' events.",
          "model_answer": "'input' fires immediately on every value change. 'change' fires only when the element loses focus (blur). 'input' is better for real-time validation.",
          "key_points": [
            "Timing",
            "Real-time vs deferred",
            "Use cases"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1860,
          "question": "What is event throttling and debouncing?",
          "model_answer": "Throttling limits event handler execution to once per time interval. Debouncing delays execution until events stop firing. Both optimize performance for high-frequency events like scroll/resize.",
          "key_points": [
            "Rate limiting",
            "Performance",
            "Scroll/resize optimization"
          ],
          "marks": 5,
          "difficulty": "Hard"
        }
      ],
      "coding_questions": [
        {
          "id": 1881,
          "problem_statement": "Add a click event listener to a button with ID 'btn' that logs 'Clicked!'.",
          "input_format": "None",
          "output_format": "addEventListener",
          "code_js": "const btn = document.getElementById('btn');\nbtn.addEventListener('click', () => {\n  console.log('Clicked!');\n});",
          "difficulty": "Easy"
        },
        {
          "id": 1882,
          "problem_statement": "Prevent a form with ID 'myForm' from submitting.",
          "input_format": "None",
          "output_format": "preventDefault",
          "code_js": "const form = document.getElementById('myForm');\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n});",
          "difficulty": "Easy"
        },
        {
          "id": 1883,
          "problem_statement": "Add an event listener to a parent UL that logs the text of any clicked LI (event delegation).",
          "input_format": "None",
          "output_format": "Event delegation",
          "code_js": "const ul = document.querySelector('ul');\nul.addEventListener('click', (e) => {\n  if (e.target.tagName === 'LI') {\n    console.log(e.target.textContent);\n  }\n});",
          "difficulty": "Medium"
        },
        {
          "id": 1884,
          "problem_statement": "Log the key pressed when user types in an input with ID 'search'.",
          "input_format": "None",
          "output_format": "keydown event",
          "code_js": "const input = document.getElementById('search');\ninput.addEventListener('keydown', (e) => {\n  console.log(e.key);\n});",
          "difficulty": "Easy"
        },
        {
          "id": 1885,
          "problem_statement": "Change the background color of a div with ID 'box' when mouse enters it.",
          "input_format": "None",
          "output_format": "mouseenter",
          "code_js": "const box = document.getElementById('box');\nbox.addEventListener('mouseenter', () => {\n  box.style.backgroundColor = 'blue';\n});",
          "difficulty": "Easy"
        },
        {
          "id": 1886,
          "problem_statement": "Add a one-time click listener to a button that removes itself after first click.",
          "input_format": "None",
          "output_format": "once option",
          "code_js": "const btn = document.getElementById('btn');\nbtn.addEventListener('click', () => {\n  console.log('Clicked once!');\n}, {once: true});",
          "difficulty": "Medium"
        },
        {
          "id": 1887,
          "problem_statement": "Stop event propagation when clicking a child element inside a parent.",
          "input_format": "None",
          "output_format": "stopPropagation",
          "code_js": "const child = document.getElementById('child');\nchild.addEventListener('click', (e) => {\n  e.stopPropagation();\n  console.log('Child clicked');\n});",
          "difficulty": "Medium"
        },
        {
          "id": 1888,
          "problem_statement": "Execute code only after the DOM is fully loaded.",
          "input_format": "None",
          "output_format": "DOMContentLoaded",
          "code_js": "document.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM is ready!');\n});",
          "difficulty": "Easy"
        }
      ]
    },
    {
      "unit_name": "19. LocalStorage and SessionStorage",
      "mcqs": [
        {
          "id": 1901,
          "question": "What is localStorage?",
          "options": [
            "Browser storage that persists after closing browser",
            "Temporary storage",
            "Server storage",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Data survives browser restarts.",
          "difficulty": "Easy"
        },
        {
          "id": 1902,
          "question": "What is sessionStorage?",
          "options": [
            "Storage that clears when tab/window closes",
            "Permanent storage",
            "Server storage",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Per-tab/window storage.",
          "difficulty": "Easy"
        },
        {
          "id": 1903,
          "question": "How to store data in localStorage?",
          "options": [
            "localStorage.setItem(key, value)",
            "localStorage.set(key, value)",
            "localStorage.save(key, value)",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Standard API method.",
          "difficulty": "Easy"
        },
        {
          "id": 1904,
          "question": "How to retrieve data from localStorage?",
          "options": [
            "localStorage.getItem(key)",
            "localStorage.get(key)",
            "localStorage.read(key)",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Returns null if key doesn't exist.",
          "difficulty": "Easy"
        },
        {
          "id": 1905,
          "question": "How to remove a specific item from localStorage?",
          "options": [
            "localStorage.removeItem(key)",
            "localStorage.delete(key)",
            "localStorage.remove(key)",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Deletes single key-value pair.",
          "difficulty": "Easy"
        },
        {
          "id": 1906,
          "question": "How to clear ALL localStorage data?",
          "options": [
            "localStorage.clear()",
            "localStorage.deleteAll()",
            "localStorage.removeAll()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Removes all keys.",
          "difficulty": "Easy"
        },
        {
          "id": 1907,
          "question": "What data types can localStorage store directly?",
          "options": [
            "Only strings",
            "Any type",
            "Only numbers",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Must convert objects to JSON.",
          "difficulty": "Medium"
        },
        {
          "id": 1908,
          "question": "How to store an object in localStorage?",
          "options": [
            "JSON.stringify() then setItem()",
            "setItem() directly",
            "Object.store()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Convert to JSON string.",
          "difficulty": "Medium"
        },
        {
          "id": 1909,
          "question": "How to retrieve an object from localStorage?",
          "options": [
            "getItem() then JSON.parse()",
            "getItem() directly",
            "Object.retrieve()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Parse JSON string back to object.",
          "difficulty": "Medium"
        },
        {
          "id": 1910,
          "question": "What is the typical storage limit for localStorage?",
          "options": [
            "5-10 MB",
            "100 MB",
            "1 GB",
            "Unlimited"
          ],
          "correct_option": "A",
          "explanation": "Varies by browser.",
          "difficulty": "Medium"
        },
        {
          "id": 1911,
          "question": "Is localStorage accessible across different domains?",
          "options": [
            "No (same-origin policy)",
            "Yes",
            "Only subdomains",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Security restriction.",
          "difficulty": "Hard"
        },
        {
          "id": 1912,
          "question": "Is localStorage synchronous or asynchronous?",
          "options": [
            "Synchronous",
            "Asynchronous",
            "Both",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Can block main thread.",
          "difficulty": "Hard"
        },
        {
          "id": 1913,
          "question": "Difference between localStorage and sessionStorage?",
          "options": [
            "localStorage persists; sessionStorage is per-session",
            "No difference",
            "sessionStorage is faster",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Lifetime differs.",
          "difficulty": "Easy"
        },
        {
          "id": 1914,
          "question": "Can you use localStorage in incognito/private mode?",
          "options": [
            "Yes (but clears when session ends)",
            "No",
            "Only in Chrome",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Behaves like sessionStorage.",
          "difficulty": "Medium"
        },
        {
          "id": 1915,
          "question": "Which event fires when localStorage changes?",
          "options": [
            "storage",
            "change",
            "update",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Fires in OTHER tabs/windows.",
          "difficulty": "Hard"
        },
        {
          "id": 1916,
          "question": "Can you store functions in localStorage?",
          "options": [
            "No (only data)",
            "Yes",
            "Only arrow functions",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Functions can't be serialized.",
          "difficulty": "Medium"
        },
        {
          "id": 1917,
          "question": "How to check if localStorage is available?",
          "options": [
            "Try-catch with setItem/getItem",
            "localStorage.isAvailable()",
            "window.hasLocalStorage",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Feature detection pattern.",
          "difficulty": "Hard"
        },
        {
          "id": 1918,
          "question": "What happens if localStorage quota is exceeded?",
          "options": [
            "QuotaExceededError is thrown",
            "Oldest data is deleted",
            "Nothing",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Must handle error.",
          "difficulty": "Hard"
        },
        {
          "id": 1919,
          "question": "Can localStorage be accessed from web workers?",
          "options": [
            "No",
            "Yes",
            "Only dedicated workers",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Workers have no access to localStorage.",
          "difficulty": "Hard"
        },
        {
          "id": 1920,
          "question": "Is localStorage data encrypted?",
          "options": [
            "No (plain text)",
            "Yes",
            "Only in HTTPS",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Don't store sensitive data.",
          "difficulty": "Medium"
        },
        {
          "id": 1921,
          "question": "How to iterate over all localStorage keys?",
          "options": [
            "Use localStorage.key(i) in a loop",
            "forEach()",
            "for...in",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Access by index.",
          "difficulty": "Medium"
        },
        {
          "id": 1922,
          "question": "What is localStorage.length?",
          "options": [
            "Number of stored items",
            "Total storage used",
            "Storage limit",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Count of key-value pairs.",
          "difficulty": "Easy"
        },
        {
          "id": 1923,
          "question": "Can you use localStorage on file:// protocol?",
          "options": [
            "Depends on browser",
            "Yes",
            "No",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Some browsers block it.",
          "difficulty": "Hard"
        },
        {
          "id": 1924,
          "question": "Best practice for localStorage keys?",
          "options": [
            "Use namespaced/prefixed keys",
            "Short keys",
            "Numeric keys",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Avoid collisions.",
          "difficulty": "Medium"
        },
        {
          "id": 1925,
          "question": "Can localStorage survive browser updates?",
          "options": [
            "Yes (usually)",
            "No",
            "Only in Chrome",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Persistent storage.",
          "difficulty": "Easy"
        },
        {
          "id": 1926,
          "question": "What is the alternative to localStorage for large data?",
          "options": [
            "IndexedDB",
            "Cookies",
            "sessionStorage",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Supports larger datasets.",
          "difficulty": "Hard"
        },
        {
          "id": 1927,
          "question": "Can you store arrays directly in localStorage?",
          "options": [
            "No (must stringify)",
            "Yes",
            "Only number arrays",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Convert to JSON first.",
          "difficulty": "Easy"
        },
        {
          "id": 1928,
          "question": "Does localStorage work offline?",
          "options": [
            "Yes",
            "No",
            "Only with service workers",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Client-side storage.",
          "difficulty": "Easy"
        },
        {
          "id": 1929,
          "question": "Can users clear localStorage manually?",
          "options": [
            "Yes (via browser settings)",
            "No",
            "Only developers can",
            "None"
          ],
          "correct_option": "A",
          "explanation": "User has control.",
          "difficulty": "Easy"
        },
        {
          "id": 1930,
          "question": "Is localStorage shared between HTTP and HTTPS?",
          "options": [
            "No (different origins)",
            "Yes",
            "Only on localhost",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Protocol matters for origin.",
          "difficulty": "Hard"
        }
      ],
      "theory_questions": [
        {
          "id": 1951,
          "question": "Explain localStorage vs sessionStorage vs cookies.",
          "model_answer": "localStorage persists indefinitely, sessionStorage clears on tab close, cookies are sent to server with requests. localStorage/sessionStorage have ~5MB limit; cookies ~4KB. Cookies can have expiration dates.",
          "key_points": [
            "Persistence",
            "Size limits",
            "Server communication"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1952,
          "question": "How to safely store and retrieve objects in localStorage?",
          "model_answer": "Use JSON.stringify() before setItem() and JSON.parse() after getItem(). Wrap in try-catch to handle parsing errors for corrupted data.",
          "key_points": [
            "JSON serialization",
            "Error handling",
            "Data integrity"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 1953,
          "question": "Security concerns with localStorage.",
          "model_answer": "Data is not encrypted and accessible via JavaScript. Vulnerable to XSS attacks. Never store sensitive data like passwords or tokens. Use httpOnly cookies for sensitive data.",
          "key_points": [
            "XSS vulnerability",
            "No encryption",
            "Sensitive data handling"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1954,
          "question": "Explain the 'storage' event.",
          "model_answer": "Fires when localStorage/sessionStorage changes in OTHER tabs/windows of same origin. Allows cross-tab communication. Event contains key, oldValue, newValue, url, and storageArea properties.",
          "key_points": [
            "Cross-tab sync",
            "Event properties",
            "Same-origin"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1955,
          "question": "When to use localStorage vs IndexedDB?",
          "model_answer": "Use localStorage for small, simple key-value data (<5MB). Use IndexedDB for large datasets, complex queries, or when you need transactions and indexes.",
          "key_points": [
            "Size considerations",
            "Complexity",
            "Query needs"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1956,
          "question": "How to implement localStorage with expiration?",
          "model_answer": "Store an object with both value and timestamp. On retrieval, check if current time exceeds timestamp + TTL. If expired, remove item and return null.",
          "key_points": [
            "Timestamp storage",
            "TTL logic",
            "Cleanup"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1957,
          "question": "localStorage performance considerations.",
          "model_answer": "localStorage is synchronous and blocks main thread. Avoid storing large amounts of data or frequent writes. Consider debouncing writes and using web workers for heavy processing.",
          "key_points": [
            "Synchronous blocking",
            "Write frequency",
            "Optimization strategies"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 1958,
          "question": "Handling localStorage quota exceeded errors.",
          "model_answer": "Wrap setItem in try-catch. On QuotaExceededError, either clear old data, compress data, or notify user. Implement LRU (Least Recently Used) eviction strategy.",
          "key_points": [
            "Error handling",
            "Eviction strategies",
            "User notification"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1959,
          "question": "localStorage and same-origin policy.",
          "model_answer": "localStorage is scoped to origin (protocol + domain + port). Different subdomains can't access each other's storage. Use postMessage for cross-origin communication.",
          "key_points": [
            "Origin definition",
            "Subdomain isolation",
            "Cross-origin alternatives"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 1960,
          "question": "Best practices for localStorage usage.",
          "model_answer": "1) Namespace keys to avoid collisions. 2) Validate/sanitize data before storing. 3) Handle quota errors. 4) Don't store sensitive data. 5) Provide fallback for unsupported browsers.",
          "key_points": [
            "Namespacing",
            "Validation",
            "Error handling",
            "Security"
          ],
          "marks": 5,
          "difficulty": "Easy"
        }
      ],
      "coding_questions": [
        {
          "id": 1981,
          "problem_statement": "Store a string 'John' with key 'username' in localStorage.",
          "input_format": "None",
          "output_format": "setItem",
          "code_js": "localStorage.setItem('username', 'John');",
          "difficulty": "Easy"
        },
        {
          "id": 1982,
          "problem_statement": "Retrieve the value stored under key 'username' from localStorage.",
          "input_format": "None",
          "output_format": "getItem",
          "code_js": "const username = localStorage.getItem('username');\nconsole.log(username);",
          "difficulty": "Easy"
        },
        {
          "id": 1983,
          "problem_statement": "Store an object {name: 'Alice', age: 25} with key 'user' in localStorage.",
          "input_format": "None",
          "output_format": "JSON stringify",
          "code_js": "const user = {name: 'Alice', age: 25};\nlocalStorage.setItem('user', JSON.stringify(user));",
          "difficulty": "Medium"
        },
        {
          "id": 1984,
          "problem_statement": "Retrieve and parse the 'user' object from localStorage.",
          "input_format": "None",
          "output_format": "JSON parse",
          "code_js": "const userStr = localStorage.getItem('user');\nconst user = JSON.parse(userStr);\nconsole.log(user);",
          "difficulty": "Medium"
        },
        {
          "id": 1985,
          "problem_statement": "Remove the item with key 'username' from localStorage.",
          "input_format": "None",
          "output_format": "removeItem",
          "code_js": "localStorage.removeItem('username');",
          "difficulty": "Easy"
        },
        {
          "id": 1986,
          "problem_statement": "Clear all data from localStorage.",
          "input_format": "None",
          "output_format": "clear",
          "code_js": "localStorage.clear();",
          "difficulty": "Easy"
        },
        {
          "id": 1987,
          "problem_statement": "Check if localStorage is available and log a message.",
          "input_format": "None",
          "output_format": "Feature detection",
          "code_js": "try {\n  localStorage.setItem('test', 'test');\n  localStorage.removeItem('test');\n  console.log('localStorage available');\n} catch (e) {\n  console.log('localStorage not available');\n}",
          "difficulty": "Hard"
        },
        {
          "id": 1988,
          "problem_statement": "Iterate over all localStorage keys and log them.",
          "input_format": "None",
          "output_format": "Iteration",
          "code_js": "for (let i = 0; i < localStorage.length; i++) {\n  const key = localStorage.key(i);\n  console.log(key);\n}",
          "difficulty": "Medium"
        }
      ]
    },
    {
      "unit_name": "20. Fetch API and Async/Await",
      "mcqs": [
        {
          "id": 2001,
          "question": "What is the Fetch API?",
          "options": [
            "Modern way to make HTTP requests",
            "Database API",
            "File system API",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Replaces XMLHttpRequest.",
          "difficulty": "Easy"
        },
        {
          "id": 2002,
          "question": "What does fetch() return?",
          "options": [
            "Promise",
            "Response object",
            "Data directly",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Returns a Promise that resolves to Response.",
          "difficulty": "Easy"
        },
        {
          "id": 2003,
          "question": "How to get JSON data from a fetch response?",
          "options": [
            "response.json()",
            "response.data",
            "JSON.parse(response)",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Returns a Promise.",
          "difficulty": "Easy"
        },
        {
          "id": 2004,
          "question": "What is async/await?",
          "options": [
            "Syntactic sugar for Promises",
            "New data type",
            "Loop structure",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Makes async code look synchronous.",
          "difficulty": "Easy"
        },
        {
          "id": 2005,
          "question": "Which keyword marks a function as asynchronous?",
          "options": [
            "async",
            "await",
            "promise",
            "None"
          ],
          "correct_option": "A",
          "explanation": "async function always returns Promise.",
          "difficulty": "Easy"
        },
        {
          "id": 2006,
          "question": "What does 'await' do?",
          "options": [
            "Pauses execution until Promise resolves",
            "Creates a Promise",
            "Cancels a Promise",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Only works inside async functions.",
          "difficulty": "Easy"
        },
        {
          "id": 2007,
          "question": "How to handle fetch errors?",
          "options": [
            "try-catch or .catch()",
            "if-else",
            "switch",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Network errors throw exceptions.",
          "difficulty": "Medium"
        },
        {
          "id": 2008,
          "question": "Does fetch reject on 404 or 500 errors?",
          "options": [
            "No (only network failures)",
            "Yes",
            "Only on 500",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Must check response.ok manually.",
          "difficulty": "Hard"
        },
        {
          "id": 2009,
          "question": "How to make a POST request with fetch?",
          "options": [
            "Pass {method: 'POST'} as second argument",
            "fetch.post()",
            "Use POST keyword",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Configure via options object.",
          "difficulty": "Medium"
        },
        {
          "id": 2010,
          "question": "How to send JSON data in a POST request?",
          "options": [
            "JSON.stringify() in body + Content-Type header",
            "Send object directly",
            "Use FormData",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Must set headers and stringify.",
          "difficulty": "Medium"
        },
        {
          "id": 2011,
          "question": "What is response.ok?",
          "options": [
            "Boolean indicating status 200-299",
            "Response data",
            "Error message",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Convenient success check.",
          "difficulty": "Easy"
        },
        {
          "id": 2012,
          "question": "How to set custom headers in fetch?",
          "options": [
            "Pass headers object in options",
            "setHeader()",
            "addHeader()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "headers: {'Key': 'Value'}.",
          "difficulty": "Medium"
        },
        {
          "id": 2013,
          "question": "Can you use await outside an async function?",
          "options": [
            "No (except top-level await in modules)",
            "Yes",
            "Only in strict mode",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Modern JS supports top-level await.",
          "difficulty": "Hard"
        },
        {
          "id": 2014,
          "question": "What is Promise.all()?",
          "options": [
            "Waits for all Promises to resolve",
            "Waits for first Promise",
            "Cancels all Promises",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Rejects if any Promise rejects.",
          "difficulty": "Medium"
        },
        {
          "id": 2015,
          "question": "What is Promise.race()?",
          "options": [
            "Resolves/rejects with first settled Promise",
            "Waits for all",
            "Cancels slowest",
            "None"
          ],
          "correct_option": "A",
          "explanation": "First to finish wins.",
          "difficulty": "Hard"
        },
        {
          "id": 2016,
          "question": "How to cancel a fetch request?",
          "options": [
            "Use AbortController",
            "fetch.cancel()",
            "clearFetch()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Pass signal to fetch options.",
          "difficulty": "Hard"
        },
        {
          "id": 2017,
          "question": "What is CORS?",
          "options": [
            "Cross-Origin Resource Sharing",
            "Cross-Origin Request Security",
            "Cookie Origin Restriction",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Security mechanism for cross-origin requests.",
          "difficulty": "Medium"
        },
        {
          "id": 2018,
          "question": "Default fetch mode?",
          "options": [
            "cors",
            "no-cors",
            "same-origin",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Allows cross-origin requests.",
          "difficulty": "Hard"
        },
        {
          "id": 2019,
          "question": "How to include cookies in fetch?",
          "options": [
            "credentials: 'include'",
            "withCredentials: true",
            "cookies: true",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Options: omit, same-origin, include.",
          "difficulty": "Hard"
        },
        {
          "id": 2020,
          "question": "What is response.text()?",
          "options": [
            "Returns response body as text",
            "Returns JSON",
            "Returns HTML",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Alternative to .json().",
          "difficulty": "Easy"
        },
        {
          "id": 2021,
          "question": "Can you retry a failed fetch?",
          "options": [
            "Yes (manually implement retry logic)",
            "No",
            "Automatic retry",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No built-in retry mechanism.",
          "difficulty": "Medium"
        },
        {
          "id": 2022,
          "question": "What is response.status?",
          "options": [
            "HTTP status code (e.g., 200, 404)",
            "Response data",
            "Error message",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Numeric status code.",
          "difficulty": "Easy"
        },
        {
          "id": 2023,
          "question": "How to handle multiple async operations in sequence?",
          "options": [
            "Use multiple await statements",
            "Promise.all()",
            "Promise.race()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Executes one after another.",
          "difficulty": "Medium"
        },
        {
          "id": 2024,
          "question": "How to handle multiple async operations in parallel?",
          "options": [
            "Promise.all() with await",
            "Multiple await",
            "async.parallel()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Faster than sequential.",
          "difficulty": "Hard"
        },
        {
          "id": 2025,
          "question": "What is the finally() method?",
          "options": [
            "Executes after Promise settles (resolve or reject)",
            "Only on resolve",
            "Only on reject",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Cleanup code.",
          "difficulty": "Medium"
        },
        {
          "id": 2026,
          "question": "Can async functions return non-Promise values?",
          "options": [
            "Yes (auto-wrapped in Promise)",
            "No",
            "Only primitives",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Always returns Promise.",
          "difficulty": "Medium"
        },
        {
          "id": 2027,
          "question": "What is Promise.allSettled()?",
          "options": [
            "Waits for all, never rejects",
            "Waits for first",
            "Rejects if any fails",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Returns status of all Promises.",
          "difficulty": "Hard"
        },
        {
          "id": 2028,
          "question": "How to add timeout to fetch?",
          "options": [
            "Use AbortController with setTimeout",
            "timeout option",
            "fetch.timeout()",
            "None"
          ],
          "correct_option": "A",
          "explanation": "No built-in timeout.",
          "difficulty": "Hard"
        },
        {
          "id": 2029,
          "question": "What is response.blob()?",
          "options": [
            "Returns response as Blob (binary data)",
            "Returns JSON",
            "Returns text",
            "None"
          ],
          "correct_option": "A",
          "explanation": "For images, files, etc.",
          "difficulty": "Medium"
        },
        {
          "id": 2030,
          "question": "Can you use fetch in Node.js?",
          "options": [
            "Yes (Node 18+) or with node-fetch package",
            "No",
            "Only in browser",
            "None"
          ],
          "correct_option": "A",
          "explanation": "Native support in modern Node.",
          "difficulty": "Hard"
        }
      ],
      "theory_questions": [
        {
          "id": 2051,
          "question": "Explain async/await vs .then()/.catch().",
          "model_answer": "async/await provides cleaner, more readable syntax that looks synchronous. .then() chains can become nested and harder to read. Both handle Promises, but async/await is generally preferred for readability.",
          "key_points": [
            "Readability",
            "Error handling",
            "Syntax comparison"
          ],
          "marks": 5,
          "difficulty": "Easy"
        },
        {
          "id": 2052,
          "question": "How does fetch handle HTTP errors?",
          "model_answer": "fetch() only rejects on network failures. HTTP errors (404, 500) resolve successfully. Must check response.ok or response.status manually to detect HTTP errors.",
          "key_points": [
            "Network vs HTTP errors",
            "response.ok",
            "Manual checking"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 2053,
          "question": "Explain Promise.all() vs Promise.allSettled().",
          "model_answer": "Promise.all() rejects immediately if any Promise rejects. Promise.allSettled() waits for all Promises and returns their status (fulfilled/rejected) regardless of outcome.",
          "key_points": [
            "Rejection behavior",
            "Use cases",
            "Return values"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 2054,
          "question": "How to implement request cancellation with AbortController?",
          "model_answer": "Create AbortController, pass its signal to fetch options. Call controller.abort() to cancel. Fetch will reject with AbortError. Useful for search-as-you-type features.",
          "key_points": [
            "AbortController creation",
            "Signal passing",
            "Use cases"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 2055,
          "question": "CORS and fetch requests.",
          "model_answer": "CORS is a security mechanism. Server must send Access-Control-Allow-Origin header. Preflight OPTIONS requests occur for non-simple requests. Use mode: 'cors' (default) for cross-origin requests.",
          "key_points": [
            "Server headers",
            "Preflight",
            "Security"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 2056,
          "question": "Error handling in async/await.",
          "model_answer": "Use try-catch blocks around await statements. Catch block handles both network errors and rejected Promises. Can also use .catch() on the Promise for specific error handling.",
          "key_points": [
            "try-catch",
            "Error types",
            "Best practices"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 2057,
          "question": "Parallel vs sequential async operations.",
          "model_answer": "Sequential: use multiple await (slower, one after another). Parallel: use Promise.all() with await (faster, all at once). Choose based on whether operations depend on each other.",
          "key_points": [
            "Performance",
            "Dependencies",
            "Implementation"
          ],
          "marks": 5,
          "difficulty": "Medium"
        },
        {
          "id": 2058,
          "question": "How to send different content types with fetch?",
          "model_answer": "For JSON: stringify body and set Content-Type: application/json. For FormData: browser sets multipart/form-data automatically. For URL-encoded: use URLSearchParams and set Content-Type: application/x-www-form-urlencoded.",
          "key_points": [
            "JSON",
            "FormData",
            "URL-encoded"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 2059,
          "question": "Implementing retry logic for failed requests.",
          "model_answer": "Create async function with loop/recursion. Try fetch in try-catch. On failure, check retry count and delay (exponential backoff). Rethrow error after max retries.",
          "key_points": [
            "Retry count",
            "Exponential backoff",
            "Error handling"
          ],
          "marks": 5,
          "difficulty": "Hard"
        },
        {
          "id": 2060,
          "question": "fetch vs XMLHttpRequest.",
          "model_answer": "fetch is Promise-based, cleaner API, better error handling. XMLHttpRequest is callback-based, more verbose, supports progress events. fetch is modern standard.",
          "key_points": [
            "Promise vs callback",
            "API design",
            "Modern vs legacy"
          ],
          "marks": 5,
          "difficulty": "Medium"
        }
      ],
      "coding_questions": [
        {
          "id": 2081,
          "problem_statement": "Fetch data from 'https://api.example.com/users' and log the JSON response.",
          "input_format": "None",
          "output_format": "Basic fetch",
          "code_js": "fetch('https://api.example.com/users')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));",
          "difficulty": "Easy"
        },
        {
          "id": 2082,
          "problem_statement": "Fetch data using async/await and handle errors.",
          "input_format": "None",
          "output_format": "async/await",
          "code_js": "async function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/users');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}\nfetchData();",
          "difficulty": "Easy"
        },
        {
          "id": 2083,
          "problem_statement": "Make a POST request sending JSON data {name: 'John', age: 30}.",
          "input_format": "None",
          "output_format": "POST with JSON",
          "code_js": "fetch('https://api.example.com/users', {\n  method: 'POST',\n  headers: {'Content-Type': 'application/json'},\n  body: JSON.stringify({name: 'John', age: 30})\n})\n  .then(response => response.json())\n  .then(data => console.log(data));",
          "difficulty": "Medium"
        },
        {
          "id": 2084,
          "problem_statement": "Check if response is successful before parsing JSON.",
          "input_format": "None",
          "output_format": "Error checking",
          "code_js": "async function fetchData() {\n  const response = await fetch('https://api.example.com/users');\n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n  const data = await response.json();\n  console.log(data);\n}",
          "difficulty": "Medium"
        },
        {
          "id": 2085,
          "problem_statement": "Fetch data from two APIs in parallel using Promise.all().",
          "input_format": "None",
          "output_format": "Parallel requests",
          "code_js": "async function fetchMultiple() {\n  const [users, posts] = await Promise.all([\n    fetch('https://api.example.com/users').then(r => r.json()),\n    fetch('https://api.example.com/posts').then(r => r.json())\n  ]);\n  console.log(users, posts);\n}",
          "difficulty": "Hard"
        },
        {
          "id": 2086,
          "problem_statement": "Cancel a fetch request after 5 seconds using AbortController.",
          "input_format": "None",
          "output_format": "Abort",
          "code_js": "const controller = new AbortController();\nsetTimeout(() => controller.abort(), 5000);\n\nfetch('https://api.example.com/users', {signal: controller.signal})\n  .then(response => response.json())\n  .catch(error => {\n    if (error.name === 'AbortError') console.log('Fetch aborted');\n  });",
          "difficulty": "Hard"
        },
        {
          "id": 2087,
          "problem_statement": "Add custom authorization header to a fetch request.",
          "input_format": "None",
          "output_format": "Custom headers",
          "code_js": "fetch('https://api.example.com/users', {\n  headers: {\n    'Authorization': 'Bearer YOUR_TOKEN',\n    'Content-Type': 'application/json'\n  }\n})\n  .then(response => response.json())\n  .then(data => console.log(data));",
          "difficulty": "Medium"
        },
        {
          "id": 2088,
          "problem_statement": "Implement a function that retries a failed fetch up to 3 times.",
          "input_format": "None",
          "output_format": "Retry logic",
          "code_js": "async function fetchWithRetry(url, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try {\n      const response = await fetch(url);\n      if (!response.ok) throw new Error('HTTP error');\n      return await response.json();\n    } catch (error) {\n      if (i === retries - 1) throw error;\n      await new Promise(r => setTimeout(r, 1000 * (i + 1)));\n    }\n  }\n}",
          "difficulty": "Hard"
        }
      ]
    }
  ]
}
};
