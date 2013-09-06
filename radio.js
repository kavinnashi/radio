(function($) {

   $.fn.radio = function() {

       return this.each( function() {
		  
		     if ( this.checked ) 
			 {
			
         $('.inpit').attr('checked', false);
		   $(this).attr('checked', true);
		   // $( this ).change();
			 }
	  
 
	   
        });
		
    
  
   }
    $.fn.change = function() {

       return this.each( function() {
		  
		     if ( this.checked ) 
			 {
			
      if($(this).attr('id')=="input1")
	  {
		  $("#form_id").show();
	  }
	  else if($(this).attr('id')=="input2")
	  {
		   $("#form_id").hide();
	  }
			 }
	  
 
	   
        });
		
    
  
   }

}(jQuery))



$(' input[type=radio][class=inpit] ').live('change',function(event) {
	
	$(this).radio();
	});
