/**
 * 将算法与业务分离，保证后期修改也只修改算法。
 *
 */
const strategy = {
  A: (salary) => salary * 4,
  B: (salary) => salary * 3,
  C: (salary) => salary * 2,
};
/**
 *
 * @param {string} level ['A' | 'B' | 'C']
 * @param {number} salary
 * @returns {number}
 */
function getBounds(level, salary) {
  return strategy[level](salary);
}

console.log(getBounds("A", 10000));
