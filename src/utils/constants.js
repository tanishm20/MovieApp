export const currentValue = (ltp, quantity) => ltp * quantity;
export const investmentValue = (avg, quantity) => avg - quantity;
export const todaysPNL = (close, ltp, quantity) => (close - ltp) * quantity;
