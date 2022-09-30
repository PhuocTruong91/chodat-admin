//return string in money format, ex: 9.000.000
export function formatMoney (moneyString){
    return moneyString.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}