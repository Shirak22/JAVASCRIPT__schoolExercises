

// 1. Byt namn på första hoodien från Ash till Potato.

let AshHoodie = document.querySelector('.art-1 > h3'); 
    AshHoodie.innerText = 'Potato';
// Tips
// 2. Byt namn på Home till Start.
let menu = document.querySelectorAll('header nav a'); 
    menu[0].innerText = "Start"; 
// 3. Byt namn på Contact till Mail Us.
    menu[2].innerText = "Mail Us "; 
// 4. Byt ut informationen om Sinus Hoodie - Fire.
let fireHoodie = document.querySelector('.art-2 h3');
let fireHoodieParagraph = document.querySelector('.art-2 p');
fireHoodie.innerText = 'Apple';
fireHoodieParagraph.innerText = "Sinus Apple"
// 5. Byt bakgrundsfärg och text på en knapp.
let fireHoodieBtn = document.querySelector('.art-2 button');
fireHoodieBtn.style.backgroundColor = "orange";
// Tips
// 6. Byt bakgrundsfärg på någon av produkterna.
let waterProduct = document.getElementsByClassName('art-3')[0];
waterProduct.style.backgroundColor = "lightBlue";

// 7. Byt ut adressen på sidan.
    let adress = document.querySelectorAll('footer > section > article');
        adress[1].lastElementChild.innerHTML = "Vasaparken 60389 <br> Norrköping "
// 8. Byt färg på samtliga <p>.
        let allParagraph  = document.getElementsByTagName('P'); 

            for (let i = 0; i < allParagraph.length; i++) {
                const element = allParagraph[i];
                    element.style.color = "#f55";
            }   

// Tips
// 9. Ändra text på samtliga knappar till add to cart.
            let allButtons = document.getElementsByTagName('BUTTON'); 
            for(let i = 0; i < allButtons.length; i++){
                const button = allButtons[i]; 
                button.innerText = "Add to cart";
            }
// 10. Lägg till classen active på menyalternativet home.
let menuItem = document.querySelectorAll('header nav a'); 
    menu[0].classList.add('active');
// Tips
// 11. Ta bort classen logo på logotypen.
let logo = document.querySelector('header > img'); 
        logo.classList.remove('logo');
            
// Tips
// Add Content
// 12. Lägg till ett nytt menyalternativ.
let headerMeny = document.querySelector('header nav a'); 
headerMeny.insertAdjacentHTML('afterend', '<a href="#">nytt Alternative</a> '); 
// 13. Lägg till en ny produkt med följande info.
      
// el	beskrivning
// img	hoodie-forrest.png
// h2	Sinus Hoodie
// h3	Forrest
// p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.

let main = document.querySelector('main');
let newProduct = document.createElement('article');
            newProduct.setAttribute('class', 'art-4');
            main.appendChild(newProduct);

    newProduct.insertAdjacentHTML('beforeend', '<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>');
    newProduct.insertAdjacentHTML('beforeend', '<h2>Sinus Hoodie</h2>');
    newProduct.insertAdjacentHTML('beforeend', '<h3>Forrest</h3>');
    newProduct.insertAdjacentHTML('beforeend', '<p>	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>');
    newProduct.insertAdjacentHTML('beforeend', '<button>buy</button>');

// Tips
// Events
// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
let logotypen = document.querySelector('header > img'); 
logotypen.addEventListener('click', ()=>{
    console.log('found you!');
}); 
// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

let articles = document.querySelectorAll('main > article');
articles.forEach(article => {
    let title = article.querySelector('h3'); 
    article.addEventListener('click', ()=> {
        console.log(`Hi, Im article ${title.innerText}`);
    });

});