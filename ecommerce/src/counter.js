export function setupCounter() {
  const countMap = {};

  const increase = ({ productId }) => {
    if (countMap[productId] === undefined) {
      countMap[productId] = 0;
    }
    countMap[productId] += 1
    return countMap[productId];
  }

  const decrease = ({ productId }) => {
    if (countMap[productId] === undefined) {
      countMap[productId] = 0;
    }

    if (countMap[productId] !== 0) {
      countMap[productId] -= 1;
    }
    return countMap[productId];
  }

  const getTotalCount = () => {
    return Object.values(countMap).reduce((acc, cur) => {
      return acc + cur;
    }, 0)
  }

  return {
    increase,
    decrease,
    getTotalCount,
  }
}