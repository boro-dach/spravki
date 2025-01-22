( function( $ ) {

$("form").submit(function() {

		if ($(this).find('input[name="your-name"]').val()==''){ 
			$("input[name='your-name']").attr("style", "border:1px solid red;");
				return false;}
			$("input[name='your-name']").attr("style", "border:1px solid initial;");
			
		if ($(this).find('input[name="tel-581"]').val()==''){ 
			$("input[name='tel-581']").attr("style", "border:1px solid red;");
				return false;}
			$("input[name='tel-581']").attr("style", "border:1px solid initial;");
			
        $.ajax({
            type: "POST",
		url: "/send.php",
		data: $(this).serialize(),
        success: function(data){
		$(".wpcf7-response-output").addClass("wpcf7-mail-sent-ok").text('Спасибо за Ваше сообщение. Оно успешно отправлено.');
		$(".wpcf7-response-output").css({"display":"block"});
		$("form").trigger('reset');
		setTimeout(function(){
			$(".wpcf7-response-output").css({"display":"none"});
			$(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok").text('');
		},3000);
        
		}

      }); 
	  return false;
});

} )( jQuery );

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
( function () {
	if ( typeof window.CustomEvent === "function" ) return false;

	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event,
			params.bubbles, params.cancelable, params.detail );
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
} )();
