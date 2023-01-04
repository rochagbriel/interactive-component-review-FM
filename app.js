const reviewScreen = document.getElementById('review');
const thankYou = document.getElementById('thankYou');
const message = document.getElementById('message');

let selectedButton1 = document.getElementById('button1');
let selectedButton2 = document.getElementById('button2');
let selectedButton3 = document.getElementById('button3');
let selectedButton4 = document.getElementById('button4');
let selectedButton5 = document.getElementById('button5');

const submit = document.getElementById('submit');
let stars = 0

selectedButton1.addEventListener('click', () => {
    return stars = 1;
});
selectedButton2.addEventListener('click', () => {
    return stars = 2;
});
selectedButton3.addEventListener('click', () => {
    return stars = 3;
});
selectedButton4.addEventListener('click', () => {
    return stars = 4;
});
selectedButton5.addEventListener('click', () => {
    return stars = 5;
});

submit.addEventListener('click', () => {
    reviewScreen.style.display = 'none';
    thankYou.style.display = 'flex';
    message.innerHTML = `You selected ${stars} out 5`;
})

