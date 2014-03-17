$(document).ready(function() {
    styleToDo();
    styleToRead();
});


function styleToDo() {
    $("a").each(function(index) {
        if ($(this).text().indexOf("(TODO)") >= 0)
            $(this).addClass("todo");
    });

}

function styleToRead() {
    $("dd").each(function(index) {
        if ($(this).text().indexOf("(TOREAD)") >= 0)
            $(this).addClass("toread");
    });

}


