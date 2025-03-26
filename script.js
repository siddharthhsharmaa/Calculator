let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let string="";
let arr= Array.from(buttons);
arr.forEach(button => {
button.addEventListener('click',(e) =>{
    let buttonText = e.target.innerHTML;
    if(buttonText == '='){
string=eval(string);
input.value=string;
}
else if(buttonText == 'AC'){
string="";
input.value=string;
}
else if(buttonText == 'DEL'){
string=string.substring(0, string.length-1);
input.value=string;
}
else{
string+=buttonText;
input.value=string;
}

})
})

