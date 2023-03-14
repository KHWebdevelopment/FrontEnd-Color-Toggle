const home = document.getElementById("home");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const purple = document.getElementById("purple");
const orange = document.getElementById("orange");
const toggleMenu = document.getElementById("toggleMenu");
const toggleDown = document.getElementById("toggle");
const button = document.querySelector("i")

home.classList.add("lightgray");
red.classList.add("red");
blue.classList.add("blue");
green.classList.add("green");
purple.classList.add("purple");
orange.classList.add("orange");

document.querySelector("div").innerHTML = "This is the color LIGHTGRAY!";

// show - hide menu on click
/*button.onclick = function() {
    toggleMenu.classList.toggle("active");
}*/

// show - hide menu on mouseover - mouseout
/*button.onmouseover = function() {
    toggleMenu.classList.add("active");
}
button.onmouseout = function() {
    toggleMenu.classList.remove("active");
};*/

// toggle menu smooth on mouseover - mouseout 
button.onmouseover = function(){

    if (!toggleMenu.classList.contains('active')) {
      
      toggleMenu.classList.add('active');
      toggleMenu.style.height = 'auto';

      const height = toggleMenu.clientHeight + 'px';

      toggleMenu.style.height = '0px';

      setTimeout(function () {
        toggleMenu.style.height = height;
      }, 0);
      
    } else {
      
      toggleMenu.style.height = '0px';

      toggleMenu.addEventListener('transitionend', function () {
        toggleMenu.classList.remove('active');
      }, {
        once: true
      });
      
    }
    
  };

// the colors
home.addEventListener('click', function(){
    document.querySelector("nav").style.backgroundColor = "lightgray";
    document.getElementById('radio0').checked = true;
    document.querySelector("div").innerHTML = "This is the color LIGHTGRAY!";
});
document.addEventListener('keydown', function (event) {
    if (event.key === '1') {
        document.querySelector("nav").style.backgroundColor = "lightgray";
        document.querySelector("div").innerHTML = "This is the color LIGHTGRAY!";
    }
});

red.addEventListener('click', function(){
    document.querySelector("nav").style.backgroundColor = "red";
    document.getElementById('radio1').checked = true;
    document.querySelector("div").innerHTML = "This is the color RED!";
});
document.addEventListener('keydown', function (event) {
    if (event.key === '2') {
        document.querySelector("nav").style.backgroundColor = "red";
        document.querySelector("div").innerHTML = "This is the color RED!";
    }
});

blue.addEventListener('click', function(){
    document.querySelector("nav").style.backgroundColor ="blue";
    document.getElementById('radio2').checked = true;
    document.querySelector("div").innerHTML = "This is the color BLUE!";
});
document.addEventListener('keydown', function (event) {
    if (event.key === '3') {
        document.querySelector("nav").style.backgroundColor = "blue";
        document.querySelector("div").innerHTML = "This is the color BLUE!";
    }
});

green.addEventListener('click', function(){
    document.querySelector("nav").style.backgroundColor ="green";
    document.getElementById('radio3').checked = true;
    document.querySelector("div").innerHTML = "This is the color GREEN!";
});
document.addEventListener('keydown', function (event) {
    if (event.key === '4') {
        document.querySelector("nav").style.backgroundColor = "green";
        document.querySelector("div").innerHTML = "This is the color GREEN!";
    }
});

purple.addEventListener('click', function(){
    document.querySelector("nav").style.backgroundColor ="purple";
    document.getElementById('radio4').checked = true;
    document.querySelector("div").innerHTML = "This is the color PURPLE!";
});
document.addEventListener('keydown', function (event) {
    if (event.key === '5') {
        document.querySelector("nav").style.backgroundColor = "purple";
        document.querySelector("div").innerHTML = "This is the color PURPLE!";
    }
});

orange.addEventListener('click', function(){
    document.querySelector("nav").style.backgroundColor ="orange";
    document.getElementById('radio5').checked = true;
    document.querySelector("div").innerHTML = "This is the color ORANGE!";
});
document.addEventListener('keydown', function (event) {
    if (event.key === '6') {
        document.querySelector("nav").style.backgroundColor = "orange";
        document.querySelector("div").innerHTML = "This is the color ORANGE!";
    }
});