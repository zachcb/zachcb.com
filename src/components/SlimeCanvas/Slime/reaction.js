/*------------------------------*\
|* Reaction
\*------------------------------*/

import Point from "./point";

class Reaction {
	constructor(points, p1, p2) {
		this.p1 = p1;
		this.p2 = p2;

		const dx = p2.x - p1.x;
		const dy = p2.y - p1.y;

		const vx = dx / (points - 1);
		const vy = dy / (points - 1);

		this.points = new Array(points)
			.fill(null)
			.map((p, i) => new Point(
				p1.x + vx * i,
				p1.y + vy * i
			)
		);
	}
}

export default Reaction;
