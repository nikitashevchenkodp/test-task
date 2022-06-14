export const totalAvalible = (arr) => {
    return arr.reduce((pv, item) => pv + item.available, 0);
  }
