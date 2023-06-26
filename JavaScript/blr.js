const div=document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = "Heading";
h1.classList.add('blue');
const h2=document.createElement('h1');
h2.innerText="Lamda";
h2.classList.add('pink');
document.body.style.backgroundColor="yellow";


div.append(h1);
div.append(h2);

let body=document.querySelector('body');
body.append(div)

let aws = document.querySelectorAll('h1');
aws.forEach((h1) => {
  h1.style.fontSize = "50px"
})
//for object .h1
//#id