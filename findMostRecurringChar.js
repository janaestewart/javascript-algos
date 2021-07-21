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

        //For looping through the charMap object, we initialize two variables at the beginning.

             // maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for…in loop.
            // maxChar is used to store the character with the highest value on every iteration.
        
        // As we run through with the for…in loop, we check if the character being evaluated has a greater value than our maxCharValue which is initially zero. If it is, it becomes the new maxCharValue and the character is stored in maxChar. If it is not, we move on to the next character.
           
        //At the end, we return maxChar which now holds the character with the highest value, thus the most recurring.

//Forming arrays from the character Map

function maxRecurringChar(text) {
    let charMap = {}
    let charArray =[]
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    vaulesArray = Object.values(charMap)
    maxCharValue = Math.max(...vaulesArray)

    return charArray[vaulesArray.indexOf(maxCharValue)]
}

//we create a character map with the snippet of code initially considered. Next, we use ES6 syntax to form arrays from the character map. First an array of the keys of the charMap(all characters in the text) known as charArray and then an array of the values(number of occurences) known as valuesArray arranged in corresponding order.

//For the character map we visualized earlier(i.e ‘aaabbbcdcb’), we'd have something like this:

    charArray = ['a', 'b', 'c','d']
    valuesArray = [4,3,2,1]

//Next we use the built in Math.max() function to find the maximum value in the array of values and we store this value in a variable maxCharValue

//Finally we use the .indexOf() method to search the valuesArray for the position of the maxCharValue. This is necessary as the position of the maxCharValue in valuesArray corresponds to the position of the character in the charArray with that number of occurrences.

// Thus, on getting the index(position), we return the character holding the same position in the charArray. This is the highest recurring character.

//Testing

    //The For...In iteration is the fastest. With the Arrays method trailing behind by approximately 30%.


//Practical Application

// You will find the techniques considered in this challenge handy for JavaScript Interviews and code challenges. Furthermore, they can be used at a more advanced level in Search Engine Optimization(SEO) for determining the keyword density in a piece of content.