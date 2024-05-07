let ul = document.querySelector('.inercontainer');
let btn = document.querySelector('.button-create');
let input = document.querySelector('.input');
let amount = document.querySelector('.amount');
let counter = 0;
btn.addEventListener('click', function () {
  //list item creation
  let li = document.createElement('li');
  let text = input.value;
  console.log(text);
  let div = document.createElement('div');
  let img1 = document.createElement('img');
  img1.src = './assets/Vector.svg';
  img1.style.marginRight = '8px';
  let img2 = document.createElement('img');
  img2.src = './assets/Vector (1).svg';
  let img3 = document.createElement('img');
  img3.src = './assets/Group 1 (1).svg';
  img3.classList.add('img3');
  div.appendChild(img1);
  div.appendChild(img2);
  div.classList.add('div');
  li.textContent = text;
  li.appendChild(div);
  li.classList.add('todo');

  if (text.trim() === '') {
    alert('enter a todo');
  } else {
    ul.append(li);
    counter++;
    amount.textContent = counter;
  }
  img2.addEventListener('click', function () {
    li.remove();
    counter--;
    amount.textContent = counter;
  });
  img1.addEventListener('click', function () {
    li.classList.toggle('click');
  });
});
