const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//start color
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.globalCompositeOperation= 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0
let direction = true

function draw(e){
	if(!isDrawing) return; //not drawing then don't do anything
	
	ctx.strokeStyle = `hsl(${hue},100%,50%)`
	
	ctx.beginPath();
	// start from
	ctx.moveTo(lastX, lastY);
	// go to
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	lastX = e.offsetX
	lastY = e.offsetY

	hue = (hue%360)+1;

	if (ctx.lineWidth>=100 || ctx.lineWidth<=1){
		direction = !direction;
	}
	if(direction){
		ctx.lineWidth++
	}else{
		ctx.lineWidth--
	}

	
}


canvas.addEventListener('mousedown', (e)=> {
	isDrawing = true
	lastX = e.offsetX
	lastY = e.offsetY
});
canvas.addEventListener('mousemove',draw);

canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);
