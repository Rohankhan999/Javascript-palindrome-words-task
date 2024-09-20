var userInput = prompt("Enter your Word!");
var result = userInput.split('').reverse('').join('');
if(userInput === result){
    alert("Your word is Palendrome")
}else{
    alert("Enter Palendrome word!!!!!!!!!!!!!!")
}

