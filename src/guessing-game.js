class GuessingGame {
	constructor() {
		this.min = 0;
		this.max = 0;
		this.try = 0;
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		return this.try = Math.round((this.min + this.max) / 2);
	}

	lower() {
		this.max = this.try;
	}

	greater() {
		this.min = this.try;
	}
}

module.exports = GuessingGame;
