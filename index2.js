const templateCard = document.getElementById('template-carrito').content
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const fragment = document.createDocumentFragment()
var input = document.getElementById("myInput");


let AuxJsonData = [];
let contador = 0;
let contadorBien = 0;
let contadorMal = 0;
let contadorR = 0;
let bandera = true;
let numerosRandom =[];


document.addEventListener('DOMContentLoaded', () => {

     console.log('es una de las pruebas');
    fetchData()
    
});


const fetchData = async() => {

    try {
        const res = await fetch('api.json')
        const data = await res.json()
        AuxJsonData = data;     
        controlaCards();
        contadorR = AuxJsonData.length - 1;
    } catch (error) {

    }
}





const pintarcards = (item) => {

    items.innerHTML = '';

        templateCard.getElementById('ContadorBien').textContent = contadorBien  
       
        templateCard.getElementById('contadorMal').textContent = contadorMal   
        templateCard.querySelector('h1').textContent = AuxJsonData[item].id        
        const clone = templateCard.cloneNode(true)       
        fragment.appendChild(clone)
        items.appendChild(fragment)
        agregarInput(item)
        document.querySelector("#myInput").focus();

    
}


const controlaCards = () =>{


        console.log(AuxJsonData.length - 1);
        if(contador <= AuxJsonData.length - 1)
        {            
            console.log("entro " + contador) ;
            pintarcards(contador);   
            contador ++;       
                  
        }else{
            if(0 < contadorR){
                contadorR --;       
                pintarcards(contadorR);   

            }else{

              

                    if(numerosRandom.length != AuxJsonData.length ){
                        let numeroRamdon ;
                        while(true){
                            numeroRamdon = randomIntFromInterval(0 , AuxJsonData.length  - 1 );
                            if(! numerosRandom.includes(numeroRamdon)){
                                numerosRandom.push(numeroRamdon);
                               break;
                            }
                        }

                        pintarcards(numeroRamdon);
                       
                    }else{
                        items.innerHTML = `<P>Finalizado resultados Correctos ${contadorBien} Incorrectos ${contadorMal} ... </P>`;
                    }
            }
        }
}



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



const agregarInput = (item) =>{
    //debugger;
    document.querySelector('#myInputPalabra').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          
          if( ((document.querySelector('#myInput').value.toLowerCase()) == AuxJsonData[item].title) && ((document.querySelector('#myInputPalabra').value.toLowerCase()) == AuxJsonData[item].palabra))
        {
             contadorBien++;
          }else{
              contadorMal++;
          }
            controlaCards();
                  
        }     

    });

}


