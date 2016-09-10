"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  }
  return true;
};

exports["default"] = isLeapYear;
module.exports = exports["default"];