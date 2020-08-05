import chai from 'chai';

import perfectSubstring from '../app.js';

const { expect } = chai;

describe('#perfectSubstring', () => {
  it('should calculate 6 perfect substrings given s=\'1102021222\' and k=2', () => {
    expect(perfectSubstring('1102021222', 2)).to.equal(6);
  });

  it('should calculate 4 perfect substrings given s=\'7774447474\' and k=3', () => {
    expect(perfectSubstring('7774447474', 3))
  });

  it('should return 0 perfect substrings if sizeof(s) < k', () => {
    expect(perfectSubstring('13434', 7)).to.equal(0);
  });

  it('should return 0 when given an empty string', () => {
    expect(perfectSubstring('', 7)).to.equal(0);
  });
});
