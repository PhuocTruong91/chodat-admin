import moment from 'moment';

//timestamp have to be in moment format
export function parseDate(timestamp){
    return moment(timestamp)._d;
}


/*
dd: day
mm: month
yyyy: year
hh: hour
MM: minute
ss: second
*/
export function formatDateTime(timestamp, formatType = 'dd/mm/yyyy'){
    var date = parseDate(timestamp);
    var res = formatType;

    res = res.replace('dd', date.getDate().toString().length === 1 ? '0' + date.getDate().toString() : date.getDate());
    res = res.replace('mm', (date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1);
    res = res.replace('yyyy', date.getFullYear());
    res = res.replace('hh',  date.getHours().toString().length === 1 ? '0' + date.getHours().toString() : date.getHours());
    res = res.replace('MM',  date.getMinutes().toString().length === 1 ? '0' + date.getMinutes().toString() : date.getMinutes());

    return res;
}

//createdDay - Moment format
export function compareCreatedDay(createdDay){
    var date_1 = parseDate(createdDay);
    var date_2 = new Date();
    let difference = date_2.getTime() - date_1.getTime();

    return Math.ceil(difference / (1000 * 3600 * 24));
}

//createdDay - Moment format
export function calculateDay(startDay, endDay){
    var date_1 = new Date(startDay);
    var date_2 = new Date(endDay);
    let difference = date_2.getTime() - date_1.getTime();

    return Math.ceil(difference / (1000 * 3600 * 24));
}