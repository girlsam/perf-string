import chai from 'chai';

import perfectSubstring from '../app.js';

const { expect } = chai;

describe('#perfectSubstring', () => {
  it('should calculate 6 perfect substrings given s=\'1102021222\', k=2', () => {
    expect(perfectSubstring('1102021222', 2)).to.equal(6);
  });

  it('should calculate no perfect substrings given ', () => {

  });

  it('should calculate', () => {

  });

  it('should return null when given an empty string', () => {

  });

  it('should return null when given an invalid string of alpha characters', () => {

  });
});
