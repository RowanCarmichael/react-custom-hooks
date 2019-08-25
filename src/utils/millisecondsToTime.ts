const millisecondsToTime = (milliseconds: number) => new Date(milliseconds).toISOString().slice(11, -5);

export default millisecondsToTime;