export const generateRandomNumber = (range: [number, number] = [1, 500]) => {
  const min = range[0];
  const max = range[1];
  return Math.floor(Math.random() * (1 + max - min)) + min;
};

const DIGITS_TO_POINTS_MAP: { [key: number]: number } = {
  1: 10,
  2: 20,
  3: 40,
  5: 160,
  6: 320,
};

export const calculatePoints = (num: number): number => {
  const digits = num.toString().length;
  return DIGITS_TO_POINTS_MAP[digits];
};
