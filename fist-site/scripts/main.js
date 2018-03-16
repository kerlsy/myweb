var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images//beach.jpg') {
        myImage.setAttribute('src','images//beach2.jpg');
    } else {
        myImage.setAttribute('src','images//beach.jpg');
    }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'My web is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerText = 'My web is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
};