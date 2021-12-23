/**
 * 1-   SyntaxError: This error will be thrown when a typo creates invalid code — 
 * code that cannot be interpreted by the compiler. When this error is thrown, scan your code 
 * to make sure you properly opened and closed all brackets, braces, and parentheses and 
 * that you didn’t include any invalid semicolons.
 * 
 * 2- ReferenceError:  This error will be thrown if you try to use a variable that does not exist. 
 * When this error is thrown, make sure all variables are properly declared.
 * 
 * 3- TypeError:  This error will be thrown if you attempt to perform an operation on a value of the wrong type. 
 * For example, if we tried to use a string method on a number, it would throw a TypeError.
 
-----DEBUGGING ERRORS: ------
1- Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
2- Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
3- Fix the bug and re-run your code.
4- Repeat steps 1-3 until your code no longer throws any errors


-----Locating Silent Bugs: -----
Errors thrown by the computer are really useful because 
they identify the bug type and location for you right away. However, even if your code runs error-free, 
it is not necessarily bug-free.

You may find that your code is consistently returning incorrect values without throwing any errors. A lack of 
thrown errors does not mean your code logic is completely correct. An incredibly powerful tool for locating bugs 
is a method you likely learned very early on in your JavaScript journey: console.log()!

By adding print statements to our code, we can identify where things have gone wrong. 

    Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

   1---- Go to the beginning of the malfunctioning code. Print out all starting variables, 
   existing values, and arguments using console.log(). If the values are what you expect, 
   move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.

   2------ After the next piece of logic in your code, add console.log() statements to ensure 
   updated variables have the values that you now expect and that the block of code is being executed. 
   If that logic is executing properly, continue repeating this step until you find a line not working 
   as expected, then move to step 3. Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

*/