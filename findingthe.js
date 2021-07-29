//Finding the Longest Word In a Sentence

//the challenge

    //Given a sentence, return the longest word in the string. E.g

    longestWord('Top Shelf Web Development Training on Scotch') 
    //should return 'Development'

//algorithmic thinking 

    // the only parameter our longestWord function will receive is the sentence(string of text) to be evaluated.

    //Within this function, we would loop through every word within the string received and compare their length in order to determine the longest.

//code implementation


    //using a for-loop

        //In this approach we first separate the sentence into an array of words using the .split() method. We use the variable maxLength to hold the maximum length encountered at each point of iteration using the for-loop. It is initially set to 0.

        function longestWord(text) {
            let wordArray = text.split(' ')
            let maxLength = 0
            let result = ''
        
            for (let i = 0; i < wordArray.length; i++) {
                if (wordArray[i].length > maxLength) {
                    maxLength = wordArray[i].length
                    result = wordArray[i]
                }
            }
        
            return result
        }

        //Notice that the for loop is set up to execute for as long as the iterator is less than the length of the array. Since array indices are zero-based, if we had an array containing 5 words, that enables us loop through positions 0-4.


        //Within the for-loop, we check if the length of the current word under evaluation wordArray[i] is greater than our maxLength. If it is, we replace the maxLength with the newly found maximum and store the word in a variable result.

        //At the end of the iteration, result now holds the longest word in the sentence, hence it is returned as such.


    //using .reduce()

        //The **.reduce()** method is used to execute a certain piece of code (function) on all the elements in an array in order to cummulatively arrive at a single value.

        //Here, we call the .reduce() method on the array of words in the sentence. This executes our reducer function on every word in the array until the final output is arrived at.

        function longestWord(text) {
            var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
                if (currentWord.length > maxLengthWord.length) {
                    return currentWord
                } else {
                    return maxLengthWord
                }
            }, "")
            return result
        }

        //Within the reducer function, we compare the length of the current word under evaluation with the length of our accumulator variable maxLengthWord which is set to an empty string at the start. Whenever the length of the current word is greater, we return the current word as the new accumulator value otherwise the accumulator retains it's original value into the next comparison.

        //At the end of the reduction, result now holds the longest word in the sentence and is returned accordingly.

    //using .sort()

        //The **.sort()** method sorts the elements of an array and returns the sorted array. It receives an optional parameter which is a function that specifies the order in which sorting should be carried out.

        function longestWord(text) {
            var sortedArray = text.split(' ')
                                  .sort((wordA, wordB) => wordB.length - wordA.length)
            return sortedArray[0]
        }

        //Notice that within our compare function, we subtract the length of the second word from that to the first. This gives us a positive, negative or 0 value that determines which word is longer and by extension which should come before the other.

        //On completion of the sorting process, we now have a sortedArray with the words arranged in descending order according to their length. We return the word(element) occupying the first position in this array as this is the longest word.

//testing
        //the for-Loop and **.reduce()** implementations perform best and are the fastest with really close performance values. The **.sort()** method on the other hand, is 83% slower than both methods.
