import Compositor from './Compositor.js';
<<<<<<< HEAD
import {Matrix} from './math.js';
=======
>>>>>>> f9abd896e4c53d13bb20429d578db48b36a5b154

export default class Level {
	constructor() {
		this.comp = new Compositor();
		this.entities = new Set();
<<<<<<< HEAD
		this.tiles = new Matrix();
=======
>>>>>>> f9abd896e4c53d13bb20429d578db48b36a5b154
	}

	update(deltaTime) {
		this.entities.forEach(entity => {
			entity.update(deltaTime);
		});
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> f9abd896e4c53d13bb20429d578db48b36a5b154
