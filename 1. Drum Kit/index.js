


function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing') //這邊的this是指向keyCode Div
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    
    audio.currentTime = 0; //重新開始playing time
    audio.play();
    key.classList.add('playing')
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key')
keys.forEach(key=>addEventListener('transitionend', removeTransition));
