//Coun total availabe sum for investment

export const totalAvalible = (arr) => {
    return arr.reduce((pv, item) => pv + item.available, 0);
  }