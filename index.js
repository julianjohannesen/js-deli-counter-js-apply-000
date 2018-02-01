var katzDeli = [];

//1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters.
function takeANumber(katzDeliLine, customer){
  //The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
  katzDeliLine.push(customer);
  var last = katzDeliLine.length;
  return `Welcome, ${customer}. You are number ${last} in line.`;
}

//2. Build a function `nowServing`.
function nowServing(katzDeliLine){
  //This function should return the first person in line and then remove that individual from the line.
  //If there is nobody in line, it should return "There is nobody waiting to be served!"
  if(katzDeliLine.length !== 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}
