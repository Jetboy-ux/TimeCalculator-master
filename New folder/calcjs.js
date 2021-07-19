window.onload = function () {
    let currentYear = moment().year();
    var currentMonth = moment().month() + 1;
    let currentDate = moment().date();
    $('input[name="year"]').val(currentYear);
    $('input[name="month"]').val(currentMonth);
    $('input[name="date"]').val(currentDate);
}

function calculate() {
    const today = moment().startOf('day');
    let selectedYear = $('input[name="year"]').val()
    let selectedMonth = $('input[name="month"]').val()
    let selectedDate = $('input[name="date"]').val()
    var selectedMoment = moment(selectedYear + '-' + selectedMonth + '-' + selectedDate);


    var years = selectedMoment.diff(today, 'year');
    today.add(years, 'years');
    var months = selectedMoment.diff(today, 'months');
    today.add(months, 'months');
    var days = selectedMoment.diff(today, 'days');

    $('#difference').html(years + 'Y ' + months + 'M ' + days + 'D');
}