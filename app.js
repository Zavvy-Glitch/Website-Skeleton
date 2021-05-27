// let userName = 'Tray'
// userName = 'Donatella'
// console.log(userName)
// userName = 'Crazyhorse'
// console.log(userName)

userName =  prompt('Please Enter Your Name: ');
console.log(userName);


userAnswer = prompt('Did you know Cleopatra was not Egyption?');
console.log(userAnswer);

if (userAnswer == 'No') {
    document.write('<h2>Pharoaheel, ' + userName + '. ' + 'Oh! and welcome!' + '</h2>');
}

if (userAnswer == 'Yes') {
    document.write('<h2>' + userName +', Guess all of her statues are wrong! Dont you think?</h2>');
}