
const navbar = document.getElementById('navbar');


let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    
    if (prevScrollPos < currentScrollPos) {
        navbar.style.top = "-60px";  
    }
    
    else {
        navbar.style.top = "0";  
    }

    prevScrollPos = currentScrollPos; 
};


  document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const progressBarFills = document.querySelectorAll(".progress-bar-fill");
  
    const observerOptions = {
      root: null, 
      threshold: 0.1, 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBarFills.forEach((bar) => {
            const skillLevel = bar.getAttribute("data-skill");
            bar.style.width = skillLevel; 
          });
          observer.disconnect(); 
        }
      });
    }, observerOptions);
  
    observer.observe(skillsSection);
  });
  

  
function validateForm() {
 
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  
  if (name == "" || email == "" || subject == "" || message == "") {
    alert("All fields must be filled out.");
    return false;
  }

  
  document.getElementById("contactForm").reset(); 
  document.getElementById("successMessage").style.display = "block"; 
  return false; 
}

var slideIndex1 = 1;
var slideIndex2 = 1;

showDivs(slideIndex1, 'project1');
showDivs(slideIndex2, 'project2');

function plusDivs(n, project) {
  if (project === 'project1') {
    showDivs(slideIndex1 += n, 'project1');
  } else if (project === 'project2') {
    showDivs(slideIndex2 += n, 'project2');
  }
}

function currentDiv(n, project) {
  if (project === 'project1') {
    showDivs(slideIndex1 = n, 'project1');
  } else if (project === 'project2') {
    showDivs(slideIndex2 = n, 'project2');
  }
}

function showDivs(n, project) {
  var i;
  var x, dots;
  
  if (project === 'project1') {
    x = document.getElementsByClassName("project1-slides");
    dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " w3-white";
  } else if (project === 'project2') {
    x = document.getElementsByClassName("project2-slides");
    dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " w3-white";
  }
}

