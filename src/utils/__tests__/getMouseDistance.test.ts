import getMouseDistance from './../getMouseDistance';

describe('getMouseDistance', () => {
  it('calculates distance between two different points', () => {
    expect(getMouseDistance(100, 200, 0, 1000)).toBe(806);
  });

  it('calculates distance between the same point', () => {
    expect(getMouseDistance(100, 200, 100, 200)).toBe(0);
  });
});
