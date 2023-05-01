function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Halim kaji';


function greetingHandler(name){
    console.log('Massallah aponak onk shundor dekhte,', name ,'apu.')
}
// greeting(greetingHandler, 'Halima,Tanjila');

function submitHandler(){
    console.log('submit button clicked')
}

// document.getElementById('btn-submit').addEventListener('click',submitHandler())

function numberOne(){
    console.log('numberOne is called')
}

function numberTwo(callback){
    console.log('numberTwo is called');
    callback()
}

numberTwo(numberOne)