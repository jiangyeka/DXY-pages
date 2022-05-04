const zIndexData = {
    current: 2000
}
export const getCurrent = () => {
    return zIndexData.current
}
export const useCurrent = (num) => {
    zIndexData.current += num
}
export const noUseCurrent = (num) => {
    zIndexData.current -= num
}
