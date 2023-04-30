const getInputValue = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}



document.getElementById('btn-add').addEventListener('click', function(){
    const nameValue = getInputValue('name-field');
    const ageValue = getInputValue('age-field');
    localStorage.setItem('Age', ageValue);
    localStorage.setItem('Name', nameValue);
    displayInfo(nameValue, ageValue)
})


const displayInfo = (nameValue, ageValue) =>{
    const infoContainer = document.getElementById('info-container');
    const li = document.createElement('li');
    li.innerText = `${nameValue} : ${ageValue}`;
    infoContainer.appendChild(li)
}




const clearAll = () => {
    localStorage.clear()
}