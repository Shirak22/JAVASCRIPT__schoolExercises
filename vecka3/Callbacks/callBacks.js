let numbers = [1,2,3,4,5,6,7,8,9,10,11];


    

// const filterOdd = (arr) => {
//     let filterd = []; 

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element % 2 !== 0) filterd.push(element); 
//     }

//     return filterd; 
// }


//filtering the numbers regardless the logic 
Array.prototype.filterNumbers = function(callback){
    const filterd = []; 

    for(let i = 0; i < this.length; i++){
            callback(this[i]) ? filterd.push(this[i]) : null;

    }

    return filterd; 

} 

console.log(numbers.filterNumbers(isLowerThanSex).filterNumbers(isEven));
//callback functions with logic 
function isOdd(x){
    return x % 2 != 0; 
}

function isEven(x) {
    return x % 2 === 0; 
}

function isLowerThanSex(x){
    return x < 6 ; 
}



//function that returns function 
function culculate(operation){

    switch(operation){
        case "ADD": 
            return function(a,b){
                return a+b; 
            }

            case "SUB": 
            return function(a,b){
                return a-b; 
            }
    }

}
console.log(culculate('ADD')(2,5));
