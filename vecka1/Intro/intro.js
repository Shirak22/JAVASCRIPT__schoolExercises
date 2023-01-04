fetch('https://restcountries.com/v3.1/all')
    .then((data)=> data.json())
    .then((dataData)=>{
        
        
        
        console.log(dataData);
        // const data = Object.entries(dataData); 
        // data.forEach((Cur) => {
        //     console.log(Cur);
        //     document.body.innerHTML += ` <h1> ${Cur[0]} :  ${Cur[1]} </h1>`; 
        // }); 

    });

