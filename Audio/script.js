window.onload = function() {
const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach(button => {
  button.addEventListener('click', function() {
    const audioSrc = this.getAttribute('data-audio');
    const audio = new Audio(audioSrc);
    audio.play();
  });
});
}