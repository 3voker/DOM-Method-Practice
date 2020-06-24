let bodyElement = document.querySelector('body');

let divElement = document.createElement('div');

let buttonElement = document.createElement('button');

let mainElement = document.createElement('main');

let scriptElement = document.createElement('script');

let imgElement = document.createElement('img');

imgElement.src = 'https://i.pinimg.com/236x/ca/6b/e4/ca6be4abcdc057907f3707c20b8e6cde.jpg';

let anchorElement = document.createElement('a');

bodyElement.append(buttonElement);

bodyElement.append(mainElement);

bodyElement.append(scriptElement);

buttonElement.append('Not a button.')

mainElement.append(imgElement);

mainElement.append(anchorElement);

buttonElement.addEventListener("click", function()
{
    mainElement.remove();
})