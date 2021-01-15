 $('ul').on('click','li',function(){
    $(this).toggleClass('list');
 });


 $('ul').on('click','span',function(e){
     $(this).parent().fadeOut(500,function(){
         $(this).remove();
     });
     e.stopPropagation();
 });

 $("input[type = 'text'").keypress(function(e){
     if(e.which === 13){
         var value = $(this).val();
         $(this).val("");
         $('ul').append('<li class><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+value+"</li>");
     }
 });

 $('#p').click(function(){
     $('input').fadeToggle();
 })