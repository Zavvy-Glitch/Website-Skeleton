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
    let url ="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bust_of_Cleopatra_at_the_Royal_Ontario_Museum.jpg"
    if (cleopatrashead.toLowerCase() == 'yes'){
        document.write('<h3>Who knows? Its made of stone.</h3>');
        document.write('<img src="' + url + '"/>')
    }
}