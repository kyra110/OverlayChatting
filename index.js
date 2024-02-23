// Fonction pour déclencher l'animation et la répéter toutes les 30 secondes
function animateAndRepeat() {
  userIcon.classList.add('animated2');
  userTitle.classList.add('animated');
  setTimeout(() => {
    userIcon.classList.remove('animated2');
    userTitle.classList.remove('animated');
    setTimeout(animateAndRepeat, 10000); // Répéter l'animation après 30 secondes
  }, 500); // Durée de l'animation
}

function animateLogoReactChat() {
  userReact.classList.add('animLogoReact');
  setTimeout(() => {
    userReact.classList.remove('animLogoReact');
    setTimeout(animateLogoReactChat, 5000); // Répéter l'animation après 30 secondes
  }, 1000); // Durée de l'animation
}
  
  
animateAndRepeat()
animateLogoReactChat()