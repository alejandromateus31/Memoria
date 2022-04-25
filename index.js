const templateCard = document.getElementById('template-carrito').content
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const fragment = document.createDocumentFragment()
var input = document.getElementById("myInput");
let AuxJsonData = [];
let contador = 0;
let bandera = true;


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
       // pintarcards(data);



    } catch (error) {

    }


}


const arrayAlreves = () =>{
    console.log('zx');
}




const pintarcards = () => {

        templateCard.querySelector('h1').textContent = AuxJsonData[contador].id       
        const clone = templateCard.cloneNode(true)
        console.log('dfw');
        console.log(clone);
        console.log('--');
        fragment.appendChild(clone)
        items.appendChild(fragment)
        agregarInput()
        document.querySelector("#myInput").focus();

    
}


const controlaCards = () =>{

    items.innerHTML = '';



    if((contador < AuxJsonData.length) && (bandera) ){
        pintarcards( );

    }else{
       
        arrayAlreves();
    }



}



const agregarInput = () =>{

    document.querySelector('#myInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          
          if((document.querySelector('#myInput').value) == AuxJsonData[contador].title){
              console.log('correcto');
          };

          
         
            contador ++;
        
          
          controlaCards(contador);
          
          
        }

      

    });

}


