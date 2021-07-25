/*This function populates elements from calchtml.html with the current date YYYY-MM-DD HH:mm:ss 
when the page first loads  */
window.onload = function () {
 
    // Retriving current Date and time in individual variables
    let currentYear = moment().year();
    // Need to add 1 becuase moment.month is zero based, returns 0-11
    var currentMonth = moment().month() + 1;
    let currentDate = moment().date();
    let currentHour = moment().hours() ;
    let currentMin = moment().minutes();
    let currentSec = moment().format('ss');
    

    // Populating HTML elements with values from above
    $('input[name="year"]').val(currentYear);
    $('input[name="month"]').val(currentMonth);
    $('input[name="date"]').val(currentDate);
    $('input[name="hour"]').val(currentHour);
    $('input[name="minute"]').val(currentMin);
    $('input[name="second"]').val(currentSec);

   
}

/*This function calculates the datetime diffrence between the current datetime and a selected datetime */
function calculate() {
    
    // Retriving first selected date from user input
    let firstSelectedYear = $('.firstDate input[name="year"]').val();
    let firstSelectedMonth = $('.firstDate input[name="month"]').val();
    let firstSelectedDate = $('.firstDate input[name="date"]').val();
    let firstSelectedHour = $('.firstDate input[name="hour"]').val();
    let firstSelectedMin = $('.firstDate input[name="minute"]').val();
    let firstSelectedSec = $('.firstDate input[name="second"]').val();
    
    //// Retriving second selected date from user input
    let secondSelectedYear = $('.secondDate input[name="year"]').val();
    let secondSelectedMonth = $('.secondDate input[name="month"]').val();
    let secondSelectedDate = $('.secondDate input[name="date"]').val();
    let secondSelectedHour = $('.secondDate input[name="hour"]').val();
    let secondSelectedMin = $('.secondDate input[name="minute"]').val();
    let secondSelectedSec = $('.secondDate input[name="second"]').val();
    // Formatting selected date to YYYY-MM-DD
    var firstSelectedMoment = moment(firstSelectedYear + '-' + firstSelectedMonth + '-' + firstSelectedDate + '' + firstSelectedHour + ':' + firstSelectedMin +':' + firstSelectedSec, 'YYYY-MM-DD, h:mm:ss');
    var secondSelectedMoment = moment(secondSelectedYear + '-' + secondSelectedMonth + '-' + secondSelectedDate  + '' + secondSelectedHour + ':' + secondSelectedMin +':' + secondSelectedSec, 'YYYY-MM-DD, h:mm:ss');
    // Holding un-modified second selected date for final output message
    var secondMomentNEdit = moment(secondSelectedMoment, 'YYYY-MM-DD, h:mm:ss');
   
    

/*Below: Determining diffrence for selected and current dates by individual date part . The ORDER in which we use .add() MATTERS! 
firstSelectedMoment values change when calculating the diffrence for Month and Day depending on user input. We start with todays date
and calculate what datetime values we need to get to our second selected date */
    var years = secondSelectedMoment.diff(firstSelectedMoment, 'year');
    firstSelectedMoment.add(years, 'years');
    var months = secondSelectedMoment.diff(firstSelectedMoment, 'months');
    firstSelectedMoment.add(months, 'months');
    var days = secondSelectedMoment.diff(firstSelectedMoment, 'days');
    // Time calculations
    var hours = secondSelectedMoment.diff(firstSelectedMoment, 'hours');
    firstSelectedMoment.add(hours, 'hours');
    var minutes = secondSelectedMoment.diff(firstSelectedMoment, 'minutes');
    firstSelectedMoment.add(minutes, 'minutes');
    var seconds = secondSelectedMoment.diff(firstSelectedMoment, 'seconds');

    //Output above values to HTML elements
    $('#difference').html('Difference between ' + firstSelectedMoment.format('MMMM Do YYYY, h:mm:ss a') 
    + ' and '+ secondMomentNEdit.format('MMMM Do YYYY, h:mm:ss a') + ' is: '+ years + 'Y ' + months + 'M ' + days + 'D ' + hours + 'H ' + minutes + 'm ' + seconds + 's');
}

/*Reloads the page*/
function startover() {
    location.reload();
}