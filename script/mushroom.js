//Fjern alle andre komponenter unntatt tilhørende sopp

//Fjern alle andre komponenter unntatt tilhørende sopp

const chatbot_components = document.querySelectorAll('.chatbot_component');


// document.querySelector('#mushroom').onclick = () => {
//     for(i = 0; i < chatbot_components.length; ++i) {
//         chatbot_components[i].style.visibility = 'hidden';
//     }
// }


// Funksjoner som styrer animasjon og visning av knapper tilhørende skjemaet

const onchangefunction = document.querySelector('#choose_file').onchange = () => {
   

    document.querySelector('#velg_fil_knapp').style.animation = 'none';
    document.querySelector('#velg_fil_knapp').style.pointerEvents = "none";
    document.querySelector('#velg_fil_knapp').innerHTML = "";

    //last opp bilde til firestore
    const inp_file = (document.querySelector('#choose_file').files[0]);

    const lagringsplass = storage.ref("matbilder/" + ( +new Date() ) + inp_file.name);

    lagringsplass.put(inp_file)
    .then( inp_file => inp_file.ref.getDownloadURL() )
    .then( url => {
        const inp_file_url = url; //sett constant inn i database
        console.log(inp_file_url); //logging url fine
        d = innerVariable_inp_file_url(inp_file_url);
    })
   
 
}



let d;

const innerVariable_inp_file_url = some => {
    return some;
}

function tester() {
    console.log(d); //logs fine.
    
}
