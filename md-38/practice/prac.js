/* prac:1 */
// console.log('first');
// console.log('second');
// setTimeout(()=>{
//     console.log('third')
// }, 3500)
// console.log('last')

/* prac:2 */
// const sum = () =>{
//    const promptNumber = prompt('Enter your number!');
//    const promptNumberValue = parseFloat(promptNumber);
//    const finalSum = promptNumberValue + 250;
//    alert(finalSum)
// }

/* prac:3 */

/* level-1 */
const parseValue = id =>{
   const inputName = document.getElementById(id);
   const inputNameValue = inputName.value;
   inputName.value = '';
   return inputNameValue;
}

document.getElementById('add-btn').addEventListener('click', function(){
    const first = parseValue('first-name');
    const last = parseValue('last-name');
    //  localStorage.setItem(first, last);
    savePersonToLocalStorage(first, last);
    addNameToDisplay(first, last);
    // console.log(first, last)
})

let getPersonFromLocalStorage = () =>{
    let savedPerson = localStorage.getItem('name');
    let name = {};
    if(savedPerson){
        name = JSON.parse(savedPerson)
    }
    return name;
}

const savePersonToLocalStorage = (first, last) =>{
    const name = getPersonFromLocalStorage();
    name[first] = last;
    const nameStringified = JSON.stringify(name);
    localStorage.setItem('name', nameStringified);
    console.log(nameStringified);
}

const addNameToDisplay = (first, last) =>{
    const nameContainer = document.getElementById('name-container');
    const li = document.createElement('li');
    li.innerText = `${first} ${last}`;
    nameContainer.appendChild(li)
}



const displayStoredPersonName = (first, last) =>{
    const name = getPersonFromLocalStorage();
    for(first in name){
        const last = name[first];
        addNameToDisplay(first, last)
    }
}

displayStoredPersonName()


const clearAll = () => {
    localStorage.clear()
}