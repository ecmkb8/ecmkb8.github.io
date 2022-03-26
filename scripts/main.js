let myImage = document.querySelector('img');

myImage.onclick =  () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/telluride.jpeg') {
        myImage.setAttribute('src', 'images/telluride_kia.jpeg')
    } else {
        myImage.setAttribute('src', 'images/telluride.jpeg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ': Come to Telluride, you jag';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent= storedName + ': Come to Telluride, you jag';
}

myButton.onclick = () => setUserName()