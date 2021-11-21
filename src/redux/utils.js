export const toLogic = (str) => {
    return parseFloat(str.replace(',','.'))
}

export const toDisplay = (num) => {
    return String(parseFloat(num.toFixed(num > 1 ? 3 : 6))).replace('.',',')
}

