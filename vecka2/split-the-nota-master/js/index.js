
document.getElementById('calculateButton').addEventListener('click', function() {

    let  friendSum = calculatedTotal();

    showDividedSum(friendSum);
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');

    // debuging 
    // console.log('friendSum ', friendSum);
    // console.log('total ', total);
    // console.log('numberOfFriends ', numberOfFriends);
    // console.log('calculatedTip ', calculatedTip);
    // console.log('tip ', tip); 
});


//------ list to do -------

//Calculate the total tip 
function calculateTip(sum, tip) {
    return sum * tip;
}

//calculate the divided total 
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}

function calculatedTotal() {
    //Hämtar det som skrivits i inputfältet med ID sum
    const sum = document.getElementById('sum').value;
    //Hämtar det som skrivits i inputfältet med ID tip
    const tip = document.getElementById('tip').value;
    //Hämtar det som skrivits i inputfältet med ID numberOfFriends
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;
    const totalDivided = divideTotal(total, numberOfFriends); 

    return totalDivided.toString(); 
}

//render the results 
function showDividedSum(sum) {
       
        if(sum !== 'NaN'){
            document.getElementById('friendSum').innerHTML = sum + ' kr';
        }else {
            document.getElementById('friendSum').innerHTML = 'Please fill valid data! <strong> ""NUMBER"" </strong> ';
        }
}


// function calculatedTotal() {
//     //Hämtar det som skrivits i inputfältet med ID sum
//     const sum = document.getElementById('sum').value;
//     //Hämtar det som skrivits i inputfältet med ID tip
//     const tip = document.getElementById('tip').value;
//     //Hämtar det som skrivits i inputfältet med ID numberOfFriends
//     const numberOfFriends = document.getElementById('numberOfFriends').value;
//     let total; 
//     // const calculatedTip = calculateTip(sum, tip);
//     if(tip == ''){
//         total = parseInt(sum);
//     }else {
//         total = parseInt(sum) + parseInt(tip);
//     }
     
//     const totalDivided = divideTotal(total, numberOfFriends); 

//     return totalDivided.toString(); 
// }