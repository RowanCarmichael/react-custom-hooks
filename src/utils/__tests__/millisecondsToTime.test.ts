import millisecondsToTime from './../millisecondsToTime';

describe('getMouseDistance', () => {
  it('correctly formats milliseconds to hours, minutes and seconds', () => {
    expect(millisecondsToTime(10000000)).toBe('02:46:40');
  });

  it('correctly formats zero milliseconds', () => {
    expect(millisecondsToTime(0)).toBe('00:00:00');
  });
});
