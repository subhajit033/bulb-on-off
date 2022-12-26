
let bulb_on = function(){
    document.getElementById("myImages").src = "https://www.w3schools.com/js/pic_bulbon.gif";
}
let bulb_off = function(){
    document.getElementById("myImages").src = "https://www.w3schools.com/js/pic_bulboff.gif";
}
btn1.addEventListener('click', bulb_on);
btn2.addEventListener('click', bulb_off);
btn1.innerHTML = "bulb-on"
btn2.innerHTML = "bulb-off"
document.getElementById("btn2").style.background = "teal";
l

