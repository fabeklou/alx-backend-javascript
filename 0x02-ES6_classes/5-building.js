export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  /* eslint-disable-next-line class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
