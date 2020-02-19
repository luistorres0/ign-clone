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

// TOGGLE MENU
let isDropDownOpen = false;
const onToggleHandler = (event) => {
    isDropDownOpen = !isDropDownOpen;

    const menu = document.getElementById("toggle-menu");
    if(isDropDownOpen) {
        menu.style.height = "calc(100vh - 45px)";
        event.target.className += " active";
    } else {
        menu.style.height = "0";
        event.target.className = event.target.className.replace(" active", "");
    }
}
document.getElementById("toggle-button").onclick
     = onToggleHandler;