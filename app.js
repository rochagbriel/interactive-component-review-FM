const reviewScreen = document.getElementById('review');
const thankYou = document.getElementById('thankYou');
const message = document.getElementById('message');

let stars = 0;

document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("review");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            stars = radios[i].value;
        }
    } if (stars > 0) {
    reviewScreen.style.display = 'none';
    thankYou.style.display = 'flex';
    message.innerHTML = `You selected ${stars} out 5`;
    } else alert('Please select one option!')
};