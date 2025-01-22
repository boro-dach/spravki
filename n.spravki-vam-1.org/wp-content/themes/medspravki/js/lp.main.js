jQuery(document).ready(function($){

$('.cart-widget-side').remove();


$('button.btn.eModal-1').click(function(){   
   var formTitel = $('.form-titel.order');
   var formInput = $('input[name="text-811"]');
   
   formTitel.empty();
   formInput.empty();

   formInput.attr('type' , 'hidden');

   var titel = $(this).attr("data-titel");
  
   formTitel.append( titel );
   formInput.val( titel );
});


});