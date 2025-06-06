const FARENHEIT_CONVERTER = 32;
const TEMP_RATIO = 5/9;
const ONES_ROUNDER = 10;

const convertToCelsius = function(temp) {
    return Math.round((temp - FARENHEIT_CONVERTER) * TEMP_RATIO * ONES_ROUNDER) / ONES_ROUNDER;
};

const convertToFahrenheit = function(temp) {
  return Math.round((temp / TEMP_RATIO + FARENHEIT_CONVERTER) * ONES_ROUNDER) / ONES_ROUNDER;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
