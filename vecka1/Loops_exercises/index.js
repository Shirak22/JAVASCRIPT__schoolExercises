
// Classic For loops
// Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.
for(let i = 0; i < 100; i++){
  console.log(`1.for loop with index: ${i}`);  
}


// Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
for (let i = 100; i > 0; i--) {
    console.log(`1.for loop with index: ${i}`);
}


// let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
// Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
    for(let i = 0; i < fruits.length; i++){
        console.log(`1.for loop with index: ${fruits[i]}`);
    } 


// Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
    for(let i = 0; i < fruits.length; i++){
        console.log(`1.for loop with index: ${fruits[i]}: ${i}`);
    } 


// For of loops
// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// Loopa ut ovanstående array och console.log() varje pryl.
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
    for(thing of things){
        console.log(`for of loop:  ${thing}`);
    }

// For Each loops
// let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// Loopa ut ovanstående array och console.log() varje pryl.


// Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.
things.forEach((thing,index)=> {
    console.log(`2.forEach loop ${thing} :${index}`);
});

// While loops
// Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.
let x = 0; 
while ( x < 100) {
    console.log(`3.while loop count: ${x}`);
    x++; 
}


// Loop da loops
// Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.
// [..., 'hjärter 8', 'hjärter 9', ...]
let cardDeck = []; 
let cards = ['clubs','hearts', 'diamonds', 'spades'];

    //render the cards 
            cards.forEach(card =>{
                for (let num = 2; num <= 14; num++) {
                    let typeCardArr = [card, num];
                    cardDeck.push(typeCardArr);
                }
            }); 

            //viewing the array content which contains array of 2 objects 
            cardDeck.forEach(card => {console.log(card);});
            

// Loopa ut samtliga vänners favoritfrukter med en console.log().
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

// looping through the Array that contains objects of 2 keys and one of them contains array
friends.forEach(object => {
    for(const element in object ){
        if(element === 'likes'){
            object[element].forEach(fruit => {
                console.log(fruit);
            });

        }
    }
});


