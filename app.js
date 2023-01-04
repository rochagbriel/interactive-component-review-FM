const reviewScreen = document.getElementById('review');
const thankYou = document.getElementById('thankYou');
const message = document.getElementById('message');
let ratingButtons = document.querySelectorAll('.button');

const submit = document.getElementById('submit');
let stars = 0;

ratingButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        return stars = index + 1;
    })
}); 
    
submit.addEventListener('click', () => {
    reviewScreen.style.display = 'none';
    thankYou.style.display = 'flex';
    message.innerHTML = `You selected ${stars} out 5`;
});

