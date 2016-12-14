var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();
//moment.locale('ru');
console.log('Current timerstamp', now.unix());

var timestamp = 1481671172;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ HH:mm'));

// January 3rd, 2016 @ 12:14 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ HH:mm'));
