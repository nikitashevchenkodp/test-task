//Transform sring data to numbers without comma.

export const transformData = (data) => {
    return data.map(element => {
      return {
        ...element,
        title: element.title.slice(0, -1),
        available: +element.available.replace(/,/g,""),
        annualised_return: +element.annualised_return.replace(/,/g,"") ,
        term_remaining: +element.term_remaining.replace(/,/g,""),
        ltv: +element.ltv.replace(/,/g,""),
        amount: +element.amount.replace(/,/g,"")
      }
    });
  }