$(document).ready(function(){
    $("#accordion button").click(function(){
        $("#accordion button .mdi").removeClass("mdi-chevron-up");
        $("#accordion button .mdi").removeClass("mdi-chevron-down");
    });
});
