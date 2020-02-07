let dt = new Date();
let month = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
][dt.getMonth()];

let day = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
][dt.getDay()];

let date = dt.getDate();
document.getElementById("date-weekday").innerHTML = day + ',';
document.getElementById("date-monthDate")
    .innerHTML = month + ' ' + date;