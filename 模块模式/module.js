let count = 0;

export default {
  value: 1,
};

export function increase() {
  return ++count;
}
export function decrease() {
  return --count;
}

function addFive() {
  return count + 5;
}

export { addFive };
