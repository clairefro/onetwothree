export const generateRandomNumber = (range: [number, number] = [1, 500]) => {
  const min = range[0];
  const max = range[1];
  return Math.floor(Math.random() * (1 + max - min)) + min;
};
