export const parseDate = (time) => {
  
    const months = Math.floor(time / (60 * 60 * 24 * 30) % 12);
    const days = Math.floor((time / (60 * 60 * 24) % 30));
    const hours = Math.floor((time / (60 * 60)% 24 ));

    return {
      months,
      days,
      hours
    }
  }
 