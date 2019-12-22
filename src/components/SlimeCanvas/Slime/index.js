import {
    POINT_COUNT,
    SPRING_CONSTANT,
    SPRING_CONSTANT_BASELINE,
    DAMPING,
    POINT_MASS,
    SHOW_VERTICIES,
    POINT_RADIUS,
    INTERACTIVE_SPREAD,
    MOUSE_POW,
} from "./constants";

const getRandomNumber = (min = 1, max = 1000) => Math.floor(Math.random() * (max - min) + min)

/*------------------------------*\
|* Main
\*------------------------------*/

class Slime {
	constructor() {
		this.canvas = document.getElementById("slime");
		this.devicePixelRatio = window.devicePixelRatio || 1;
		
		this.ctx = this.canvas.getContext('2d');
		this.ctx.scale(this.devicePixelRatio, this.devicePixelRatio);
		
		this.mouse = {
			x: this.canvas.width / 2,
			y: this.canvas.height / 2,
			mousedown: false,
			power: 15,
		};
		
		this.setCanvasSize = this.setCanvasSize.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.handleMouse = this.handleMouse.bind(this);
		this.render = this.render.bind(this);

		this.setCanvasSize();
		this.addListeners();

		this.initialize();
		
		this.triggerResponse(this.canvas.width, this.canvas.height * 1.4);
		this.triggerResponse(this.canvas.width / 8, 0);
		
		setInterval(() => {
			this.triggerResponse(this.canvas.width * 3, this.canvas.height * 10);
			this.triggerResponse(this.canvas.width, 0);
		}, 3000)
		
		this.tick = 0;
		this.render(); 
	}
	
	initialize() {
		const padding = 60 * this.devicePixelRatio;
		const points = POINT_COUNT;
		const y = this.canvas.height;
		const p1 = new Point(0, y);
		const p2 = new Point(this.canvas.width, y);
		this.reaction = new Reaction(points, p1, p2);    
	}
	
	addListeners() {
		window.addEventListener('resize', this.setCanvasSize);
		window.addEventListener('mousedown', this.handleMouseDown);
		window.addEventListener('mouseup', this.handleMouseUp);
		window.addEventListener('mousemove', this.handleMouse);
	}
	
	handleMouseDown(event) {
		this.mouse.mousedown = true;
	}
	
	handleMouseUp(event) {
		this.mouse.mousedown= false;
	}
	
	handleMouse(event) {
		const x = event.clientX * this.devicePixelRatio;
		const y = event.clientY * this.devicePixelRatio;
		this.mouse.x = x;
		this.mouse.y = y;
	}
	
	setCanvasSize() {
		this.canvas.width = window.innerWidth * this.devicePixelRatio;
		this.canvas.height = window.innerHeight * this.devicePixelRatio;
		this.canvas.style.width = `${window.innerWidth}px`;
		this.canvas.style.height = `${600}px`;

		this.initialize();
	}
	
	triggerResponse(x, y) {
		let closestPoint = {};
		let closestDistance = -1;

		const points = this.reaction.points;
		let idx = 0;

		// Gets the closest point to the x coordinates
		for (var n = 0; n < points.length; n++) {
			const p = points[n];
			const distance = Math.abs(x - p.x);

			if (closestDistance === -1) {
				closestPoint = p;
				closestDistance = distance;
				idx = n;
			} else if (distance <= closestDistance) {
				closestPoint = p;
				closestDistance = distance;
				idx = n;
			}
		}
    
		const halfHeight = this.canvas.height / 2;        
		const dy = y - halfHeight; // delta y from baseline

		const spread = INTERACTIVE_SPREAD; // number of points to affect from closest point
		const mod = (idx - spread) % points.length; // modulus
		const start = mod < 0 ? points.length + mod : mod; // starting idx accounting for negatives
		const length = spread * 2 + 1; // number of points total 

		let rad = 0; // start radian
		const radInc = Math.PI / length; // radians bases on total length

		// updates the wave points at the start index applying a sin wave 
		// so that it's peak is centered on the mouse
		for (let n = 0; n < length; n++) {
				const i = (start + n) % points.length;
				const point = points[i];
				const pow = Math.sin(rad) * dy * MOUSE_POW * this.mouse.power; // power determined by delta y from baseline
				point.vy += pow;
				// inc radians for sin
				rad += radInc;
		}
	}
	
	drawBackground() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	
	drawCurve() {
		this.ctx.lineCap = 'round';
		// handy ref for getting the max or min value of an array
		// https://stackoverflow.com/a/4020842
		const highestPoint = Math.min.apply(Math, this.reaction.points.map(o => o.y));
		this.ctx.fillStyle = "#0BE881";

		this.ctx.beginPath();
		this.ctx.moveTo(
			this.reaction.points[0].x,
			this.reaction.points[0].y
		);

		for (let n = 0; n < this.reaction.points.length - 1; n++) {
			const p1 = this.reaction.points[n];
			const p2 = this.reaction.points[n + 1];

			const cpx = (p1.x + p2.x) / 2;
			const cpy = (p1.y + p2.y) / 2;

			if (n === this.reaction.points.length - 2) {
				this.ctx.quadraticCurveTo(
					p1.x,
					p1.y,
					p2.x,
					p2.y
				);
			} else {
				this.ctx.quadraticCurveTo(
					p1.x,
					p1.y,
					cpx,
					cpy
				);
			}
		}

		this.ctx.lineTo(
			this.canvas.width,
			this.canvas.height
		);

		this.ctx.lineTo(
			0,
			this.canvas.height
		);

		this.ctx.closePath();
		this.ctx.fill();
	}
	
	drawVerts() {
		this.ctx.lineWidth = 2 * this.devicePixelRatio;
		this.ctx.strokeStyle = '#009efd';

		this.reaction.points.forEach(p => {
			this.ctx.beginPath();
			this.ctx.arc(p.x, p.y, POINT_RADIUS * this.devicePixelRatio, 0, Math.PI * 2, true);
			this.ctx.closePath();
			this.ctx.fill();     
			this.ctx.stroke();
		});
	}
	
	updateResponsePower() {
		const max = 10;
		const mouse = this.mouse;
        
		if (mouse.mousedown && mouse.power > max) {
				mouse.power = max;
		} else if (mouse.mousedown) {
				mouse.power += 0.1;
		} else {
				mouse.power = 1;
		}
	}
	
	updateResponse() {
    const points = this.reaction.points;
        
		for (var n = 0; n < points.length; n++) {
			const p = points[n];
            
      // force to apply to this point
			let force = 0;

			// forces caused by the point immediately to the left or the right
			let forceFromLeft;
			let forceFromRight;
			
			// wrap to left-to-right
			if (n === 0) { 
				let dy = points[points.length - 1].y - p.y;
				forceFromLeft = SPRING_CONSTANT * dy;
			} else { // normally
				let dy = points[n - 1].y - p.y;
				forceFromLeft = SPRING_CONSTANT * dy;
			}
			
			// wrap to right-to-left
			if (n === points.length - 1) {
				let dy = points[0].y - p.y;
				forceFromRight = SPRING_CONSTANT * dy;
			} else { // normally
				let dy = points[n + 1].y - p.y;
				forceFromRight = SPRING_CONSTANT * dy;
			}

			// Also apply force toward the baseline
			let dy = this.canvas.height / 2 - p.y;
			const forceToBaseline = SPRING_CONSTANT_BASELINE * dy;
            
			// Sum up forces
			force = force + forceFromLeft;
			force = force + forceFromRight;
			force = force + forceToBaseline;

			// Calculate acceleration
			const acceleration = force / p.mass;
     

			// Apply acceleration (with damping)
			p.vy = DAMPING * p.vy + acceleration;

			// Apply speed
			p.y = p.y + p.vy;
		}
	}
	
	render() {
		this.drawBackground();
		this.drawCurve();
		SHOW_VERTICIES && this.drawVerts();

		if (this.mouse.mousedown) {
			const { x, y } = this.mouse;
			this.triggerResponse(x, y);
		}

		this.updateResponsePower();
		this.updateResponse();

		this.tick++;

		window.requestAnimationFrame(this.render);
	}
}

export default Slime;