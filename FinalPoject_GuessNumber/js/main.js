i = 0;
let number = randomNum()
let win = 0;
let loss = 0;

function randomNum() {
  return (Math.floor(Math.random() * 10) + 1);
};


function guessNumber(guessNum) {
  let result = "";
  
  if (i >= 3) {
    i = 0;
    document.querySelector(".result").innerText = `У вас больше нет попыток. Вы проиграли. Загаданное число - ${number}`;
    loss++;
    document.querySelector(".loss").innerText = loss;
    number = randomNum();
   
    return;
  } 
  if(guessNum === number){
    document.querySelector(".result").innerText = `Вы угадали число ${number}. Ура победа!`;
    number = randomNum();
    i = 0;
    win++;
    document.querySelector(".win").innerText = win;
    return result;
  } else if (guessNum < number) {
    document.querySelector(".result").innerText = `Вы не угадали! Ваше число меньше загаданного. `;
  } else {
    document.querySelector(".result").innerText = `Вы не угадали! Ваше число больше загаданного. `;
  };
  i++;
  document.querySelector(".result").innerText += ` У вас осталось ${3 - i} попытки`;
};
