let div = document.createElement('div');

let h1 = document.createElement('h1');
h1.innerText = "Heading";
h1.classList.add('heading-green');

let h2 = document.createElement('h1');
h2.innerText = "Heading";
h2.classList.add('heading-green');

let h3 = document.createElement('h1');
h3.innerText = "Heading";
h3.classList.add('heading-green');

h1.addEventListener('click', () => {
    h1.style.color = 'red';
})

div.append(h1);
div.append(h2);
div.append(h3);

document.querySelector('body').append(div);

let allH1 = document.querySelectorAll('h1');
allH1.forEach((h1) => {
  h1.style.fontSize = "60px"
})