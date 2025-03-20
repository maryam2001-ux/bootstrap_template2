// document.addEventListener("DOMContentLoaded", function() {
//   var typed = new Typed('.typing', {
//       strings: ["Larry Danials", "Designer", "Developer"],
//       typeSpeed: 70,
//       backSpeed: 50,
//       backDelay: 1200,
//       smartBackspace: false, 
//       loop: true
//   });
// });

const words = ["Larry Danials", "Designer", "Developer"];
let currentIndex = 0;

function animateWords() {
  const typingElement = document.querySelector('.typing');
  typingElement.innerHTML = "";
  const currentWord = words[currentIndex];
  typingElement.innerHTML = currentWord.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.typing .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 34 * (i + 1)
    })
    .add({
      targets: '.typing .letter',
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 500,
      delay: 1000,
      complete: () => {
        currentIndex = (currentIndex + 1) % words.length;
        animateWords();
      }
    });
}

animateWords();



//  js code for changing the back ground color for js 


window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 650) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});