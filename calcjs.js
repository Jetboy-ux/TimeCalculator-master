/*This function populates elements from calchtml.html with the current date YYYY-MM-DD 
when the page first loads  */
window.onload = function () {
    // etriving current year, month, and day
    let currentYear = moment().year();
    // Need to add 1 becuase moment.month is zero based, returns 0-11
    var currentMonth = moment().month() + 1;
    let currentDate = moment().date();

    // Populating HTML elements with values from above
    $('input[name="year"]').val(currentYear);
    $('input[name="month"]').val(currentMonth);
    $('input[name="date"]').val(currentDate);
}

/*This function calculates the date diffrence between the current date and a selected date */
function calculate() {
    // Revriving current date time object, time starts at beggining of current day
    const today = moment().startOf('day');
    // Retriving selected date from user input
    let selectedYear = $('input[name="year"]').val();
    let selectedMonth = $('input[name="month"]').val();
    let selectedDate = $('input[name="date"]').val();
    // Formatting selected date to YYYY-MM-DD
    var selectedMoment = moment(selectedYear + '-' + selectedMonth + '-' + selectedDate, 'YYYY-MM-DD');

/*Below: Determining diffrence for selected and current dates by individual date part . The ORDER in which we use .add() MATTERS! 
today values change when calculating the diffrence for Month and Day depending on user input. We start with todays date
and calculate what date values we need to get to our selected date */
    var years = selectedMoment.diff(today, 'year');
    today.add(years, 'years');
    var months = selectedMoment.diff(today, 'months');
    today.add(months, 'months');
    var days = selectedMoment.diff(today, 'days');

    //Output above values to HTML elements
    $('#difference').html(years + 'Y ' + months + 'M ' + days + 'D');
}