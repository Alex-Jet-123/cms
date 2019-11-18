export const divideNumber = (x, delimiter) => {

    return (!!x ? x : 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || `\t`);

}