
function getDollarWithTax(amount, stateTax){
    return amount + (amount * stateTax)/100;
}

function getRealWithoutTax(amount, cotation){
    return amount * cotation;
}

function getRealWithTax(amount, tax, cotation){
    return (amount + (amount * tax)/100) * (cotation +(cotation * tax)/100)
}

function formatBRLValue(amount){
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(amount);
}

function formatUSDValue(amount){
    return Intl.NumberFormat('usd', {style: 'currency', currency: 'USD'}).format(amount);
}

export default {
    getDollarWithTax,
    getRealWithoutTax,
    getRealWithTax,
    formatBRLValue, 
    formatUSDValue,
};