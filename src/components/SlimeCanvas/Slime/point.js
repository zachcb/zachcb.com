/*------------------------------*\
|* Point
\*------------------------------*/

import { POINT_MASS } from "./constants";

class Point {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;

		this.vy = 0;
		this.vx = 0;

		this.mass = POINT_MASS;
	}

	get position() {
		return {
			x: this.x,
			y: this.y,
		};
	}

	moveTo(...args) {
		this.x = args[0];
		this.y = args[1];
	}
}

export default Point;
