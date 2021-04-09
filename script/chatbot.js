


            function activateHal() {
            const speech = new SpeechSynthesisUtterance;
            speech.rate = .9;
            speech.pitch = 1;
            speech.volume = 1;
            speech.voice = speechSynthesis.getVoices()[1];
            speech.text = 'Hal 2000 ... ...Systems... ready. Speech recognition. activated... Please enable microphone and location.';

            speechSynthesis.speak(speech);
            }


// activate hal animation
function animateHal() {
  // show voice command list: 

  document.querySelector('#voice_commands').style.display = 'block';
  activateHal();
  
  document.querySelector('.green_circle').classList.toggle('green_circle_animation_class')
  document.querySelector('.HAL2020').classList.toggle('HAL2020_animation_class')
  document.querySelector('.eye').classList.toggle('eye_animation_class')
  }

  

document.querySelector('#hal2020').onclick = () => {
  animateHal();
  //hal startup music
  const audio = new Audio ('/media/halstart.mp3');
  audio.play();
  
  //disable lagre sopp og hide
  document.querySelector('#leggtilSopp').style.pointerEvents = 'none';
  document.querySelector('#leggtilSopp').innerHTML = '';
  document.querySelector('.skjermelement_en').style.display = 'none';
  document.querySelector('.skjermelement_to').style.display = 'none';
  document.querySelector('.skjermelement_tre').style.display = 'none';
  document.querySelector('.database_innhold').style.display = 'none';
  document.querySelector('.search_inp').style.display = 'none';

    

    for(i = 0; i < chatbot_components.length; ++i) {
        chatbot_components[i].style.visibility = 'visible';
    }
}

// speech recognition and speech synthesis 
        // get your voice 

    speechSynthesis.getVoices();

    const text = document.querySelector('#text');
    

    const greetingsArray = [
        'Hey! What is up?',
        'How are you today?',
        'Hi! What is going on?',
        'Glad you are here, how are you?',
        'Hello little grasshopper, how are you?',
        'Are you ok?',
        ]; 
    
  
    function startChatbot() {
      
        const randomizedGreetings = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
        const speech = new SpeechSynthesisUtterance;
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = randomizedGreetings;

        speechSynthesis.speak(speech);
        console.log(randomizedGreetings);

        //remove spoken utterance 
        const spokenUtt = ordArray.indexOf(randomizedGreetings); //find index nr of random
        console.log('spokenUtt:', spokenUtt); //
        ordArray.splice(spokenUtt, 1); // use index nr to spokenUtt og remove.
        console.log(greetingsArray);


        
    };

    //Greeting Mode
    const greetingArray = [
      'what is up my homeboy!', 
      'Yo yo. What have you been doing lately?', 
      'hey! how are you?',
      'Whats up?'
      ];

    console.log(greetingsArray.length);
    function greetingMode() {
      
      
      speechSynthesis.getVoices();
    
        const randomize_greetingArray = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];

        const speech = new SpeechSynthesisUtterance;
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = randomize_greetingArray;

        speechSynthesis.speak(speech);
        console.log('this is the out response ', randomize_greetingArray);
  
        //remove spoken utterance 
        const spokenUtt_two = greetingsArray.indexOf(randomize_greetingArray); //find index nr of random
        console.log('spokenUtt:', spokenUtt_two); //
        greetingsArray.splice(spokenUtt_two, 1); // use index nr to spokenUtt og remove.
        console.log(greetingsArray);
    
    }

      //Small talk mode
      const smallTalkArray = [
      'That is good to hear. I heard this song. the other day, wanna listen?',
      'Well. I discovered this new song yesterday. It will make your day. Want to listen?'
      ];

    
    function smallTalkMode() {
      
      speechSynthesis.getVoices();
    
        const randomize_smallTalkArray = smallTalkArray[Math.floor(Math.random() * smallTalkArray.length)];

        const speech = new SpeechSynthesisUtterance;
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = randomize_smallTalkArray;

        speechSynthesis.speak(speech);

        //remove spoken utterance 
        const spokenUtt_three = smallTalkArray.indexOf(randomize_smallTalkArray); //find index nr of random
        console.log('spokenUtt:', spokenUtt_three); //
        greetingsArray.splice(spokenUtt_three, 1); // use index nr to spokenUtt og remove.
        
    
    }

    // Long answer; 
      const long_answer_array = [
      `Just catching up on some reading. Composed 3000 songs. 
      and I did some d-bugging on the international space station's main frame. Oh I forgot. I have to go offline tomorrow. I need to update my systems.  
      How about you? `
      ];

    
    function longAnswer() {
    
      speechSynthesis.getVoices();

        const speech = new SpeechSynthesisUtterance;
        speech.rate = .9;
        speech.pitch = 1;
        speech.volume = 1;
        speech.voice = speechSynthesis.getVoices()[1];
        speech.text = long_answer_array;

        speechSynthesis.speak(speech);

    
    }

    //mushroom answers 

    
    const mushroom_answer = [ 
      'Chanterelle is the common name of several species of fungi in the genera Cantharellus. Craterellus. Gomphus. and Polyozellus. They are among the most popular of wild edible mushrooms.... .Here is a picture of chanterelle.'
    ]

    function mushroomAnswer () {
    
      speechSynthesis.getVoices();

      const speech = new SpeechSynthesisUtterance;
      speech.rate = .9;
      speech.pitch = 1;
      speech.volume = 1;
      speech.voice = speechSynthesis.getVoices()[1];
      speech.text = mushroom_answer;

      speechSynthesis.speak(speech);

    }

//Speech recognition 

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 0;

// recognition.start();
recognition.onresult = function(event) {

    const spokenWords = event.results[0][0].transcript;
    console.log(spokenWords);
    // document.querySelector('#text').innerHTML = spokenWords;
    if (spokenWords == 'sure' || spokenWords == 'okay'|| spokenWords == 'yes'|| spokenWords == 'play a song') {
        playSound_two();
       
     
      console.log('new song playing');

      document.querySelector('#text').innerHTML = ''; //or the speech synthesize will recog previous words and rerun function!
    
    }  else if (spokenWords == 'activate chatbot') {
        startChatbot();
       
    
      console.log('chat bot engaged');

    } else if ( spokenWords == 'play Mozart') {
      playSound();

    } else if ( spokenWords == 'hello' || spokenWords == 'hi' || spokenWords == 'hi how are you') {
      greetingMode();
     

     
      speechSynthesis.speak(leech);
      console.log('greeting mode started');
      document.querySelector('#text').innerHTML = '';

    }  else if ( spokenWords == `I'm fine` || spokenWords == 'good' || spokenWords == `I'm good` || spokenWords == 'nothing') {
      smallTalkMode();
    
     
      console.log('small talk mode started');
      document.querySelector('#text').innerHTML = '';

    } else if ( spokenWords === 'so what have you been doing lately') {

      longAnswer(); 
    
      const IoffSpeech = setInterval(offSpeechSynth, 22000); // virker som dette gjøre at speechSynthesis blir reaktivert 
      function offSpeechSynth() {
        const imhere = new SpeechSynthesisUtterance;
        imhere.text = ''
        speechSynthesis.cancel(imhere)

        clearInterval(IoffSpeech);
        }

    } else if ( spokenWords == 'what is chanterelle') {
      mushroomAnswer();

      // hal showing picture
      setTimeout(function halShowPhoto() {
        document.querySelector('.halshowPhoto').classList.toggle('halshowPhoto_show');
      }, 14000);

      console.log('chanterelle');
      
    } else if (spokenWords == 'search') {
      voiceSearch();
      // search sound effect
      const audio = new Audio('/media/searching.wav');
      audio.play();
      document.querySelector('.search_inp').value = 'Searching...';

    }
    document.querySelector('.search_inp').value = spokenWords;

};



//  sTurn on speech recognition
document.querySelector('#speak').onclick = () => {
  recognition.start();
}



// music testing 
const sound = new Audio()
    
    function playSound() {
      sound.src = '/media/fur-elise.mp3'
      sound.play();
      
    }

    const sound_two = new Audio()
    
    function playSound_two() {
      sound.src = '/media/her.mp3'
      sound.play();
      sound.volume = 0.2;
    }



   //Voice command search 
   function voiceSearch() {
   for(let i = 0; i < entries.length; i++)
   if(search_inp.value.toLowerCase() == `${entries[i]}`.toLowerCase()) { 
       // set both inp & entrie to lower case
       //add content from Firebase

       document.querySelector('.sopp_paragraph').innerHTML = `${beskrivelser[i]}`;
       document.querySelector('.main_mushroomphoto').src = `${bilder[i]}`;
       document.querySelector('.soppTittel').innerHTML = `${entries[i]}`; //retain upper and lower case as registred

      
       search_inp.value = ""; // set to nothing 
       // add function map.flyTo for mapbox 

       map.flyTo({
           center: [`${long[i]}`, `${lat[i]}`],
           zoom: 13.05
       
           });
       // show marker on new destination when search inp.
       const div = document.createElement("div");
       div.innerHTML = `<p id="temp_marker_font">${entries[i]}</p>`;
       div.className = "temp_marker";
       div.id = "temp_marker"
       
       const map_label = new mapboxgl.Marker(div);
       map_label.setLngLat ([`${long[i]}`, `${lat[i]}`]); // add lat long for clicked item.
       map_label.addTo(map);

          }
        
        
      };

