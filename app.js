
//get all the radio buttons
var radios = document.querySelectorAll('input[type=radio]');
//get only the checked radio button
var checked = document.querySelectorAll('input[type=radio]:checked');
//get the submit button
var btn = document.querySelector('[type=button]');
//disable the button on page load by checking the length
if(!checked.length){
  btn.setAttribute("disabled", "disabled");
}
//attach the event handler to all the radio buttons with forEach and addEventListener
radios.forEach(function(el){
  el.addEventListener('click', function(){
    checked = document.querySelectorAll('input[type=radio]:checked');
    if(checked.length){
      //enable the button by removing the attribute
      btn.removeAttribute("disabled");
    }
  });
});


const reviewScreen = document.getElementById('review');
const thankYou = document.getElementById('thankYou');
const message = document.getElementById('message');

let stars = 0;

document.getElementById("btnSubmit").onclick = function() {
    let radios = document.getElementsByName("review");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            stars = radios[i].value;
        }
    } if (stars > 0) {
    reviewScreen.style.display = 'none';
    thankYou.style.display = 'flex';
    message.innerHTML = `You selected ${stars} out 5`;
    } //else alert('Please select one option!')
};
