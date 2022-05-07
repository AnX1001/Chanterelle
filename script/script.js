//sound effect buttons

let activeButton = document.querySelectorAll('.activeButton');

activeButton.forEach(function(all) {
    all.addEventListener('click', function() {
        const audio = new Audio('/media/buttonklick.wav');
        audio.play();
    })
});



window.onresize = resizeMapBox;

function resizeMapBox() {
 

}

// button navigations 
// when click Legg til sopp, show legg til bilde and....


document.querySelector('#leggtilSopp').onclick = () => {
    // trigger voice tips
    voiceTips();

    function voiceTips() {
        const speech = new SpeechSynthesisUtterance;
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = 'If you want to add a mushroom. You must first choose a picture... So Please choose a picture first... And then write the name and mushroom description... When you are done writing, please press the pink button to save to database... Thank you.';

        speechSynthesis.speak(speech);
        }

    // trigger alert velg bilde og make it clickable 
    document.querySelector('#velg_fil_knapp').style.animation = 'alert_one 2s alternate infinite';
    document.querySelector('#velg_fil_knapp').style.pointerEvents = 'auto';
    document.querySelector('#velg_fil_knapp').innerHTML = 'Velg bilde';

    // trigger form and hide map 
    document.querySelector('.form').style.visibility = 'visible';
    document.querySelector('.map_container').style.visibility = 'hidden';

    //show animation click finger
    document.querySelector('#clickfinger').style.visibility = 'visible';
    document.querySelector('#clickfinger').style.animation = 'clickThis 1s 10 alternate';
    
    
}


//when click velg bilde, make Lagre info og bilde clickable and visible. 
document.querySelector('#velg_fil_knapp').onclick = () => {
    // turn off clickfinger ani, and hide. 
    document.querySelector('#clickfinger').style.display = 'none';
    document.querySelector('#clickfinger').style.animation = 'none';
    //turn on clickfinger_Two and show animation. 
    document.querySelector('#clickfinger_two').style.visibility = 'visible';
    document.querySelector('#clickfinger_two').style.animation = 'clickThis 1s 30 alternate';

    document.querySelector('#velg_fil_knapp').style.animation = 'none';
    document.querySelector('#velg_fil_knapp').style.pointerEvents = 'none';

    document.querySelector('#btn_lagre_firestore').innerHTML = 'Lagre bilde og info i databasen';
    document.querySelector('#btn_lagre_firestore').style.animation = 'alert 2s alternate infinite';
    document.querySelector('#btn_lagre_firestore').pointerEvents = 'auto';

}

  
//Reload page
document.querySelector('#start').onclick = () => {
    // hide voice command list
    document.querySelector('#voice_commands').style.display = 'none';
    voiceCommand();

    function voiceCommand() {
        const speech = new SpeechSynthesisUtterance;
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = 'If you want to use voice search... please press the button named SPEAK... and then say... the name... of the mushroom... you want to find. Finally... press again the button... and then say the word... SEARCH';

        speechSynthesis.speak(speech);
        }
    location.reload();

}