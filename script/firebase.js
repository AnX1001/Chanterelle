
  
const db = firebase.firestore();
const storage = firebase.storage();

const btn_lagre_firestore = document.querySelector('#btn_lagre_firestore');


//DOm-ref. inputs
const inp_artsnavn= document.querySelector('.artsnavn');
const ekspert_spm = document.querySelector('.ekspert_spm');
const artsinfo = document.querySelector('.artsinfo');
const inp_lat = document.querySelector('.inp_lat'); 
const inp_long = document.querySelector('.inp_long');


function getValues(event) {
    event.preventDefault();
   
    console.log('artsinfo:', artsinfo.value);
    console.log('ekspert_spm:', ekspert_spm.value);
    console.log('bildeurl:', d)
    
}


btn_lagre_firestore.onclick = () => {

    db.collection("mat").add({
        navn: inp_artsnavn.value,
        beskrivelse: artsinfo.value,
        sporsmal: ekspert_spm.value,
        bilde_url: d,
        lat: inp_lat.value,
        long: inp_long.value
    
    })
    .then(function(docRef) {
        console.log("doc written with ID", docRef.id);
        
    })
    .catch(function(error) {
        console.error('error adding doc', error)
    })

    //showcase newly added fooditem
    document.querySelector('.main_mushroomphoto').src = `${d}`;
    document.querySelector('.soppTittel').innerHTML = `${inp_artsnavn.value}`;
    document.querySelector('.sopp_paragraph').innerHTML = `${artsinfo.value}`;

        //stop animations and hide button 
        document.querySelector('#btn_lagre_firestore').innerHTML = '';
        document.querySelector('#btn_lagre_firestore').style.animation = 'none';
    
        //make it unclickable.
        document.querySelector('#btn_lagre_firestore').style.pointerEvents = 'none';
        //set form inputs to zeroes 
    
        inp_artsnavn.value = '';
        artsinfo.value = '';
        ekspert_spm.value = '';
        
        inp_lat.value = '';
        inp_long.value = '';
    
        // hide form and show map again
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.map_container').style.visibility = 'visible';
        map.resize();

        //turn off clickfinger_two animation
        document.querySelector('#clickfinger_two').style.visibility = 'hidden';
    document.querySelector('#clickfinger_two').style.animation = 'none';

   

}

//show all entries in Firebase by creating divs. Each divs has an unique id.
// i.e. the name of the mushroom : Pink, blue black mushroom.

const entries = []; 
const beskrivelser = [];
const bilder = [];
const long = [];
const lat = [];
db.collection("mat").get().then( snapshot => {
    
    snapshot.forEach( doc => {
        entries.push(doc.data().navn); // pushing name of mushroom to the array
        beskrivelser.push(doc.data().beskrivelse); // push description of mushroom to array
        bilder.push(doc.data().bilde_url);
        // console.log(doc.data().lat);
        lat.push(doc.data().lat);
        long.push(doc.data().long);
        // console.log('this is lat:', lat);
        // console.log('long:', long);
       
    })

   
        for (var entry in entries ) {
            var item = document.createElement('div');
            item.id = entries[entry];
            item.className = "entry";  // this is the class name of created element
            item.innerHTML = entries[entry]; // innerHTML til created div
            
            item.style.backgroundSize = 'contain';
            item.style.backgroundRepeat= 'no-repeat';
            document.querySelector('.database_innhold').appendChild(item);
        
        }
        //loops through entryArray and adds pictures from the firebase.
        const entryArray = document.querySelectorAll('.entry');
        for (i = 0; i < entryArray.length; i++) {
            entryArray[i].style.backgroundImage = `url('${bilder[i]}')`;

        }
        
        
    
    
    for (let i = 0; i< entries.length; i++) // iterate the array length of entries. Keep in mind that the array beskrivelser is also being iterate, the let i is defined for beskrivelser as well.

            document.getElementsByClassName('entry')[i].onclick = () => { //for each entry run a function onclick
            
            const whichClass = document.getElementsByClassName('entry')[i]; //every onclick on entry class gives away the index number
            
            console.log('do something', whichClass); //whichClass is the the entry[i] you click!

            document.querySelector('.sopp_paragraph').innerHTML = `${beskrivelser[i]}`;
            document.querySelector('.main_mushroomphoto').src = `${bilder[i]}`;

            //document.querySelector('.soppTittel').innerHTML = `${whichClass.id}`; // same as below using itemPressedClass.id
            itemPressedClass = getWhichClass(whichClass);
            
            let ready = true;

            readyStatus = getReadyStatus(ready);
            
        }
} )

let itemPressedClass; 
const getWhichClass = VAR => {
    return VAR;
}

let readyStatus;

const getReadyStatus = VAR => {
    return VAR;
}

console.log('entries', entries); // logs the populated array
console.log('beskrivelser:', beskrivelser);
console.log('bilder:', bilder); // logs populated bilde_url (bilder) array

function showItemPressed () {

     
    
    if (readyStatus === true) {
        document.querySelector('.soppTittel').innerHTML = `${itemPressedClass.id}`;
        search_inp.value = `${itemPressedClass.id}`; // satt lik navnet til matitem. og som trygger function y under. som igjen trigger showCoordinates.


    } else {
        console.log('aint ready yet!');
    }
    
    showCoordinatesforClickedItem();

}

document.querySelector('.database_innhold').addEventListener('click', showItemPressed); // click on the dom elements will not work, because this is outside of the scope. So I changed to .database_innhold which is clickable. 


// create search function. 
const search_inp = document.querySelector('.search_inp');


//Search function triggered by on input & to lower case. 
//this function iterates the array to find which one that match the entry in in Firebase, but is this good practice? 
//if keyup on input value, the loop iterates and if = entrie name..


document.querySelector('.search_inp').onkeyup = () => {
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
            zoom: 13.5,
        
            });
        // show marker on new destination when search inp.
        const div = document.createElement("div");
        div.innerHTML = `<p id="temp_marker_font">${entries[i]}</p>`;
        div.className = "temp_marker";
        div.id = "temp_marker"
        
        const map_label = new mapboxgl.Marker(div);
        map_label.setLngLat ([`${long[i]}`, `${lat[i]}`]); // add lat long for clicked item.
        map_label.addTo(map);


    } else {
        console.log('entry not found!!');
    }
    
}



function showCoordinatesforClickedItem() {
    for(let i = 0; i < entries.length; i++)
    if(search_inp.value.toLowerCase() == `${entries[i]}`.toLowerCase()) { 

        console.log('entry found!');
       
        search_inp.value = ""; // set to nothing 
        // add function map.flyTo for mapbox 

        map.flyTo({
            center: [`${long[i]}`, `${lat[i]}`],
            zoom: 13.5,
            });


        // show marker on new destination when clicked on databaseItem.
        const div = document.createElement("div");
        div.innerHTML = `<p id="temp_marker_font">${entries[i]}</p>`;
        div.className = "temp_marker";
        div.id = "temp_marker"
        
        const map_label = new mapboxgl.Marker(div);
        map_label.setLngLat ([`${long[i]}`, `${lat[i]}`]); // add lat long for clicked item.
        map_label.addTo(map);

    } else {
        console.log('entry not found!!');
    }
    

}

   
//user authentification

// firebase.auth().signInAnonymously().catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//     }
//     // ...
//   });
