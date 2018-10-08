function createCell(x, y, t) {
	return new Map([['x', x], ['y', y], ['age', t]]);
}

class ConwayLifeBoard {
	constructor(cells = new Map()) {
		this.cells = cells;
	}

	neighborhoodAt(x, y) {
		//Returns all attached neighbors to cell location `x,y`
		let attached = [], detached = [];
		
		for(let u of [x - 1, x, x + 1]) {
			if(this.cells.has(u)) {
				let col = this.cells.get(u);
				for(let v of [y - 1, y, y + 1]) {
					if(col.has(v)) {
						attached.push([u, v]);
					} else {
						detached.push([u, v]);
					}
				}
			} else {
				detached.concat([y - 1, y, y + 1].map((v) => [u,v]));
			}
		}
		return new Map([['attached', attached], ['detached', detached]]);
	}
	
	attachCell(x, y, t) {
		//Attaches cell `c` at location `x,y`
		let c = createCell(x, y, t);
		if(this.cells.has(x) {
			this.cells.get(x).set(y, c);
		} else {
			this.cells.set(x, new Map([[y, c]]));
		}
	}
	
	detachCell(x, y) {
		let col = this.get(x);
		
		if(col.size > 1) {
			col.delete(y);
		} else {
			this.delete(x);
		}
	}
	
	expandNeighborhoodAt(x, y) {
		//To be called when animating (through birth or decree) cell at `x,y`
		for(let [u, v] of this.neighborhoodAt(x,y).get('detached')) {
			this.attachCell(u, v, 0);
		}
	}
	
	contractNeighborhoodAt(x, y) {
		//To be called when killing (through death or decree) cell at `x,y`
		let attached, contractable;
		
		attached = this.cells.neighborhoodAt(x,y).get('attached');
		contractable = ! attached.some(([u, v]) => this.isCellAlive(u,v));
		if(contractable) {
			let candidates = attached.filter(([u,v]) => ! this.isCellAlive(u,v);
			
			this.detachCell(x,y);
			for(let [u,v] of candidates) {
				this.contractNeighborhoodAt(u,v);
			}
		}
	}
	
	isCellAttached(x, y) {
		//Tests whether cell at location `x,y` is attached
		return this.cells.has(x) && this.cells.get(x).has(y);
	}

	isCellAlive(x, y) {
		//Tests whether cell at location `x,y` is attached & animated
		return this.isCellAttached(x,y) && this.cells.get(x).get(y).age > 0;
	}

	animateCell(x, y) {
		//Create, attach, and animate cell at location `x,y`
		this.attachCell(x, y, 1);
		this.expandNeighborhoodAt(x,y);
	}
	
	killCell(x, y) {
		//Kill cell at location `x,y` by setting `age` to `0`
		if(this.cells.has(x)) {
			let col = this.cells.get(x);
			if(col.has(y)) {
				let cell = col.get(y);
				cell.set('age', 0);
			} else {
				//TODO log killing unattached cell
			}
		} else {
			//TODO log killing cell in unattached column
		}
		this.contractNeighborhoodAt(x,y);
	}
	
	ageCell(x, y) {
		//Increment `age` of cell at location `x,y`
		if(this.cells.has(x)) {
			let col = this.cell.get(x);
			
			if(col.has(y)) {
				let cell = col.get(y);
				
				cell.set('age', 1 + cell.get('age'));
			}
		}
	}
	
	toggleCell(x, y) {
		if(this.cells.has(x)) {
			let col = this.cells.get(x);
			
			if(col.has(y)) {
				let cell = col.get(y);

				if(cell.get('age') > 0) {
					this.killCell(x,y);
				} else {
					this.animateCell(x,y);
				}
			}
		}
	}
	
	evolve(old) {
		//Evolves board by one generation, then applies callback to board object
		const tmpAttr = 'new age';
		let births, deaths, fertiles, barrens;
		
		births = deaths = fertiles = barrens = [];
		for(let [x,col] of this.cells.entries()) {
			for(let [y,cell] of col.values()) {
				let numLiveNeighbors = this.liveNeighborsTo(x,y).length;
				switch(numLiveNeighbors) {
					case 0:
					case 1:
						cell.set(tmpAttr, 0);
						break;
					case 2:
						if(this.isCellAlive(x,y)) {
							cell.set(tmpAttr, 1 + cell.get('age'));
						}
						break;
					case 3:
						if(this.isCellAlive(x,y)) {
							cell.set(tmpAttr, 1 + cell.get('age'));
						} else {
							cell.set(tmpAttr, 1);
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						cell.set(tmpAttr, 0);
						break;
					default:
						//TODO log this
						break;
				}
			}
		}
		for(let [x,col] of this.cells.entries()) {
			for(let [y,cell] of col.entries()) {
				let prev = cell.get('age'), curr = cell.get(tmpAttr);
				
				if(prev == 0 && curr > 0) {
					births.push([x,y]);
				} else if(prev > 0 && curr == 0) {
					deaths.push([x,y]);
				} else if(prev > 0 && curr > 0) {
					fertiles.push([x,y]);
				} else {
					barrens.push([x,y]);
				}
				cell.set('age', cell.get(tmpAttr));
				cell.delete(tmpAttr);
			}
		}
		return [births, deaths, fertiles, barrens];
	}
}

function filterCells(collection, xmin, xmax, ymin, ymax) {
	let solution = [];
	
	for(let x of collection.cells.keys()) {
		if(xmin <= x && x <= xmax) {
			for(let y of collection.cells.keys()) {
				if(ymin <= y && y <= ymax) {
					solution.push([x,y]);
				}
			}
		}
	}
	return solution;
}

function filterFrame(xmin, xmax, ymin, ymax) {
	return ((collection) => filterCells(collection, xmin, xmax, ymin, ymax));
}