module.exports = function toReadable(num) {
   if (num === 0) return "zero";
   const onceRange = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
   const tensRange = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
   const dozensRange = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   const hundredsRange = parseInt(num/100);
   const digitOfTeens = num % 100;
   const digitOfUnits = num % 10;
   if (digitOfTeens <= 19 && digitOfTeens >= 10) {
       let result = `${onceRange[hundredsRange]}${!(hundredsRange) ? "" : " hundred"} ${tensRange[digitOfUnits]}`
       return result.replace(/\s+/g, " ").trim();
    }
   const digitOfDozens = (num % 100 - digitOfUnits) / 10;
   let result = `${onceRange[hundredsRange]}${!(hundredsRange) ? "" : " hundred"} ${dozensRange[digitOfDozens]} ${onceRange[digitOfUnits]}`;
   return result.replace(/\s+/g, " ").trim();
}