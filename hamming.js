//Hamming distance

//What is hamming distance?

    //The hamming distance between two strings of equal length is the number of positions at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.


//The Challenge

    //Given two strings of equal length, calculate and return the hamming distance 

    hammingDistance('rover', 'river') // should return 1


//Algorithmic Thinking 

    // our function would receive two string arguments of equal length.

    //The strings received must be of equal length, hence it is reasonable for us to check that the strings passed in as arguments meet this requirement before any comparison occurs.

    //Next, We would need to compare every character in the first string with the character holding their corresponding position in the second string. This helps us identify the points where differences exist as it is the total count of these instances that gives us the hamming distance.

    //Bear in mind that lowercase a will differ from it's uppercase character A, hence all our comparisons must be done in a common case.


//Code Implementation

    //Using a for-loop In this approach, we use a for-loop as shown below to loop through every character of stringA while comparing each character with the character in their corresponding position for stringB.

    function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
                result++
            }
        }

        return result

    } else {
        throw new Error('Strings do not have equal length')
    }
}

    //Notice that at the beginning, we add a check to ensure that the characters received are of equal length. We also convert all characters to lowercase before comparing them in order to avoid errors due to varying letter cases.

//Testing




//Practical Application

    //The hamming distance algorithm finds its application in telecommunication for error detection and correction. It is used to determine the number of distorted bits in a binary word as a way to estimate error. In the biological realm, it is also used to determine genetic distance.

    // In software engineering, it is a common code challenge for JavaScript interviews and could also come in handy for developing word games in the real world.