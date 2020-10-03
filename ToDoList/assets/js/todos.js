// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    // Ensure that the whole li is removed
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // Stop the progressive event bubbling
    event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // Grab new ToDo text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new ToDo and add it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
