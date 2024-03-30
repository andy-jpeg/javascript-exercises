const reverseString = function(string) {
    let chars = string.split("")
    let newString = ""

    for (i = (chars.length - 1); i >= 0; i--) {
        newString += chars[i]
    }

    return newString
};

// Do not edit below this line
module.exports = reverseString;
