//check off specific todos by clicking on every ul click that is on an li
$("ul").on("click", "li", function(){
    //toggle items
    $(this).toggleClass("completed")
})

//click to delete todos but only run when a span is clicked within a ul
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab new todo text
        let todoText = $(this).val()
        //create new li and add to ul
        $("ul").first().append("<li><span><i class = 'fa fa-trash'></i> </span>" + todoText + "</li>")
        $(this).val("")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
})