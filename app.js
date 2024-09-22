var userInput = prompt("Enter your Word!");
var result = userInput.split('').reverse('').join('');
if(userInput === result){
    alert("Your word is Palendrome")
}else{
    alert("Enter Palendrome word!!!!!!!!!!!!!!")
}

// WITHOUT METHOD!
// var word = prompt ("Please Enter a word");
// var newword = ""
// document.write("Input Word: " + word + "<br>")

// for (let i = word.length-1; i >=0; i--) {
//     newword += word[i]

// }
// document.write("Reverse Word: " + newword)

//     if (newword=== word) { 
//         document.write("<br> It is a Pallindrome")
        
//     }else{

//         document.write("<br> It is a Not a Pallindrome")
//     } 
