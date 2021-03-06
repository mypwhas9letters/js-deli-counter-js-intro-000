var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
if (katzDeliLine.length > 0){
  let rem = katzDeliLine.shift();
  return `Currently serving ${rem}.`
}else{
  return 'There is nobody waiting to be served!'
};
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
}else{
  var line = "The line is currently:"
  for (let i = 0; i <katzDeliLine.length; i++){
    line = line + ` ${i+1}. ${katzDeliLine[i]},`
  }
  return line.slice(0, -1);
}
}
