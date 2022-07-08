let output = document.getElementById('output');
output.value = " "
let buttons =document.querySelectorAll('button');
let outputValue = " ";
for(item of buttons){
    item.addEventListener('click',(e) => {
buttonText = e.target.textContent;
if(buttonText == 'C'){
    output.value =""
    outputValue ="";
}else if(buttonText =='='){
output.value = eval(outputValue);
} else {
    console.log(e.target)
    outputValue += buttonText;
    output.value = outputValue;
}

})}