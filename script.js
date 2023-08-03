const sideToggle = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const messages = document.querySelector(".messages");
const bell = document.querySelector(".bell");
const container = document.querySelectorAll(".container")

const unread = document.querySelectorAll(".unread");

sideToggle.addEventListener("click", function(){
    sideBar.classList.toggle("show-sidebar");
})

document.getElementById('form').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=' + document.getElementById('search').value;
    return false;
}

bell.addEventListener('click', function() {
  messages.classList.toggle('click');
})

let newNum = document.getElementById("number");
let num = unread.length;
newNum.textContent = num;

container.forEach((c, i)=> {
    c.addEventListener('click', function() {
        unread[i].classList.add('active');
        newNum.textContent = num - document.querySelectorAll(".active").length;    
       console.log(document.querySelectorAll(".active").length);
      })
})


'use strict';

function Make_a_slideshow(id){
    var slideIndex = 0,
        container = document.getElementById(id);

    function showSlides(){
        var slides = container.querySelectorAll('.mySlides');
        for (var i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length){
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    showSlides();
}

//start slideshow 1
Make_a_slideshow('slideshow1');

//delay 1 second before starting slideshow 2
setTimeout(function(){
    Make_a_slideshow('slideshow2');
}, 1000);
setTimeout(function(){
    Make_a_slideshow('slideshow3');
}, 1600);
setTimeout(function(){
    Make_a_slideshow('slideshow4');
}, 1200);
setTimeout(function(){
    Make_a_slideshow('slideshow5');
}, 4300);
setTimeout(function(){
    Make_a_slideshow('slideshow6');
}, 3000);
setTimeout(function(){
    Make_a_slideshow('slideshow7');
}, 800);
setTimeout(function(){
    Make_a_slideshow('slideshow8');
}, 300);
setTimeout(function(){
    Make_a_slideshow('slideshow9');
}, 2000);
setTimeout(function(){
    Make_a_slideshow('slideshow10');
}, 100);

