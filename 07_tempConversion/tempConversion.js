const convertToCelsius = function(value) {
  let newValue = ((value - 32) * (5/9))
  newValue = Math.round(newValue * 10) / 10

  return newValue
};

const convertToFahrenheit = function(value) {
  let newValue = ((value * (9/5)) + 32)
  newValue = Math.round(newValue * 10) / 10

  return newValue
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
