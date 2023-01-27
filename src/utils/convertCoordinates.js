
export const ConvertCoordinates = (number) => {
    return number.toString().split('.').map(e=>e.slice(0,2)).join('°') + "'";
}



