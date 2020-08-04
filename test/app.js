import chai from 'chai';

import perfect from '../app.js';

const { expect } = chai;

describe('#perfect', () => {
  it('should log to the console', () => {
    expect(perfect()).to.equal('Not perfect yet.');
  });
});
