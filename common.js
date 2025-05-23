

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
   return convertedValue;
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function setDisable(id,value){
    document.querySelector(id).disabled = value;
}

