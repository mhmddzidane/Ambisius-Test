export function generateRandomId() {
  const min = 100000;
  const max = 999999;

  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomId.toString();
}
