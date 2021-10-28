const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
  }

function toggleActive(e){
    console.log(e.propertyName);
    // 改變flex會有flex-grow 但在safari叫flex
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
    
}

panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive))
panels.forEach(panel=>panel.addEventListener('click',toggleOpen));