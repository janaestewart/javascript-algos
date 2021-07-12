//Finding the most recurring character

//Dealing with strings, arrays and objects


//THE CHALLENGE
// Given a string of text, find and return the most recurring character: 
    maxRecurringChar('aabacada') // will return 'a'

//Parameter: the string of text

//We need to somehow keep track of every character in the string as well as the number of times it exists. This we would describe as character mapping. Once we successfully create such a map, we can easily determine which character has the highest occurence.

//we do this with Character Mapping
//we can create an object from a string like this
    let charMap = {};

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }
    //Having initialized charMap to an empty object, we use a for…of loop to iterate through the string of text. For every character, we check if it has been mapped already(is a property of the charMap object) by calling the .hasOwnProperty() method on the object. If it is, we increment its value, otherwise it is added as a property and its value is set to 1.

//For...in Iteration

    //An iterable object is basically a collection of consistently formatted data. Examples include strings, arrays, array-like objects etc. The for…in statement iterates over all non-Symbol, enumerable properties of an object.

    //how to use it

    function maxRecurringChar(text) {
        let charMap = {}
        let maxCharValue = 0
        let maxChar = ''
    
        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }
    
        for (let char in charMap) {
            if (charMap[char] > maxCharValue) {
                maxCharValue = charMap[char]
                maxChar = char
            }
        }
    
        return maxChar
    } 