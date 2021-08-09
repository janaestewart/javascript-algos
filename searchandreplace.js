//search and replace

    //The "Search and Replace" functionality is very common within word processing applications used for creating notes, documents and things of that nature. In this challenge, we implement this functionality in JavaScript in two distinct ways.

//the challenge

    //Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.

    searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"

//code implementation

    //The .replace() method is used to return a new string with some or all matches of a patternreplaced by a replacement. It accepts either a regular expression(regex) pattern or a string for replacement. It is used as shown below.

        //stringOfText.replace(pattern, replacement)

    //using .replace()

        function searchReplace(str, word, newWord){
            if ( word[0] === word[0].toUpperCase() ) {
                newWord = newWord[0].toUpperCase() + newWord.slice(1)
        }
        return str.replace(word, newWord)
        }

        //Recall that a major objective in solving this challenge is to ensure that the replacing word matches the casing(capitalization) of the word to be replaced.

        //To achieve this, we use an if statement to check of the first letter of the word word[0] matches the uppercase equivalent word[0].toUpperCase() of the letter. If it does, we convert the first letter of the newWord(replacement) to uppercase and append the rest of the lowercase letters retrieved using the .slice() method.

        //Once we now have the newWord in same case as the word to be replaced, we call the .replace() method on the sentence passing in the word to be replaced word and the replacement newWord.

        //This returns a new sentence with the words swapped appropriately. Thus, we return it from our function as the final result.

    //Using regular expressions

        function searchReplace(str, word, newWord) {
            let regex = new RegExp(word, "gi");
            if (/[A-Z]/.test(word[0])) {
                newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
            }
            return str.replace(regex, newWord)
        }

        //Notice how we use the RegExp() constructor function to create a regular expression out of the word to be replaced. This we store as regex.

        //Note: **g** and **i** as specified in the second argument are regular expression flags with the following meanings. | g | - Global search(look in the whole string and return all matches) | | --- | --- | | i | - Case-insensitive search. |

        //At the end, knowing that the .replace() method may accept a regular expression specifying the pattern to be searched for, we call the .replace() method on the sentence passing in regex and the newWord.

//testing

        //From the result, we notice that the faster solution is the first approach where we simply replace the word using **.replace()** ,while the regular expression method is approximately 72% slower.