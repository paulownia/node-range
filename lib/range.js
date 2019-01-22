class Range {
  constructor(begin = 0, end = 0, step = 1) {
    if (arguments.length === 0) {
      throw new Error('expected at least 1 arguments, got 0');
    } else if (arguments.length === 1) {
      end = begin;
      begin = 0;
    }

    if (!Number.isInteger(begin) || !Number.isInteger(end) || !Number.isInteger(step)) {
      throw new Error('arguments must be integer.');
    }

    this._begin = begin;
    this._end = end;
    this._step = step;

    if (step === 0) throw new Error('step argument must not be 0');
  }

  *[Symbol.iterator]() {
    if (this._step > 0) {
      for (let i = this._begin; i < this._end; i += this._step) yield i;
    } else {
      /*eslint for-direction: 0*/
      for (let i = this._begin; i > this._end; i += this._step) yield i;
    }
  }

  get length() {
    const len = Math.ceil((this._end - this._begin) / this._step);
    return len > 0 ? len : 0;
  }

  toArray() {
    return Array.from(this);
  }
}

module.exports.Range = Range;

module.exports.range = function() {
  return new Range(...arguments);
};
