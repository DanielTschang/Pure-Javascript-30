//Get all elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//build functions
function togglePlay(){
    video.paused ? video.play() : video.pause()
}

function updateToggleButton(){
    //bind to video itself
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
}

function skip(){
    //The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    if(!isChanging){ return }
    video[this.name] = this.value
}
function timeUpdate(){
    handleProgressUpdate()
}

function handleProgressUpdate(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

//hook up event listeners
video.addEventListener('click',togglePlay)
toggle.addEventListener('click',togglePlay)
video.addEventListener('play',updateToggleButton)
video.addEventListener('pause',updateToggleButton)
video.addEventListener('timeupdate',timeUpdate)
skipButtons.forEach(skipbutton => skipbutton.addEventListener('click',skip))

let isChanging = false
ranges.forEach(range => {
        range.addEventListener('mousemove', handleRangeUpdate)
        range.addEventListener('mousedown', ()=> isChanging = true);
        range.addEventListener('mouseup', ()=> isChanging = false);
        range.addEventListener('mouseout', ()=> isChanging = false);
    }
)




progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', ()=> isChanging = true);
progress.addEventListener('mousemove', (e)=> isChanging && scrub(e));
progress.addEventListener('mouseup', ()=> isChanging = false);

