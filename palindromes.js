//Palindromes

    //A palindrome is a word, number, or other sequence of characters which reads the same backward as forward, such as "madam" or "racecar".

//The Challenge

    //Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g

    palindromeChecker('racecar') // will return true

//Algorithmic Thinking

    //The challenge says "given a string of text" which implies that our function would have a string-typed parameter which we may call "text".

    //Next, we are to evaluate if the string is a palindrome. To do this, we'll have to reverse the string first and then compare it with the string that was passed in as an argument.

    //To avoid issues with letter casing, we'd convert text to a single case type which could be upper or lower.

    //Finally, we "return true or false" depending on the result of our evaluation. True for when it is a palindrome and false for otherwis

//Code Implementation


//An Intuitive Approach

    function palindromeChecker(text) {

        var reversedText = text.toLowerCase()
            .split('').reverse().join('')

        return text === reversedText
    }

    //First our function accepts a parameter which is the string of text which is to be tested.

    //Next, we convert all letters of the string to lowercase, then call the .split() method on the string that is received passing in an empty string as the only argument in order to spread the characters into an array.

    //Next, we call .reverse() on the array to re-order its elements in reverse.

    //After that, we call .join() on the reversed array to form a string once again.

    //At the end we return the result of our comparison which is a Boolean indicating whether the string that was passed in equals the reversed string we created. This tells us if the text that was passed in is a palindrome

//Looping through and comparing characters

    //In this approach, we loop through the string as it was passed in and compare each character with the character currently in the position it'd have taken if the string was reversed.

    function palindromeChecker(text) {
        let charArray = text.toLowerCase().split('')
    
        let result = charArray.every((letter, index) => {
            return letter === charArray[charArray.length - index - 1];
        })
    
        return result
    }

    //First, We convert all letters of the string to lowercase, then use the .split() method once again to spread the characters of the string into an array.

    //Next we use a special array method .every() to loop through the array and perform our check. Basically, the .every() method tests whether all elements in the array pass the test implemented by the provided function. The provided function in our case accepts the current letter and its index in the array as parameters. Then we return the result of the comparison between the letter and the letter currently occupying the position this letter would assume if the string was reversed. Learn more about .every() here.

    //Cumulatively, the .every() method would evaluate to true if the test passes in all cases and false if it didn't. The result of that evaluation is what we store in the variable result and that's what our function returns as an indication that the string failed or passed the palindrome check.

//Looping through and comparing characters (optimized)

    function palindromeChecker(text) {
        var textLen = text.length;
        for (var i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 - i]) {
            return false;
        }
        }
        return true;
    }


//testing

// The fixed loop method is the fastest implementation considered. The un-optimized loop method initially considered comes in second place and is approximately 47% slower, while the seemingly intuitive approach is the slowest of them all (87% slower).