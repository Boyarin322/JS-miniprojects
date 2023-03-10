//JS 30 za 3 dnya challenge
if (typeof window !== 'undefined') {
    // Code that uses the window object
    window.addEventListener('keydown', playSound);
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransitionClass));
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // return if it is not an audio
    key.classList.add("playing")
    audio.currentTime = 0; // rewind play time
    audio.play();
}
function removeTransitionClass(e){
   if(e.propertyName !== 'transform'){
      return;
   }
   this.classList.remove("playing");
}