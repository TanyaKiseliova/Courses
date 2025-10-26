
function validateInput(value) {
    if ((value=='')) {
        showAlert("вы ничего не введли");
        return false;
    }

  let arr = value.split(' ');


    if (arr.some(item => isNaN(Number(item)))){
        showAlert("Введите только числа через пробел ");
        return false;
    }


return true;

}



function showAlert(message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.className = 'overlay';
    
    const alertBox = document.createElement('div');
    alertBox.className = 'box';
    
    const alertText = document.createElement('div');
    alertText.className = 'text';
    alertText.textContent = message;
    
    const okButton = document.createElement('button');
    okButton.className = 'button';
    okButton.textContent = 'OK';
    
    okButton.onclick = () => {
        document.body.removeChild(alertOverlay);
    };
    
    alertBox.appendChild(alertText);
    alertBox.appendChild(okButton);
    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);
}

export {showAlert}
export {validateInput}
