var userInput = prompt("Enter your Word!");
var result = userInput.split('').reverse('').join('');
if(userInput === result){
    alert("Your word is Palendrome")
}else{
    alert("Enter Palendrome word!!!!!!!!!!!!!!")
}

// WITHOUT METHOD!

// function reverseString(str) {
//     const stack = [];
//     // Push each character onto the stack
//     for (let char of str) {
//       stack.push(char);
//     }
//     // Pop each character from the stack to reverse the string
//     let reversed = '';
//     while (stack.length > 0) {
//       reversed += stack.pop();
//     }
//     return reversed;
//   }
  
//   document.write(reverseString('NAHOR'));
  