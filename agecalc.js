let year = document.getElementById("year");
let btn = document.getElementById("btn");
let rst = document.getElementById("rst");
let birth_month = document.getElementById("month");
let birth_day = document.getElementById("day");

// For current year
const y = new Date();
let current_year = y.getFullYear();
// For current month
const m = new Date();
let current_month = m.getMonth() + 1; // getMonth() returns 0-11, 
// For current day
const d = new Date();
let current_day = d.getDate(); // getDate() returns the day of the month

// function daycalc() {
//     let day;
//     if (current_day >= parseInt(birth_day.value)) {
//         day = current_day - parseInt(birth_day.value);
//     } //for months with 30 days
//     else if (current_day < parseInt(birth_day.value) && current_month === 1, 3, 5, 7, 8, 10, 12) {
//         current_month--;
//         day = 31 + current_day - parseInt(birth_day.value);
//     }//for months with 30 days
//     else if (current_day < parseInt(birth_day.value) && current_month === 4, 6, 9, 11){
//             current_month--;
//         day = 30 + current_day - parseInt(birth_day.value);
//     }//for february
//     else if (current_day < parseInt(birth_day.value) && current_month === 2){
//         day = 28 + current_day - parseInt(birth_day.value)
//     }
//     return day;
// }
function daycalc() {
    let day;
    if (current_day >= parseInt(birth_day.value)) {
        day = current_day - parseInt(birth_day.value);
    } else {
        // For months with 31 days
        if ([1, 3, 5, 7, 8, 10, 12].includes(current_month)) {
            current_month--;
            day = 31 + current_day - parseInt(birth_day.value);
        }
        // For months with 30 days
        else if ([4, 6, 9, 11].includes(current_month)) {
            current_month--;
            day = 30 + current_day - parseInt(birth_day.value);
        }
        // For February
        else if (current_month === 2) {
            // Check if the current year is a leap year
            const isLeapYear = (current_year % 4 === 0 && current_year % 100 !== 0) || (current_year % 400 === 0);
            if (isLeapYear) {
                day = 29 + current_day - parseInt(birth_day.value);
            } else {
                day = 28 + current_day - parseInt(birth_day.value);
            }
        }
    }
    return day;
}

function monthcalc() {
    let month;
    if (current_month >= parseInt(birth_month.value)) {
        month = current_month - parseInt(birth_month.value);
    } else {
        current_year--;
        month = 12 + current_month - parseInt(birth_month.value);
    }
    return month;
}

function yearcalc() {
    let age = current_year - parseInt(year.value);
    return age;
}

btn.addEventListener("click", function () {
    let month = monthcalc();
    let age = yearcalc();
    let day = daycalc();

    document.getElementById("present-age").innerHTML = "You are " + age + "years " + month + "months and  " + day + "days old.";
    btn.disabled=true;
});

rst.addEventListener("click", function () {
    window.location.reload(true)
});


