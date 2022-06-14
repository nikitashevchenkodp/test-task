export const formatNumberToUsd = (str) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' , maximumFractionDigits: 0 }).format(str)
}