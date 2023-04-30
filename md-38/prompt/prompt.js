const showAlert = () =>{
    alert('Hi ki khobor ?')
}
const askSomething = () =>{
    const decision = confirm('Are u joining the picnic?');
    console.log(decision);
    if(decision === true){
        alert('Send 500 taka.')
    }
    else{
        alert('Kiptuuuuuuuuuuus')
    }
}

const getUserInfo = () =>{
    const name = prompt('Tell ur name please !');
    console.log(name);
    if(!!name){
        alert('Welcome here', name)
    }
    else{
        alert('enter ur name')
    }
}