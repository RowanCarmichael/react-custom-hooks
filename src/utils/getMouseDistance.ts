const getMouseDistance = (previousX: number, previousY: number, currentX: number, currentY: number) =>
  Math.round(Math.sqrt(Math.pow(previousY - currentY, 2) + Math.pow(previousX - currentX, 2)));

export default getMouseDistance;