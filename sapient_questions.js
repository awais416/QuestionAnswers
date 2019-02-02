//Question 1: Convert Given string into a Leet
//[a,A] -> 4 [e,E] -> 3 [i,I] -> 1 [o,O] -> 0 [s,S] -> 5 [t,T] -> 7 [b,D] -> 5


var strToLeetMeth = (input, mapper) => {
    let output = ""
    for (x of input) {
        if (mapper[x]) {
            output += mapper[x]
        } else {
            output += x
        }
    }
    return output

}

//Question 2: Convert Given string into a frequency of characters
// String: Manipulate strings with repeating characters aaabbbbccccc > a3b4c5


var charFrequency = (input) => {
    let output = ""
    initChar = input[0]
    initCharCount = 1
    for (let ind = 0; ind < input.length; ind++) {
        if (initChar == input[ind + 1]) {
            initCharCount++
        } else {
            output += initChar + initCharCount.toString()
            initChar = input[ind + 1]
            initCharCount = 1
        }
    }
    return output
}

let mapper = {
    a: 4,
    A: 4,
    e: 3,
    E: 3,
    i: 1,
    I: 1,
    o: 0,
    O: 0,
    s: 5,
    S: 5,
    t: 7,
    T: 7,
    b: 5,
    D: 5
}
let input = 'Let\'s have some fun' //put any other sentence in this input to get the output
let output = strToLeetMeth(input, mapper)
console.log(output)

let input1 = 'hhhhhqqlllllllhhhppp'
output1 = charFrequency(input1)
console.log(output1)