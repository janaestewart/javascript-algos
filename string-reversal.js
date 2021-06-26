/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// The process here is quite simple and straight forward. Our function will receive only one parameter i.e the string to be reversed.
// Next, we would have to manipulate the characters in this string logically in order to return the string in reverse.

//There are four ways to solve this challenge

    //chaining in-built methods

        //text.split('').reverse().join('')
        
        //The **.split()** method is used to split a string into an array of characters. It receives one argument which specifies the separator that determines where every split occurs.

        // The .reverse() method reverses the order of the elements in an array.

        //The **.join()** method is used to combine the elements of an array into a string. It receives one argument which specifies the separator. When none is supplied, it defaults to a comma.

        function reverseString(text) {
            return text.split('').reverse().join('')
        }

    //using a for-loop

        //For loops are used to execute a piece of code as long as a condition is met. In the solution below, we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order.

        function reverseString(text) {
            let result = ''

            for(let i = text.length - 1; i >= 0; i--) {
                result += text[i]
            }
            
            return result
        } 

        //Notice how we initialize the iterating variable i to the length of the string -1 . Since the index begins from zero, this gives us the index of the last character in the string. We simply append this last character to our result variable which is an empty string and continue the cycle until we are past the first character of the string i.e i is no longer greater than or equal to 0.

        //we can also use for...of in ES6

            // The for…of statement in JavaScript is used to execute a certain piece of code for each distinct item(property) of an iterable object.
        
            function reverseString(text){
                let result = ''

                for(let char of text){
                    result = char + result
                }
                return result
            }


    //recursion method

        //Recursion is a programming technique in which the intention is to reduce the problem into smaller instances of the same problem until it is completely solved.

        function reverseString(text){
            if(text === ''){
                return ''
            } else {
                return reverseString(text.substr(1)) + text[0]
            }
        }

        //we make use of the .substr() method in JavaScript to return a portion of the text received. It expects two parameters, one specifying the starting index and the other specifying the number of characters afterwards(optional)

        //Above, we first run a check to see if we have an empty string. This is known as the terminal case i.e the case that ends the recursion. Without it the process would continue in an endless loop. 

        //When the text is empty, we return an empty string and the function terminates. When it’s not, we call the reverseString() function and a new string created by removing the first character of the text is passed in.

    //using .reduce()

        //The .``**reduce()** method is used to execute a function on every member of an array until it results in a single output value. It receives the function to be executed and the initial value of the accumulator as arguments. The accumulator serves as a holder for the value returned in the last execution of the callback.

        function reverseString(text) {
            return text.split('').reduce((acc, char) => char + acc, '' )
        }

        //we split the text received into an array of characters and then we call the .reduce() method on the array which begins with an empty string as the initial value and accumulates each character in reverse until it has gone through all characters in the array. At this point, it returns the completely reversed string.

function reverseString(text) {
   
}

//Testing Performance with JSPerf

// From the test carried out, the fastest solution we have considered is using the .reduce() method. Next, is the for-loop method which is only 6% slower and is a pretty close one. The slowest of them all is the method of chaining .split(), .reduce() and .join(59% slower).