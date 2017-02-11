$(document).ready(function() {
    $.get('http://210.212.85.155/', function(response) {

        var notices,
            title,
            author,
            date;
        notices = $('li.modal-index', response);
        // $('body').append('<ul id="notices"></ul>')
        $.each(notices, function(index, value) {
            title = $('div.col-7', value).html();
            author = $('div.auth-index', value).html();
            date = $('div.date-index', value).html();
            $('#notices').append('<li><h4>' + title + '</h4></li><div id="date">'+date+'</div>');
        });

    });
});
