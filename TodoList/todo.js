//Check off specific Todo by clicking
$("ul").on("click", "li" ,function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span", function(evt){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    evt.stopPropagation();
});

// Add item to the ToDo List
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        var liString = '<li><span><i class="fa fa-trash"></i></span> ' + todoText +'</li>';
        $("ul").append( liString );
        $(this).val("");
    }
});

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
});