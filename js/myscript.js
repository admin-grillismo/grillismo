$(document).ready(function() {
    styleTodo();
});


function styleTodo() {
    $("a").each(function(index) {
        if ($(this).text().indexOf("(TODO)") >= 0)
            $(this).addClass("todo");
    });

}


