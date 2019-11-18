export const first = (object = []) => object[Object.keys(object)[0]]

export const firstKey = (object = []) => Object.keys(object)[0]

export const emptyObj = (object = []) => !Object.keys(object).length

export const uniqueArr = (arr) => [...new Set (arr)]

export const deleteHtmlTags = text => text && text.replace(/<\/?[a-zA-Z]+>/gi,' ')

export const deleteSymbols = text => text && text.replace(/[^-0-9]/gim,'')

export const deleteUndefined = obj => {

    for (let key in obj) {

        if (!obj[key]) delete obj[key]
    }

    return obj
}