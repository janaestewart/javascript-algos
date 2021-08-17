//Pig Latin


//The Challenge

        //Translate the provided string to Pig Latin by following the rules below:

        //For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
        // "pig" = "igpay"

        //For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
        // "glove" = "oveglay"

        //For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
        // "explain" = "explainway”

//Algorithmic Thinking

        //First, we need to test the first letter of the word to see if it is a consonant or vowel. If it is a vowel, then our job is easy. We simply add "``way``" to the end of the word.

        //However, if it is a consonant, it gets a little tricky. We need to determine if it stands alone or with another consonant or other consonants to form a cluster. This requires that we continue to test subsequent characters until we arrive at the first vowel. When we find the first vowel, we then move the identified consonant(s) to the end of the word and affix "``ay``".

//Code Implementation

        //Simply put, an imperative style of programming is one which specifies how things get done. Although this might sound like what you do each time you write code, there's a difference to it. Imagine you were to add an array of numbers and return the sum, there are different ways you could approach the problem. One way could be writing a forloop that'd go over each element in the array and cumulatively add every element to an accumulator until the final sum is reached. That is imperative. You are specifying how things get done.

        //On the other hand, a declarative approach would abstract this process, allowing you to specify what should be done rather than how. Thus, you may use the .reduce() method on the array to reduce every element to a final value by returning the sum within the call back.

        //The point is, in imperative programming, you specify how things get done(step-by-step). However, in declarative programming, you simply state(declare) what should be done and aren’t concerned with how it gets done.


//Imperative vs Declarative

        //An Imperative Approach

                //This is a somewhat manual approach where we specify how things are done until we arrive at the final result. We make use of the for…of loop in iterating through the string in order to determine where the first vowel in the word occurs.

                function pigLatin(str) {
                        // Convert string to lowercase
                        str = str.toLowerCase()
                        // Initialize array of vowels
                        const vowels = ["a", "e", "i", "o", "u"];
                        // Initialize vowel index to 0
                        let vowelIndex = 0;
                      
                        if (vowels.includes(str[0])) {
                          // If first letter is a vowel
                          return str + "way";
                        } else {
                          // If the first letter isn't a vowel i.e is a consonant
                          for (let char of str) {
                            // Loop through until the first vowel is found
                            if (vowels.includes(char)) {
                              // Store the index at which the first vowel exists
                              vowelIndex = str.indexOf(char);
                              break;
                            }
                          }
                          // Compose final string
                          return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
                        }
                }

                //In the code snippet above, we start by converting the received string str to lowercase. This is to prevent any casing related errors during comparison(“a” does not equal “A”).

                //Next, we initialize two variables:

                        // vowels - containing the five English vowels
                        // vowelIndex - for storing the index at which the first vowel in the word is found. It is initialized to 0.

                //We use an if…else statement to check if the first letter of the word can be found within our vowels array by calling the .includes() method on the array while passing it the first letter of the string str[0]. If it is found, this returns true, which implies that the first letter is a vowel. Hence, we simply add "``way``" to the end of the string and return the result as the Pig Latin equivalent.

                //If the statement evaluates to false, it signifies that the starting character is a consonant. Hence, we use a for…of loop to iterate through the string to identify the position of the first vowel. When we locate the first vowel, we use the .indexOf() method to retrieve it’s position in the string and store it into the variable vowelIndex. After this step we terminate the loop using the break statement.

                //At the last line, we use the .slice() method to manipulate the string to generate the Pig Latin equivalent.

//Testing