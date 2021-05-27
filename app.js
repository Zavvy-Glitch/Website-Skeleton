// let userName = 'Tray'
// userName = 'Donatella'
// console.log(userName)
// userName = 'Crazyhorse'
// console.log(userName)

userName =  prompt('Please Enter Your Name: ');
console.log(userName);


userAnswer = prompt('What is Cleopatras favorite perfume?');
console.log(userAnswer);

if (userAnswer == 'I dont know') {
    document.write('<h2>' + userName + ',                                             Pharoah mone</h2>');

}

if (userAnswer == 'Pharoah mone') {
    document.write('<h2>' + userName +' ,wow you are smart!</h2>');
}