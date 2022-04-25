const templateCard = document.getElementById('template-carrito').content
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {

     console.log('es una de las pruebas');
    fetchData()
    
});


const fetchData = async() => {

    try {
        //const res = await fetch('api.json')
        //const data = await res.json()
        pintarcards();
       // pintarcards(data);



    } catch (error) {

    }


}


const pintarcards = () => {

    items.innerHTML = ''
    console.log('fsd')
   

        //templateCard.querySelector('card-header').textContent = 1        
        const clone = templateCard.cloneNode(true)
        console.log('dfw');
        console.log(clone);
        console.log('--');
        fragment.appendChild(clone)
 

        items.appendChild(fragment)

}


