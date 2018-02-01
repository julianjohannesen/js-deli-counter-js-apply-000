var katzDeli = [];

//1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters.
function takeANumber(katzDeliLine, customer){
  //The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
  katzDeliLine.push(customer);
  var last = katzDeliLine[katzDeliLine.length];
  return last;
} 
