const removeFromArray = function(table, value) {
    let index = table.indexOf(value)
    let newTable = table
    newTable.splice(index, 1)

    console.log(newTable)
    return newTable
};

// Do not edit below this line
module.exports = removeFromArray;
