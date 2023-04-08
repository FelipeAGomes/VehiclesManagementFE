export function formatArrayToString(arr: Array<any>, field: string) {
    const arrString = arr.map((item) => {
        return item[field]
    })
    return arrString.join(', ')
}