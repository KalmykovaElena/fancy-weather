export const getCurrentDate = (currentDate,weekday,lang) => {
    const date = new Date(currentDate)
   let options = { weekday: 'short',  month: 'long', day: 'numeric' };
   if(weekday ==='long') options = { weekday: 'long'};
    return date.toLocaleString(lang, options).split(',').join('')
}
