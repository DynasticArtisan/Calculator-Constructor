export const toLogic = (str) => {
    return parseFloat(str.replace(',','.'))
}

export const toDisplay = (num) => {
    
    return String(num).replace('.',',')
}