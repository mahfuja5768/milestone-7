const updateCounter = () =>{
    const countField = document.getElementById('count-field');
    // console.log('btn clicked');
    const getCountFieldNumber = countField.innerText;
    const initialNumber = parseInt(getCountFieldNumber);
    
    let newCountNumber = initialNumber + 1;
    countField.innerText = newCountNumber;
    return newCountNumber;
}


document.getElementById('press-btn').addEventListener('click', function(){
    const newCountNumber = updateCounter();
    localStorage.setItem('count', newCountNumber);
    console.log(newCountNumber)
})


const countField = document.getElementById('count-field');
document.getElementById('restart').addEventListener('click', function(){
    countField.innerText = 0;
    localStorage.clear()
})


const displayStoredNumber = () =>{
    const getCountFromLocalS = localStorage.getItem('count');
    countField.innerText = getCountFromLocalS;
    console.log(getCountFromLocalS)
}

displayStoredNumber()