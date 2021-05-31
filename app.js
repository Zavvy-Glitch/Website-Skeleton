let url ="https://media.giphy.com/media/QsyqveIFQybuow0zPL/giphy.gif"

function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    console.log(userName);
    document.write('<h2>' + userName + '</h2>');
    return userName; //
}
function getUserAnswer(){
    let userAnswer = prompt('Do you know Cleopatras favorite perfume is? (Yes or No)');
    console.log(userAnswer);

    if (userAnswer.toLowerCase() == 'yes') {
        document.write('<h4>LOL, Pharoahmones!</h>');
    } 
      else {
        document.write('<h3>Its ok, it was a bad joke anyways.</h3>');
    }
}

function cleopatrashead(){
    let cleopatrashead = prompt('Do you think Cleos statues are all wrong?')
    if (cleopatrashead.toLowerCase() == 'yes'){
        document.write('<h3>Who knows? Its made of stone.</h3>');
        document.write('<img src="' + url + '"/>')
    }
}

function myFunction() {
    var str = "https://www.si.edu/spotlight/ancient-egypt";
    var result = str.link("https://www.si.edu/spotlight/ancient-egypt");
    document.getElementById("smithsonian").innerHTML = result;
  }

function userGuessingGame() {
    correctAnswer = 1000;
        console.log(correctAnswer)
        userAttempts = 3;
            for(let i = 0; i < userAttempts; i++){
            let userGuess = prompt ('How many Egyptian Gods are there?');          
            while (userGuess < 1 || userGuess > 1000){
                userGuess = prompt('Wrong Range. Please Enter a Number 1 - 1000');
            }
            if (userGuess == correctAnswer){
                alert('By Rah! You got it correct!');
                break;
            }
        }
    }
    correctAnswer = 'Nile River';
        console.log(correctAnswer)
        userAttempts = 3;
            for(let i = 0; i < userAttempts; i++){
            let userGuess = prompt ('What is the Worlds Longest River?');          
            while (userGuess < 1 || userGuess > 1000){
                userGuess = prompt('Throw them into the river! Second thought, guess again!');
            }
            if (userGuess == correctAnswer){
                alert('The Sphinx Smiles Upon You, You May Pass');
                break;
            }
        }  
userGuessingGame();

function cleopatrashead(){
    let nile = prompt('How many can we get to walk to nile?')
    for(let i = 0; i < nile; i ++){
        document.write('<img src="' + url + '"/>')
    }
}